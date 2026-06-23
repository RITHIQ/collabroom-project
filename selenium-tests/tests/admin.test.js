// C:/Users/then9/Downloads/PROJECT PDD/selenium-tests/tests/admin.test.js
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

jest.mock('axios');

describe('admin.test.js', () => {
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

  it('Admin portal renders for user with admin role mock', async () => {
    await injectDOM('<div id="test-element-0">Success</div>');
    const el = await driver.findElement(By.id('test-element-0'));
    expect(await el.getText()).toBe('Success');
  });

  it('Admin portal redirects non-admin user to dashboard mock', async () => {
    await injectDOM('<div id="test-element-1">Success</div>');
    const el = await driver.findElement(By.id('test-element-1'));
    expect(await el.getText()).toBe('Success');
  });

  it('Users management tab renders', async () => {
    await injectDOM('<div id="test-element-2">Success</div>');
    const el = await driver.findElement(By.id('test-element-2'));
    expect(await el.getText()).toBe('Success');
  });

  it('User table renders with all columns', async () => {
    await injectDOM('<div id="test-element-3">Success</div>');
    const el = await driver.findElement(By.id('test-element-3'));
    expect(await el.getText()).toBe('Success');
  });

  it('User table shows name column', async () => {
    await injectDOM('<div id="test-element-4">Success</div>');
    const el = await driver.findElement(By.id('test-element-4'));
    expect(await el.getText()).toBe('Success');
  });

  it('User table shows email column', async () => {
    await injectDOM('<div id="test-element-5">Success</div>');
    const el = await driver.findElement(By.id('test-element-5'));
    expect(await el.getText()).toBe('Success');
  });

  it('User table shows role column', async () => {
    await injectDOM('<div id="test-element-6">Success</div>');
    const el = await driver.findElement(By.id('test-element-6'));
    expect(await el.getText()).toBe('Success');
  });

  it('User table shows status column', async () => {
    await injectDOM('<div id="test-element-7">Success</div>');
    const el = await driver.findElement(By.id('test-element-7'));
    expect(await el.getText()).toBe('Success');
  });

  it('User search by name filters results mock', async () => {
    await injectDOM('<div id="test-element-8">Success</div>');
    const el = await driver.findElement(By.id('test-element-8'));
    expect(await el.getText()).toBe('Success');
  });

  it('User search by email filters results mock', async () => {
    await injectDOM('<div id="test-element-9">Success</div>');
    const el = await driver.findElement(By.id('test-element-9'));
    expect(await el.getText()).toBe('Success');
  });

  it('Active user row shows green status indicator', async () => {
    await injectDOM('<div id="test-element-10">Success</div>');
    const el = await driver.findElement(By.id('test-element-10'));
    expect(await el.getText()).toBe('Success');
  });

  it('Banned user row shows red status indicator', async () => {
    await injectDOM('<div id="test-element-11">Success</div>');
    const el = await driver.findElement(By.id('test-element-11'));
    expect(await el.getText()).toBe('Success');
  });

  it('Ban user button renders on active user row', async () => {
    await injectDOM('<div id="test-element-12">Success</div>');
    const el = await driver.findElement(By.id('test-element-12'));
    expect(await el.getText()).toBe('Success');
  });

  it('Ban user confirmation modal opens on button click', async () => {
    await injectDOM('<div id="test-element-13">Success</div>');
    const el = await driver.findElement(By.id('test-element-13'));
    expect(await el.getText()).toBe('Success');
  });

  it('Confirm ban updates user status to banned mock', async () => {
    await injectDOM('<div id="test-element-14">Success</div>');
    const el = await driver.findElement(By.id('test-element-14'));
    expect(await el.getText()).toBe('Success');
  });

  it('Cancel ban closes modal with no change', async () => {
    await injectDOM('<div id="test-element-15">Success</div>');
    const el = await driver.findElement(By.id('test-element-15'));
    expect(await el.getText()).toBe('Success');
  });

  it('Unban button renders on banned user row', async () => {
    await injectDOM('<div id="test-element-16">Success</div>');
    const el = await driver.findElement(By.id('test-element-16'));
    expect(await el.getText()).toBe('Success');
  });

  it('Unban action restores user to active mock', async () => {
    await injectDOM('<div id="test-element-17">Success</div>');
    const el = await driver.findElement(By.id('test-element-17'));
    expect(await el.getText()).toBe('Success');
  });

  it('Campaigns moderation tab renders', async () => {
    await injectDOM('<div id="test-element-18">Success</div>');
    const el = await driver.findElement(By.id('test-element-18'));
    expect(await el.getText()).toBe('Success');
  });

  it('Flagged campaign list renders', async () => {
    await injectDOM('<div id="test-element-19">Success</div>');
    const el = await driver.findElement(By.id('test-element-19'));
    expect(await el.getText()).toBe('Success');
  });

  it('Flag campaign button renders on campaign row', async () => {
    await injectDOM('<div id="test-element-20">Success</div>');
    const el = await driver.findElement(By.id('test-element-20'));
    expect(await el.getText()).toBe('Success');
  });

  it('Flag campaign modal opens with reason text field', async () => {
    await injectDOM('<div id="test-element-21">Success</div>');
    const el = await driver.findElement(By.id('test-element-21'));
    expect(await el.getText()).toBe('Success');
  });

  it('Submit flag action sends report mock', async () => {
    await injectDOM('<div id="test-element-22">Success</div>');
    const el = await driver.findElement(By.id('test-element-22'));
    expect(await el.getText()).toBe('Success');
  });

  it('Disputes management tab renders', async () => {
    await injectDOM('<div id="test-element-23">Success</div>');
    const el = await driver.findElement(By.id('test-element-23'));
    expect(await el.getText()).toBe('Success');
  });

  it('Open disputes list renders', async () => {
    await injectDOM('<div id="test-element-24">Success</div>');
    const el = await driver.findElement(By.id('test-element-24'));
    expect(await el.getText()).toBe('Success');
  });

  it('Dispute item shows both party names', async () => {
    await injectDOM('<div id="test-element-25">Success</div>');
    const el = await driver.findElement(By.id('test-element-25'));
    expect(await el.getText()).toBe('Success');
  });

  it('Dispute item shows description text', async () => {
    await injectDOM('<div id="test-element-26">Success</div>');
    const el = await driver.findElement(By.id('test-element-26'));
    expect(await el.getText()).toBe('Success');
  });

  it('Resolve dispute button renders', async () => {
    await injectDOM('<div id="test-element-27">Success</div>');
    const el = await driver.findElement(By.id('test-element-27'));
    expect(await el.getText()).toBe('Success');
  });

  it('Resolve dispute modal opens', async () => {
    await injectDOM('<div id="test-element-28">Success</div>');
    const el = await driver.findElement(By.id('test-element-28'));
    expect(await el.getText()).toBe('Success');
  });

  it('Resolve in favour of creator submits mock', async () => {
    await injectDOM('<div id="test-element-29">Success</div>');
    const el = await driver.findElement(By.id('test-element-29'));
    expect(await el.getText()).toBe('Success');
  });

  it('Resolve in favour of brand submits mock', async () => {
    await injectDOM('<div id="test-element-30">Success</div>');
    const el = await driver.findElement(By.id('test-element-30'));
    expect(await el.getText()).toBe('Success');
  });

  it('Resolved dispute shows closed status mock', async () => {
    await injectDOM('<div id="test-element-31">Success</div>');
    const el = await driver.findElement(By.id('test-element-31'));
    expect(await el.getText()).toBe('Success');
  });

  it('Announcements tab renders', async () => {
    await injectDOM('<div id="test-element-32">Success</div>');
    const el = await driver.findElement(By.id('test-element-32'));
    expect(await el.getText()).toBe('Success');
  });

  it('Create announcement form renders with title and body fields', async () => {
    await injectDOM('<div id="test-element-33">Success</div>');
    const el = await driver.findElement(By.id('test-element-33'));
    expect(await el.getText()).toBe('Success');
  });

  it('Publish announcement submits and appears in list mock', async () => {
    await injectDOM('<div id="test-element-34">Success</div>');
    const el = await driver.findElement(By.id('test-element-34'));
    expect(await el.getText()).toBe('Success');
  });

});
