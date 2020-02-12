//****//****//****//****//****//****//****//****//****//****//****//****//****//
//cluster
var cluster = require("cluster");
var clusterMax = 10;
var clusterExits = 0;
if (cluster.isMaster) {
  cluster.fork();

  cluster.on("exit", function(worker, code, signal) {
    clusterExits = clusterExits+1;
    console.log("exit: "+clusterExits);
    cluster.fork();
  });
}

if (cluster.isWorker && clusterExits < clusterMax) {
//cluster end
//****//****//****//****//****//****//****//****//****//****//****//****//****//
//require
var Discordie = require("discordie");
//var lame = require("lame");
var fs = require("fs");
var http = require("http");
var https = require("https");
var nodeStream = require("stream");
//var readable = require("stream").Readable;
var YouTube = require("youtube-node");
var ytdl = require("ytdl-core");
var ffmpeg = require("fluent-ffmpeg");
//var opus = require("node-opus");
//require end
//****//****//****//****//****//****//****//****//****//****//****//****//
//utility var
var trash;
var keptChnlMessags = 1;
var ChnnlMessags = [0];
trash = ChnnlMessags.shift();
var keeps = [0];
trash = keeps.shift();
var botMessagLast;
//utility var end
//****//****//****//****//****//****//****//****//****//****//****//****//
//Discordie var
const Events = Discordie.Events;
var shardCount = 0;
if(shardCount > 0){
const client = new Discordie({
shardId: 0,
shardCount: shardCount,
autoReconnect: true
});
};
const client = new Discordie({
autoReconnect: true
});
var conectedClientsVoice;
var message;
var author;
var content;
var channel;
var guild;
var voiceChannel;
var voiceChannels;

var messagef;
var authorf;
var contentf;
var channelf;
var guildf;
var voiceChannelf;
var voiceChannelsf;

var guilds = [0];
trash = guilds.shift();

var botRoles = [0];
botRoles.shift();
var permissionRole = [0];
permissionRole.shift();
var permissionRoles = [0];
permissionRoles.shift();

var discordCharLimit = 2000;
var discordEmbedCharLimit = 6000;
var maxQueued = 1000;
var bannedIds = [;
var programmersId = [];
var patreons = [{if:"",amount:""}]
//Discordie var end
//****//****//****//****//****//****//****//****//****//****//****//****//
//fs var
var botFolderPath = __dirname; //curr folder
//fs var end
//****//****//****//****//****//****//****//****//****//****//****//****//
//YouTube var
var youtube = new YouTube();
youtube.setKey("GOOGLE API KEY");

//YouTube var end
//****//****//****//****//****//****//****//****//****//****//****//****//
//Prefix
var fprefix = 0;
var prefix = ["DEFAULT BOT PREFIX EXAMPLE -bot"];
//Prefix end
//****//****//****//****//****//****//****//****//****//****//****//****//
//startup
//****//****//****//****//****//****//****//****//****//****//****//
var botId = "DISCORDBOTID";

//fs.readFile(botFolderPath+"/save.json",)
//discord connect
client.connect({
//token:"DISCORDCONNECTTOKEN"
});
//discord connect end
//****//****//****//****//****//****//****//****//****//****//****//
//discord connected
client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username)
  if(queue[0] == 0){trash = queue.shift()};
  indexmusic();
  client.User.setGame({"type": 1, name: "BOTPLAYINGTEXT"}); //JBE
});
//discord connected end
//****//****//****//****//****//****//****//****//****//****//****//
//client options
client.autoReconnect.enable();
//client options end
//****//****//****//****//****//****//****//****//****//****//****//
//startup end
//****//****//****//****//****//****//****//****//****//****//****//****//
//var
//****//****//****//****//****//****//****//****//****//****//****//
//opus var
var opusSampleRate = 48000;
var opusFrameSize = opusSampleRate/100;
var opusChannels = 2;
//opus var end
//****//****//****//****//****//****//****//****//****//****//****//
//music var
var musicIndex = ["I have these songs"];
var playing = [0];
trash = playing.shift();
var playingSong = [0];
trash = playingSong.shift();
var looping = [0];
trash = looping.shift();
var loopingque = [0];
trash = loopingque.shift();
//queue item properties D-(Defoults to)
//link D-user input
//name D-link
//duration D-"?"
//queue item properties end
var queue = [0];
var Playlistsfolder = "Playlists";
var musiclimit = 100;
//music var end
//****//****//****//****//****//****//****//****//****//****//****//
//Radio var
var radio = [0];  //radio[freq[playstream,queue[],guilds[]]]
trash = radio.shift();
//Radio var end
//****//****//****//****//****//****//****//****//****//****//****//
//options + values

var options = {};

// frame size in milliseconds, forced range from 20 to 60
// (frame sizes below 20ms are unsupported)
options.frameDuration = 30; // < default
// input sample rate,
// anything other than 48000 will be resampled by the library
// to match Discord output sample rate
options.sampleRate = 48000; // < default
//options.sampleRate = 44100; // will be resampled to 48000
// number of channels, only mono (1) or stereo (2)
options.channels = 2; // < default
// read as 32-bit floating point audio
options.float = false;

// downmix to mono audio
options.downmix = "average";
// encode multichannel audio
options.downmix = false; // < default

// use emscripten-compiled opus codec
//options.engine = "internal"; // < default
// try to use native `node-opus` module,
// must be installed in discordie/node_modules
options.engine = "native";

// proxy mode, passes packets straight to the muxer
// packets should be opus encoded already
// in this mode it only works as scheduler for packets
options.proxy = false; // < default
//options.proxy = true;

// OPUS_AUTO          -1000
// OPUS_BITRATE_MAX   -1
//options.bitrate = -1000; // < default
//options.bitrate = 32000; // encode 32Kbps audia
//options.bitrate = 64000; // encode 64kbps audio
options.bitrate = 128000; // encode 128kbps audio - max bitrate for Discord servers

options.realtime = true;

//options + values end
//****//****//****//****//****//****//****//****//****//****//****//
//other texts
//other texts end
//****//****//****//****//****//****//****//****//****//****//****//
//help messages
var helptext = ["Action | Command : example /notes on command",
" ",
"if you want to report a bug use the messagdev command or join the support discord above",
" ",
"all commands are case insensetive",
"Provides help on commands | jbe-help",
"Provides help on music commands | jbe-help music",
"provides help and information about updates | jbe-help updates",
" ",
"Sends a message and basic user info to the dev | jbe-messagedev",
"Sends a message to the dev | jbe-messageDevAnonym",
" ",
"bot joins the voice channel you are in | jbe-join",
"bot joins voice channel by name | jbe-joinchannel channelname /lowercase",
" ",
"bot leaves the voice channel you are in | jbe-leaveme",
"leaves all channels | jbe-leave",
"bot leaves voice channel by name | jbe-leavechannel channelname /lowercase",
" ",];

var helptextMusic = ["Action | Command : example /notes on command",
"the bot is intergrated with youtube. video and livstream support. youtube livestreams are supported and work but arent perfect",
" ",
//"Lists already downloaded music | jbe-listmusic", //cant do that discord text limit
"youtube playlists wont get more than 50 of the playlists videos. youtube wont allow more, if you want longer playlists you can create and use those using the bots playlist commands",
" ",
"plays or ques music | jbe-play name of song or link : jbe-play Nightcore Spooky Scary Skeletons /can play live /can play youtube playlists",
"plays music imidiatly | jbe-playnow name of song or link : jbe-playnow Nightcore Spooky Scary Skeletons /can play live /can play youtube playlists",
"stops current song, clears queue and leaves | jbe-stop",
"toggles music looping for the whole queue | jbe-loop /if looping is on the current song will be added to end of queue",
"toggles music looping for the current song | jbe-loopcurr /if loopingcurr is on the current song will be looped",
" ",
"queues music | jbe-que name of song : jbe-que Nightcore Spooky Scary Skeletons",
"shows queue | jbe-showque",
"clears queue | jbe-clearque",
"starts the queue | jbe-startque /can also be used to skip",
"skips the current song | jbe-skip /can also be used to start the queue",
" ",
"downloads music | jbe-download name of song or link : jbe-download Nightcore Spooky scary skeletons /can download youtube playlists /have patience as the bot has to download convert then upload the file",
" ",
"to see info on playlists type jbe-help playlists",
" ",];

var helptextMusicPlaylists = ["Action | Command : example /notes on command",
"Below you will find commands related to playlists. an example: jbe-lists",
"thing about lists is that you can have youre own, and so can your guild",
"to save as your own, simply use the commads as their written out example jbe-lists",
"however if you want to see all the playlists in the server do this: jbe-Glists",
"this also works with all other list commands example: jbe-Glistplay BestSongs",
"currently nobody can see your lists, however any server member can see the servers lists",
"a feature to share lists with others or servers is planned",
" ",
"note that lists are case insensetive, say i saved a list as Nightcore,",
"the list Nightcore can be played without capital letters jbe-listplay nightcore",
" ",
"the make playlist commands replace any existing playlists when used.",
" ",
"plays music in playlist queues if already playing | jbe-listplay name of list : jbe-listplay FavSongs",
"plays music in playlist | jbe-listplaynow name of list : jbe-listplay FavSongs / this clears the playlist ",
"queues music in playlist | jbe-listque name of list : jbe-listque Best Music",
" ",
"lists your saved playlists | jbe-lists",
"lists content of playlist | jbe-listshow name of list : jbe-listshow mylist ",
"saves the queue as a playlist | jbe-listFromQue name of list : jbe-listFromQue new best list",
"deletes your playlist | jbe-listdelete name of list : jbe-listdelete bad music",
" ",];

var helptextUpdates = ["Action | Command : example /notes on command",
"All changes made to JIFBOT Eperimental, and pushed to other bots eavry sunday unless too unstable",
//"when a bot is updated all the bots saved music is deleted as some might be corrupted",
"date system | day.month.year all in numbers : example 4.18.2017",
"version system | all:self/module¨subModule¨subModule/module/module¨subModule : example jmb-0.0.1 / module based JIFBOT wuld contain JIFBOTS JIFBOT JIFMUSICBOT osv",
"all versions are prefixed with the apropriate prefix : Example jb-0.0.1",
" ",
"commands related to updates are on the way",
//"shows latest update | jbe-update",
//"shows update by week | jbe-update week number : jbe-update 4",
//"shows update week numbers first to last | jbe-updateWeeks",
" ",];
//help messages end
//****//****//****//****//****//****//****//****//****//****//****//
//channel presets
var g = "general";
//channel presets end
//****//****//****//****//****//****//****//****//****//****//****//
//var end
//****//****//****//****//****//****//****//****//****//****//****//****//
//function callers
//****//****//****//****//****//****//****//****//****//****//****//
//loops
var fps30 = sec/30;
var fps60 = sec/60;
var sec = 1000;
var min = sec*60;
var hour = min*60;
setInterval(function(){checkFolders()},1*hour );

