import { Browser, BrowserContext, Page, chromium } from "playwright";
describe("image upload ", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://superlink-indol.vercel.app");
  });
  test("first page testing", async () => {
    const [newWindow] = await Promise.all([
      context.waitForEvent("page"),
      await page
        .locator('//*[@id="__next"]/div[2]/div/div[3]/div/button')
        .click(),
    ]);
    await newWindow.waitForLoadState();
    expect(newWindow.url()).toContain("?show=login");
  });
});
