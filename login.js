const { Utils: { recursiveImport } } = require("@mostfeatured/dbi");
const app = require("./app");

(async () => {
    await recursiveImport("./src");
    await app.load();
    await app.login();
})();