// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/app/dashboard')
//   })

// })

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

const ensureAdminOrAccessDenied = () => {
  return cy.getCookie("currentUser").then((cookie) => {
    const role = parseUserFromCookie(cookie)?.role?.toLowerCase();
    const isAdmin = role === "admin";

    cy.wrap(isAdmin).as("isAdmin");
    cy.visit(isAdmin ? "/app/dashboard" : "/access-denied");
  });
};

const skipIfNotAdmin = (assertions) => {
  cy.get("@isAdmin").then((isAdmin) => {
    if (!isAdmin) {
      cy.url().should("include", "/access-denied");
      cy.contains("Access Denied").should("be.visible");
      return;
    }

    assertions();
  });
};

describe("Dashboard Header", () => {
  beforeEach(() => {
    cy.login();
    ensureAdminOrAccessDenied();
  });

  it("should display the correct title", () => {
    skipIfNotAdmin(() => {
      cy.contains("h1", "Dashboard")
        .should("be.visible")
        .should("have.class", "text-2xl");
    });
  });

  it("shows the date range picker", () => {
    skipIfNotAdmin(() => {
      cy.get('input[placeholder="Select Date"]').should("exist");
      cy.get(".rs-input-group-addon").should("exist");
    });
  });

  it("renders the correct labels and values", () => {
    skipIfNotAdmin(() => {
      cy.get(".grid .MuiCard-root")
        .first()
        .within(() => {
          cy.get("p").should("not.be.empty");
          cy.get("h2").should("not.be.empty");
          cy.get("img").should("exist");
        });
    });
  });

  // bar

  it("renders the card and title", () => {
    skipIfNotAdmin(() => {
      cy.contains("h3", "Total Employees").should("be.visible");
      cy.get(".MuiCard-root").should("exist");
    });
  });

  it("renders the custom legend", () => {
    skipIfNotAdmin(() => {
      cy.contains("Clocked In").should("be.visible");
      cy.contains("Absent").should("be.visible");
      cy.contains("On Leave").should("be.visible");
    });
  });

  // Working Hours

  it("shows Clock-In and Clock-Out cards", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockin-card"]').within(() => {
        cy.contains("p", "Average Clock-In Time").should("be.visible");
        cy.get("h2").should("exist");
      });

      cy.get('[data-testid="avg-clockout-card"]').within(() => {
        cy.contains("p", "Average Clock-Out Time").should("be.visible");
        cy.get("h2").should("exist");
      });
    });
  });

  it("shows Work Hour Summary card with legend", () => {
    skipIfNotAdmin(() => {
      cy.contains("h3", "Work Hour Summary").should("be.visible");
      cy.get("svg").should("exist");
    });
  });

  it("shows Requests card with items", () => {
    skipIfNotAdmin(() => {
      cy.contains("h3", "Requests").should("be.visible");
      cy.get(".MuiCardContent-root").should("exist");
    });
  });

  // RankingCard
  it("shows all Ranking Cards", () => {
    skipIfNotAdmin(() => {
      cy.contains("Punctual Employees").should("be.visible");
      cy.contains("Late Employees").should("be.visible");
      cy.contains("Most Hours Worked").should("be.visible");
      cy.contains("Most Off Hours").should("be.visible");
    });
  });

  it("should show ranking card content", () => {
    skipIfNotAdmin(() => {
      cy.get(".MuiCardContent-root").should("exist");
      cy.get(".space-y-1").should("exist");
    });
  });

  it("renders the Average Clock-Out Time card", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockout-card"]').should("exist");
    });
  });

  it("displays the correct label and time", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockout-card"]').within(() => {
        cy.contains("Average Clock-Out Time");
        cy.contains("08:30 AM");
      });
    });
  });
  it("renders the Average Clock-In Time card", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockin-card"]').should("exist");
    });
  });

  it("shows the correct label and clock-in time", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockin-card"]').within(() => {
        cy.contains("Average Clock-In Time");
        cy.contains("08:30 AM");
      });
    });
  });

  it("has the correct classes", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="avg-clockin-card"]')
        .should("have.class", "shadow-sm")
        .and("have.class", "rounded-lg");
    });
  });

  it("check whether the svg icons exist", () => {
    skipIfNotAdmin(() => {
      cy.get('[data-testid="rank1-icon"]').should("exist");
      cy.get('[data-testid="rank2-icon"]').should("exist");
      cy.get('[data-testid="rank3-icon"]').should("exist");
      cy.get('[data-testid="rank4-icon"]').should("exist");
    });
  });
});
