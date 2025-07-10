import { Locator, Page } from '@playwright/test';

export class RoomSelectionPage {
  readonly page: Page;
  readonly checkAvailabilityButton: Locator;
  readonly availableRooms: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkAvailabilityButton = page.locator('button:has-text("Check Availability")');
    this.availableRooms = page.locator('.room-card:has(a:has-text("Book now"))');
  }

  async checkAvailability() {
    await this.checkAvailabilityButton.click();
    await this.page.waitForSelector('.room-card');
  }

  async selectFirstAvailableRoom() {
    const firstAvailableRoom = this.availableRooms.first();
    
    const roomType = await firstAvailableRoom.locator('h5.card-title').textContent();
   
    await firstAvailableRoom.locator('a:has-text("Book now")').click();
    await this.page.waitForURL(/reservation/);
    
    return roomType?.trim() || '';
  }
}