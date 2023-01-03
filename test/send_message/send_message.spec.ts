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
    await page.goto("https://superlink-indol.vercel.app/suvajit");
    await page.getByRole("button", { name: "Message Me!" }).first().click();
    await page.getByRole("button", { name: "Let's start" }).click();
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
    await page.getByRole("button", { name: "Message Me!" }).first().click();
    await page.getByPlaceholder("Enter your message...").click();
    await page.getByPlaceholder("Enter your message...").fill("hello friends");
    await page.getByRole("button", { name: "send" }).click();
    await page.getByPlaceholder("Name on card").click();
    await page.getByPlaceholder("Name on card").fill("visa");
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("Card number")
      .click();
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("Card number")
      .fill("4242 4");
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("Card number")
      .click();
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("Card number")
      .fill("4242 4242 4242 4242");
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("MM / YY")
      .fill("12 / 24");
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("CVC")
      .fill("121");
    await page
      .frameLocator('internal:attr=[title="Secure card payment input frame"i]')
      .getByPlaceholder("ZIP")
      .fill("12345");
    await page.getByRole("button", { name: "Save" }).click();
    await page.getByRole("button", { name: "Send Message" }).click();
    await page.getByRole("button", { name: "Okay" }).click();
  });
});
