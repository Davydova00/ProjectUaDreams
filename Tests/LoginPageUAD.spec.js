const { expect } = require("playwright/test");
const LoginPage = require('../Pages/LoginPage');

test('Login on the page',async({page})=>{
  await page.goto('https://www.uadreams.com/');
  new LoginPage(page);
})