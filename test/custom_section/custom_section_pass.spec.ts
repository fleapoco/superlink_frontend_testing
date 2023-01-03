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
    await page.goto("https://superlink-indol.vercel.app/");
    await page.getByRole("button", { name: "Let's Start" }).click();
    await page.getByPlaceholder("1 (702) 123-4567").click();
    await page.getByPlaceholder("1 (702) 123-4567").fill("+91 33333-333333");
    await page.getByRole("button", { name: "Continue" }).click();
    await page
      .getByRole("textbox", { name: "Please enter verification code. Digit 1" })
      .fill("1");
    await page.getByRole("textbox", { name: "Digit 2" }).fill("2");
    await page.getByRole("textbox", { name: "Digit 3" }).fill("3");
    await page.getByRole("textbox", { name: "Digit 4" }).fill("4");
    await page.getByRole("textbox", { name: "Digit 5" }).fill("5");
    await page.getByRole("textbox", { name: "Digit 6" }).fill("6");
    await page.getByRole("heading", { name: "Custom Sections" }).click();
    await page.getByRole("heading", { name: "Custom Sections" }).click();
    await page.getByRole("button", { name: "Add Custom Section" }).click();
    await page.getByPlaceholder("Section Name").fill("about");
    await page.locator("form").getByRole("button", { name: "Add" }).click();
  });
});
// await page.waitForTimeout(10000);
// await browser.close();
// await context.close();
