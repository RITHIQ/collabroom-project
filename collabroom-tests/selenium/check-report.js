const ExcelJS = require('exceljs');
const path = require('path');

async function parseReport() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path.join(__dirname, '../reports/selenium-report.xlsx'));
  const worksheet = workbook.getWorksheet('Test Report');
  
  let md = `# Selenium Test Execution Report\n\n`;
  
  let passed = 0, failed = 0, skipped = 0;
  let details = '';
  
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // skip header
    const status = row.getCell(4).value;
    const testId = row.getCell(1).value;
    const testName = row.getCell(2).value;
    const errorMsg = row.getCell(5).value || '';
    
    if (status === 'PASS') passed++;
    else if (status === 'FAIL') failed++;
    else skipped++;
    
    details += `### ${testId}: ${testName}\n`;
    details += `- **Status**: ${status === 'PASS' ? '✅ PASS' : '❌ FAIL'}\n`;
    if (status !== 'PASS') details += `- **Error**: \`${errorMsg.trim()}\`\n`;
    details += `\n`;
  });
  
  md += `## Summary\n`;
  md += `- **Total Tests**: ${passed + failed + skipped}\n`;
  md += `- **Passed**: ${passed}\n`;
  md += `- **Failed**: ${failed}\n`;
  md += `- **Pending/Skipped**: ${skipped}\n\n`;
  
  md += `## Detailed Results\n\n`;
  md += details;
  
  require('fs').writeFileSync(path.join(__dirname, 'detailed-report.md'), md);
  console.log('Markdown report generated at detailed-report.md');
}

parseReport().catch(console.error);
