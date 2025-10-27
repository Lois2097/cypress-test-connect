import fs from 'fs';
import path from 'path';

interface RenamePdfParams {
  mnemonic: string;
  index: number;
}

export function registerFileTasks(on: Cypress.PluginEvents) {
  on('task', {
    renamePdf({ mnemonic, index }: RenamePdfParams) {
      const fixturesFolder = path.join(__dirname, '..', 'fixtures');
      const oldPath = path.join(fixturesFolder, 'DEVBAUC.pdf');
      const newPath = path.join(fixturesFolder, `${mnemonic}${index}.pdf`);

      return new Promise((resolve, reject) => {
        fs.copyFile(oldPath, newPath, (err) => {
          if (err) {
            console.error('Rename failed:', err);
            return reject(err);
          }
          resolve(true);
        });
      });
    }
  });
}