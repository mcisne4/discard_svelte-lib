// === IMPORTS === //
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'fs';

// === MAIN === //
console.log("\nReading 'src/lib' contents for Svelte components");

const fileList = parseDir('src/lib');
console.log('Svelte Components Found:', fileList.length);

writeJson(fileList);
console.log("File list successfully written to 'component-list/list.json'\n");

// === FUNCTIONS === //

// --- parseDir() --- //
function parseDir(dir) {
  try {
    if (!existsSync(dir)) return [];

    const contents = readdirSync(dir, { withFileTypes: true });

    let list = [];
    contents.forEach((entry) => {
      if (entry.isFile()) list.push(`${dir}/${entry.name}`);
      if (entry.isDirectory()) {
        const subList = parseDir(`${dir}/${entry.name}`);
        list = [...list, ...subList];
      }
    });

    return list.filter((filename) => filename.endsWith('.svelte'));
  } catch (error) {
    console.error(error);
    throw new Error("Reading reading the directory 'src/lib'");
  }
}

// --- writeJson() --- //
function writeJson(data) {
  try {
    if (!existsSync('component-list')) mkdirSync('component-list');

    writeFileSync('component-list/list.json', JSON.stringify(data));
  } catch (error) {
    console.error(error);
    throw new Error("Error writing the file 'component-list/component-list.json'");
  }
}
