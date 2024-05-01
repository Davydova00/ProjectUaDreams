class MainPage{
  constructor(page){
    this.page = page;
    this.logo = '/html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/a[1]';
  }
  async transitionMainPage(){
    await this.click(this.logo);

  }
}
module.exports = MainPage;