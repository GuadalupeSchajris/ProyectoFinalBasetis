import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { RoomSelectionPage } from '../src/pages/roomSelectionPage';
import { BookingPage } from '../src/pages/bookingPage';
import { validBooking, invalidBooking } from '../src/models/bookingData';

test.describe('Booking Flow @booking', () => {
  let homePage: HomePage;
  let roomSelectionPage: RoomSelectionPage;
  let bookingPage: BookingPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    roomSelectionPage = new RoomSelectionPage(page);
    bookingPage = new BookingPage(page);
    
    await homePage.goto();
    await homePage.navigateToBooking();
  });


test('Complete booking flow with valid data @smoke @regression', async ({ page }) => {
  const homePage = new HomePage(page);
  const roomSelectionPage = new RoomSelectionPage(page);
  const bookingPage = new BookingPage(page);
  
  await homePage.goto();
  await homePage.navigateToBooking();
  await roomSelectionPage.checkAvailability();
  await roomSelectionPage.selectFirstAvailableRoom();

  await bookingPage.completeReservationProcess();
  
  await bookingPage.fillBookingForm(validBooking);
  await bookingPage.submitBooking();
  
  await expect(bookingPage.confirmationMessage).toBeVisible();
});
})