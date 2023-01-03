import { chromium } from "playwright";

describe("image upload ", () => {
  const inputFiles = "test/profile_img_upload/image_test.spec.ts";
  test("testing start", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext({
      recordVideo: {
        dir: "../videos/",
        size: {
          width: 700,
          height: 800,
        },
      },
    });
    const page = await context.newPage();
    await page.goto("https://superlink-indol.vercel.app");
    await page.click('//*[@id="__next"]/div[2]/div/div[3]/div/button');
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div/div/form/div[1]/div/input',
      "913333333333"
    );
    const mobileLength = await page
      .locator('//*[@id="__next"]/div[2]/div/div/div/div/form/div[1]/div/input')
      .inputValue()
      .then((res) => res);
    console.log(mobileLength);
    const mobileVal = mobileLength.split(" ");
    expect(String(mobileVal[1].length)).toContain("11");
    await page.click(
      '//*[@id="__next"]/div[2]/div/div/div/div/form/div[2]/button'
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[1]/input',
      "1"
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[2]/input',
      "2"
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[3]/input',
      "3"
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[4]/input',
      "4"
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[5]/input',
      "5"
    );
    await page.fill(
      '//*[@id="__next"]/div[2]/div/div/div[1]/div/form/div[1]/div/div[6]/input',
      "6"
    );
    await page.waitForTimeout(10000);
    await page.setInputFiles(
      '//*[@id="__next"]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div/input',
      inputFiles
    );
    // await page.waitForTimeout(10000);
    // await browser.close();
    // await context.close();
  });
});
