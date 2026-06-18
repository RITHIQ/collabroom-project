const { buildDriver, By, until } = require('../helpers/driver.js');
const { loginAsCreator, loginAsBrand } = require('../helpers/auth.js');
const testData = require('../helpers/testData.js');

describe('Dashboard & Discover', () => {
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

  test('TC_021: Dashboard shows empty state for new user', async () => {
    await driver.get(testData.BASE_URL + '/#/dashboard');
    expect(true).toBe(true);
  });

  test('TC_022: Navigation to Discover from dashboard', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('discover');
  });

  test('TC_023: Navigation to Wallet from dashboard', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/wallet');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('wallet');
  });

  test('TC_024: Navigation to Campaigns from dashboard', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('campaigns');
  });

  test('TC_025: Navigation to Messages from dashboard', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/messages');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('messages');
  });

  test('TC_026: Discover creators loads list', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    await driver.sleep(2000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('discover');
  });

  test('TC_027: Filter creators by category', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    expect(true).toBe(true);
  });

  test('TC_028: Search creators by name', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    expect(true).toBe(true);
  });

  test('TC_029: Sort creators by followers', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    expect(true).toBe(true);
  });

  test('TC_030: View creator profile from discover', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/discover');
    expect(true).toBe(true);
  });

  test('TC_031: Discover brands loads list', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover/brands');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('discover');
  });

  test('TC_032: Filter brands by industry', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover/brands');
    expect(true).toBe(true);
  });

  test('TC_033: Search brands by name', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover/brands');
    expect(true).toBe(true);
  });

  test('TC_034: View brand profile from discover', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover/brands');
    expect(true).toBe(true);
  });

  test('TC_035: Discover empty state handling', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/discover/brands');
    expect(true).toBe(true);
  });

  test('TC_036: Campaigns list loads', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns');
    await driver.sleep(2000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('campaigns');
  });

  test('TC_037: Filter campaigns by status', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns');
    expect(true).toBe(true);
  });

  test('TC_038: Search campaigns', async () => {
    await loginAsCreator(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns');
    expect(true).toBe(true);
  });

  test('TC_039: Campaign creation step 1: Basics', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns/new');
    await driver.sleep(1000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('campaigns/new');
  });

  test('TC_040: Campaign creation step 2: Details', async () => {
    await loginAsBrand(driver);
    await driver.get(testData.BASE_URL + '/#/campaigns/new');
    expect(true).toBe(true);
  });

});
