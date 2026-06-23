import csv
import os
from datetime import datetime
import openpyxl
from openpyxl.styles import PatternFill, Font

results = []

def pytest_runtest_logreport(report):
    if report.when == "call":
        test_id = "UNKNOWN"
        if "TC_" in report.nodeid:
            import re
            match = re.search(r"TC_\d{3}", report.nodeid)
            if match:
                test_id = match.group(0)
                
        category = report.nodeid.split("::")[0].split("/")[-1].replace(".py", "")
        status = "PASS" if report.passed else "FAIL"
        error_message = str(report.longrepr)[:500] if report.failed else ""
        
        results.append({
            "testId": test_id,
            "testName": report.nodeid,
            "category": category,
            "status": status,
            "errorMessage": error_message,
            "duration": round(report.duration * 1000, 2), # ms
            "timestamp": datetime.utcnow().isoformat()
        })
        
        # Real-time console logging
        duration_str = f"({round(report.duration * 1000, 2)}ms)"
        if status == "PASS":
            print(f"✅ PASS: {report.nodeid} {duration_str}")
        else:
            print(f"❌ FAIL: {report.nodeid} {duration_str}")

def pytest_sessionfinish(session, exitstatus):
    report_dir = os.path.join(os.path.dirname(__file__), "..", "collabroom-tests", "reports")
    os.makedirs(report_dir, exist_ok=True)
    
    # Determine if we are running web or mobile tests based on the args
    prefix = "security-web"
    if "mobile" in str(session.config.args):
        prefix = "security-mobile"
        
    csv_path = os.path.join(report_dir, f"{prefix}-report.csv")
    xlsx_path = os.path.join(report_dir, f"{prefix}-report.xlsx")
    
    # Generate CSV
    with open(csv_path, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(["Test ID", "Test Name", "Category", "Status", "Error Message", "Duration (ms)", "Timestamp"])
        for r in results:
            writer.writerow([r["testId"], r["testName"], r["category"], r["status"], r["errorMessage"], r["duration"], r["timestamp"]])
            
    print(f"\nCSV report generated at: {csv_path}")
    
    # Generate Excel
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = f"{prefix} Report"
    
    headers = ["Test ID", "Test Name", "Category", "Status", "Error Message", "Duration (ms)", "Timestamp"]
    ws.append(headers)
    
    header_fill = PatternFill(start_color="4472C4", end_color="4472C4", fill_type="solid")
    header_font = Font(color="FFFFFF", bold=True)
    
    for col in range(1, len(headers) + 1):
        cell = ws.cell(row=1, column=col)
        cell.fill = header_fill
        cell.font = header_font
        
    pass_fill = PatternFill(start_color="70AD47", end_color="70AD47", fill_type="solid")
    fail_fill = PatternFill(start_color="FF0000", end_color="FF0000", fill_type="solid")
    fail_font = Font(color="FFFFFF", bold=True)
    
    for r in results:
        ws.append([r["testId"], r["testName"], r["category"], r["status"], r["errorMessage"], r["duration"], r["timestamp"]])
        status_cell = ws.cell(row=ws.max_row, column=4)
        if r["status"] == "PASS":
            status_cell.fill = pass_fill
        else:
            status_cell.fill = fail_fill
            status_cell.font = fail_font
            
    wb.save(xlsx_path)
    print(f"Excel report generated at: {xlsx_path}")
    
    total = len(results)
    passed = len([r for r in results if r["status"] == "PASS"])
    failed = total - passed
    print(f"\n=== Security Test Summary ===")
    print(f"Total : {total}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"Pass % : {round((passed/total)*100, 1) if total > 0 else 0}%")
