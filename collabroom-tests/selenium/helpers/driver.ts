import { Builder, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export async function createDriver(): Promise<WebDriver> {
  const options = new chrome.Options();
  options.addArguments('--headless=new'); // Use headless mode for speed
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--window-size=1280,800');
  
  return await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}
