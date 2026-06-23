const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

class ExcelReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.results = [];
  }

  onTestResult(test, testResult, aggregatedResult) {
    testResult.testResults.forEach(result => {
      // Extract TC_XXX from title
      const match = result.title.match(/(TC_\d{3})/);
      const testId = match ? match[1] : 'UNKNOWN';

      this.results.push({
        testId: testId,
        testName: result.title,
        category: testResult.testFilePath.split(/[\\/]/).pop().replace('.test.ts', ''),
        status: result.status === 'passed' ? 'PASS' : 'FAIL',
        errorMessage: result.failureMessages.length > 0 ? result.failureMessages[0].substring(0, 500) : '',
        duration: result.duration || 0,
        timestamp: new Date().toISOString()
      });
    });
  }

  async onRunComplete(contexts, results) {
    const reportDir = path.join(__dirname, '../../reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    // --- Excel (.xlsx) report ---
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Test Report');

    worksheet.columns = [
      { header: 'Test ID',        key: 'testId',       width: 15 },
      { header: 'Test Name',      key: 'testName',     width: 50 },
      { header: 'Category',       key: 'category',     width: 30 },
      { header: 'Status',         key: 'status',       width: 10 },
      { header: 'Error Message',  key: 'errorMessage', width: 50 },
      { header: 'Duration (ms)',  key: 'duration',     width: 15 },
      { header: 'Timestamp',      key: 'timestamp',    width: 25 },
      { header: 'Screenshot Path',key: 'screenshot',   width: 30 }
    ];

    // Style header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: 'pattern', pattern: 'solid',
      fgColor: { argb: 'FF4472C4' }
    };
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };

    this.results.forEach(res => {
      const row = worksheet.addRow(res);
      // Colour PASS green, FAIL red
      const statusCell = row.getCell('status');
      if (res.status === 'PASS') {
        statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF70AD47' } };
      } else {
        statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF0000' } };
        statusCell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
      }
    });

    const xlsxPath = path.join(reportDir, 'selenium-report.xlsx');
    await workbook.xlsx.writeFile(xlsxPath);
    console.log(`Excel report generated at: ${xlsxPath}`);

    // --- CSV report ---
    const csvHeaders = [
      'Test ID', 'Test Name', 'Category', 'Status',
      'Error Message', 'Duration (ms)', 'Timestamp', 'Screenshot Path'
    ];

    const escapeCSV = (val) => {
      const str = String(val == null ? '' : val);
      // Wrap in quotes if the value contains commas, quotes, or newlines
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const csvRows = [
      csvHeaders.join(','),
      ...this.results.map(r =>
        [
          r.testId,
          r.testName,
          r.category,
          r.status,
          r.errorMessage,
          r.duration,
          r.timestamp,
          r.screenshot || ''
        ].map(escapeCSV).join(',')
      )
    ];

    const csvPath = path.join(reportDir, 'selenium-report.csv');
    fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf8');
    console.log(`CSV  report generated at: ${csvPath}`);

    // --- Summary stats to console ---
    const total  = this.results.length;
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = total - passed;
    console.log(`\n=== Test Summary ===`);
    console.log(`Total : ${total}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Pass % : ${((passed / total) * 100).toFixed(1)}%`);
  }
}

module.exports = ExcelReporter;
