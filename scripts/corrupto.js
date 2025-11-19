const fs = require("fs");
const path = require("path");
const PNG = require("pngjs").PNG;

function test(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);

    if (fs.lstatSync(full).isDirectory()) return test(full);

    if (full.endsWith(".png")) {
      try {
        fs.createReadStream(full).pipe(new PNG())
          .on("parsed", () => console.log("OK:", full))
          .on("error", () => console.log("CORRUPTO:", full));
      } catch {
        console.log("CORRUPTO:", full);
      }
    }
  });
}

test(path.join(__dirname, "..", "assets"));
