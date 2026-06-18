const fs = require('fs');
const ExcelJS = require('exceljs');
const path = require('path');

const reportsDir = path.join(__dirname);

// Configuration for each test suite
const suites = [
  {
    name: 'Web_E2E_Report',
    resultPath: path.join(__dirname, '../selenium/jest-results.json'),
    outputFile: path.join(reportsDir, 'Web_E2E_Report.xlsx')
  },
  {
    name: 'Mobile_E2E_Report',
    resultPath: path.join(__dirname, '../appium/jest-results.json'),
    outputFile: path.join(reportsDir, 'Mobile_E2E_Report.xlsx')
  },
  {
    name: 'Security_DAST_Report',
    resultPath: path.join(__dirname, '../dast/automated_test/jest-results.json'),
    outputFile: path.join(reportsDir, 'Security_DAST_Report.xlsx')
  }
];

async function generateExcel(suite) {
  if (!fs.existsSync(suite.resultPath)) {
    console.log(`[${suite.name}] No jest-results.json found at ${suite.resultPath}. Skipping.`);
    return;
  }

  const rawData = fs.readFileSync(suite.resultPath, 'utf8');
  let data;
  try {
    data = JSON.parse(rawData);
  } catch (e) {
    console.log(`[${suite.name}] Error parsing jest-results.json`, e);
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const summarySheet = workbook.addWorksheet('Summary');
  const detailsSheet = workbook.addWorksheet('Test Details');

  // Summary Sheet Styling
  summarySheet.columns = [
    { header: 'Metric', key: 'metric', width: 25 },
    { header: 'Value', key: 'value', width: 30 },
  ];
  
  summarySheet.getRow(1).font = { bold: true };

  summarySheet.addRow({ metric: 'Test Suite', value: suite.name.replace(/_/g, ' ') });
  summarySheet.addRow({ metric: 'Total Tests', value: data.numTotalTests || 0 });
  summarySheet.addRow({ metric: 'Passed', value: data.numPassedTests || 0 });
  summarySheet.addRow({ metric: 'Failed', value: data.numFailedTests || 0 });
  summarySheet.addRow({ metric: 'Pending', value: data.numPendingTests || 0 });
  summarySheet.addRow({ metric: 'Start Time', value: data.startTime ? new Date(data.startTime).toLocaleString() : 'N/A' });
  summarySheet.addRow({ metric: 'Report Generated', value: new Date().toLocaleString() });

  // Details Sheet
  detailsSheet.columns = [
    { header: 'Suite / File', key: 'suite', width: 30 },
    { header: 'Test Name', key: 'name', width: 50 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Duration (ms)', key: 'duration', width: 15 },
    { header: 'Failure Messages', key: 'errors', width: 60 },
  ];
  
  detailsSheet.getRow(1).font = { bold: true };

  if (data.testResults) {
    data.testResults.forEach((testFile) => {
      const suiteName = testFile.name ? testFile.name.split(/[\/\\]/).pop() : 'Unknown';
      if (testFile.assertionResults) {
        testFile.assertionResults.forEach((test) => {
          
          let statusColor = 'FF000000'; // Black
          if (test.status === 'passed') statusColor = 'FF008000'; // Green
          if (test.status === 'failed') statusColor = 'FFFF0000'; // Red
          if (test.status === 'pending') statusColor = 'FFFFA500'; // Orange
          
          const row = detailsSheet.addRow({
            suite: suiteName,
            name: test.title,
            status: test.status.toUpperCase(),
            duration: test.duration || 0,
            errors: test.failureMessages ? test.failureMessages.join('\n').substring(0, 32000) : ''
          });
          
          row.getCell('status').font = { color: { argb: statusColor }, bold: true };
          row.getCell('errors').alignment = { wrapText: true };
        });
      }
    });
  }

  // Ensure reports dir exists
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  await workbook.xlsx.writeFile(suite.outputFile);
  console.log(`✅ Excel report generated: ${suite.outputFile}`);
}

async function generateAll() {
  console.log('Generating Excel Reports for all test suites...');
  for (const suite of suites) {
    await generateExcel(suite);
  }
  console.log('All reports generation complete!');
}

generateAll().catch(console.error);
