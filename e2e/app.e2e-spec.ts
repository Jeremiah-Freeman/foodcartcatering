import { FoodcartcateringPage } from './app.po';

describe('foodcartcatering App', () => {
  let page: FoodcartcateringPage;

  beforeEach(() => {
    page = new FoodcartcateringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
