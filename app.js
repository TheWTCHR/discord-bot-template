const { createDBI } = require("@mostfeatured/dbi");
const { config } = require("dotenv"); 
config();

module.exports = createDBI("witcher", {
    discord: {
        token: process.env.APP_TOKEN,
        options: {
            intents: ["Guilds", "GuildMembers"],
        }
    },
    defaults: {
        defaultMemberPermissions: ['SendMessages'],
        directMessages: true,
        locale: 'en'
    }
});