//loops
//****//****//****//****//****//****//****//****//****//****//****//
//message create
client.Dispatcher.on("MESSAGE_CREATE", (e) => {
  dms = client.DirectMessageChannels;
  glds = client.Guilds;
  conectedClientsVoice = client.VoiceConnections;
  author = e.message.author;
  message = e.message;
  if(author.id = client.id){
 botMessagLast = message;
};
  content = e.message.content;
  contentLC = e.message.content.toLowerCase();
  channel = e.message.channel;
  guild = e.message.channel.guild;
  var ckprefix = prefix.indexOf(content.toLowerCase().slice(0,3));
  fprefix = prefix[ckprefix];
  //console.log("prefix: "+prefix);
  //console.log("ckprefix: "+ckprefix);
  //console.log("fprefix: "+fprefix);
  voiceChannel = e.message.author.getVoiceChannel(guild);
  if(e.message.channel.guild){
  voiceChannels = e.message.channel.guild.voiceChannels;
}else{
  //console.log("cant find e.message.channel.guild.voiceChannels");
};
if(guilds.indexOf(guild) >= 0){
  //console.log("guild already in list");
}else{
  guilds.push(guild);
};
if (content.indexOf(fprefix+"-") == 0){
  authorf = e.message.author;
  messagef = e.message;
  contentf = e.message.content;
  channelf = e.message.channel;
  guildf = e.message.channel.guild;
  voicechannelf = e.message.author.getVoiceChannel(guild);
  if(e.message.channel.guild){
  if(e.message.channel.guild.voiceChannels){
  voiceChannelsf = e.message.channel.guild.voiceChannels;
}else{
  if(guildf.voiceChannels){
  voiceChannelsf = guildf.voiceChannels;
};
}; //}else{
}; //if(e.message.channel.guild){
};
if(guilds.indexOf(guild) >= 0){
  //console.log("guild already in list");
}else{
  guilds.push(guild);
};
if(!ChnnlMessags[channel]){
  //console.log("channel not found in ChnnlMessags");
  ChnnlMessags[channel] = new Array(channel)
  ChnnlMessags[channel].push(message);
}else{
  //console.log("channel found in ChnnlMessags");
  if(!ChnnlMessags[channel][keptChnlMessags]){
    //console.log("ChnnlMessags not full");
    ChnnlMessags[channel].push(message);
  }else{
    //console.log("ChnnlMessags full");
    trash = ChnnlMessags[channel].shift();
    ChnnlMessags[channel].push(message);
  }
  //console.log(ChnnlMessags[channel]);
}
if(author.bot !== true){ //bot prevention
if(bannedIds.indexOf(author.id) === -1){
//****//****//****//****//****//****//****//****//****//****//
//if(permissionRoles[guild.id]
var allowed = true;
if(contentLC.indexOf(fprefix) !== -1){
if(permissionRole[guild.id]){
allowed = false;
console.log("author.memberOf(guild).roles: "+author.memberOf(guild).roles);
console.log("permissionRole[guild.id]: "+permissionRole[guild.id]);
var whil = 0;
while(author.memberOf(guild).roles.length > whil){
var rol = author.memberOf(guild).roles[whil];
console.log("rol: "+rol);
console.log("rol.id: "+rol.id);
console.log("permissionRole[guild.id]: "+permissionRole[guild.id]);
console.log("permissionRole[guild.id].id: "+permissionRole[guild.id].id);
if(rol.id == permissionRole[guild.id]){
allowed = true;
};
whil++;
};
};
}; //if command
if(allowed === true){
//general
if (contentLC == fprefix+"-link" || contentLC == fprefix+"-invite") { sndMessag(message,otherTextLink); };

if (contentLC == fprefix+"-help") { help(message,helptext) };
if (contentLC == fprefix+"-help update") { help(message,helptextUpdates) };
if (contentLC == fprefix+"-help updates") { help(message,helptextUpdates) };
if (contentLC.indexOf(fprefix+"-messagedev") == 0) { messagedev(message) };
if (contentLC.indexOf(fprefix+"-messagedevanonym") == 0) { messageDevAnonym(message) };

if (contentLC == fprefix+"-join") { join(message) };
if (contentLC.indexOf(fprefix+"-joinchannel") == 0) { joinChannel(message)};
if (contentLC == fprefix+"-jg") { joinPreset(message,g) };
if (contentLC == fprefix+"-jcl") { joinPreset(message,cl) };
if (contentLC == fprefix+"-jcf") { joinPreset(message,cf) };

if (contentLC == fprefix+"-leave") { leave(message) };
if (contentLC == fprefix+"-leaveme") { leaveMe(message) };
if (contentLC == fprefix+"-leavechannel") { leaveChannel(message) };
//general
//****//****//****//****//****//****//****//****//****//****//
//permissions
if (contentLC.indexOf(fprefix+"-addrole") == 0) {
var rplcdCntnt = content.replace("-addrole ","-addrole");
var rol = rplcdCntnt.slice(fprefix.length+"-playnow".length);
if(rol.length > 0){
addRole(message,rol);
}else{sndMessag(message,"command works like this"+fprefix+"-addrole nameOfRole")};
};
//permissions end
//****//****//****//****//****//****//****//****//****//****//
//music
if (contentLC == fprefix+"-help music") { help(message,helptextMusic) };
if (contentLC == fprefix+"-help playlists") { help(message,helptextMusicPlaylists) };
if (contentLC == fprefix+"-listmusic") { listmusic(message) };

//if (content.indexOf(fprefix+"-oldplay") == 0) { play(message,false,content.slice(fprefix.length+"-oldplay ".length))};
if (contentLC.indexOf(fprefix+"-playnow") == 0) {
var tostream = new Object;
var rplcdCntnt = content.replace("-playnow ","-playnow");
var lnk = rplcdCntnt.slice(fprefix.length+"-playnow".length);
tostream.link = lnk;
tostream.name = lnk;
tostream.user = author;
if(tostream.link.length > 0){
stream(message,tostream,0,true);
};
}else{
if (contentLC.indexOf(fprefix+"-play") == 0) {
var tostream = new Object;
var rplcdCntnt = content.replace("-play ","-play");
var lnk = rplcdCntnt.slice(fprefix.length+"-play".length);
tostream.link = lnk;
tostream.name = lnk;
tostream.user = author;
if(tostream.link.length > 0){
stream(message,tostream);
};
};
}; //playnow else end
//if (contentLC == fprefix+"-stop") {play(message,true)};
if (contentLC == fprefix+"-stop") {stream(message,new Object,0,true,"stop")};
if (contentLC == fprefix+"-loopcurr") {loop(message)};
if (contentLC == fprefix+"-loop") {loopque(message)};
if (contentLC.indexOf(fprefix+"-download") == 0) {
var tostream = new Object;
var rplcdCntnt = content.replace("-download ","-download");
var lnk = rplcdCntnt.slice(fprefix.length+"-download".length);
tostream.link = lnk;
tostream.name = lnk;
tostream.user = author;
if(tostream.link.length > 0){
download(message,tostream);
};
};
if (contentLC.indexOf(fprefix+"-que") == 0) {
var tostream = new Object;
var rplcdCntnt = content.replace("-que ","-que");
var lnk = rplcdCntnt.slice(fprefix.length+"-que".length);
tostream.link = lnk;
tostream.name = lnk;
tostream.user = author;
if(tostream.link.length > 0){
que(message,tostream);
};
};
if (contentLC.indexOf(fprefix+"-showque") == 0) {showque(message,queue[guild.id],content.slice(fprefix.length+"-showque ".length),true)};
if (contentLC == fprefix+"-clearque") {clearque(message)};
if (contentLC == fprefix+"-startque") {startque(message)};
if (contentLC == fprefix+"-skip") {startque(message)};
if (contentLC == fprefix+"-shuffle") {queueShuffle(message)};
if (contentLC == fprefix+"-next") {next(message)};

if (contentLC.indexOf(fprefix+"-listplaynow") == 0) { listplay(message,content.slice(fprefix.length+"-listplaynow ".length),"personal",true,true)}else{
if (contentLC.indexOf(fprefix+"-listplay") == 0) { listplay(message,content.slice(fprefix.length+"-listplay ".length),"personal",false,true)};
}; //listplaynow end
if (contentLC.indexOf(fprefix+"-glistplaynow") == 0) { listplay(message,content.slice(fprefix.length+"-Glistplaynow ".length),"guild",true,true)}else{
if (contentLC.indexOf(fprefix+"-glistplay") == 0) { listplay(message,content.slice(fprefix.length+"-Glistplay ".length),"guild",false,true)};
}; //glistplay now
if (contentLC.indexOf(fprefix+"-listque") == 0) { listque(message,content.slice(fprefix.length+"-listque ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistque") == 0) { listque(message,content.slice(fprefix.length+"-Glistque ".length),"guild")};

if (contentLC == fprefix+"-lists") {lists(message,"personal")};
if (contentLC == fprefix+"-glists") {lists(message,"guild")};
if (contentLC.indexOf(fprefix+"-listshow") == 0) { listshow(message,content.slice(fprefix.length+"-listshow ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistshow") == 0) { listshow(message,content.slice(fprefix.length+"-glistshow ".length),"guild")};
if (contentLC.indexOf(fprefix+"-listfromque") == 0) { listFromQue(message,content.slice(fprefix.length+"-listFromQue ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistfromque") == 0) { listFromQue(message,content.slice(fprefix.length+"-GlistFromQue ".length),"guild")};
if (contentLC.indexOf(fprefix+"-listmake") == 0) { listmake(message,content.slice(fprefix.length+"-listmake ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistmake") == 0) { listmake(message,content.slice(fprefix.length+"-Glistmake ".length),"guild")};
if (contentLC.indexOf(fprefix+"-listdelete") == 0) { listdelete(message,content.slice(fprefix.length+"-listdelete ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistdelete") == 0) { listdelete(message,content.slice(fprefix.length+"-Glistdelete ".length),"guild")};

if (contentLC.indexOf(fprefix+"-analyzeque") == 0) { analyzeQueue(message,queue[message.channel.guild.id]).then(sndMessag("done"))};
//music end
//****//****//****//****//****//****//****//****//****//****//
//utility
if (contentLC == fprefix+"-mp3TOmp4") {mp3TOmp4(message) };
//utility end
//****//****//****//****//****//****//****//****//****//****//
//debug
if(programmersId.indexOf(author.id) !== -1){
if (contentLC == fprefix+"-crash") {crash() };
if (contentLC == fprefix+"-checkfolders") {checkFolders() };
if (contentLC.indexOf(fprefix+"-messagusers") == 0) { messagusers(message,content.slice(fprefix.length+"-messagusers ".length))};
if (contentLC.indexOf(fprefix+"-messaguser") == 0) { messaguser(message,content.slice(fprefix.length+"-messaguser ".length))};
if (contentLC.indexOf(fprefix+"-listdownload") == 0) { listdownload(message,content.slice(fprefix.length+"-listdownload ".length),"personal")};
if (contentLC.indexOf(fprefix+"-glistdownload") == 0) { listdownload(message,content.slice(fprefix.length+"-Glistdownload ".length),"guild")};
if (contentLC.indexOf(fprefix+"-vdownload") == 0) { download(message,content.slice(fprefix.length+"-Vdownload ".length),content.slice(fprefix.length+"-Vdownload ".length),true,"video")};
if (contentLC.indexOf(fprefix+"-getinfoyoutube") == 0) { getInfoYoutube(message,content.slice(fprefix.length+"-getInfoYoutube ".length),"url")};
};
//debug end
//****//****//****//****//****//****//****//****//****//****//
}else{sndMessag(message,"to use JIFBOT in this server you need a special role")}; //allowed else end
}; //banned end
}; //bot prevention end
}); //MESSAGE_CREATE END
//****//****//****//****//****//****//****//****//****//****//****//
//message create
client.Dispatcher.on("MESSAGE_REACTION_ADD", (e) => {
  dms = client.DirectMessageChannels;
  glds = client.Guilds;
  conectedClientsVoice = client.VoiceConnections;
if(e.message){
  author = e.message.author;
  message = e.message;
  if(author.id = client.id){
 botMessagLast = message;
};
  content = e.message.content;
  contentLC = e.message.content.toLowerCase();
  channel = e.message.channel;
  guild = e.message.channel.guild;
  var ckprefix = prefix.indexOf(content.slice(0,3));
  fprefix = prefix[ckprefix];
  //console.log("prefix: "+prefix);
  //console.log("ckprefix: "+ckprefix);
  //console.log("fprefix: "+fprefix);
  voiceChannel = e.message.author.getVoiceChannel(guild);
  if(e.message.channel.guild){
  voiceChannels = e.message.channel.guild.voiceChannels;
}else{
  //console.log("cant find e.message.channel.guild.voiceChannels");
};
if(guilds.indexOf(guild) >= 0){
  //console.log("guild already in list");
}else{
  guilds.push(guild);
};
if (content.indexOf(fprefix+"-") == 0){
  authorf = e.message.author;
  messagef = e.message;
  contentf = e.message.content;
  channelf = e.message.channel;
  guildf = e.message.channel.guild;
  voicechannelf = e.message.author.getVoiceChannel(guild);
  if(e.message.channel.guild){
  if(e.message.channel.guild.voiceChannels){
  voiceChannelsf = e.message.channel.guild.voiceChannels;
}else{
  if(guildf.voiceChannels){
  voiceChannelsf = guildf.voiceChannels;
};
}; //}else{
}; //if(e.message.channel.guild){
};
if(guilds.indexOf(guild) >= 0){
  //console.log("guild already in list");
}else{
  guilds.push(guild);
};
if(!ChnnlMessags[channel]){
  //console.log("channel not found in ChnnlMessags");
  ChnnlMessags[channel] = new Array(channel)
  ChnnlMessags[channel].push(message);
}else{
  //console.log("channel found in ChnnlMessags");
  if(!ChnnlMessags[channel][keptChnlMessags]){
    //console.log("ChnnlMessags not full");
    ChnnlMessags[channel].push(message);
  }else{
    //console.log("ChnnlMessags full");
    trash = ChnnlMessags[channel].shift();
    ChnnlMessags[channel].push(message);
  }
  //console.log(ChnnlMessags[channel]);
}
if(e.user.bot !== true){
if(bannedIds.indexOf(author.id) === -1){
var colr;
if(e.user.memberOf(guild).roles[0]){
if(!colr){colr = e.user.memberOf(guild).roles[0].color};
}else{
if(client.User.memberOf(guild).roles[0]){
if(!colr){colr = client.User.memberOf(guild).roles[0].color};
}else{
if(!colr){colr = 5900509};
};
};
console.log("DEBUG e-react add l-var colr: "+colr);
//var colrSliced = parseInt(colr.toString().slice(2));
//console.log("DEBUG e-react add l-var colrSliced: "+colrSliced);
if(contentLC.indexOf(fprefix+"-showque") == 0) {
e.message.removeReaction(e.emoji,e.user); //fancy react remove
var maxPag = parseInt(content.slice(content.indexOf("/",content.indexOf("page:")+5)+1));
var oldPag = parseInt(content.slice(content.indexOf("page:")+5,content.indexOf("/",content.indexOf("page:")+5)));
console.log("DEBUG e-react add l-var maxPag: "+maxPag);
console.log("DEBUG e-react add l-var oldPag: "+oldPag);
console.log("DEBUG e-react add l-var JSON e.emoji: "+JSON.stringify(e.emoji));
if(e.emoji.name == "⬇" && maxPag > oldPag){
showque(message,queue[guild.id],oldPag+1,true,message.content.slice(0,message.content.indexOf("showque")+7),colr);
};
if(e.emoji.name == "⬆" && oldPag > 1){
showque(message,queue[guild.id],oldPag-1,true,message.content.slice(0,message.content.indexOf("showque")+7),colr);
};
if(e.emoji.name == "➡" && maxPag > oldPag+9){
showque(message,queue[guild.id],oldPag+10,true,message.content.slice(0,message.content.indexOf("showque")+7),colr);
};
if(e.emoji.name == "⬅" && oldPag > 10){
showque(message,queue[guild.id],oldPag-10,true,message.content.slice(0,message.content.indexOf("showque")+7),colr);
};
};

if(contentLC.indexOf(fprefix+"-listshow") == 0) {
e.message.removeReaction(e.emoji,e.user); //fancy react remove
var maxPag = parseInt(content.slice(content.indexOf("/",content.indexOf("page:")+5)+1));
var oldPag = parseInt(content.slice(content.indexOf("page:")+5,content.indexOf("/",content.indexOf("page:")+5)));
console.log("DEBUG e-react add l-var maxPag: "+maxPag);
console.log("DEBUG e-react add l-var oldPag: "+oldPag);
console.log("DEBUG e-react add l-var JSON e.emoji: "+JSON.stringify(e.emoji));
var listNam = content.slice(content.indexOf("listshow")+9,content.indexOf("page:")-1);
console.log("DEBUG e-react add l-var listNam: "+listNam);
if(e.emoji.name == "⬇" && maxPag > oldPag){
listshow(message,listNam,"personal",oldPag+1,colr,e.user);
};
if(e.emoji.name == "⬆" && oldPag > 1){
listshow(message,listNam,"personal",oldPag-1,colr,e.user);
};
if(e.emoji.name == "➡" && maxPag > oldPag+9){
listshow(message,listNam,"personal",oldPag+10,colr,e.user);
};
if(e.emoji.name == "⬅" && oldPag > 10){
listshow(message,listNam,"personal",oldPag-10,colr,e.user);
};
};
if(contentLC.indexOf(fprefix+"-glistshow") == 0) {
e.message.removeReaction(e.emoji,e.user); //fancy react remove
var maxPag = parseInt(content.slice(content.indexOf("/",content.indexOf("page:")+5)+1));
var oldPag = parseInt(content.slice(content.indexOf("page:")+5,content.indexOf("/",content.indexOf("page:")+5)));
console.log("DEBUG e-react add l-var maxPag: "+maxPag);
console.log("DEBUG e-react add l-var oldPag: "+oldPag);
console.log("DEBUG e-react add l-var JSON e.emoji: "+JSON.stringify(e.emoji));
var listNam = content.slice(content.indexOf("listshow")+9,content.indexOf("page:")-1);
console.log("DEBUG e-react add l-var listNam: "+listNam);
if(e.emoji.name == "⬇" && maxPag > oldPag){
listshow(message,listNam,"guild",oldPag+1,colr,e.user);
};
if(e.emoji.name == "⬆" && oldPag > 1){
listshow(message,listNam,"guild",oldPag-1,colr,e.user);
};
if(e.emoji.name == "➡" && maxPag > oldPag+9){
listshow(message,listNam,"guild",oldPag+10,colr,e.user);
};
if(e.emoji.name == "⬅" && oldPag > 10){
listshow(message,listNam,"guild",oldPag-10,colr,e.user);
};
};

}; //bannedIds
}; //bot ! true
}; //if e.message
});
//****//****//****//****//****//****//****//****//****//****//****//
//function callers end
//****//****//****//****//****//****//****//****//****//****//****//****//
//functions
//****//****//****//****//****//****//****//****//****//****//****//
//round
function round (numb,places) {
if(!places){places = 1};
var decimalPlaces = Math.pow(10,places);
return Math.round(numb*decimalPlaces)/decimalPlaces;
};
//round end
//****//****//****//****//****//****//****//****//****//****//****//
//gldInf
function gldInf (fmsg,type) {
if(!type){return("err")};
if(type){
//fmsg.channel.guild.members[client.User]
var gld = fmsg.channel.guild;
var gldClint = client.User.memberOf(gld);
if(type === "roles"){
return(gldClient.roles);
}; //roles end
}; //if type
};
//gldInf end
//****//****//****//****//****//****//****//****//****//****//****//
//addRole
function addRole (fmsg,role) {
if(!fmsg){fmsg = message};
console.log("!!addRole called!!");
var rol;

whil = 0;
while(fmsg.guild.roles.length > whil){
whilRol = fmsg.guild.roles[whil];
console.log("whilRol.name: "+whilRol.name);
//console.log("JSON.stringify(fmsg.guild.roles): "+JSON.stringify(fmsg.guild.roles));
console.log("fmsg.guild.roles[whil]: "+fmsg.guild.roles[whil]);
if(whilRol.name.toLowerCase() === role){
var rol = whilRol;
};
whil++;
};
if(rol){
permissionRole[fmsg.guild.id] = rol;
sndMessag(fmsg,"added role: "+rol.name);
}else{sndMessag(fmsg,"cant find role: "+role)};
};
//addRole end
//****//****//****//****//****//****//****//****//****//****//****//
//sndMessag
function sndMessag (fmsg,msg,keep,split){
  if(!fmsg){fmsg = message};
  if(!split){split = false};
  console.log("!!sndMessag called!!");
var fncChannlMessag = ChnnlMessags[fmsg.channel];
if(keep == true){keeps[fmsg.channel] = true};
if(split != false){
msg = msg.replace(/,/g,"\n")
};
if(keeps[fmsg.channel] == true){
  fmsg.channel.sendMessage(msg).then( resolved => {
  }, rejected => {
    fmsg.channel.sendMessage("message too long for discord. uploading file instead");
    try{
      var rs = new readable;
      //var buf = Buffer.from(msg.toString(), "utf8");
      rs.push(msg.toString());
      rs.push(null);
      fmsg.channel.uploadFile(rs,"music.txt")
    }
    catch (e){
      fmsg.channel.sendMessage("could not upload file. apologies")
      console.log("ERROR f-sndMessag l-uploadfile e: "+e);
    };
  });
}else{
if(fncChannlMessag){
if(fncChannlMessag[keptChnlMessags]){
  var latestChnlMessag = fncChannlMessag[keptChnlMessags];
  //console.log("latestChnlMessag "+latestChnlMessag);
  if(latestChnlMessag.author.id == client.User.id){
   latestChnlMessag.edit(msg).then( resolved => {
   }, rejected => {
     latestChnlMessag.edit("message too long for discord. uploading file instead");
     try{
       var rs = new readable;
       rs.push(msg.toString());
       rs.push(null);
       fmsg.channel.uploadFile(rs,"message.txt")
     }
     catch (e){
       fmsg.channel.sendMessage("could not upload file. apologies")
       console.log("ERROR f-sndMessag l-uploadfile e: "+e);
     };
   });
 } else{
   //console.log("latestChnlMessag.author.id "+latestChnlMessag.author.id);
      //console.log("client.User.id "+client.User.id);
     fmsg.channel.sendMessage(msg).then( resolved => {
     }, rejected => {
       fmsg.channel.sendMessage("message too long for discord. uploading file instead");
       try{
         var rs = new readable;
         rs.push(msg.toString());
         rs.push(null);
         fmsg.channel.uploadFile(rs,"message.txt")
       }
       catch (e){
         fmsg.channel.sendMessage("could not upload file. apologies")
         console.log("ERROR f-sndMessag l-uploadfile e: "+e);
       };
     });
 };
}else{
  if(fncChannlMessag[0]){
    var OldestChnlMessag = fncChannlMessag[0];
    //console.log("OldestChnlMessag "+OldestChnlMessag);
    if(OldestChnlMessag.author.id == client.User.id){
       OldestChnlMessag.edit(msg).then( resolved => {
       }, rejected => {
         OldestChnlMessag.edit("message too long for discord. uploading file instead");
         try{
           var rs = new readable;
           rs.push(msg.toString());
           rs.push(null);
           fmsg.channel.uploadFile(rs,"message.txt")
         }
         catch (e){
           fmsg.channel.sendMessage("could not upload file. apologies")
           console.log("ERROR f-sndMessag l-uploadfile e: "+e);
         };
       });
   } else{
          fmsg.channel.sendMessage(msg).then( resolved => {
          }, rejected => {
            fmsg.channel.sendMessage("message too long for discord. uploading file instead");
            try{
              var rs = new readable;
              rs.push(msg.toString());
              rs.push(null);
              fmsg.channel.uploadFile(rs,"message.txt")
            }
            catch (e){
              fmsg.channel.sendMessage("could not upload file. apologies")
              console.log("ERROR f-sndMessag l-uploadfile e: "+e);
            };
          });
      };
  }else{
    fmsg.channel.sendMessage(msg).then( resolved => {
    }, rejected => {
      fmsg.channel.sendMessage("message too long for discord. uploading file instead");
      try{
        var rs = new readable;
        rs.push(msg.toString());
        rs.push(null);
        fmsg.channel.uploadFile(rs,"message.txt")
      }
      catch (e){
        fmsg.channel.sendMessage("could not upload file. apologies")
        console.log("ERROR f-sndMessag l-uploadfile e: "+e);
      };
    });
  };
};
}; //if(fncChannlMessag)
}; //keeps != true
if(keep != true){keeps[fmsg.channel] = false};
};
//sndMessag end
//****//****//****//****//****//****//****//****//****//****//****//
//editMessag
function editMessag (fmsg,tEdit,msg) {
if(!fmsg){fmsg = message};
console.log("!!editMessag called!!");
if(tEdit){
var edt = tEdit.edit(msg);
edt.catch(function(err){
console.log("f-editMessag l-edit.catch err: "+err);
sndMessag(fmsg,msg);
resolve(console.log("error"));
}); //catch end
edt.then(function(sucess){
resolve(console.log("sucess"));
}); //then end
}; //if tEdit end
}; //editMessag end
//editMessag
//****//****//****//****//****//****//****//****//****//****//****//
//sndEmbed
function sndEmbed (fmsg,titl,embd){
if(!fmsg){fmsg = message};
console.log("!!sndEmbed called!!");
if(fmsg.author.memberOf(fmsg.channel.guild).roles[0]){
if(!embd.color){embd.color = fmsg.author.memberOf(fmsg.channel.guild).roles[0].color};
}else{
if(client.User.memberOf(fmsg.channel.guild).roles[0]){
if(!embd.color){embd.color = client.User.memberOf(fmsg.channel.guild).roles[0].color};
}else{
if(!embd.color){embd.color = 5900509};
};
};
console.log("DEBUG f-sndEmbed l-var embd.color: "+embd.color);
return new Promise((accep,rejec) => {
var snt = fmsg.channel.sendMessage(titl,false,embd);
snt.catch(function(err){
console.log("ERROR f-sndEmbed l-sendMessage.catch err: "+err);
sndMessag(fmsg,"failed to send message");
rejec(console.log("ERROR f-sndEmbed l-rejec"));
});
snt.then(function(msg){
accep(msg)});
});
};
//sndEmbed end
//****//****//****//****//****//****//****//****//****//****//****//
//edtEmbed
function edtEmbed (fmsg,titl,embd,edit,snd,color){
if(!fmsg){fmsg = message};
if(!edit){edit = fmsg.channel.messages[fmsg.channel.messages.length-1]};
if(!snd){snd = true};
console.log("!!edtEmbed called!!");
if(!color){
if(fmsg.author.memberOf(fmsg.channel.guild).roles[0]){
if(!embd.color){embd.color = fmsg.author.memberOf(fmsg.channel.guild).roles[0].color};
}else{
if(client.User.memberOf(fmsg.channel.guild).roles[0]){
if(!embd.color){embd.color = client.User.memberOf(fmsg.channel.guild).roles[0].color};
}else{
if(!embd.color){embd.color = 5900509};
};
};
};
if(color){embd.color = color};
console.log("DEBUG f-sndEmbed l-var embd.color: "+embd.color);
return new Promise((accep,rejec) => {
var edtd = edit.edit(titl,embd);
edtd.catch(function(err){
console.log("ERROR f-sndEmbed l-sendMessage.catch err: "+err);
if(snd === true){
var snt = sndEmbed(fmsg,titl,embd);
snt.catch(function(err){rejec(console.log("ERROR f-sndEmbed l-rejec err: "+err))});
snt.then(function(msg){accep(msg)});
};
if(snd !== true){
rejec(console.log("ERROR f-sndEmbed l-rejec"));
};
});
edtd.then(function(msg){
accep(msg)});
});
};
//edtEmbed end
//****//****//****//****//****//****//****//****//****//****//****//
//messageusers
function messagusers (fmsg,msg) {
  if(!fmsg){fmsg = message};
  console.log("!!messagusers called!!");
  //Guild method
  //console.log("guilds "+guilds);
//old method
 //guilds.forEach(geld => {
   //console.log("geld "+geld);
   //geld.textChannels[0].sendMessage(msg);
 //});
//old method end
//new method
var whil = 0;
while(client.Guilds.length > whil){
//if(client.Guilds.toArray()[whil]){
client.Guilds.toArray()[whil].channels[0].sendMessage(msg).catch(function(err){console.log("ERROR f-messagusers l-sendMessag err: "+err)});
//}else{console.log("ERROR f-messagusers no client.Guilds.toArray()[whil]")};
whil++;
};
//new method end
};
//messageusers end
//****//****//****//****//****//****//****//****//****//****//****//
//messageuser
function messaguser (fmsg,msg) {
  if(!fmsg){fmsg = message}; //usage guildid:userid|message
  console.log("!!messaguser called!!");
  console.log("messaguser "+"msg: "+msg);
  if(msg.indexOf("|") != -1){ //indexOf | exists
  var usr;
  var gueldId = msg.slice(0,msg.indexOf(":"));
    console.log("messaguser "+"gueldId: "+gueldId);
  var gueld = client.User.memberOf(gueldId).guild;
    console.log("messaguser "+"gueld: "+gueld);
  var idd = msg.slice(msg.indexOf(":")+1,msg.indexOf("|"));
    console.log("messaguser "+"idd: "+idd);
  var msgtosend = msg.slice(msg.indexOf("|")+1);
    console.log("messaguser "+"msgtosend: "+msgtosend);
  var gueldMembrs = gueld.members;
    console.log("messaguser "+"gueldMembrs: "+gueldMembrs);
  var whil = 0;
  while(gueldMembrs.length > whil){
    if(gueldMembrs[whil].id === idd){
      usr = gueldMembrs[whil];
      console.log("messaguser "+"usr: "+usr);
      try{
        usrDM = usr.openDM();
        usrDM.then((e) => {
        console.log("messaguser "+"usrDM: "+usrDM);
        e.sendMessage(msgtosend);
      });
        usrDM.catch((e) => {
          console.log("messaguser failed "+"error: "+e);
        });
      }catch(e){
        sndMessag("messaguser failed");
        console.log("messaguser failed error: "+e);
      }
      whil = gueldMembrs.length;
    };
    whil++;
  };
}; //indexOf | exists
 }
//messageuser end
//****//****//****//****//****//****//****//****//****//****//****//
//indexmusic
function indexmusic (fmsg) { //make it index by age Might not be possible
    //if(!fmsg){fmsg = message}; is triggered on startup thus cant have this
    console.log("!!indexmusic called!!");
 musicIndex = ["I have these songs"];
  var indexingfoldermp3 = "Music/mp3";
  fs.readdir(indexingfoldermp3, (err, mp3files) => {
    if(err){
     console.log("error "+err);
    }
    else{
    mp3files.forEach(mp3file => {
      console.log(mp3file);
      if(mp3file.indexOf(".mp3") > 0){
        musicIndex.push(mp3file.slice(0,-4));
      }else{
      musicIndex.push(mp3file)
    }
    });
  }
  })
  var indexingfolderDownloaded = "Music/downloaded";
  fs.readdir(indexingfolderDownloaded, (err, Downloadedfiles) => {
    if(err){
     console.log("error "+err);
    }
    else{
    Downloadedfiles.forEach(Downloadedfile => {
      console.log(Downloadedfile);
      if(Downloadedfile.indexOf(".mp3") > 0){
        musicIndex.push(Downloadedfile.slice(0,-4));
      }else{
      musicIndex.push(Downloadedfile)
    }
     });
   }
   })
   var indexingfolderconverted = "Music/converted";
fs.readdir(indexingfolderconverted, (err, convertedfiles) => {
  if(err){
   console.log("error "+err);
  }
  else{
  convertedfiles.forEach(convertedfile => {
    console.log(convertedfile);
    if(convertedfile.indexOf(".mp3") > 0){
      musicIndex.push(convertedfile.slice(0,-4));
    }else{
    musicIndex.push(convertedfile)
  }
   });
 }
 })
 limitmusic(fmsg);
}
//indexmusic end
//****//****//****//****//****//****//****//****//****//****//****//
//limitmusic
function limitmusic (fmsg) {
  if(!fmsg){fmsg = message};
  console.log("!!limitmusic called!!");
   var arrylenght = 0;
musicIndex.forEach(elmnt => {
  arrylenght++;
});
console.log(arrylenght-1);
   if(arrylenght-1 > musiclimit){

     fs.unlink(botFolderPath+"/Music/downloaded/"+musicIndex[1]+".mp3", function(error) {
   if(error) {
       return console.log("Error function limitmusic failed to remove file error message:"+error);
   }else{sndMessag(fmsg,"sucess")};
 });
arrylenght = 0;
 indexmusic(fmsg);
   }

 }
 //limitmusic end
//****//****//****//****//****//****//****//****//****//****//****//
//checkfolders
function checkFolders (fmsg,folders){ //crashes with no exit code node.js update requierd
  //if(!fmsg){fmsg = message};
  console.log("!!checkFolders called!!");
if(!folders){
folders = [0];
trash = folders.shift();
 //index[string | foldername,INT | maxfiles,INT | Files to remove,BOOL | check subfolders]
folders[0] = ["Music/downloaded",50,100,false];
folders[1] = ["Music/livestreams",50,100,false];
}; // !folders end
console.log("folders: "+folders);
console.log("folders.length: "+folders.length);
whil = 0;
while(folders.length > whil){
var folder = folders[whil];
if(folder){
console.log("folder: "+folder);
console.log("folder.length: "+folder.length);
fs.readdir(botFolderPath+"/"+folder[0], (err,files) => {
if(err){console.log("f-checkFolders l-readdir err: "+err)};
if(files){
console.log("files: "+files);
console.log("files.length: "+files.length);
var removed = 0;
whil2 = 0;
while(files.length > whil2){
if(files.length >= folder[1]){
if(folder[2] > removed){
if(folder[0] != undefined){
fs.unlink(botFolderPath+"/"+folder[0]+"/"+files[whil2],function(err) {
if(err){console.log("failed to unlink: "+botFolderPath+"/"+folder[0]+"/"+files[whil2]+": err: "+err)}
if(!err){
console.log("unlinked botFolderPath+/+folder[0]/files[whil2]: "+botFolderPath+"/"+folder[0]+"/"+files[whil2]);
//removed++; //removed no work here
}; //!err end
});
}; //foder[0] ! underfined end
}; //folder[2] > removed end
}; //files.length > folder[1] end
removed++; //assumes unliked sucedded
whil2++;
}; //whil2 end


}; //files end


});
}; //if folder end
whil++;
}; ///whil end

}; //checkfolders end
//checkfolders
//****//****//****//****//****//****//****//****//****//****//****//
//help
function help (fmsg,msg) {
  if(!fmsg){fmsg = message};
  console.log("!!help called!!");
if(!fmsg){fmsg = message};
sndMessag(fmsg,msg,true);
}
//help end
//****//****//****//****//****//****//****//****//****//****//****//
//messagedev
function messagedev (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!messagedev called!!");
  console.log("MESSAGE FOR DEV");
  console.log("from "+fmsg.author.username);
  console.log(fmsg.content.slice(fprefix.length+"-messagedev ", ""));
  console.log("MESSAGE FOR DEV END");
  if(fmsg.content == fprefix+"-messagedev"){
    var error = [
      "no message. try agein. the command works like this",
    fprefix+"-messagedev whatever you want to tell me"
  ];
  sndMessag(fmsg,error);
  }else{

  fs.readdir("Messages", (err, messags) => {
    if(err){
     console.log("error "+err);
    }
    else{
      var messagecount = 0;
    messags.forEach(messag => {
      //if(messag.indexOf(fmsg.author.username) == 0){
      if(messag.indexOf(fmsg.author.id) == 0){
     messagecount++;
   }
    });
   //fs.writeFile(botFolderPath+"/Messages/"+fmsg.author.id+" "+fmsg.author.id+" ("+messagecount+")"+".txt", contentf.replace(fprefix+"-messagedev ", ""), function(error) {
   fs.writeFile(botFolderPath+"/Messages/"+fmsg.author.id+" "+messagecount+".txt", contentf.replace(fprefix+"-messagedev ", "")+" | "+fmsg.guild.id, function(error) {
     if(error) {
         return console.log(error);
     }
     console.log("Saved message as file");
   });
 }
 });
 sndMessag(fmsg,"Sent dev basic user info and message: "+contentf.replace(fprefix+"-messagedev ", ""));
 }
}
//messagedev end
//****//****//****//****//****//****//****//****//****//****//****//
//messageDevAnonym
function messageDevAnonym (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!messageDevAnonym called!!");
  console.log("MESSAGE FOR DEV");
  console.log("author stays anonym");
  console.log(fmsg.content.slice(fprefix.length+"-messageDevAnonym ", ""));
  console.log("MESSAGE FOR DEV END");
  if(fmsg.content == fprefix+"-messageDevAnonym"){
    var error = [
      "no message. try agein. the command works like this",
    "jbe-messageDevAnonym whatever you want to tell me"
  ];
  sndMessag(fmsg,error);
  }else{

    fs.readdir("Messages", (err, messags) => {
      if(err){
       console.log("error "+err);
      }
      else{
        var messagecount = 0;
      messags.forEach(messag => {
        if(messag.indexOf("author.anonym") == 0){
       messagecount++;
     }
      });
   //fs.writeFile(botFolderPath+"/Messages/"+"author.anonym"+" ("+messagecount+")"+".txt", contentf.replace(fprefix+"-messageDevAnonym ", ""), function(error) {
   fs.writeFile(botFolderPath+"/Messages/"+"author.anonym"+" "+messagecount+".txt", contentf.replace(fprefix+"-messageDevAnonym ", ""), function(error) {
     if(error) {
         return console.log(error);
     }
     console.log("Saved message as file");
   });
 }
 });
 sndMessag(fmsg,"Sent dev message: "+contentf.replace(fprefix+"-messagedev ", ""));
 }
}
//messageDevAnonym end
//****//****//****//****//****//****//****//****//****//****//****//
//arrayShuffle
function arrayShuffle (fmsg,array) {
  if(!fmsg){fmsg = message};
  console.log("!!arrayShuffle called!!");
    var shuffledArray = [0];
    shuffledArray.shift(trash);
    var arraycount = array.length;
    for(arraycount; arraycount >=0; arraycount--){
      var randomized = Math.round(Math.random()*arraycount-1);
      console.log(randomized);
      var spliced = array.splice(randomized,1);
      console.log(spliced);
      if(spliced[0] != undefined){
       shuffledArray.push(spliced[0]);
     }else{console.log("arrayShuffle spliced[0] != undefined");};
    };
    return(shuffledArray);
};
//arrayShuffle end
//****//****//****//****//****//****//****//****//****//****//****//
//join
function join (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!join called!!");

return new Promise((accep,rejec) => {

if(fmsg.author.getVoiceChannel(fmsg.channel.guild) == null){
 sndMessag(fmsg,"You are not in a voice channel");
 rejec("error");
}

 if(fmsg.author.getVoiceChannel(fmsg.channel.guild) != null){
   fmsg.author.getVoiceChannel(fmsg.channel.guild).join()
.then(function(sucess) {
 accep(sucess.voiceConnection);
});

 }
});

}
//Join end
//****//****//****//****//****//****//****//****//****//****//****//
//joinChannel
function joinChannel(fmsg) {
if(!fmsg){fmsg = message};
console.log("!!joinChannel called!!");
var targetChannel = fmsg.content.replace("jbe-joinchannel", "");
if(!targetChannel){
fmsg.channel.sendMessage("What channel?");
}
else{
  // sndMessag(fmsg,targetChannel);
var vchannel = fmsg.channel.guild.voiceChannels.find(channel => fmsg.channel.name.toLowerCase(targetChannel));
 if (!vchannel){
  fmsg.channel.sendMessage("theres no sutch channel, remember lowercase only");
}
    else{
     vchannel.join();
}
}
}
//joinChannel end
//****//****//****//****//****//****//****//****//****//****//****//
//joinPreset
function joinPreset (fmsg,JPreset){
if(!fmsg){fmsg = message};
console.log("!!joinPreset called!!");
  var vchannel =
    fmsg.channel.guild.voiceChannels.find(channel => fmsg.channel.name.toLowerCase().indexOf(JPreset) >= 0);
    if (vchannel) vchannel.join();
}
//JoinPreset
//****//****//****//****//****//****//****//****//****//****//****//
//leave
function leave (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!leave called!!");
 fmsg.channel.guild.voiceChannels.forEach(voiceChannelsChannel =>{
   if(voiceChannelsChannel.guild.id == fmsg.channel.guild.id) {
  if(voiceChannelsChannel.joined){voiceChannelsChannel.leave()}
}
});
playing[fmsg.channel.guild.id] = false;
}
//leave end
//****//****//****//****//****//****//****//****//****//****//****//
//leaveme
function leaveMe (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!leaveMe called!!");
 if(fmsg.author.getVoiceChannel(guild) == null){
sndMessag(fmsg,"You are not in a voice channel");
}
 if(fmsg.author.getVoiceChannel(guild) != null){
  fmsg.author.getVoiceChannel(guild).leave()
}
playing[fmsg.channel.guild.id] = false;
}
//leaveme end
//****//****//****//****//****//****//****//****//****//****//****//
//leavechannel
function leaveChannel (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!leaveChannel called!!");
 var targetChannel = fmsg.content.replace("jbe-leavechannel", "");
  var vchannel = fmsg.channel.guild.voiceChannels.find(channel => fmsg.channel.name.toLowerCase().indexOf(targetChannel) >= 0);
   if (vchannel) vchannel.leave();
playing[fmsg.channel.guild.id] = false;
}
//leavechannel end
//****//****//****//****//****//****//****//****//****//****//****//
//findfile
function findFile (fmsg,file) {
if(!fmsg){fmsg = message};
console.log("!!findFile called!!");
 if (fs.existsSync("Music/converted/"+file)) {
  path = "Music/converted/"+file;
   return(path)
 }
 if (fs.existsSync("Music/downloaded/"+file)) {
  path = "Music/downloaded/"+file;
   return(path)
}
 if (fs.existsSync("Music/mp3/"+file)) {
  path = "Music/mp3/"+file
   return(path)
 }
 if (fs.existsSync("Music/mp4/"+file)) {
  path = "Music/mp4/"+file
   return(path)
 }
}
//findfile end
//****//****//****//****//****//****//****//****//****//****//****//
//gtvoiceconstrem
function GtVoicConStrem (fmsg){
if(!fmsg){fmsg = message};
console.log("!!GtVoicConStrem called!!");

var whil = 0;
console.log("conectedClientsVoice: "+conectedClientsVoice);
while(conectedClientsVoice.length > whil){
var connecton = conectedClientsVoice[whil];
  //console.log(fmsg.channel.guild.id);
    //console.log(connecton.voiceConnection.guildId);
      if(connecton.voiceConnection.guildId == guildf.id){
       //console.log(connecton);
          return(voiceconnectstream = connecton.voiceConnection);
           }


whil++;
};
};
//gtvoiceconstrem end
//****//****//****//****//****//****//****//****//****//****//****//
//strm
function strm (fmsg,sng,VoicConStrem,tries,useDirectLink){
if(!fmsg){fmsg = message};
console.log("!!strm called!!");
//console.log("DEBUG f-strm sng: "+JSON.stringify(sng));
//editMessag("Playing: "+sng.name);
//sndMessag(fmsg,"Playing: "+sng.name);
var lnk;
if(sng.directLink){lnk = sng.directLink};
if((!sng.directLink || tries > 0) && useDirectLink !== true){lnk = sng.link};
tries++;
var maxTries = 3;
return new Promise((accep,rejec) => {

if(VoicConStrem){
        var encoder = VoicConStrem.createExternalEncoder({
            type: "ffmpeg",
            // any source FFmpeg can read (http, rtmp, etc.) (FFmpeg option "-i");
            // (with "-" source pipe data into `encoder.stdin`)
            source: lnk,
            realtime: true,
            //source: "-",

            // "opus" or "pcm", in "opus" mode AudioEncoder.setVolume won"t work
            // - "opus" - encode audio using FFmpeg only and let node just stream opus
            // - "pcm" - request pcm data from FFmpeg and encode inside node.js
            format: "opus", // < default

            // "pcm" mode option
            //frameDuration: 60, // < default
            // optional array of additional arguments (applied to input stream)
            //inputArgs: ["-timeout","100000","-reconnect","1"],
            //inputArgs: [],
            //crf: 23, //quality handler curr defoult 0-51 51 is the worst
            //preset: "ultrafast",
            //preset: "veryfast",
            //preset: "fast",
            //maxrate: 200000, //video buffer internett rate in bytes
            //bufsize: 1000, //video buffer size
            //fifo_size: 1600000, //Linux option copies bufsize

            //g: 60, /group of picures, duble output framerate
            //atempo: 2.0, //desides audio speed min 0.5 max 2
            //setpts: 0.5*PTS //desides lenght of each frame lower = faster sacrefices quality
            // optional array of additional arguments (applied to output stream)
            // (this volume parameter is passed into FFmpeg and applied for both
            //  "pcm" and "opus" formats, but can"t be changed dynamically)
            //outputArgs: ["-af", "volume=1.00","-b:v 8k","-vn"],
            outputArgs: ["-af", "volume=1.00","-vn"],

            // optional, "true" redirects FFmpeg"s stderr into console
            //                  and starts with "-loglevel warning"
            debug: true
          });

//ytdl.downloadFromInfo(globytdlInfo, {format: bestaudio}).pipe(encoder.stdin);
var encoderStream = encoder.play();
                  playing[fmsg.channel.guild.id] = true;

            encoderStream.resetTimestamp();
            encoderStream.removeAllListeners("timestamp");
            var timstamp;
            encoderStream.on("timestamp", time => console.log(sng.name+" Time: " + time));
            encoderStream.on("timestamp", time => timstamp = time);

            encoder.once("end", () => console.log("stream end"));
            encoder.once("end", () => playing[fmsg.channel.guild.id] = false);
            encoder.on("end", function(err) {if(!timstamp){if(maxTries > tries){setTimeout( function(){stream(fmsg,sng,tries)},100)}}});
            //encoder.on("end", function(err) {if(!timstamp){if(tries >= maxTries){rejec(console.log("ERROR f-strm l-!timestamp"))}}});
            //encoder.on("end", function(err) {if(timstamp <= 1){rejec(console.log("ERROR f-strm l-!timestamp"))}});
            encoder.on("end", function(err) {if(!timstamp){if(tries >= maxTries){rejec(console.log("ERROR f-strm l-!timestamp"))}}});

            encoder.on("end", function(err) {if(timstamp <= 1){if(maxTries > tries){setTimeout( function(){stream(fmsg,sng,tries)},100)}}});
            encoder.on("end", function(err) {if(timstamp <= 1){if(tries >= maxTries){rejec(console.log("ERROR f-strm l-!timestamp"))}}});
            encoder.on("end", function(err) {if(timstamp > 1){moveon(fmsg,sng,true)}});

};
if(!VoicConStrem){
sendMessage("culdnt get voice connection try agein, if the problem persists, use the command messagDev to send a message to the dev so the issue can be resolved");
};
}); //promise end

};
//strm end
//****//****//****//****//****//****//****//****//****//****//****//
//strmlive
function strmLive (fmsg,sng,VoicConStrem){
if(!fmsg){fmsg = message};
console.log("!!strmLive called!!");
editMessag("Playing: "+sng.name);
//sndMessag(fmsg,"jifbot buffers livestreams a little before playing so it takes a few secound for the music to start");
var lnk;
if(sng.directLink){lnk = sng.directLink};
return new Promise((accep,rejec) => {

if(VoicConStrem){
  //encoderStream = VoicConStrem.getEncoderStream();

//ytdl.downloadFromInfo(sng.ytInfo, {format: sng.ytFormat}).pipe(encoder.stdin);
var datWritStrm = fs.createWriteStream("./Music/livestreams/"+fmsg.guild.id+".mp4");
//var end = true;
var maxTimes = 1;
//getData();
var times = 0;
//var getDataInt = setInterval(function(){getData()},3990);
var tim = new Date().toUTCString();
console.log("DEBUG f-strmLive l-var tim: "+tim);
playing[fmsg.channel.guild.id] = true;
getData();
//setTimeout(function(){getData(tim)},2000);
var lstDats = [0];
lstDats.shift();
function getData (tim){
if(!tim){tim = new Date().toUTCString()};
//VoicConStrem = GtVoicConStrem(fmsg);
if(VoicConStrem){
//if(end === true){
//end = false;
console.log("DEBUG f-strmLive sf-getData l-var tim: "+tim);
var lnkHost = lnk.slice(8,lnk.indexOf(".com/")+4);
console.log("DEBUG f-strmLive sf-getData l-var lnkHost: "+lnkHost);
var lnkFile = lnk.slice(lnk.indexOf(".com/")+4);
console.log("DEBUG f-strmLive sf-getData l-var lnkFile: "+lnkFile);
opt = {
hostname: lnkHost,
path: lnkFile,
method: "GET",
headers: {
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
"Accept-Encoding": "gzip,deflate,br",
"Accept-Language": "en,en-US;q=0.5",
"Cache-Control": "max-age=0",
"Connection": "keep-alive",
//"if-Modified-Since": tim,
"Upgrade-Insecure-Requests": 1
//"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0"
},
timeout: 1000
};
const req = https.request(opt, (fil) => {
console.log("DEBUG f-strmLive sf-getData l.https.get fil.statusCode: "+fil.statusCode);
console.log("DEBUG f-strmLive sf-getData l.https.get fil.headers: "+JSON.stringify(fil.headers));
var dats = [0];
dats.shift();
//var datCount = 0;
fil.on("data",(dat) => {
console.log("DEBUG f-strmLive sf-getData l.https.get fil.on data typeof dat: "+typeof dat);
tim = new Date().toUTCString();
dats.push(dat);
//datCount++;
//datWritStrm.write(dat);
}); //data end
fil.on("error",(err) => {
console.log("ERROR f-strmLive sf-getData l-http.get err err: "+err);
}); //error end
fil.on("end",() => {
console.log("DEBUG f-strmLive sf-getData l-http.get end");
//console.log("DEBUG f-strmLive sf-getData l-var datCount: "+datCount);
console.log("DEBUG f-strmLive sf-getData l-var dats.length: "+dats.length);
//if(datCount > 5){
//datWritStrm.write(dats);
//};
if(dats.length > 2){
//if(dats !== lstDats){
var whilSLGD = 0;
while(dats.length > whilSLGD){
//if(dats[whilSLGD] !== lstDats[whilSLGD]){
datWritStrm.write(dats[whilSLGD]);
//}; //!lstDats[whilSLGD]
whilSLGD++;
};
//}; //!lstDats
};
//datWritStrm.write(dats);
//end = true;
//getData(times+1);
//if(1000000 > times){
//getData(tim);
if(playing[fmsg.channel.guild.id] === true){
setTimeout(function(){getData(tim)},100);
};
//setTimeout(function(){getData(tim)},2000);
//};
if(times === 0){
setTimeout(function(){if(playing[fmsg.channel.guild.id] === true){ply()}},8000);
};
//req.end();
times++;
lstDats = dats;
}); //end end
//setTimeout(function(){req.end()},2000);
}); //https.request end
req.on("error", (err) => {
console.log("DEBUG f-strmLive sf-getData l-https.request error err: "+err);
//req.end();
});
req.end();
//setTimeout(function(){req.end()},1000);
//}; //end = true end
}; //if VoicConStrem end
}; //getData end
function ply (){
        var encoder = VoicConStrem.createExternalEncoder({
            type: "ffmpeg",
            // any source FFmpeg can read (http, rtmp, etc.) (FFmpeg option "-i");
            // (with "-" source pipe data into `encoder.stdin`)
            realtime: true,
            //source: lnk,
            source: botFolderPath+"/Music/livestreams/"+fmsg.guild.id+".mp4",
            //source: "-",

            // "opus" or "pcm", in "opus" mode AudioEncoder.setVolume won"t work
            // - "opus" - encode audio using FFmpeg only and let node just stream opus
            // - "pcm" - request pcm data from FFmpeg and encode inside node.js
            format: "opus", // < default

            // "pcm" mode options
            //frameDuration: 60, // default
            //frameDuration: 120,
            // "pcm" mode options end
            // optional array of additional arguments (applied to input stream)
            //inputArgs: ["-re","-multiple_requests","1","-seekable","0","-timeout","100000","-reconnect","1","-reconnect_delay_max","4000","-reconnect_streamed","1","-reconnect_at_eof","1"],
            //inputArgs: ["-multiple_requests","1","-seekable","0","-timeout","100000","-reconnect","1","-reconnect_delay_max","4000","-reconnect_streamed","1","-reconnect_at_eof","1"],
            //inputArgs: ["-re","-seekable","0","-reconnect_streamed","1"],
            inputArgs: ["-re"],
            //crf: 23, //quality handler curr defoult 0-51 51 is the worst
            //preset: "ultrafast",
            //preset: "veryfast",
            //preset: "fast",
            //maxrate: 200000, //video buffer internett rate in bytes
            //bufsize: 1000, //video buffer size
            //fifo_size: 1600000, //Linux option copies bufsize

            //g: 60, /group of picures, duble output framerate
            //atempo: 2.0, //desides audio speed min 0.5 max 2
            //setpts: 0.5*PTS //desides lenght of each frame lower = faster sacrefices quality
            // optional array of additional arguments (applied to output stream)
            // (this volume parameter is passed into FFmpeg and applied for both
            //  "pcm" and "opus" formats, but can"t be changed dynamically)
            //outputArgs: ["-af","-bufsize","10000""volume=1.00","-b:v 8k","-vn","-frames:a","30","-c:a","copy"],
            //outputArgs: ["-af","volume=1.00","-vn"],
            //outputArgs: ["-vn","-c:a","copy"],
            outputArgs: ["-vn","-filter:a","atempo=0.8"],

            // optional, "true" redirects FFmpeg"s stderr into console
            //                  and starts with "-loglevel warning"
            debug: true
          });
var encoderStream = encoder.play();

                  playing[fmsg.channel.guild.id] = true;

            encoderStream.resetTimestamp();
            encoderStream.removeAllListeners("timestamp");
            var timstamp;
            encoderStream.on("timestamp", time => console.log(sng.name+" Time: " + time));
            encoderStream.on("timestamp", time => timstamp = time);

            encoder.once("end", () => console.log("liveStream end"));
            encoder.once("end", () => playing[fmsg.channel.guild.id] = false);
            //encoder.on("end", function(err) {if(!timstamp){rejec(console.log("ERROR f-strm l-!timestamp"))}});
            //encoder.on("end", function(err) {if(timstamp <= 1){rejec(console.log("ERROR f-strm l-!timestamp"))}});
            //encoder.on("end", function(err) {if(timstamp > 1){moveon(fmsg,sng,true)}});
}; //ply end
};
if(!VoicConStrem){
sendMessage("culdnt get voice connection try agein, if the problem persists, use the command messagDev to send a message to the dev so the issue can be resolved");
};
}); //promise end

};
//strmlive end
//****//****//****//****//****//****//****//****//****//****//****//
//stream
function stream (fmsg,sng,tries,playnow,special) { //fix comatabliity width capitals letters in command prefix
if(!fmsg){fmsg = message};
if(!sng.name){sng.name = sng.link};
if(!tries){tries = 0};
if(!playnow){playnow = false};
if(!special){special = "non"};
console.log("!!stream called!!");
if(playing[fmsg.channel.guild.id] === true && playnow === false){
que(fmsg,sng);
}else{
if(special === "stop"){
sng.link =  "Music/BotStopFile.mp3"
sng.name =  "stop"
clearque(fmsg);
leave();
}
if(special != "stop"){
if(tries == 0){
//if(queue[fmsg.channel.guild.id].length > 0){
//showque(fmsg,queue[guild.id]);
//};
if(!queue[fmsg.channel.guild.id]){
sndMessag(fmsg,"Attempting to play: "+sng.name);
};
if(queue[fmsg.channel.guild.id]){
if(queue[fmsg.channel.guild.id].length < 2){
if(fmsg.channel.messages[fmsg.channel.messages.length-1].embeds.length > 0){
var tmbdTitle = "Attempting to play: "+sng.name;
var tmbd = new Object;
tmbd.title = "no more songs in queue, add some with the play or que command";
edtEmbed(fmsg,tmbdTitle,tmbd);
}else{
sndMessag(fmsg,"Attempting to play: "+sng.name);
};
};
};
if(queue[fmsg.channel.guild.id]){
if(queue[fmsg.channel.guild.id].length > 0){
var tmbdTitle = "Attempting to play: "+sng.name;
var tmbd = new Object;
tmbd.title = "next up";
tmbd.description = queue[fmsg.channel.guild.id][0].name;
if(queue[fmsg.channel.guild.id].length > 1){
tmbd.description = tmbd.description+"\r\n"+ queue[fmsg.channel.guild.id][1].name;
};
edtEmbed(fmsg,tmbdTitle,tmbd);
}; //queue[fmsg.channel.guild.id].length > 1
}; //queue[fmsg.channel.guild.id]
}; //tries 0
}; //special != "stop"
if(special != "stop"){
jn = join(fmsg);
jn.catch("failed to join channel");
jn.then(function(jnAccep){
VoicConStrem = GtVoicConStrem(fmsg);
//console.log("VoicConStrem: "+VoicConStrem);
if(VoicConStrem == undefined){VoicConStrem = jnAccep.voiceConnection};
//console.log("VoicConStrem: "+VoicConStrem);

console.log("DEBUG f-stream sng: "+JSON.stringify(sng));
sm = strm(fmsg,sng,VoicConStrem,tries);
sm.catch(function(smRejec){
console.log("ERROR f-stream l-sm-catch smRejec: "+smRejec);
if(!sng.ytLink){
var gIYLnk = sng.link;
console.log("DEBUG f-stream gIYLnk: "+gIYLnk);
var gIYIndx = 0;
if(sng.link.indexOf("&") !== -1){
gIYLnk = sng.link.slice(0,sng.link.indexOf("&"));
};
if(sng.link.indexOf("&list=") !== -1){
var indxIndx = sng.link.indexOf("&index=");
var indxList = sng.link.indexOf("&list=",indxIndx);
gIYLnk = sng.link.slice(indxList+6);
//console.log("DEBUG f-stream l-debug gIYIndxBeforeParseInt: "+sng.link.slice(indxIndx+7,indxList));
gIYIndx = parseInt(sng.link.slice(indxIndx+7,indxList))-1;
//gIYLnk = sng.link.slice(sng.link.indexOf("&list=")+6,sng.link.indexOf("&index="));
//gIYIndx = parseInt(sng.link.slice(sng.link.indexOf("&index=")+7))-1;
console.log("DEBUG f-stream l-sm.catch gIYLnk: "+gIYLnk);
console.log("DEBUG f-stream l-sm.catch gIYIndx: "+gIYIndx);
};
//var gIY = getInfoYoutube(fmsg,{"lnk":gIYLnk,"indx":gIYIndx});
var gIY = getInfoYoutube(fmsg,gIYLnk);
//url.catch(function(err){console.log("ERROR f-stream l-url.catch err: "+err)})
gIY.catch(function(err){moveon(fmsg,sng,false)});
gIY.then(function(sucessGIY) {
console.log("sucessGIY: "+JSON.stringify(sucessGIY));
console.log("sucessGIY.urls[0]: "+sucessGIY.urls[0]);
if(sucessGIY.urls.length > 1){
//if(!gIYIndx){sndMessag(fmsg,"this was a playlist, the first song will be played the rest will be put at the end of the queue")};
//if(gIYIndx){sndMessag(fmsg,"this was a playlist, the "++" song will be played the rest will be put at the end of the queue")};
sndMessag(fmsg,"this was a playlist, "+sucessGIY.titles[gIYIndx]+" will be played the rest will be put at the end of the queue")
};

console.log("sucessGIY.titles[0]: "+sucessGIY.titles[0]);
var whil = gIYIndx+1;
while(sucessGIY.urls.length > whil){
var toque = new Object;
toque.live = sucessGIY.lives[whil];
toque.name = sucessGIY.titles[whil];
toque.link = sucessGIY.urls[whil];
toque.ytLink = sucessGIY.urls[whil];
//toque.duration = sucessGIY.durations[whil];
que(fmsg,toque,false,false);
whil++;
}; //whil end
var whil = 0;
while(gIYIndx > whil){
var toque = new Object;
toque.live = sucessGIY.lives[whil];
toque.name = sucessGIY.titles[whil];
toque.link = sucessGIY.urls[whil];
toque.ytLink = sucessGIY.urls[whil];
//toque.duration = sucessGIY.durations[whil];
que(fmsg,toque,false,false);
whil++;
}; //whil end
sng.live = sucessGIY.lives[gIYIndx];
sng.name = sucessGIY.titles[gIYIndx];
sng.ytLink = sucessGIY.urls[gIYIndx];
//sng.duration = sucessGIY.durations[gIYIndx];
//var ytinf = ytInfo(fmsg,sng.ytLink,sng.live);
var ytinf = ytInfo(fmsg,sng.ytLink,false,[]);
//ytinf.catch(function(err){console.log("ERROR f-stream l-ytinf.catch err: "+err)});
ytinf.catch(function(err){moveon(fmsg,sng,false)});
ytinf.then(function(resultYtinf) {
console.log("ytinf: "+JSON.stringify(resultYtinf));
sng.ytInfo = resultYtinf.info;
sng.ytFormat = resultYtinf.format;
sng.directLink = resultYtinf.link;
if(special === "non"){
if(sng.live === true){
var srm = strmLive(fmsg,sng,VoicConStrem);
//srm.catch(moveon(fmsg,sng,false));
srm.catch(console.log("ERROR f-stream l-strmLive srm.catch"));
}else{
var srm = strm(fmsg,sng,VoicConStrem,tries,true);
srm.catch(moveon(fmsg,sng,false));
};
};

}); //ytinf.then end

}); //url.then end

}; //!sng.ytLink end
if(sng.ytLink){
//var ytinf = ytInfo(fmsg,sng.ytLink,sng.live);
var ytinf = ytInfo(fmsg,sng.ytLink,false,[]);
//ytinf.catch(function(err){console.log("ERROR f-stream l-ytinf.catch err: "+err)});
ytinf.catch(function(err){moveon(fmsg,sng,false)});
ytinf.then(function(resultYtinf) {
sndMessag(fmsg,"Playing: "+sng.name);
console.log("ytinf: "+JSON.stringify(resultYtinf));
sng.ytInfo = resultYtinf.info;
sng.ytFormat = resultYtinf.format;
sng.directLink = resultYtinf.link;
if(special === "non"){
if(sng.live === true){
var srm = strmLive(fmsg,sng,VoicConStrem);
srm.catch(moveon(fmsg,sng,false));
}else{
var srm = strm(fmsg,sng,VoicConStrem,tries,true);
srm.catch(moveon(fmsg,sng,false));
};
};

}); //ytinf.then end
}; //sng.ytLink end
}); //sm.catch end
}); //jb.then end
}; //special != "stop"

}; //if playing !==true
};
//stream end
//****//****//****//****//****//****//****//****//****//****//****//
//analyzeQueue
function analyzeQueue (fmsg,arr) {
return new Promise(function(accep,rejec){
analyzeque();
function analyzeque (tries){
if(!tries){tries = 0};
return new Promise(function(accep,rejec){
var indx  = new Number(tries);
var song = arr[indx].slice(0,arr[indx].indexOf("|"));
console.log("DEBUG f-analyzeQueue l-var song : "+song);
var url = getInfoYoutube(fmsg,song,"url",true);
//url.catch(function(err){console.log("ERROR f-stream l-url.catch err: "+err)})
url.catch(function(err){
console.log("ERROR f-analyzeQueue l-url.catch err: "+err);
if(indx === arr.length){
accep("done");
};
});
gIY.then(function(sucessGIY) {
console.log("sucessGIY.urls[0]: "+sucessGIY.urls[0]);
//if(sucessGIY.urls.length > 1){sndMessag(fmsg,"this was a playlist, the first song will be played the rest will be put at the end of the queue")};
tru = false;
var title = getInfoYoutube(fmsg,song,"title",true);
gIY.catch(function(err){
console.log("ERROR f-stream l-title.catch err: "+err);
if(indx === arr.length){
accep("done");
};
})
console.log("sucessGIY.titles[0]: "+sucessGIY.titles[0]);
var whil2 = 1;
while(sucessGIY.urls.length > whil2){
whilUrl = sucessGIY.urls[whil2].slice(0,sucessGIY.urls[whil2].indexOf("|"))
whilTitle = sucessGIY.titles[whil2].slice(0,sucessGIY.titles[whil2].indexOf("|"));
que(fmsg,whilUrl,whilTitle,false);
whil2++;
}; //whil end
titl = sucessGIY.titles[0].slice(0,sucessGIY.titles[0].indexOf("|"));
//if(sucessGIY.urls[0].slice(sucessGIY.urls[0].indexOf("|")+1) === "true"){tru = true};
var ytinf = ytInfo(fmsg,sucessGIY.urls[0].slice(0,sucessGIY.urls[0].indexOf("|")),tru);
//ytinf.catch(function(err){console.log("ERROR f-stream l-ytinf.catch err: "+err)});
ytinf.catch(function(err){
console.log("ERROR f-stream l-title.catch err: "+err);
if(indx === arr.length){
accep("done");
};
});
ytinf.then(function(resultYtinf) {
console.log("ytinf: "+JSON.stringify(resultYtinf));
arr[indx] = resultYtinf.link+"|"+titl;
//console.log("DEBUG f-analyzeQueue l-ytinf.then arr as JSON: "+JSON.stringify(arr));
if(arr.length-1 > tries){
sndMessag(fmsg,"analyzing queue: "+(tries+1)+"-"+(arr.length));
analyzeque(tries+1);
}else{
//console.log("DEBUG f-analyzeQueue l-ytinf.then arr as JSON: "+JSON.stringify(arr));
sndMessag(fmsg,"analyzing queue: "+"Done");
accep("done");
}; //arr.length > tries else end
}); //ytinf.then end

}); //url.then end

}); //promiss end
}; //analyzeque end

}); //promiss end
}; //analyzequeue end
//analyzeQueue end
//****//****//****//****//****//****//****//****//****//****//****//
//loop
function loop (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!loop called!!");
//console.log("looping "+looping);
//loopGuildIndex = looping.findIndex(loopmatch;
var loopGuildIndex = looping.indexOf(fmsg.channel.guild.id);
if(loopGuildIndex == -1){
 //sndMessag(fmsg,"problems send dev error code: !loopGuildIndex function loop");
 console.log("pushing guild.id and default state");
 looping.push(fmsg.channel.guild.id);
 looping.push(1);
 sndMessag(fmsg,"loopingcurr");
}else{
  var loopIndex = loopGuildIndex + 1;
  if(looping[loopIndex] == 0){ //false
    looping[loopIndex] = 1; //true
    //sndMessag(fmsg,"looping toggled on");
        sndMessag(fmsg,"loopingcurr");
  }else{
    looping[loopIndex] = 0 //false
        //sndMessag(fmsg,"looping toggled off");
                sndMessag(fmsg,"not loopingcurr");
  }
}
  console.log("looping "+looping);
}
//loop end
//****//****//****//****//****//****//****//****//****//****//****//
//loopque
function loopque (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!loopque called!!");
//console.log("looping "+looping);
//loopGuildIndex = looping.findIndex(loopmatch;
var loopqueGuildIndex = loopingque.indexOf(fmsg.channel.guild.id);
if(loopqueGuildIndex == -1){
 //sndMessag(fmsg,"problems send dev error code: !loopGuildIndex function loop");
 console.log("pushing guild.id and default state");
 loopingque.push(fmsg.channel.guild.id);
 loopingque.push(1);
 sndMessag(fmsg,"looping");
}else{
  var loopqueIndex = loopqueGuildIndex + 1;
  if(loopingque[loopqueIndex] == 0){ //false
    loopingque[loopqueIndex] = 1; //true
    //sndMessag(fmsg,"looping toggled on");
        sndMessag(fmsg,"looping");
  }else{
    loopingque[loopqueIndex] = 0 //false
        //sndMessag(fmsg,"looping toggled off");
                sndMessag(fmsg,"not looping");
  }
}
  console.log("loopingque "+loopingque);
}
//loopque end
//****//****//****//****//****//****//****//****//****//****//****//
//repeat
function repeat (fmsg,sng) {
if(!fmsg){fmsg = message};
console.log("!!repeat called!!");
  stream(fmsg,sng);
}
//repeat end
//****//****//****//****//****//****//****//****//****//****//****//
//que
function que (fmsg,sng,sendmessage,anlyz) {
if(!fmsg){fmsg = message};
console.log("!!que called!!");
if(!sng.user){sng.user = fmsg.author};
  if(!queue[fmsg.channel.guild.id]){
   queue[fmsg.channel.guild.id] = new Array(0);
   trash = queue[fmsg.channel.guild.id].shift();
  }
if(maxQueued > queue[fmsg.channel.guild.id].length){ //maxqued
if(anlyz !== false){
var anlz = analyze(fmsg,[sng]);
anlz.then(function(reslt,err){
if(err){
if(sendmessage != false){"could not analyze music before queing"};
queue[fmsg.channel.guild.id].push(sng);
};
if(reslt){
queue[fmsg.channel.guild.id].push(reslt[0]);
};
});
}else{queue[fmsg.channel.guild.id].push(sng)};
 if(sendmessage != false){sndMessag(fmsg,"added| "+sng.name+" |to queue")};
} else{ //maxqued end
 if(sendmessage != false){sndMessag(fmsg,"did not add| "+sng.name+" |to queue as the queue too long")};
}; //maxqued else end
//console.log(JSON.stringify(queue[fmsg.channel.guild.id]));
}
//que end
//****//****//****//****//****//****//****//****//****//****//****//
//quenext
function quenext (fmsg) {
if(message){
if(!fmsg){fmsg = message};
}else{fmsg = undefined};
console.log("!!quenext called!!");
  //console.log("quenext"); //Debug
  if(!queue[fmsg.channel.guild.id]){
   queue[fmsg.channel.guild.id] = new Array(0);
   trash = queue[fmsg.channel.guild.id].shift();
  }
  if(queue[fmsg.channel.guild.id]){
 if(queue[fmsg.channel.guild.id][0] != undefined){
setTimeout(function () {
var sng = queue[fmsg.channel.guild.id].shift();
   stream(fmsg,sng);
}, 500);
};
};
};
//quenext end
//****//****//****//****//****//****//****//****//****//****//****//
//moveon
function moveon (fmsg,sng,loop) {
  if(!fmsg){fmsg = message};
  if(!loop){loop = false};
if(!sng.name){sng.name = sng.link};
  console.log("!!moveon called!!");
    if(!playing[fmsg.channel.guild.id]){
   playing[fmsg.channel.guild.id] = false;
 };
  if(playing[fmsg.channel.guild.id] === false){

  if(looping[looping.indexOf(fmsg.channel.guild.id)+1] == 1){
  if(loop === true){
  repeat(fmsg,sng);
  };
  if(loop === false){
  sndMessag(fmsg,"bot cannot play: "+sng.name+" :so it wont be looped");
  leave();
  };
  }else{
  if(loopingque[loopingque.indexOf(fmsg.channel.guild.id)+1] == 1){
  if(loop === true){
    que(fmsg,sng,false);
  };
  if(loop === false){
  sndMessag(fmsg,"bot cannot play: "+sng.name+" :so it wont be looped");
  leave();
  };
  };
     if(!queue[fmsg.channel.guild.id]){
      queue[fmsg.channel.guild.id] = new Array(0);
      trash = queue[fmsg.channel.guild.id].shift();
      leave();
    };
     if(queue[fmsg.channel.guild.id]){
    if(queue[fmsg.channel.guild.id][0] != undefined){
     quenext(fmsg);
   };
  };

};
}; //playing != true
};
//moveon
//****//****//****//****//****//****//****//****//****//****//****//
//showque
function showque (fmsg,contnt,page,emptyMess,txt,color) {
if(!fmsg){fmsg = message};
if(!page){page = 1};
if(!emptyMess){emptyMess = true};
//if(!txt){txt = fmsg.content.slice(0,fmsg.content.indexOf("showque")+7)};
//if(!txt){txt = fmsg.content.slice(0,fmsg.content.indexOf("page:"))};
if(!txt){txt = fmsg.content};
if(!color){color = undefined};
if(fmsg.content.indexOf("page:") !== -1){
//txt = txt.slice(0,fmsg.content.indexOf("/",fmsg.content.indexOf("page:"))+1);
txt = txt.slice(0,fmsg.content.indexOf("page:")-1);
};
console.log("!!showque called!!");
var embd = new Object;
embd.fields = [];
embd.footer = new Object;
var embd2 = new Object;
embd2.fields = [];
embd2.footer = new Object;
var totfields = [0];
totfields.shift();
  if(contnt){
  if(contnt[0] != undefined){
var lstPagLngth = 0;
var whilpag = 0;
var totWhil = 0;
var length = 0;
var messag = "";
while(page > whilpag){
//lstPagLngth = embd.fields.length;
//embd.fields = [];
var whil = 0;
if(totWhil > whil){whil = totWhil};
while(contnt.length > whil){
totWhil++;
length = length+contnt[whil].name.length;
if(discordCharLimit-1000 > length){
//messag = messag+contnt[whil].name+"\n";
if(!contnt[whil].duration){contnt[whil].duration = "?"};
//messag = messag+contnt[whil].name+" | 0.00:"+contnt[whil].duration+" ["+contnt[whil].user.username+"]"+"\n";
var valTim;
if(!contnt[whil].live){contnt[whil].live = false};
if(contnt[whil].live === true){
valTim = " | "+"live"+" | ";
};
if(contnt[whil].live === false){
//valTim = " | 0.00:"+contnt[whil].duration+" | ";
valTim = " | "+contnt[whil].duration+" | ";
};
totfields.push({
//"name": ""+(totfields.length-((page-1)*2)),
"name": ""+(totfields.length),
"value": contnt[whil].name+valTim+contnt[whil].user.username
});
embd.fields.push({
//"name": ""+(totfields.length-((page-1)*2)),
"name": ""+(totfields.length),
"value": contnt[whil].name+valTim+contnt[whil].user.username
});
}else{
length = 0;
whil = 1000000;
};
//if(embd.fields.length === 25){
//length = 0;
//whil = 1000000;
//};

whil++;
}; //whil end
whilpag++;
if(page != whilpag){
messag = "";
//lstPagLngth = embd.fields.length;
embd.fields = [];
};
}; //whilpag end
var whilpagfinish = false;
var totpage = 0;
var length2 = 0;
var totWhil2 = 0;
while(whilpagfinish === false){
var whil2 = 0;
if(totWhil2 > whil2){whil2 = totWhil2};
while(contnt.length > whil2){
totWhil2++;
if(totWhil2 === contnt.length){whilpagfinish = true};
length2 = length2+contnt[whil2].name.length;
embd2.fields.push({
"name": "fakename",
"value": "fakevalue"
});
if(discordCharLimit-1000 > length2){
}else{
length2 = 0;
whil2 = 1000000;
};
//if(embd2.fields.length === 25){
//length2 = 0;
//whil2 = 1000000;
//};

whil2++;
}; //whil2 end
totpage++;
}; //whilpagfinish end
//if(messag != ""){
//  sndMessag(fmsg,"Queue page "+page+"/"+totpage+" below"+"\n"+messag,true);
//  console.log("Queue page "+page+"/"+totpage+" below"+"\n"+messag);
//};
//if(messag === ""){
//if(emptyMess === true){
//  sndMessag(fmsg,"there is no page "+page);
//};
//console.log(fmsg,"there is no page "+page);
//};
if(embd.fields.length > 0){
if(contnt.length >= totfields.length){
var totDur = "?";
var whil3 = 0;
while(contnt.length > whil3){
if(contnt[whil3].duration !== "?"){
if(totDur === "?"){totDur = 0};
totDur = totDur+contnt[whil3].duration;
};
whil3++;
};
var embdTitle = txt+" page: "+page+"/"+totpage;

var loopQue;
var loop;
if(loopingque.indexOf(fmsg.channel.guild.id)+1 === 1){
loopQue = true;
}else{
loopQue = false;
};
if(looping.indexOf(fmsg.channel.guild.id)+1 === 1){
loop = true;
}else{
loop = false;
};

//embd.title = "Showing: "+(25*page-24)+"-"+((25*page)+(embd.fields.length-25))+"/"+contnt.length;
//embd.footer.text = "looping: "+loopingque[fmsg.channel.guild.id]+" | "+"looping current: "+looping[fmsg.channel.guild.id]+" | "+"total duration: "+totDur;

var felds = "";
var whil4 = 0;
while(embd.fields.length > whil4){
felds = felds+embd.fields[whil4].name+" | "+embd.fields[whil4].value+"\n";
whil4++;
};

var hDur;
var mDur;
var sDur;
if(totDur > 60){
hDur = round(Math.floor(totDur)/60,2)
mDur = hDur-Math.floor(hDur);
hDur = Math.floor(hDur);
}else{mDur = Math.floor(totDur)};
sDur = round(totDur,2)-Math.floor(totDur);

var fncyTotDur= "";
if(hDur > 0){
fncyTotDur = fncyTotDur+"H:"+Math.round(hDur);
};
if(hDur > 0 || mDur > 0){
fncyTotDur = fncyTotDur+" M:"+Math.round(mDur);
};
if(hDur > 0 || mDur > 0 || sDur > 0){
fncyTotDur = fncyTotDur+" S:"+Math.round(sDur*100);
};
if(totDur === "?"){fncyTotDur = "?"};

var embdTSnd = new Object;
embdTSnd.footer = new Object;
embdTSnd.title = "Showing: "+(totfields.length-embd.fields.length+1)+"-"+totfields.length+"/"+(contnt.length-(totpage-1));
embdTSnd.description = felds;
embdTSnd.footer.text = "looping: "+loopQue+" | "+"looping current: "+loop+" | "+"total duration: "+fncyTotDur;
//fmsg,titl,embd,edit,snd,color
var snt = edtEmbed(fmsg,embdTitle,embdTSnd,undefined,undefined,color);
snt.catch(function(err){console.log("ERROR f-showque l-snt.catch")});
snt.then(function(msg){
//non fancy react
//msg.addReaction("⬆").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.addReaction("⬇").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.addReaction("⬅").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.addReaction("➡").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//non fancy react end
//semi fancy reacts
if(totpage > 1){
msg.addReaction("⬆").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
msg.addReaction("⬇").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
};
if(totpage > 10){
msg.addReaction("⬅").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
msg.addReaction("➡").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
};
//semi fancy react
//fancy react
//if(page > 1){
//msg.addReaction("⬆").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.removeReaction("⬇").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//};
//if(totpage > page){
//msg.addReaction("⬇").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.removeReaction("⬆").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//};
//if(page > 10){
//msg.addReaction("⬅").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.removeReaction("➡").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//};
//if(totpage > page+9){
//msg.addReaction("➡").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//msg.removeReaction("⬅").catch(function(err){console.log("ERROR f-showque l-msg.addReact.catch err: "+err)});
//};
//fancy react end
});
};
}else{sndMessag(fmsg,"there is no page "+page)};
}else{
  sndMessag(fmsg,"queue is empty");
}
}else{
  sndMessag(fmsg,"queue is empty");
}
}
//showque end
//****//****//****//****//****//****//****//****//****//****//****//
//clearque
function clearque (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!showque called!!");
  if(queue[fmsg.channel.guild.id]){
  //while(queue[fmsg.channel.guild.id][0] != undefined) {
    //trash = queue[fmsg.channel.guild.id].shift();
  //}
queue[fmsg.channel.guild.id] = [];
}
  sndMessag(fmsg,"Done");
}
//clearque end
//****//****//****//****//****//****//****//****//****//****//****//
//startque
function startque (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!startque called!!");
  if(queue[fmsg.channel.guild.id]){
  if(queue[fmsg.channel.guild.id][0] != undefined){
var sng = queue[fmsg.channel.guild.id].shift();
//if(loopingque[loopingque.indexOf(fmsg.channel.guild.id)+1] === 1){
//queue[fmsg.channel.guild.id].push(sng);
//};
   stream(fmsg,sng,0,true);
 }else{
console.log("ERROR f-startque l-var fmsg.channel.guild.id][0] = undefined");
sndMessag(fmsg,"queue is empty");
};
}else{
console.log("ERROR f-startque l-var !fmsg.channel.guild.id]");
sndMessag(fmsg,"queue is empty");
}
}
//startque end
//****//****//****//****//****//****//****//****//****//****//****//
//queueShuffle
function queueShuffle (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!queueShuffle called!!");
if(queue[fmsg.channel.guild.id]){
if(queue[fmsg.channel.guild.id][0] != undefined){
queue[fmsg.channel.guild.id] = arrayShuffle(fmsg,queue[fmsg.channel.guild.id]);
console.log("queueShuffle Result "+queue[fmsg.channel.guild.id]);
}else{
sndMessag(fmsg,"queue is empty");
}
sndMessag(fmsg,"shuffled");
}else{
sndMessag(fmsg,"queue is empty");
}
};
//queueShuffle end
//****//****//****//****//****//****//****//****//****//****//****//
//next
function next (fmsg) {
  if(!fmsg){fmsg = message};
  console.log("!!queueShuffle called!!");
  if(queue[fmsg.channel.guild.id]){
  if(queue[fmsg.channel.guild.id][0] != undefined){
   sndMessag(fmsg,"Next up:" +queue[fmsg.channel.guild.id][0]);
  }else{
  sndMessag(fmsg,"queue is empty");
  }
  }else{
  sndMessag(fmsg,"queue is empty");
  }
};
//next end
//****//****//****//****//****//****//****//****//****//****//****//
//listplay
function listplay (fmsg,listname,listtype,clear,playNow) {
if(!fmsg){fmsg = message};
if(!clear){clear = false};
if(!playNow){playNow = true};
console.log("!!listplay called!!");
if(clear === true){
clearque(fmsg);
};
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
   fs.readFile(Playlistsfolder+"/"+id+" - "+listname+".txt", "utf8",(error,filecontent) => {
   if (error){
    sndMessag(fmsg,"cant find playlist");
     return(console.log("ERROR listque"));
   }else{
   console.log(filecontent);
sndMessag(fmsg,"preparing to play. lists over 10 items long will not be analyzed as to not overuse service apis");
var jsnCntnt = JSON.parse(filecontent);
if(jsnCntnt > 10){
sndMessag(fmsg,"queuing. only the first 10 items in the list will be analyzed as to not overuse service apis");
};
var whil = 0;
queque();
function queque () {
if(!queue[fmsg.channel.guild.id] || maxQueued > queue[fmsg.channel.guild.id].length){
if(10 > whil){
que(fmsg,jsnCntnt[whil],false);
}else{que(fmsg,jsnCntnt[whil],false,false)};
};
whil++;
if(jsnCntnt.length > whil){setTimeout(function(){queque()},100)};
};
if(!queue[fmsg.channel.guild.id] || maxQueued-1 > queue[fmsg.channel.guild.id].length){ //maxqued
//sndMessag(fmsg,"songs queued");
}else{ //maxqued end
sndMessag(fmsg,"as many songs as possible queued. limit is "+maxQueued);
}; //maxqued else end
//if(playing[fmsg.channel.guild.id] !== true && playNow === true){
if((playing[fmsg.channel.guild.id] !== true || clear === true)&& playNow === true){
setTimeout(function(){startque(fmsg)},1000);
};

    }
   })

}
//listplay end
//****//****//****//****//****//****//****//****//****//****//****//
//listque
function listque (fmsg,listname,listtype) {
if(!fmsg){fmsg = message};
console.log("!!listque called!!");
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
  var filecontent2;
 fs.readFile(Playlistsfolder+"/"+id+" - "+listname+".txt", "utf8",(error,filecontent) => {
   if (error){
    sndMessag(fmsg,"cant find playlist");
     return(console.log("ERROR listque"));
   }else{
   console.log(filecontent);
var jsnCntnt = JSON.parse(filecontent);
if(jsnCntnt > 10){
sndMessag(fmsg,"queuing. only the first 10 items in the list will be analyzed as to not overuse service apis");
};
var whil = 0;
queque();
function queque () {
if(!queue[fmsg.channel.guild.id] || maxQueued > queue[fmsg.channel.guild.id].length){
if(10 > whil){
que(fmsg,jsnCntnt[whil],false);
}else{que(fmsg,jsnCntnt[whil],false,false)};
};
whil++;
if(jsnCntnt.length > whil){setTimeout(function(){queque()},100)};
};
if(!queue[fmsg.channel.guild.id] || maxQueued-1 > queue[fmsg.channel.guild.id].length){ //maxqued
sndMessag(fmsg,"songs queued");
}else{ //maxqued end
sndMessag(fmsg,"as many songs as possible queued. limit is "+maxQueued);
}; //maxqued else end
  }
 })

}
//listque end
//****//****//****//****//****//****//****//****//****//****//****//
//listdownload
function listdownload (fmsg,listname,listtype) {
if(!fmsg){fmsg = message};
console.log("!!listplay called!!");
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
   fs.readFile(Playlistsfolder+"/"+id+" - "+listname+".txt", "utf8",(error,filecontent) => {
   if (error){
    sndMessag(fmsg,"cant find playlist");
     return(console.log("ERROR listque"));
   }else{
   console.log(filecontent);
var jsnCntnt = JSON.parse(filecontent);
   var whil = 0;
while(jsnCntnt.length > whil){
if(!queue[fmsg.channel.guild.id] || maxQueued > queue[fmsg.channel.guild.id].length){
download(fmsg,jsnCntnt[whil],false);
};
whil++;
};
};
   });

};
//listdownload end
//****//****//****//****//****//****//****//****//****//****//****//
//lists
function lists (fmsg,listtype) {
if(!fmsg){fmsg = message};
console.log("!!lists called!!");
 var lsts = "Lists below \n";
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
  fs.readdir(Playlistsfolder, (err, Playlists) => {
    if(err){
      console.log("ERROR f-lists l-fs.readdir err: "+err);
    //sndMessag("this command is not working please use the command below to let the dev know \n jbe-messagdev read failed fuction list");
    }
    else{
      var whil = 0;
      while(Playlists.length > whil){
        Playlist = Playlists[whil];
        //console.log(Playlist);
         if (Playlist.indexOf(id) == 0){
          //sndMessag(fmsg,Playlist.slice(0,-4));
          lsts = lsts + Playlist.slice(Playlist.indexOf("-")+2,-4)+"\n";
          console.log("lsts: "+lsts);
         }
       whil++;
      };
      if(lsts.length > 14){sndMessag(fmsg,lsts)}else{sndMessag(fmsg,"No lists found")};
    }
    })
}
//lists end
//****//****//****//****//****//****//****//****//****//****//****//
//listshow
function listshow (fmsg,listname,listtype,page,color,usr) {
if(!fmsg){fmsg = message};
if(!page){page = 1};
if(!usr){usr = fmsg.author};
console.log("!!listshow called!!");
console.log("DEBUG f-listshow l-var listname: "+listname);
  var listshowque = ["List content below"];
  //trash = listshowque.shift();
var id;
if(listtype == "personal"){id = usr.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
 fs.readFile(Playlistsfolder+"/"+id+" - "+listname+".txt", "utf8",(error,filecontent) => {
   if (error){
    sndMessag(fmsg,"cant find playlist");
     return(console.log("ERROR f-listshow l-readFile error error: "+error));
   }else{
   console.log(filecontent);
   var jsnCntnt = JSON.parse(filecontent);
   var whil = 0;
var listQueue = [0];
listQueue.shift();
   while(jsnCntnt.length > whil){
cntntIndx = jsnCntnt[whil];
if(!cntntIndx.duration){cntntIndx.duration = "?"};
//listshowque.push(cntntIndx.name+" | 0.00:"+cntntIndx.duration+" ["+fmsg.author.username+"]");
listQueue.push(cntntIndx);
whil++;
};
showque(fmsg,listQueue,page,true,undefined,color);
//sndMessag(fmsg,listshowque.toString(),false,true);
  };
 });

}
//listshow end
//****//****//****//****//****//****//****//****//****//****//****//
//listmake //UNFINISHED
function listmake (fmsg,listname,listtype) {
  if(!fmsg){fmsg = message};
  console.log("!!listmake called!!");
    if(listname != null){
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
      // indexOf + slice to make name of list and content seprate listhow shuld have both
    fs.writeFile(botFolderPath+"/Playlists/"+id+" - "+listname+".txt",fmsg.replace(/,/g,"_"), function(error) {
      if(error) {
          return console.log(error);
      }
    })
    sndMessag(fmsg,"saved list as "+listname);

  }else{sndMessag(fmsg,"no playlist name")};
  console.log("listFromQue complete");
  }
//listmake //UNFINISHED
//****//****//****//****//****//****//****//****//****//****//****//
//listFromQue
function listFromQue (fmsg,listname,listtype) {
if(!fmsg){fmsg = message};
console.log("!!listFromQue called!!");
  if(listname != null){
  if(queue[fmsg.channel.guild.id]){
  //analyzeQueue(fmsg,queue[fmsg.channel.guild.id]).then(function(sucess) {
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
  fs.writeFile(botFolderPath+"/Playlists/"+id+" - "+listname+".txt",JSON.stringify(queue[fmsg.channel.guild.id]), function(error) {
    if(error) {
        return console.log(error);
    }
  })
  sndMessag(fmsg,"saved list as "+listname);
//}); //then end
}else{sndMessag(fmsg,"queue is empty")} //queue

}else{sndMessag(fmsg,"no playlist name")};
console.log("listFromQue complete");
}
//listFromQue end
//****//****//****//****//****//****//****//****//****//****//****//
//listdelete
function listdelete (fmsg,listname,listtype) {
if(!fmsg){fmsg = message};
console.log("!!listdelete called!!");
var id;
if(listtype == "personal"){id = fmsg.author.id};
if(listtype == "guild"){id = fmsg.channel.guild.id};
  fs.unlink(botFolderPath+"/Playlists/"+id+" - "+listname+".txt", function(error) {
    if(error) {
        sndMessag(fmsg,"Cant find playlist");
        return console.log(error);
    }else{sndMessag(fmsg,"sucess")};
  })

}
//listdelete end
//****//****//****//****//****//****//****//****//****//****//****//
//listModDelete // Delete by index from list
function listModDelete (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!listModDelete called!!");

}
//listModDelete end
//****//****//****//****//****//****//****//****//****//****//****//
function ytInfo (fmsg,link,live,bndfrmt){
  if(!fmsg){fmsg = message};
  if(!live){live = false};
  if(!bndfrmt){bndfrmt = []};
  console.log("!!ytInfo called!!");
  var returnLink;
  return new Promise((resolv,rejec) => {
  var info;
  var bestaudio;
console.log("DEBUG f-ytInfo l-var dec link: "+link);
  ytdl.getInfo(link, function(error, ytdlInfo){
          if(error){
            console.log("ERROR f-ytInfo l-ytdlgetinfo error: "+error);
            //sndMessag(fmsg,"Failed to find video info",true);
             sndMessag(fmsg,"Could not play song reason: "+error.toString().replace("Error:",""),true);
            rejec("Error Failed to find info");
        };
        if(ytdlInfo){
          info = ytdlInfo;
            var foundformat = false;
            console.log("live: "+live);
            if(live == false){
            //mp4
            if(foundformat == false){
             if(bndfrmt.indexOf("mp4") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "mp4")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found mp4");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //mp4 end
            //webm
            if(foundformat == false){
             if(bndfrmt.indexOf("webm") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "webm")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found webm");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //webm end
            //console.log("after webm");
            //flv
            if(foundformat == false){
             if(bndfrmt.indexOf("flv") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "flv")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found flv");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //flv end
            //m4a
            if(foundformat == false){
             if(bndfrmt.indexOf("m4a") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "m4a")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found m4a");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //m4a end
            //3GPP
            if(foundformat == false){
             if(bndfrmt.indexOf("3gp") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "3gp")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found 3gp");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //3GPP end

          }; //Live false
          if(live == true){
            //ts
            if(foundformat == false){
             if(bndfrmt.indexOf("ts") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "ts")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found ts");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //ts end
            //flv
            if(foundformat == false){
             if(bndfrmt.indexOf("flv") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "flv")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && !f.bitrate);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found flv");
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //flv end
            if(foundformat == true){
            //return(globBestAudio);
            console.log("foundformat");
            }
            if(foundformat == false){
            //sndMessag(fmsg,"unable to find audio only formats, will attempt to find audio+video format");
            console.log("unable to find audio only formats, will attempt to find audio+video format");
            }
            //ts Video
            if(foundformat == false){
             if(bndfrmt.indexOf("ts") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "ts")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);

           bestaudio = formats.find(f => f.audioBitrate > 0 && f.resolution === "144p");
           //bestaudio = formats.find(f => f.audioBitrate > 0 && parseFloat(f.bitrate.slice(0,f.bitrate.indexOf("-"))) < 0.5);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found vid ts: "+JSON.stringify(bestaudio));
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //ts Video end
            //flv Video

            if(foundformat == false){
             if(bndfrmt.indexOf("flv") === -1){
          var formats = ytdlInfo.formats.filter(f => f.container === "flv")
          .sort((a, b) => b.audioBitrate - a.audioBitrate);
           bestaudio = formats.find(f => f.audioBitrate > 0 && f.resolution === "144p");
           //bestaudio = formats.find(f => f.audioBitrate > 0 && parseFloat(f.bitrate.slice(0,f.bitrate.indexOf("-"))) < 0.5);
           if (bestaudio) httplink = "https"+bestaudio.url.slice(5);
            if (bestaudio) console.log("found vid flv: "+JSON.stringify(bestaudio));
            if (bestaudio) foundformat = true;
            if (bestaudio) returnLink = httplink;
            if (bestaudio) console.log(httplink);
           }; //bndfrmt end
          }; //foundformat false end
            //flv Video end
          }; //live true
          if(!returnLink){
            console.log("returnLink: "+returnLink);
            sndMessag(fmsg,"Failed to find video format",true);
            rejec("error");
          };
          if(returnLink){
            console.log("returnLink: "+returnLink);
            var rtrn = new Object;
            rtrn.info = info;
            rtrn.format = bestaudio;
            rtrn.link = returnLink;
            resolv(rtrn)};

        };
    }); //ytdl findFormat close end

  }); //promise end

}; //ytInfo end
//****//****//****//****//****//****//****//****//****//****//****//
function ytInfoVideo (fmsg,link,live){
  if(!fmsg){fmsg = message};
  console.log("!!ytInfo called!!");
  var returnLink;
  return new Promise((resolve,reject) => {
  var info;
  var bestaudio;
      ytdl.getInfo(link, function(error, ytdlInfo){
          if(error){
            console.log("ERROR f-ytInfo l-ytdlgetinfo error: "+error);
            sndMessag(fmsg,"Failed to find video info",true);
            reject("Error Failed to find info");
        };
        if(ytdlInfo){
          info = ytdlInfo;
            var foundformat = false;
            console.log("live: "+live);
            if(live == false){
            //mp4
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "mp4")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found mp4");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //mp4 end
            //webm
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "webm")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found webm");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //webm end
            //console.log("after webm");
            //flv
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "flv")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found flv");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //flv end
            //m4a
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "m4a")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found m4a");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //m4a end
            //3GPP
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "3gp")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found 3gp");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //3GPP end

          }; //Live false
          if(live == true){
            //ts
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "ts")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found ts");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //ts end
            //flv
            if(foundformat == false){
          var formats = ytdlInfo.formats.filter(f => f.container === "flv")
          .sort((a, b) => b.Bitrate - a.Bitrate);

           best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (best) console.log("found flv");
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
          };
            //flv end
          }; //live true
          if(!returnLink){
            console.log("returnLink: "+returnLink);
            sndMessag(fmsg,"Failed to find video format",true);
            var formats = ytdlInfo.formats
            formats.sort((a, b) => b.Bitrate - a.Bitrate);
            best = formats.find(f => f.Bitrate > 0);
           if (best) httplink = "https"+best.url.slice(5);
            if (!best) best = formats[0];
           if (best) httplink = "https"+best.url.slice(5);
            if (best) foundformat = true;
            if (best) returnLink = httplink;
            if (best) console.log(httplink);
            if (best) resolve(returnLink);
            if (!best) reject("error");
          };
          if(returnLink){
            console.log("returnLink: "+returnLink);
            var rtrn = new Object;
            rtrn.info = info;
            rtrn.format = bestaudio;
            rtrn.link = returnLink;
            resolv(rtrn)};

        };
    });//ytdl findFormat close end

  }); //promise end

}; //ytInfoVideo end
//****//****//****//****//****//****//****//****//****//****//****//
//stringToWinFriendly
function stringToWinFriendly (string){
  console.log("string before stringToWinFriendly: "+string);
var chars = string.split("");
var newChars = [];
trash = newChars.shift();
var winChars = [":","<",">","|","#","%","&",",","[","]","(",")","\"","/",".","?","*"];
var whil = 0;
while(chars.length > whil){ //whil1
//console.log("chars[whil]: "+chars[whil]);
if(winChars.indexOf(chars[whil]) != -1){
//chars[whil] = "0";
newChars.push("0");
};
if(winChars.indexOf(chars[whil]) == -1){
newChars.push(chars[whil]);
};
whil++;
}; //whil1 end
//console.log("newChar string after stringToWinFriendly: "+newChars.join(""));
//console.log("char string after stringToWinFriendly: "+chars.join(""));
return(newChars.join(""));
}; //stringToWinFriendly end
//****//****//****//****//****//****//****//****//****//****//****//
function dnlod (fmsg,link,name,video){ //dnlod
  if(!fmsg){fmsg = message};
  console.log("!!dnlod called!!");
if(!video){video = false};
var fail = false;

 return new Promise((accep,rejec) => {

  console.log(link);
  var command;
  //var command = ffmpeg(link);
  if(video === false){command = ffmpeg(link).noVideo()};
  if(video === true){command = ffmpeg(link)};

  var asciName = Buffer.from(stringToWinFriendly(name),"ascii").toString("utf-8");
  console.log("asciName: "+asciName);

  var filNam = asciName+fmsg.id;
  if(video === false){command.save(botFolderPath+"/Music/downloaded/"+filNam+".mp3")};
  if(video === true){command.save(botFolderPath+"/Music/downloaded/"+filNam+".mp4")};

  command.on("start", function(commandLine) {
  console.log("Spawned ffmpeg with command: " + commandLine);
  });

  //command.once("error", () => Promise.reject("error"));
  command.on("error", function(err, stdout, stderr) {
  //console.log("ERROR f-dnload l-command.on error err: "+err);
  //Promise.reject("ERROR f-dnload l-error err: "+err);
  rejec("ERROR f-dnload l-error err: "+err);
  //throw("ERROR f-dnload l-error err: "+err);
  });;
  command.on("progress", function(prog) {
  console.log(asciName+" download time: "+prog.timemark);
  //editMessag(fmsg,botMessagLast,asciName+" download time: "+prog.timemark); //wont work
  });

  command.on("end", function(stdout, stderr) {
  if(video === false){

  var upProm = fmsg.channel.uploadFile(botFolderPath+"/Music/downloaded/"+filNam+".mp3",asciName+".mp3");
  upProm.catch( function(err){
  console.log("ERROR f-dnload l-uprom rejec rejec: "+err);
  //editMessag(fmsg,botMessagLast,"upload failed might be due to discord upload limit.");
  //fs.unlink(botFolderPath+"/Music/downloaded/"+filNam+".mp3",function(err){console.log("ERROR f-dnlod l-unlink err: "+err)});
});

upProm.then(function(accep){
  console.log("SUCESS f-dnload l-uprom accep accep: "+accep);
  //fs.unlink(botFolderPath+"/Music/downloaded/"+filNam+".mp3",function(err){console.log("ERROR f-dnlod l-unlink err: "+err)});

  }); //upProm.then end

  }; //video = false end
  }); //command.on"end" end

}); //prmise end

}; //dnlod end
//****//****//****//****//****//****//****//****//****//****//****//
//analyze
function analyze (fmsg,arr,silent,detail){
if(!fmsg){fmsg = message};
if(!silent){silent = false};
if(!detail){detail = false};
console.log("!!analyze called!!");
console.log("to analyze"+JSON.stringify(arr));
return new Promise((accep,rejec) => {
if(arr){
var indx = 0;
getInf();
function getInf (){
//console.log(JSON.stringify(arr[indx]));
if(arr[indx]){
ytinf = getInfoYoutube(fmsg,arr[indx].link,"non",false); //non silent
//ytinf = getInfoYoutube(fmsg,arr[indx].link,"non",true); //silent
ytinf.then(function(sucess){
if(sucess.titles.length === 1){
arr[indx].live = sucess.lives[0];
arr[indx].name = sucess.titles[0];
arr[indx].ytLink = sucess.urls[0];
arr[indx].duration = sucess.durations[0];
}else{
if(silent === false){
sndMessag(fmsg,"playlists are not analyzed before playing to save bandwith");
};
};
if(detail === true){
var ytInf = ytInfo(fmsg,arr[indx].ytLink,arr[indx].live);
ytInf.then(function(reslt,err){
if(reslt){
arr[indx].ytInfo = resultYtinf.info;
arr[indx].ytFormat = resultYtinf.format;
arr[indx].directLink = reslt.link;
indx++;
getInf();
};
if(err){
indx++;
getInf();
};
});
};

if(detail === false){
indx++;
getInf();
};
}); //then end
ytinf.catch(function(err){
console.log("ERROR f-analyze l-ytinf.catch err: "+err);
//accep(arr);
indx++;
getInf();
}); //catch end
}else{accep(arr)}; //arr.length >= indx else
}; //getinf end
}; //arr end
if(!arr){
console.log("ERROR f-analyze l-if(arr) !arr");
rejec("!arr");
}; //!arr end
}); //promise end
};
//analyze end
//****//****//****//****//****//****//****//****//****//****//****//
function getInfoYoutube (fmsg,song,type,silent) { //Youtube
//type is deprecated
  if(!fmsg){fmsg = message};
  if(!silent){silent = false};
//var song = inf.lnk;
//if(!inf.indx){inf.indx = 0};
//var indx = inf.indx;
  console.log("!!geinfoYoutube called!!");
  console.log("DEBUG f-getInfoYoutube l-var song: "+song);
  var youtubetitle;
  var youtubeid;
  var youtubeurl;
  var youtubeDuration;
  var youtubeLives = [0];
  youtubeLives.shift();
  var youtubetitles = [0];
  youtubetitles.shift();
  var youtubeids = [0];
  youtubeids.shift();
  var youtubeurls = [0];
  youtubeurls.shift();
  var youtubeDurations = [0];
  youtubeDurations.shift();
  var live = false
  return new Promise((accep,rejec) => {
  youtube.search(song, 1, function(error, result) {
  if (error) {
  console.log(error);
if(silent === false){
  sndMessag(fmsg,"cant find "+song+" on youtube",true);
};
  rejec("error");
} //error end
  if (result) {
  jsonresult = JSON.stringify(result, null, 1)
  console.log(jsonresult);
  var jsonresultparsed = JSON.parse(jsonresult);
  //if(!jsonresultparsed.items[0]){moveon(fmsg,song,song)};
  //if(!jsonresultparsed.items[0]){rejec("ERROR f-getInfoYoutube l-youtube.serch err: !jsonresultparsed.items[0]")};
  if(!jsonresultparsed.items[0]){
if(silent === false){
sndMessag(fmsg,"cant find "+song+" on youtube",true);
moveon(fmsg,song,song,false);
};
};
  if(jsonresultparsed.items[0]){
  if(jsonresultparsed.items[0]["id"].kind == "youtube#playlist"){

  console.log("playlist id: "+jsonresultparsed.items[0]["id"].playlistId);
  youtube.getPlayListsItemsById(jsonresultparsed.items[0]["id"].playlistId,50, function(errorPL, resultPL) {

  //console.log("error: "+errorPL);
  //console.log("result: "+resultPL);
if(errorPL){
if(silent === false){
sndMessag(fmsg,"failed to find youtube info",true);
};
console.log("ERROR f-getInfoYoutube lgetPlaylistItemsById errorPL: "+errorPL);
};
if(resultPL){
  jsonresultPL = JSON.stringify(resultPL, null, 1)
  //console.log(jsonresultPL);
  jsnRsltPLArr = jsonresultPL.split("privacyStatus");
  //console.log("jsnRsltPLArr: "+jsnRsltPLArr);
//console.log("jsnRsltPLArr.length: "+jsnRsltPLArr.length);
  var whil = 0;
  while(jsnRsltPLArr.length > whil){
  var curr = jsnRsltPLArr[whil];
//console.log("jsnRsltPLArr[whil]: "+jsnRsltPLArr[whil]);
 if(curr.indexOf("videoId") != -1){
  youtubetitlePL = curr.slice(curr.indexOf("title")+9,curr.indexOf(",",curr.indexOf("title"))-1);
  youtubeidPL = curr.slice(curr.indexOf("videoId")+11,curr.indexOf("}",curr.indexOf("videoId"))-6);
  youtubeurlPL = "http://www.youtube.com/watch?v="+youtubeidPL;
var ytLivPsh = false;
  if(curr.items){if(curr.items[whil]["snippet"].liveBroadcastContent == "live"){ytLivPsh = true}};
youtubeLives.push(ytLivPsh);
  //if(curr.items[whil]["snippet"].liveBroadcastContent == "live"){youtubeLives.push(true)}else{youtubeLives.push(false)};
//console.log("youtubetitlePL: "+youtubetitlePL);
//console.log("youtubeidPL: "+youtubeidPL);
//console.log("youtubeurlPL: "+youtubeurlPL);
  //if(type == "title"){
    console.log(youtubetitlePL);
    youtubetitles.push(youtubetitlePL);
  //};
  //if(type == "id"){
    console.log(youtubeidPL);
    youtubeids.push(youtubeidPL);
  //};
  //if(type == "url"){
    console.log(youtubeurlPL);
    youtubeurls.push(youtubeurlPL);
  //};
};
whil++;
};
//return()
  var retrn = new Object;
  retrn.lives = youtubeLives;
  retrn.titles = youtubetitles;
  retrn.ids = youtubeids;
  retrn.urls = youtubeurls;
  //if(type == "title"){
  //  console.log(youtubetitle);
  //  accep(youtubetitles);
  //};
  //if(type == "id"){
  //  console.log(youtubeid);
  //  accep(youtubeids);
  //};
  //if(type == "url"){
  //  console.log(youtubeurl);
  //  accep(youtubeurls);
  //};
accep(retrn);
}; //resultPL end
}); //playlisitemsbyid end

}; //playlist end

  if(jsonresultparsed.items[0]["id"].kind == "youtube#video"){
  if(jsonresultparsed.items[0]["snippet"].title != 0){
  youtubetitle = jsonresultparsed.items[0]["snippet"].title;
  youtubeid = jsonresultparsed.items[0]["id"].videoId;
  youtubeurl = "http://www.youtube.com/watch?v="+youtubeid;
  if(jsonresultparsed.items[0]["snippet"].liveBroadcastContent == "live"){
    live = true;
  };
  youtube.getById(youtubeid, function(error, reslt) {
  if (error) {
  console.log("ERROR f-getInfoYoutube l-youtube.video error error: "+error);
};

  if (reslt) {
  console.log(JSON.stringify(reslt));
  var rawDur = reslt.items[0].contentDetails.duration
  var hDur = parseInt(rawDur.slice(rawDur.indexOf("H")-2,rawDur.indexOf("H")));
  if(Number.isNaN(hDur)){hDur = parseInt(rawDur.slice(rawDur.indexOf("H")-1,rawDur.indexOf("H")))};
  if(rawDur.indexOf("H") === -1){hDur = 0};
  var mDur = parseInt(rawDur.slice(rawDur.indexOf("M")-2,rawDur.indexOf("M")));
  if(Number.isNaN(mDur)){mDur = parseInt(rawDur.slice(rawDur.indexOf("M")-1,rawDur.indexOf("M")))};
  if(rawDur.indexOf("M") === -1){mDur = 0};
  var sDur = parseInt(rawDur.slice(rawDur.indexOf("S")-2,rawDur.indexOf("S")));
  if(Number.isNaN(sDur)){sDur = parseInt(rawDur.slice(rawDur.indexOf("S")-1,rawDur.indexOf("S")))};
  if(rawDur.indexOf("S") === -1){sDur = 0};
  var procsdDur =  (hDur*60)+mDur+(sDur/100);
  console.log("Duration | raw: "+rawDur+" | H: "+hDur+" | M: "+mDur+" | S: "+sDur+" | Processed: "+procsdDur);
  youtubeDuration = procsdDur;
  youtubeDurations.push(youtubeDuration);
};

    youtubeLives.push(live);
    youtubetitles.push(youtubetitle);
    youtubeids.push(youtubeid);
    youtubeurls.push(youtubeurl);
  var retrn = new Object;
  retrn.lives = youtubeLives;
  retrn.titles = youtubetitles;
  retrn.ids = youtubeids;
  retrn.urls = youtubeurls;
  retrn.durations = youtubeDurations;
  accep(retrn);
});

  //if(type == "title"){
  //  console.log(youtubetitle);
  //  youtubetitles.push(youtubetitle+"|"+live);
  //  accep(youtubetitles);
  //};
  //if(type == "id"){
  //  console.log(youtubeid);
  //  youtubeids.push(youtubeid+"|"+live);
  //  accep(youtubeids);
  //};
  //if(type == "url"){
  //  console.log(youtubeurl);
  //  youtubeurls.push(youtubeurl+"|"+live);
  //  accep(youtubeurls);
  //};

}; // jsonresultparsed.items[0]["snippet"].title != 0 end
}; // jsonresultparsed.items[0]["id"].kind == "youtube#video" end
}; // jsonresultparsed.items[0] exists end
}; //result end

}); //youtube search end

});

}; //Youtube end
//****//****//****//****//****//****//****//****//****//****//****//
//download
function download (fmsg,sng,sndmessage,special){
if(!fmsg){fmsg = message};
if(!sng.name){sng.name = sng.link};
var name = sng.name;
var song = sng.link;
if(!sndmessage){sndmessage = true};
if(!special){special = "non"};
console.log("!!download called!!");
if(sndmessage === true){
sndMessag(fmsg,"Attempting to download: "+sng.link);
};
//service logic
var maxDnld = 5;
//audio

dl = dnlod(fmsg,sng.link,sng.name);
dl.catch(function(dlRejec){
console.log("ERROR f-download l-dl.catch dlRejec: "+dlRejec);
if(!sng.ytLink){
var gIYLnk = sng.link;
var gIYIndx = 0;
if(sng.link.indexOf("&") !== -1){
gIYLnk = sng.link.slice(0,sng.link.indexOf("&"));
};
if(sng.link.indexOf("&list=") !== -1){
gIYLnk = sng.link.slice(sng.link.indexOf("&list=")+6,sng.link.indexOf("&index="));
gIYIndx = parseInt(sng.link.slice(sng.link.indexOf("&index=")+7))-1;
console.log("DEBUG f-stream l-sm.catch gIYLnk: "+gIYLnk);
console.log("DEBUG f-stream l-sm.catch gIYIndx: "+gIYIndx);
};
//var gIY = getInfoYoutube(fmsg,{"lnk":gIYLnk,"indx":gIYIndx});
var gIY = getInfoYoutube(fmsg,gIYLnk);
//url.catch(function(err){console.log("ERROR f-stream l-url.catch err: "+err)})
gIY.catch(function(err){moveon(fmsg,sng,false)});
gIY.then(function(sucessGIY) {
console.log("sucessGIY: "+JSON.stringify(sucessGIY));
console.log("sucessGIY.urls[0]: "+sucessGIY.urls[0]);
if(sucessGIY.urls.length > 1){
//if(!gIYIndx){sndMessag(fmsg,"this was a playlist, the first song will be played the rest will be put at the end of the queue")};
//if(gIYIndx){sndMessag(fmsg,"this was a playlist, the "++" song will be played the rest will be put at the end of the queue")};
sndMessag(fmsg,"this was a playlist, "+" only "+maxDnld+" will be downloaded to save bandwith");
};

console.log("sucessGIY.titles[0]: "+sucessGIY.titles[0]);
var dnlded = 0;
var whil = gIYIndx+1;
while(sucessGIY.urls.length > whil){
if(maxDnld > dnlded){
var toque = new Object;
toque.live = sucessGIY.lives[whil];
toque.name = sucessGIY.titles[whil];
toque.link = sucessGIY.urls[whil];
toque.ytLink = sucessGIY.urls[whil];
//toque.duration = sucessGIY.durations[whil];
download(fmsg,toque);
dnlded++;
};
whil++;
}; //whil end
var whil = 0;
while(gIYIndx > whil){
if(maxDnld > dnlded){
var toque = new Object;
toque.live = sucessGIY.lives[whil];
toque.name = sucessGIY.titles[whil];
toque.link = sucessGIY.urls[whil];
toque.ytLink = sucessGIY.urls[whil];
//toque.duration = sucessGIY.durations[whil];
download(fmsg,toque);
dnlded++;
};
whil++;
}; //whil end
sng.live = sucessGIY.lives[gIYIndx];
sng.name = sucessGIY.titles[gIYIndx];
sng.ytLink = sucessGIY.urls[gIYIndx];
//sng.duration = sucessGIY.durations[gIYIndx];
//var ytinf = ytInfo(fmsg,sng.ytLink,sng.live);
var ytinf = ytInfo(fmsg,sng.ytLink,false,[]);
//ytinf.catch(function(err){console.log("ERROR f-stream l-ytinf.catch err: "+err)});
//dlm.catch(sndMessag(fmsg,"failed to download: "+sng.name+" :apologiez"));
//dlm.catch(console.log("failed to download: "+sng.name+" :apologiez"));
ytinf.then(function(resultYtinf) {
console.log("ytinf: "+JSON.stringify(resultYtinf));
sng.ytInfo = resultYtinf.info;
sng.ytFormat = resultYtinf.format;
sng.directLink = resultYtinf.link;
if(special === "non"){
if(sng.live === true){
sndMessag(fmsg,"jifbot dosent download livestreams yet. this is planned to be added");
//var srm = strmLive(fmsg,sng,VoicConStrem);
//srm.catch(moveon(fmsg,sng,false));
//srm.catch(console.log("ERROR f-stream l-strmLive srm.catch"));
}else{
var dlm = dnlod(fmsg,sng.directLink,sng.name);
//dlm.catch(sndMessag(fmsg,"failed to download: "+sng.name+" :apologiez"));
dlm.catch(console.log("failed to download: "+sng.name+" :apologiez"));
};
};

}); //ytinf.then end

}); //url.then end

}; //!sng.ytLink end
if(sng.ytLink){
//var ytinf = ytInfo(fmsg,sng.ytLink,sng.live);
var ytinf = ytInfo(fmsg,sng.ytLink,false,[]);
//ytinf.catch(function(err){console.log("ERROR f-stream l-ytinf.catch err: "+err)});
ytinf.catch(function(err){moveon(fmsg,sng,false)});
ytinf.then(function(resultYtinf) {
sndMessag(fmsg,"Downloading: "+sng.name);
console.log("ytinf: "+JSON.stringify(resultYtinf));
sng.ytInfo = resultYtinf.info;
sng.ytFormat = resultYtinf.format;
sng.directLink = resultYtinf.link;
if(special === "non"){
if(sng.live === true){
sndMessag(fmsg,"jifbot dosent download livestreams yet. this is planned to be added");
//var srm = strmLive(fmsg,sng,VoicConStrem);
//srm.catch(moveon(fmsg,sng,false));
}else{
var dlm = dnlod(fmsg,sng.directLink,sng.name);
//dlm.catch(sndMessag(fmsg,"failed to download: "+sng.name+" :apologiez"));
dlm.catch(console.log("failed to download: "+sng.name+" :apologiez"));
};
};

}); //ytinf.then end
}; //sng.ytLink end
}); //dl.catch end

//audio end
//video
if(special == "video"){
dnl = dnlod(fmsg,song,song,true)

dnl.catch(function() { //then 1

var gIY = getInfoYoutube(fmsg,song);
gIY.then(function(sucessGIY) { //then 2
if(sucessGIY.urls[0].slice(sucessGIY.urls[0].indexOf("|")+1) == "false"){ //if live = true
console.log("url[0]: "+url[0]);
if(sucessGIY.urls.length > 1){sndMessag(fmsg,"this was a playlist, due to limited bandwith only the first song in the playlist will be downloaded")};

titl = sucessGIY.urls[0].slice(0,sucessGIY.urls[0].indexOf("|"));
console.log("title: "+titl);
var ytinf = ytInfoVideo(fmsg,sucessGIY.urls[0].slice(0,sucessGIY.urls[0].indexOf("|")),false);

ytinf.then(function(resultYtinf) { //then 4
console.log("ytinf: "+JSON.stringify(resultYtinf));
var dnld = dnlod(fmsg,resultYtinf.link,titl,true)

dnld.catch(console.log("CATCH f-download l-dnld err")); //catch 4 end

ytinf.catch(console.log("CATCH f-download l-ytinf err")); //catch 3 end

gIY.catch(console.log("CATCH f-download l-url err")); //catch 2 end

}); //then 3 end
}; //live = false end
}); //then 2 end
}); //then 1 end

}; //special = video
//video

//service logic end

}; //donwload end
//****//****//****//****//****//****//****//****//****//****//****//
//mp3TOmp4 //make this convert from fileformat x to fileformat y example function convert(source,outputformat)
//ignore above line just use ffmpeg convert auto detects input converts most things anyway.
function mp3TOmp4 (fmsg) {
if(!fmsg){fmsg = message};
console.log("!!mp3TOmp4 called!!");
  sndMessag(fmsg,"Converting files in mp4");

  fs.readdir("Music/mp4", (err, mp4files) => {
    if(err){

    }
    else{
    mp4files.forEach(mp4file => {
      console.log(mp4file);
      mp4mp3 = "Music/"+"converted/"+mp4file+"converted"+".mp3"
      mp4mp4 = "Music/"+"mp4/"+mp4file
      ffmpegsource = new ffmpeg({source:mp4mp4})
      ffmpegsource.setFfmpegPath("ffmpegstatic/bin/ffmpeg.exe")
      console.log("Converting");
      ffmpegsource.saveToFile(mp4mp3)
      console.log("Sucess");
      console.log("File has been converted with name "+mp4mp3);
      sndMessag(fmsg,"Done");
      indexmusic(fmsg);
    });
}
})
};
//mp3TOmp4
//****//****//****//****//****//****//****//****//****//****//****//
//functions end
//****//****//****//****//****//****//****//****//****//****//****//****//
}; //cluster end
//****//****//****//****//****//****//****//****//****//****//****//****//****//
