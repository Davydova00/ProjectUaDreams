class LoginPage {
  constructor(page) {
    this.page = page;
    this.login = '//input[@name="login"]';
    this.password = '//input[@name="password"]';
    this.loginButton = '//button[@type="submit"]';
    this.joinButton = '//button[@class="gtm-join-free button-module__button___4j-PY button-module__button-success___rsQCA button-module__button-medium___OgoOQ button-module__button-wrapper___GLWLk"]';
    this.loginTab = '//button[@class="formAuth-module__btn___np9S0"]';
    this.forgotPassword = '(//button[normalize-space()="Forgot password?"])[1]';
    this.sendInstructions = '(//span[normalize-space()="Send instructions"])[1]';
    this.checkYourMail = '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/section[1]/form[1]/p[1]';
    this.didntForgot = '(//button[normalize-space()="Forgot password?"])[1]';
  }
  async loginToWebSite() {
    await this.page.click(this.joinButton);
    await this.page.click(this.loginTab);
    await this.page.click(this.forgotPassword, 'goddessesgame@gmail.com');
    await this.page.click(this.sendInstructions);
  //  await this.page.
    await this.page.fill(this.login, '1466754');
    await this.page.fill(this.password, '123456');
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
