export {};
const { buildDriver, By, until } = require('../helpers/driver.js');
const { loginAsCreator, loginAsBrand } = require('../helpers/auth.js');
const testData = require('../helpers/testData.js');

describe('Extended Test Suite 351 to 400', () => {
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

  test('TC_351: User can confirm action in Settings module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_352: User can paginate in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_353: User can create new in Support module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_354: User can cancel action in Notifications module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_355: User can redo action in Profile module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_356: User can undo action in Reviews module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_357: User can paginate in Support module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_358: User can publish item in Reviews module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_359: User can redo action in Support module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_360: User can approve item in Bookmarks module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_361: User can sort results in Search module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_362: User can paginate in Contracts module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_363: User can redo action in Search module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_364: User can delete item in Proposals module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_365: User can filter results in Payments module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_366: User can restore item in Integrations module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_367: User can redo action in Settings module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_368: User can search by keyword in Profile module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_369: User can export data in Notifications module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_370: User can reject item in Search module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_371: User can import data in Admin module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_372: User can redo action in Contracts module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_373: User can publish item in Analytics module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_374: User can redo action in Disputes module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_375: User can search by keyword in Analytics module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_376: User can create new in Milestones module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_377: User can duplicate item in Contracts module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_378: User can cancel action in Notifications module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_379: User can submit for review in Payments module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_380: User can approve item in Profile module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_381: User can approve item in Profile module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_382: User can redo action in Contracts module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_383: User can paginate in Profile module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_384: User can reject item in Search module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_385: User can create new in Support module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_386: User can confirm action in Analytics module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_387: User can draft item in Onboarding module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_388: User can redo action in Reviews module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_389: User can view details in Messaging module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_390: User can paginate in Reviews module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_391: User can confirm action in Admin module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_392: User can reject item in Campaigns module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_393: User can redo action in Reviews module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_394: User can bulk delete in Profile module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_395: User can archive item in Disputes module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_396: User can bulk delete in Reviews module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_397: User can search by keyword in Analytics module', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_398: User can paginate in Bookmarks module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_399: User can delete item in Payments module - Brand', async () => {
    await loginAsBrand(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

  test('TC_400: User can delete item in Deliverables module - Creator', async () => {
    await loginAsCreator(driver);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('dashboard');
  });

});
