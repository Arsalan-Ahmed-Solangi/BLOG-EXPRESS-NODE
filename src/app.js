  
  //**Start of Import Modules******//
  const express = require('express');
  const app = express();
  const path = require('path');
  const hbs  = require('hbs');
  const routes = require('./routes/routes');
  //**End of Import Modules*****//

  //**Start of Port No***//
  const port = process.env.PORT || 3000;
  //**End of Port No****//

  //**Start of Use Static Website****//
  const public = path.join(__dirname,'../public');
  //**End of Use Static Website*****//

  //**Start of Setting View HBS****//
  app.set('views',path.join(__dirname,'../templates/views'))
  app.set('view engine','hbs');
  //**End of Setting View HBS****//

  //**Start of Set Partials***//
  hbs.registerPartials(path.join(__dirname,'../templates/partials'));
  app.use(express.static(public));
  //**End of Set Partials****//

  
  //**Start of Set Routes***//
  app.use('',routes);
  //**End of Set Routes***//


   //**Start of Listening Port***//
   app.listen(port,()=>
   {
        console.log(`Listening Port No on ${port}`);
   });
  //**End of Listening Port****//