const app = require("../../app");

app.register(({ ChatInput, ChatInputOptions }) => {
    ChatInput({
        name: "ping",
        description: "Ping!",
        options: [
            ChatInputOptions.string({
                name: "input",
                description: "Input to echo back",
                required: true
            })
        ],
        async onExecute({ interaction }) {
            let input = await interaction.options.getString("input");
            await interaction.reply({ content: `Ping! ${input}`});
        }
    })
});