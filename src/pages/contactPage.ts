import { Locator, Page, expect } from '@playwright/test';
import { ContactData } from '../models/contactData';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByTestId('ContactName');
    this.emailInput = page.getByTestId('ContactEmail');
    this.phoneInput = page.getByTestId('ContactPhone');
    this.subjectInput = page.getByTestId('ContactSubject');
    this.messageInput = page.getByTestId('ContactDescription');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.getByRole('heading', { name: /Thanks for getting in touch/ });
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/#contact', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    await Promise.race([
      this.page.waitForSelector('[data-testid="ContactName"]', { state: 'visible', timeout: 15000 }),
      this.page.waitForSelector('h3:has-text("Send Us a Message")', { state: 'visible', timeout: 15000 })
    ]);
  }

  async scrollToForm() {
    await this.page.locator('h3:has-text("Send Us a Message")').scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
  }

  async fillForm(data: ContactData) {
    if (data.name) {
      await this.nameInput.fill(data.name);
      await expect(this.nameInput).toHaveValue(data.name);
    }
    if (data.email) {
      await this.emailInput.fill(data.email);
      await expect(this.emailInput).toHaveValue(data.email);
    }
    if (data.phone) {
      await this.phoneInput.fill(data.phone);
      await expect(this.phoneInput).toHaveValue(data.phone);
    }
    if (data.subject) {
      await this.subjectInput.fill(data.subject);
      await expect(this.subjectInput).toHaveValue(data.subject);
    }
    if (data.message) {
      await this.messageInput.fill(data.message);
      await expect(this.messageInput).toHaveValue(data.message);
    }
  }

  async submit() {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000); 
  }

  async getSuccessContent() {
    await this.successMessage.waitFor({ state: 'visible', timeout: 10000 });
    return {
      title: await this.successMessage.textContent(),
      subject: await this.page.locator('p[style="font-weight: bold;"]').textContent()
    };
  }

  async getValidationErrors(): Promise<string[]> {
   
    await this.page.waitForSelector('p:has-text("must be"), p:has-text("between"), p:has-text("blank")', {
      timeout: 10000,
      state: 'visible'
    });

    const errorElements = await this.page.locator('p:has-text("must be"), p:has-text("between"), p:has-text("blank")').all();
    
    const errors: string[] = [];
    for (const element of errorElements) {
      const text = await element.textContent();
      if (text) {
        errors.push(text.trim());
      }
    }
    
    return errors;
  }
}