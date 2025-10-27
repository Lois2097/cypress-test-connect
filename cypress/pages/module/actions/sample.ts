import { Login } from "../../../locators/loginPage";


export class Locators {
    // Registry to map string names to actual objects
    static registry: Record<string, Record<string, string>> = {
        Login,
        
    };

    static checkLocatorsExist(moduleName: string): void {
        if (moduleName === "dashBoard") {
            Object.entries(Locators.registry).forEach(([key, locators]) => {
                if (key.includes("DB")) {
                    cy.log(`Checking locators for module: ${key}`);
                    // Object.entries(locators).forEach(([selectorKey, selectorValue]) => {
                    //     cy.log(`Checking selector for ${selectorKey}: ${selectorValue}`);
                    //     cy.get(`[${selectorValue}]`).should('exist');
                    // });
                }
            });
        } else {
            const locators = Locators.registry[moduleName];
            if (!locators) {
                throw new Error(`Locator module "${moduleName}" not found.`);
            }

            cy.log(`Checking module ${moduleName}`)
            // Object.entries(locators).forEach(([key, value]) => {
            //     cy.log(`Checking selector for ${key}: ${value}`);
            // cy.get(`[${value}]`).should('exist');
            // });
        }
    }
}
