export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const validContact: ContactData = {
  name: 'Guadalupe Hani Schajris',
  email: 'test@example.com',
  phone: '12345678901',
  subject: 'Consulta importante',
  message: 'Este es un mensaje de prueba con más de 20 caracteres.'
};

export const invalidContact: ContactData = {
  name: '',
  email: 'invalid-email',
  phone: '123',
  subject: 'Hi',
  message: 'Short'
};

export const edgeCases = {
  minLength: {
    phone: '12345678901',
    subject: '12345',
    message: 'Este mensaje tiene 20 c'
  },
  maxLength: {
    phone: '123456789012345678901',
    subject: 'a'.repeat(100),
    message: 'a'.repeat(2000)
  }
};