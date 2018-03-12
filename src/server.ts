import Discord from 'discord.io';

import { config } from './config/config';

process.on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});

const bot = new Discord.Client({
    token: config.discord.token,
    autorun: true,
});

bot.on('ready', () => {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', (userName: string, userId: string, channelId: string, message: string, event: any) => {
    if (message === 'ping') {
        bot.sendMessage({
            to: channelId,
            message: 'pong',
        });
    }
});
