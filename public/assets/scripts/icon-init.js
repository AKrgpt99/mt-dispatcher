const fs = require("fs");
const glob = require("glob");

function iconInit() {
  window.icons = glob.sync("assets/icons/*.svg");

  icons = icons.map((iconFilename) => {
    return {
      iconFilename,
      iconData: fs.readFileSync(iconFilename, { encoding: "utf8" }),
    };
  });

  window.icons = window.icons.map(({ iconFilename, iconData }) => {
    const iconPath = iconFilename.split("/");
    const name = iconPath[iconPath.length - 1].split(".")[0];
    const regex = /.*(viewBox="[0-9]+\s{1}[0-9]+\s{1}[0-9]+\s{1}[0-9]+").*(d=".+").*/;
    const regexStr = iconData.match(regex);

    return {
      name,
      viewBox: regexStr[1],
      d: regexStr[2],
    };
  });
}

iconInit();
