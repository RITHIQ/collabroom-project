import * as ExcelJS from 'exceljs';
import * as path from 'path';
import * as fs from 'fs';

const results: any[] = [];

// We will use Jest's reporter or hooks to collect results.
// Since Jest's setupFilesAfterEnv doesn't give us a global teardown easily per test file in a single run without a custom reporter,
// we will expose a global function to add results.

(global as any).addTestResult = (result: any) => {
  results.push(result);
};

// We need a way to save the report when all tests finish.
// The best way in Jest without a custom reporter class is to write it out in a global teardown,
// but since we want to keep it simple, we can write it on process exit or simply use a custom Jest reporter.

// Since the prompt asks for an Excel report generation, let's create a utility function
// that the last test or a global teardown can call, OR we can just write a small custom reporter.
// Actually, creating a custom Jest reporter is much cleaner for this.
