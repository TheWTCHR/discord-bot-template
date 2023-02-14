const { build } = require("@mostfeatured/bundler");

(async () => {
    await build({
        main: "login.js",
        dist: "dist",
        excludes: ["./.env"]
    });
    console.log("Build done.");
    process.exit(1);
})();
