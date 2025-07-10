export interface BookingData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  roomType: string;
}

export const validBooking: BookingData = {
  firstname: 'Israel',
  lastname: 'Espin',
  email: 'israel.espin@example.com',
  phone: '1234567891011',
  checkin: '2025-07-10',
  checkout: '2025-07-11',
  roomType: 'Double'
};

export const invalidBooking: Partial<BookingData> = {
  firstname: '',
  lastname: '',
  email: 'invalid-email'
};