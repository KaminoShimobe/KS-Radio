const Discord = require("discord.js");


const Music = require('discord.js-musicbot-addon');
// const music = require('discord.js-music-v11');


const bot = new Discord.Client({disableEveryone: true})

// music(bot);


// var mapper = new Map();

// A valid set of data needs an id and prefix in the object.

// let mprop = {

//   id: "387727240047230976",

//   prefix: "click"

// }

Music.start(bot, {
  youtubeKey: youtubeAPI
  
  
  // botOwner: '242118931769196544',
  // botAdmins: ["451227460336615426"]// maxQueueSize: 25,        // Maximum queue size of 25.
  // prefix: '+',  

  //  advancedMode: {                     // The advancedMode object.

  //   enabled: true                    // Master toggle for advancedMode.

  //   // multiPrefix: true,                // multiple prefix toggle.

  //   // serverPrefixs: mapObj             // Map object for server prefixs.

  // }
  // clearInvoker: true,      // If permissions applicable, allow the bot to delete the messages that invoke it.

  // helpCmd: 'mhelp',        // Sets the name for the help command.

  // playCmd: 'music',        // Sets the name for the 'play' command.

  // volumeCmd: 'adjust',     // Sets the name for the 'volume' command.

  // leaveCmd: 'begone',      // Sets the name for the 'leave' command.

  // disableLoop: true        // Disable the loop command.
});




	

bot.on("ready", async () => {

	console.log(`Let the games begin, ${bot.user.username}`);

	bot.user.setPresence({ status: 'online', game: { name: '!musichelp' } });

	// bot.generateInvite(['ADMINISTRATOR']).then(link => {

	// 	console.log(link);

	// }).catch(err =>{

	// 	console.log(err.stack);

	// });



	// await bot.generateInvite(["ADMINISTRATOR"]);

	try {

		let link = await bot.generateInvite(['SEND_MESSAGES']);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});















bot.login(musicBotToken);
