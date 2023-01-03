import { test, expect } from "@playwright/test";
describe("automate login test", () => {
  test("test", async ({ page }) => {
    await page.goto("https://superlink-indol.vercel.app/");
    await page.getByRole("button", { name: "Let's Start" }).click();
    await page.getByPlaceholder("1 (702) 123-4567").fill("+91 33333-33333");
    await page.getByRole("button", { name: "Continue" }).click();
    await page
      .getByRole("textbox", { name: "Please enter verification code. Digit 1" })
      .fill("1");
    await page.getByRole("textbox", { name: "Digit 2" }).fill("2");
    await page.getByRole("textbox", { name: "Digit 3" }).fill("3");
    await page.getByRole("textbox", { name: "Digit 4" }).fill("4");
    await page.getByRole("textbox", { name: "Digit 5" }).fill("5");
    await page.getByRole("textbox", { name: "Digit 6" }).fill("6");
    await page.getByRole("img", { name: "Picture" }).click();
    await page.getByRole("link", { name: "Sign Out" }).click();
  });
});
