class LoginPage {
  constructor(page) {
    this.page = page;
    this.login = '//input[@name="login"]';
    this.password = '//input[@name="password"]';
    this.loginButton = '//button[@type="submit"]';
    this.joinButton = '//button[@class="gtm-join-free button-module__button___4j-PY button-module__button-success___rsQCA button-module__button-medium___OgoOQ button-module__button-wrapper___GLWLk"]';
    this.loginTab = '//button[@class="formAuth-module__btn___np9S0"]';
  }
  async loginToWebSite() {
    await this.page.click(this.joinButton);
    await this.page.click(this.loginTab);
    await this.page.fill(this.login, '1466754');
    await this.page.fill(this.password, '123456');
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
