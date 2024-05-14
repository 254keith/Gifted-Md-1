const {gifted}=require("../gifted/gifted")







gifted({nomCom:"reboot",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("*Gifted-Md is Rebooting...*");

  exec("pm2 restart all");
  



});

  gifted({nomCom:"restart",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("*Gifted-Md is Restarting...*");

  exec("pm2 restart all");
  

  



})

