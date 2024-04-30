const { test, expect } = require('playwright/test');
const LoginPage = require('../Pages/LoginPage');

test('Login on the page', async ({ page }) => {
  await page.goto('https://www.uadreams.com/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToWebSite();
});
