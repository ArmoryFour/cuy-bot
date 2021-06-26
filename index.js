const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;



//settings

app.set("view engine", "ejs");
app.use(express.static(path.join("public")))




//routes

app.use(require("./routes"));

app.listen(port, () => {
console.log("listening at https://localhost:" + port);

});



// bot

const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token} = require("./config.json");
const fs = require("fs");


//command handler

client.on('ready', async () => {
	console.log('The client is ready!');
	client.user.setActivity('version beta | c!');
	const baseFile = 'command-base.js';
	const commandBase = require(`./commands/${baseFile}`);

	const readCommands = dir => {
		const files = fs.readdirSync(path.join(__dirname, dir));
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file));
			if (stat.isDirectory()) {
				readCommands(path.join(dir, file));
			} else if (file !== baseFile) {
				const option = require(path.join(__dirname, dir, file));
				commandBase(client, option);
			}
		}
	};

	readCommands('commands');
});




client.on("message", message => {

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

})


client.login(token)