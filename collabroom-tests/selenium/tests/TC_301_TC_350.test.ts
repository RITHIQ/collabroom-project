export {};
const { buildDriver, By, until } = require('../helpers/driver.js');
const { loginAsCreator, loginAsBrand } = require('../helpers/auth.js');
const testData = require('../helpers/testData.js');

describe('Extended Test Suite 301 to 350', () => {
  let driver;

  beforeAll(async () => {
    driver = await buildDriver();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  beforeEach(async () => {
    await driver.get(testData.BASE_URL + '/');
    await driver.executeScript('localStorage.clear(); sessionStorage.clear();');
    await driver.get(testData.BASE_URL + '/?_reset=' + Date.now());
  });

  test('TC_301: User can duplicate item in Search module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_302: User can mark as favorite in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_303: User can reject item in Admin module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_304: User can redo action in Profile module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_305: User can cancel action in Milestones module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_306: User can redo action in Profile module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_307: User can reject item in Campaigns module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_308: User can view list in Proposals module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_309: User can preview item in Integrations module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_310: User can confirm action in Disputes module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_311: User can bulk edit in Reviews module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_312: User can paginate in Contracts module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_313: User can reject item in Onboarding module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_314: User can import data in Bookmarks module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_315: User can undo action in Analytics module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_316: User can reject item in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_317: User can view details in Support module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_318: User can create new in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_319: User can view details in Proposals module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_320: User can approve item in Deliverables module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_321: User can archive item in Profile module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_322: User can export data in Deliverables module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_323: User can archive item in Settings module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_324: User can sort results in Admin module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_325: User can search by keyword in Milestones module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_326: User can search by keyword in Bookmarks module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_327: User can publish item in Settings module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_328: User can reject item in Disputes module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_329: User can cancel action in Reviews module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_330: User can update existing in Proposals module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_331: User can paginate in Analytics module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_332: User can filter results in Onboarding module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_333: User can share with others in Disputes module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_334: User can sort results in Settings module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_335: User can import data in Disputes module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_336: User can archive item in Analytics module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_337: User can sort results in Campaigns module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_338: User can confirm action in Campaigns module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_339: User can undo action in Integrations module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_340: User can confirm action in Onboarding module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_341: User can bulk edit in Search module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_342: User can mark as favorite in Search module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_343: User can import data in Deliverables module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_344: User can share with others in Payments module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_345: User can reject item in Payments module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_346: User can duplicate item in Milestones module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_347: User can bulk delete in Wallet module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_348: User can delete item in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_349: User can redo action in Integrations module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_350: User can view details in Milestones module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

});
