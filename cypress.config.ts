import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import {registerFileTasks} from './cypress/support/plugins/plugin'
import * as fs from 'fs';
import * as path from 'path';


const targetEnv = process.env.ENV || 'dev'; // default to dev
const envFilePath = `cypress/env/env.${targetEnv}.json`;

interface EnvConfig {
  login: string;
  verifyFiles: string;
  otpLogs: string;
  username: string;
  password: string;

}
let envConfig: EnvConfig = {
  login: '',
  verifyFiles: '',
  otpLogs: '',
  username: '',
  password: '',
};

if (fs.existsSync(envFilePath)) {
  envConfig = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'));
} else {
  console.warn(`⚠️ Environment file not found: ${envFilePath}`);
}

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/support/fixtures',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporterOptions.json',
    },

    async setupNodeEvents(on, config) {
      registerFileTasks(on);
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on('task', {
        
        writeAssertionData({ filePath, data }) {
          const fullPath = path.resolve(filePath);
          let existing = [];

          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            existing = JSON.parse(content || '[]');
          }

          existing.push();
          fs.writeFileSync(fullPath, JSON.stringify(existing, null, 2));
          console.log(`Assertion data written to ${fullPath}`);
          return null;
        },

        readAFile(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
          return null
        }
      })
      on('task', {
        duplicateAFile(filename) {
          fs.copyFile('cypress/fixtures/DEVBAUC1.pdf', 'cypress/fixtures/' + filename + '.pdf', (err) => {
            if (err) throw err;
            console.log('DEVBAUC1.pdf was copied to ' + filename + '.pdf');

          });
          return null
        }
      })

      return config;
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalWebKitSupport: true,
  experimentalMemoryManagement: true,
  redirectionLimit: 7000,
  experimentalCspAllowList: true,
  experimentalStudio: true,
  env: {
    ...envConfig,
    targetEnv
  },
  reporter: "mochawesome",
  reporterOptions: {
    embeddedScreenshots: true,
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

});




// DAT - APU
