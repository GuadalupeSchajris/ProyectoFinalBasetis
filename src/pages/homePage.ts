import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly bookNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookNowButton = page.locator('a.btn-primary.btn-lg:has-text("Book Now")');
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/');
  }

  async navigateToBooking() {
    await this.bookNowButton.click();
  }
}