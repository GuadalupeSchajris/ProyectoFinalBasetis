import { Locator, Page } from '@playwright/test';
import { BookingData } from '../models/bookingData';

export class BookingPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly reserveButton: Locator;
  readonly finalReserveButton: Locator; 
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="firstname"]');
    this.lastNameInput = page.locator('input[name="lastname"]');
    this.emailInput = page.locator('input[name="email"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.reserveButton = page.locator('button:has-text("Reserve Now")').first(); 
    this.finalReserveButton = page.locator('button:has-text("Reserve Now")').last(); 
    this.confirmationMessage = page.locator('h2:has-text("Booking Confirmed")');
  }

  async completeReservationProcess() {
    await this.reserveButton.click();
    await this.page.waitForSelector('input[name="firstname"]');
  }

  async fillBookingForm(bookingData: BookingData) {
    await this.firstNameInput.fill(bookingData.firstname);
    await this.lastNameInput.fill(bookingData.lastname);
    await this.emailInput.fill(bookingData.email);
    await this.phoneInput.fill(bookingData.phone);
  }

  async submitBooking() {
    await this.finalReserveButton.click();
    await this.page.waitForSelector('h2:has-text("Booking Confirmed")');
  }
}