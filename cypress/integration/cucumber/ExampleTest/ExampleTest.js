import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I visit the page`, () => {
  cy.visit("/");
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});
