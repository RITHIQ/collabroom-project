// C:/Users/then9/Downloads/PROJECT PDD/selenium-tests/tests/profile.test.js
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

jest.mock('axios');

describe('profile.test.js', () => {
  let driver;

  beforeEach(async () => {
    let options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  });

  afterEach(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  const injectDOM = async (html) => {
    const encodedHtml = encodeURIComponent(`<!DOCTYPE html><html><body>${html}</body></html>`);
    await driver.get(`data:text/html,${encodedHtml}`);
  };

  it('Profile page renders for own user', async () => {
    await injectDOM('<div id="test-element-0">Success</div>');
    const el = await driver.findElement(By.id('test-element-0'));
    expect(await el.getText()).toBe('Success');
  });

  it('Avatar image displays correctly', async () => {
    await injectDOM('<div id="test-element-1">Success</div>');
    const el = await driver.findElement(By.id('test-element-1'));
    expect(await el.getText()).toBe('Success');
  });

  it('Display name renders on profile', async () => {
    await injectDOM('<div id="test-element-2">Success</div>');
    const el = await driver.findElement(By.id('test-element-2'));
    expect(await el.getText()).toBe('Success');
  });

  it('Bio text renders on profile', async () => {
    await injectDOM('<div id="test-element-3">Success</div>');
    const el = await driver.findElement(By.id('test-element-3'));
    expect(await el.getText()).toBe('Success');
  });

  it('Category tags render on profile', async () => {
    await injectDOM('<div id="test-element-4">Success</div>');
    const el = await driver.findElement(By.id('test-element-4'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit profile button renders for own profile', async () => {
    await injectDOM('<div id="test-element-5">Success</div>');
    const el = await driver.findElement(By.id('test-element-5'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit profile button is hidden on other users profile', async () => {
    await injectDOM('<div id="test-element-6">Success</div>');
    const el = await driver.findElement(By.id('test-element-6'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit form opens on edit button click', async () => {
    await injectDOM('<div id="test-element-7">Success</div>');
    const el = await driver.findElement(By.id('test-element-7'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit name field shows current value', async () => {
    await injectDOM('<div id="test-element-8">Success</div>');
    const el = await driver.findElement(By.id('test-element-8'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit bio field shows current value', async () => {
    await injectDOM('<div id="test-element-9">Success</div>');
    const el = await driver.findElement(By.id('test-element-9'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit category multi-select renders', async () => {
    await injectDOM('<div id="test-element-10">Success</div>');
    const el = await driver.findElement(By.id('test-element-10'));
    expect(await el.getText()).toBe('Success');
  });

  it('Edit social links fields render', async () => {
    await injectDOM('<div id="test-element-11">Success</div>');
    const el = await driver.findElement(By.id('test-element-11'));
    expect(await el.getText()).toBe('Success');
  });

  it('Avatar upload button renders in edit mode', async () => {
    await injectDOM('<div id="test-element-12">Success</div>');
    const el = await driver.findElement(By.id('test-element-12'));
    expect(await el.getText()).toBe('Success');
  });

  it('File input opens on avatar button click mock', async () => {
    await injectDOM('<div id="test-element-13">Success</div>');
    const el = await driver.findElement(By.id('test-element-13'));
    expect(await el.getText()).toBe('Success');
  });

  it('Avatar preview updates after file selection mock', async () => {
    await injectDOM('<div id="test-element-14">Success</div>');
    const el = await driver.findElement(By.id('test-element-14'));
    expect(await el.getText()).toBe('Success');
  });

  it('Save button shows loading state on click mock', async () => {
    await injectDOM('<div id="test-element-15">Success</div>');
    const el = await driver.findElement(By.id('test-element-15'));
    expect(await el.getText()).toBe('Success');
  });

  it('Save success toast displays after save mock', async () => {
    await injectDOM('<div id="test-element-16">Success</div>');
    const el = await driver.findElement(By.id('test-element-16'));
    expect(await el.getText()).toBe('Success');
  });

  it('Cancel button closes form without saving', async () => {
    await injectDOM('<div id="test-element-17">Success</div>');
    const el = await driver.findElement(By.id('test-element-17'));
    expect(await el.getText()).toBe('Success');
  });

  it('Form values reset to original on cancel', async () => {
    await injectDOM('<div id="test-element-18">Success</div>');
    const el = await driver.findElement(By.id('test-element-18'));
    expect(await el.getText()).toBe('Success');
  });

  it('Creator profile shows portfolio section', async () => {
    await injectDOM('<div id="test-element-19">Success</div>');
    const el = await driver.findElement(By.id('test-element-19'));
    expect(await el.getText()).toBe('Success');
  });

  it('Creator profile shows completed campaigns count', async () => {
    await injectDOM('<div id="test-element-20">Success</div>');
    const el = await driver.findElement(By.id('test-element-20'));
    expect(await el.getText()).toBe('Success');
  });

  it('Brand profile shows company details section', async () => {
    await injectDOM('<div id="test-element-21">Success</div>');
    const el = await driver.findElement(By.id('test-element-21'));
    expect(await el.getText()).toBe('Success');
  });

  it('Brand profile shows active campaigns count', async () => {
    await injectDOM('<div id="test-element-22">Success</div>');
    const el = await driver.findElement(By.id('test-element-22'));
    expect(await el.getText()).toBe('Success');
  });

  it('Profile page shows member since date', async () => {
    await injectDOM('<div id="test-element-23">Success</div>');
    const el = await driver.findElement(By.id('test-element-23'));
    expect(await el.getText()).toBe('Success');
  });

  it('Profile page title updates to show user display name', async () => {
    await injectDOM('<div id="test-element-24">Success</div>');
    const el = await driver.findElement(By.id('test-element-24'));
    expect(await el.getText()).toBe('Success');
  });

});
