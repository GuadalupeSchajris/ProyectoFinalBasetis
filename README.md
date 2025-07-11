# ProyectoFinalBasetis
playwright-automation project
# 🏨 Hotel Booking & Contact Form Automation

![Playwright](https://img.shields.io/badge/Playwright-1.54.0-2EAD33?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions)

Automated tests for hotel booking system and contact form using Playwright.

- **Guadalupe Hani Schajris**  
  [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/GuadalupeSchajris) 
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/guadalupe-hani/)
  
- **Israel Espin**  
  [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/iespin) 
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/israelespin/)
  
## ✨ Features

- ✅ Complete booking flow tests
- 📝 Contact form validation tests
- 🏷 Tagged tests (smoke, regression, etc.)
- 📊 HTML reports & CI artifacts
- 🖼 Screenshots on failure
- 📹 Video recording on failure

## 🚀 Getting Started

1. Clone the repository: https://github.com/GuadalupeSchajris/ProyectoFinalBasetis
2. Install dependencies:
   ```bash
   npm ci
   npx playwright install --with-deps
   🧪 Running Tests
Command	Description
npm test	Run all tests
npm run test:smoke	Run smoke tests (in progress).
npm run test:regression	Run regression tests
npm run test:booking	Run booking tests
npm run test:contact	Run contact form tests
npm run report	View HTML report

📊 CI Pipeline
Tests run automatically on:

Push to any branch

Pull requests

Artifacts generated:

Playwright HTML report

Test results

🏗 Project Structure
.
├── .github/workflows/       # CI/CD con GitHub Actions

├── src/

│   ├── models/              # Modelos de datos de prueba

│   │   ├── bookingData.ts

│   │   └── contactData.ts

│   └── pages/              # Page Objects

│       ├── bookingPage.ts

│       ├── contactPage.ts

│       ├── homePage.ts

│       └── roomSelectionPage.ts

├── tests/

│   ├── booking.spec.ts      # Tests de reservas

│   └── contact.spec.ts      # Tests de contacto

├── playwright.config.ts    # Configuración de Playwright

├── package.json

└── tsconfig.json

📄 License
ISC

📌 Additional Notes
CI Configuration: The GitHub Actions workflow is configured to:

Run on push and pull requests

Use Node.js 20

Cache dependencies

Upload HTML reports and test results as artifacts

60-minute timeout

Data Models:

bookingData.ts and contactData.ts contain valid test data, invalid cases, and edge cases

Page Objects:

Implement the Page Object pattern for better maintainability

Include reusable methods and selectors

Tags:

Tagged tests for selective execution (@smoke, @regression, etc.)

Reports:

Automatic HTML report generation

Artifacts stored for 30 days in CI

Key translation choices:

"Configuración de CI" → "CI Configuration"

"cachear dependencias" → "cache dependencies"

"casos límite" → "edge cases"

"mejor mantenibilidad" → "better maintainability"

"etiquetados" → "tagged"

"guardados" → "stored"


     
