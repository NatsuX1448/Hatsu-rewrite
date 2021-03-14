/* Logs */
const logs = require('../../helper/logger/logger');
const debugLogs = logs.getLogger("HatsuDebug");
const infoLogs = logs.getLogger("HatsuInfo");

module.exports = {
    event: "guildCreate",
    once: false,
    async run(guild) {
        let defaultChannel = ``
        //Try to Get All Channel List from Guild
        guild.channels.cache.forEach(ch => {
            //Check the Channel Type is Text Channel and "defaultChannel"
            if (ch.type === "text" && defaultChannel === "") {
                if(ch.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                    debugLogs.debug(`Hatsuku has become a member of [${guild.name}]`);
                    infoLogs.info(`Hatsuku is Now join to [${guild.name}]`);
                    defaultChannel = ch;
                }
            }
        });
        defaultChannel.send("Yeah iam IN!");
    }
}