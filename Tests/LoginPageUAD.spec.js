const { test, expect } = require('playwright/test');
const LoginPage = require('../Pages/LoginPage');
const MainPage = require('../Pages/MainPage');

test('Login on the page', async ({ page }) => {
  await page.goto('https://www.uadreams.com/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToWebSite();

  const mainPage = new MainPage(page);
  await mainPage.transitionMainPage(page);
});
