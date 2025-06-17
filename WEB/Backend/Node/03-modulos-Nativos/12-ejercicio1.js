// Esto es asincrono pero tanbién se utiliza paralelo.
// Lo mejor es separar y crear varios TryCatch

const { promises } = require("node:dns");
const fs = require("node:fs/promises");
const path = require("node:path");
const colors = require("picocolors");

const folder = process.argv[2] ?? "."; // Le podemos enviar otro folder.

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(colors.red(`No se puede leer el directorio: ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath); //Status - Información del archivo.
    } catch (error) {
      console.error(colors.red(`No se puede leer el archivo: ${filePath}.`));
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? colors.green("d") : colors.yellow("f");
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(30)} ${fileSize
      .toString()
      .padStart(15)} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });
}

ls(folder);
