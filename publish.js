const { Utils: { recursiveImport } } = require("@mostfeatured/dbi");
const app = require("./app");

(async () => {
    await recursiveImport("./src");
    await app.load();
    //await app.publish("Global", false); // Publish to the global slash commands
    await app.publish("Guild", "12345678987654321", false); // Publish to a specific guild
    console.log("Commands Published");
    process.exit(1);
})();