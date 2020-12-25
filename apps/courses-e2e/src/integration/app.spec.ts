import { getGreeting,getCourses } from '../support/app.po';

describe('courses', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to courses!');
  });
  it('should display todos', () => {
    getCourses().should((t) => expect(t.length).equal(2));
   // getAddCourseButton().click();
    getCourses().should((t) => expect(t.length).equal(3));
  });
});

