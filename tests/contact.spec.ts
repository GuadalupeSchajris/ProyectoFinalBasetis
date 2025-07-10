import { test, expect } from '@playwright/test';
import { ContactPage } from '../src/pages/contactPage';
import { validContact, invalidContact, edgeCases } from '../src/models/contactData';

test.describe('Contact Form Tests @contact', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
    await contactPage.scrollToForm();
  });

  test('Successful submission @smoke', async () => {
    await contactPage.fillForm(validContact);
    await contactPage.submit();

    const { title, subject } = await contactPage.getSuccessContent();
    expect(title).toContain(validContact.name);
    expect(subject).toBe(validContact.subject);
  });

  test('Field validations @validation', async () => {
    await contactPage.fillForm(invalidContact);
    await contactPage.submit();

    const errors = await contactPage.getValidationErrors();
    
    const expectedErrors = [
      'Name may not be blank',
      'must be a well-formed email address',
      'Phone must be between 11 and 21 characters.',
      'Subject must be between 5 and 100 characters.',
      'Message must be between 20 and 2000 characters.'
    ];

    for (const expectedError of expectedErrors) {
      expect(errors).toContain(expectedError);
    }
  });

  test('Length boundary validations @boundary', async () => {
   
    await contactPage.fillForm({
      ...validContact,
      phone: edgeCases.minLength.phone,
      subject: edgeCases.minLength.subject,
      message: edgeCases.minLength.message
    });
    await contactPage.submit();
    await expect(contactPage.successMessage).toBeVisible({ timeout: 10000 });

    await contactPage.page.reload();
    await contactPage.scrollToForm();
    await contactPage.fillForm({
      ...validContact,
      phone: edgeCases.maxLength.phone,
      subject: edgeCases.maxLength.subject,
      message: edgeCases.maxLength.message
    });
    await contactPage.submit();
    await expect(contactPage.successMessage).toBeVisible({ timeout: 10000 });
  });

  test('Email format validation @validation', async () => {
    await contactPage.fillForm({
      ...validContact,
      email: 'invalid-format'
    });
    await contactPage.submit();

    const errors = await contactPage.getValidationErrors();
    expect(errors).toContain('must be a well-formed email address');
  });
});