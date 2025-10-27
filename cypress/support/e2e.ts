
import './commands'


Cypress.on('window:before:load', (win) => {
    delete (win.navigator as any).__proto__.serviceWorker;
})