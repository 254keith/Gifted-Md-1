const { gifted } = require('../gifted/gifted');
const traduire = require("../gifted/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




gifted({nomCom:"gift",reaction:"📡",categorie:"Ai"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("Yes!\n _I'm listening to you._")}
    //var quest = arg.join(' ');
  try{
    
    
const message = arg.join(' ');
 const response = await fetch(`http://api.brainshop.ai/get?bid=181966&key=UZQRgrdCWJhZGbdx&uid=[uid]&msg=${message}`);
    const data = await response.json();
await repondre(data.cnt);
    
} catch {
repondre('something went wrong...')

}
  
  });  



  gifted({ nomCom: "dalle", reaction: "📡", categorie: "Ai" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const data = `https://api.maher-zubair.tech/ai/dalle?q=${image}`;
      
    
      let caption = '*ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*';
     
     
        zk.sendMessage(dest, { image: { url: data }, caption: caption }, { quoted: ms });
      
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
  gifted({ nomCom: "gpt", reaction: "📡", categorie: "Ai" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/chatgptv4?q=${question}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

gifted({ nomCom: "gemini", reaction: "🤗", categorie: "Ai" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Hello am *Gifted-Md Gemini.* an Ai developed by Gifted Tech.\n\n What help can I offer you today?.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const gemi = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/chatgpt3?q=${gemi}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

gifted({ nomCom: "calc", reaction: "🔢", categorie: "General" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    
      if (!arg || arg.length === 0) {
        return repondre(`Please insert maths calculations like 100000+2024.\n\nNOTE: Use "(/)" for division and "(*)" for multiplication or letter x`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const cal = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/mathssolve?q=${cal}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 


  });

