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
        category: testResult.testFilePath.split('/').pop().replace('.test.ts', ''),
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
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Test Report');
    
    worksheet.columns = [
      { header: 'Test ID', key: 'testId', width: 15 },
      { header: 'Test Name', key: 'testName', width: 50 },
      { header: 'Category', key: 'category', width: 30 },
      { header: 'Status', key: 'status', width: 10 },
      { header: 'Error Message', key: 'errorMessage', width: 50 },
      { header: 'Duration (ms)', key: 'duration', width: 15 },
      { header: 'Timestamp', key: 'timestamp', width: 25 },
      { header: 'Screenshot path', key: 'screenshot', width: 30 }
    ];
    
    this.results.forEach(res => {
      worksheet.addRow(res);
    });
    
    const reportPath = path.join(reportDir, 'selenium-report.xlsx');
    await workbook.xlsx.writeFile(reportPath);
    console.log(`Excel report generated at: ${reportPath}`);
  }
}

module.exports = ExcelReporter;
