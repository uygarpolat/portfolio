import { test, expect } from "@playwright/test";

test("contact form submits successfully", async ({ page, baseURL }) => {
  // If running on localhost, we mock the API response to avoid 404s
  if (baseURL?.includes("localhost")) {
    await page.route("/api/send-email", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });
  }

  await page.goto("/");
  await page.getByLabel("Name", { exact: true }).fill("Test User");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page.getByLabel("Message", { exact: true }).fill("This is a test message from Playwright.");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator("text=Message Sent!")).toBeVisible();
});
