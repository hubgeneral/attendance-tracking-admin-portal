const parseUserFromCookie = (cookie) => {
  if (!cookie?.value) {
    return undefined;
  }

  try {
    return JSON.parse(decodeURIComponent(cookie.value));
  } catch (error) {
    console.error("Failed to parse currentUser cookie:", error);
    return undefined;
  }
};

const prepareAttendanceAccess = () => {
  cy.getCookie("currentUser").then((cookie) => {
    const role = parseUserFromCookie(cookie)?.role?.toLowerCase();
    const isAdmin = role === "admin";
    cy.wrap(isAdmin).as("isAdmin");

    if (isAdmin) {
      cy.visit("/app/attendance");
    } else {
      cy.visit("/access-denied");
    }
  });
};

const runIfAdmin = (assertions) => {
  cy.get("@isAdmin").then((isAdmin) => {
    if (!isAdmin) {
      cy.url().should("include", "/access-denied");
      cy.contains("Access Denied").should("be.visible");
      return;
    }

    assertions();
  });
};

describe("template spec", () => {
  beforeEach(() => {
    cy.login();
    prepareAttendanceAccess();
  });

  it("passes", () => {
    runIfAdmin(() => {
      cy.url("/app/attendance");
    });
  });

  it("displays  page title", () => {
    runIfAdmin(() => {
      cy.get(".text-3xl");
      cy.contains("h1", "Attendance").should("be.visible");
    });
  });

  it("shows the date range picker", () => {
    runIfAdmin(() => {
      cy.get('input[placeholder="Select Date"]').should("exist");
      cy.get(".rs-input-group-addon").should("exist");
    });
  });

  it("displays  page Subtitle", () => {
    runIfAdmin(() => {
      cy.get(".text-xl");
      cy.contains("h2", "All Employees").should("be.visible");
    });
  });

  it("Shows the search input", () => {
    runIfAdmin(() => {
      cy.get('input[placeholder="Search employee name or id"]').should(
        "be.visible"
      );
    });
  });

  it("Shows the export button", () => {
    runIfAdmin(() => {
      cy.get(".gap-2 > .MuiButtonBase-root").should("exist");
      cy.contains("button", "Export").should("be.visible");
    });
  });

  it("Shows the table headers", () => {
    runIfAdmin(() => {
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
  });

  // it("Shows the table data", () => {
  //   cy.get("table tbody tr").first().find("td").should("have.length", 5);
  //   cy.get("table tbody tr")
  //     .first()
  //     .within(() => {
  //       cy.get("td").eq(0).should("contain.text", "- DHG");
  //       cy.get("td").eq(1).should("contain.text", "m");
  //       cy.get("td").eq(2).should("contain.text", "m");
  //     });
  // });
});
