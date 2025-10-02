describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/app/attendance");
  });

  it("passes", () => {
    cy.url("http://localhost:5173/app/attendance");
    cy.get(".text-\\[var\\(--primary-color\\)\\]").should(
      "have.text",
      "Attendance"
    );
  });

  it("displays  page title", () => {
    cy.get(".text-3xl");
    cy.contains("h1", "Attendance").should("be.visible");
  });

  it("shows the date range picker", () => {
    cy.get('input[placeholder="Select Date"]').should("exist");
    cy.get(".rs-input-group-addon").should("exist");
  });

  it("displays  page Subtitle", () => {
    cy.get(".text-xl");
    cy.contains("h2", "All Employees").should("be.visible");
  });

  it("Shows the search input", () => {
    cy.get('input[placeholder="Search employee name or id"]')
      .should("be.visible")
      .type("Boakye Denis Jr")
      .should("have.value", "Boakye Denis Jr");
  });

  it("Shows the export button", () => {
    cy.get(".gap-2 > .MuiButtonBase-root").should("exist");
    cy.contains("button", "Export").should("be.visible");
  });

  it("Shows the table headers", () => {
    const headers = [
      "Employee",
      "Clock In",
      "Clock Out",
      "Total Hours Worked",
      "Total Time Off",
    ];
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(1)").should(
      "be.visible"
    );
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(2)").should(
      "be.visible"
    );
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(3)").should(
      "be.visible"
    );
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(4)").should(
      "be.visible"
    );
    cy.get(".MuiTableHead-root > .MuiTableRow-root > :nth-child(5)").should(
      "be.visible"
    );

    headers.forEach((header) => {
      cy.get("table thead").contains("th, td", header).should("be.visible");
    });
  });

  it("Shows the table data", () => {
    cy.get("table tbody tr").first().find("td").should("have.length", 5);
    cy.get("table tbody tr")
      .first()
      .within(() => {
        cy.get("td").eq(0).should("contain.text", "Boakye Dennis Jr - DHG0001");
        cy.get("td").eq(1).should("contain.text", "7:59 Am");
        cy.get("td").eq(2).should("contain.text", "4:50 Pm");
      });
  });
});
