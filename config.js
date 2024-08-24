const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["48699514053","918618971837"]; //like 48699514053 
global.OwnerName =  "╶⃝𝙻𝚄𝚇𝙸4𝙺𝙸𝚃𝚂𝚄♱";
global.BotName = "╶⃝𝚃𝙷𝙰𝙽𝙰𝚃𝙾𝚂♱";
global.packname = "╶⃝𝚃𝙷𝙰𝙽𝙰𝚃𝙾𝚂♱";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = ""; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/Lah0hBJn6ro4lXbLJik0Y2 "; 
global.SupportGroupLink = "https://chat.whatsapp.com/ChpEIqZZSKOKyP5XAzOprm"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
