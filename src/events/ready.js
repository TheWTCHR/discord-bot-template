const app = require("../../app");

app.register(({ Event }) => {
    Event({
        name: "ready",
        async onExecute({ client }) {
            await client.user.setActivity("Witcher 3", { type: "PLAYING" });
            console.log(`Logged in as ${client.user.tag}!`);
        }
    });
});