import { chromium } from "playwright";

describe("launch browser", () => {
  test("first test", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://superlink-indol.vercel.app/");
    await page.close();
  });
});
