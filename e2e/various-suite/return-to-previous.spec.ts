import { e2e } from '../utils';

describe('ReturnToPrevious button', () => {
  before(() => {
    e2e.flows.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
  });

  beforeEach(() => {
    // TODO: Remove both delete processes after finishing beforeEach
    // // Delete alert rule
    // cy.visit('/alerting/list?search=');
    // cy.get('[data-testid="group-collapse-toggle"]').click();
    // cy.get('[data-testid="row"]').find('[type="button"]').last().click();
    // cy.get('[role="menuitem"]').last().click();
    // cy.get('[data-testid="data-testid Confirm Modal Danger Button"]').click();
    //
    // // Delete test folder for clean up reasons
    // cy.visit('/dashboards');
    // cy.get('[data-testid="data-testid browse dashboards row test folder"]').find('a').click();
    // cy.get('[data-testid="data-testid folder actions button"]').click();
    // cy.get('[id="grafana-portal-container"]').find('button').last().click();
    // cy.get('[role="dialog"]').find('input').type('Delete');
    // cy.get('[data-testid="data-testid Confirm Modal Danger Button"]').click();

    // Create a new alert rule with linked dashboard
    cy.visit('/alerting/list?search=');

    cy.get('[data-testid="data-testid Call to action button New alert rule"]').click();
    cy.get('[id="name"]').type('test rule');

    cy.get('[data-testid="data-testid create folder"]').click();
    cy.get('[id="folderName"]').last().type('test folder {enter}');

    cy.get('[data-testid="data-testid create evaluation group"]').click();
    cy.get('[id="group"]').last().type('test group');
    cy.get('[id="eval-every-input"]').type('5m');
    cy.get('[type="submit"]').click();

    cy.get('[data-testid="data-testid save rule exit"]').click();
    cy.wait(600); // TODO: use await instead?

    // Create a test dashboard incl. test panel
    cy.visit('/dashboards');
    cy.get('[data-testid="data-testid browse dashboards row test folder"]').find('a').click();
    cy.get('[data-testid="data-testid Call to action button Create Dashboard"]').click();
    cy.get('[aria-label="Save dashboard"]').click();
    cy.get('[aria-label="Save dashboard button"]').click();
    cy.get('[data-testid="data-testid Create new panel button"]').click();
    cy.get('[role="dialog"]').find('[data-testid="data-source-card"]');
    // TODO: create a panel as well

    // // Link alert rule to dashboard
    // cy.visit('/alerting/list?search=');
    // cy.get('[data-testid="group-collapse-toggle"]').click();
    // cy.get('[data-testid="row"]').find('a[title="Edit"]').click();
    // cy.get('[data-testid="data-testid link dashboard and panel"]').click();

    // cy.get('[role="dialog"]').find('input[title="Search dashboard"]').type('New dashboard')
    // cy.get('[title="Alert list"]').click()
    // cy.get('[data-testid="data-testid confirm button"]').click();
  });

  // afterEach(() => {
  //     // Delete alert rule
  //     cy.visit('/alerting/list?search=');
  //     cy.get('[data-testid="group-collapse-toggle"]').click();
  //     cy.get('[data-testid="row"]').find('[type="button"]').last().click();
  //     cy.get('[role="menuitem"]').last().click();
  //     cy.get('[data-testid="data-testid Confirm Modal Danger Button"]').click();
  //
  //     // Delete test folder for clean up reasons
  //     cy.visit('/dashboards');
  //     cy.get('[data-testid="data-testid browse dashboards row test folder"]').find('a').click();
  //     cy.get('[data-testid="data-testid folder actions button"]').click();
  //     cy.get('[id="grafana-portal-container"]').find('button').last().click();
  //     cy.get('[role="dialog"]').find('input').type('Delete');
  //     cy.get('[data-testid="data-testid Confirm Modal Danger Button"]').click();
  // });

  it('should appear when changing the context', () => {});
});