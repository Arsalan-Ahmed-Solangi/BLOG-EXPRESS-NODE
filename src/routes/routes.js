  
  //**Start of Import Modules******//
  const express = require('express');
  const routes = express.Router();
  //**End of Import Modules*****//


  //**Start of Home Page****//
  routes.get('/',(req,res)=>
  {
    res.render('index');
  });
  //**End of Home Page****//

  //**Start of About Page****//
  routes.get('/about',(req,res)=>
  {
    res.render('about');
  });
  //**End of About Page****//
  
  //**Start of Contact Page****//
  routes.get('/contact',(req,res)=>
  {
    res.render('contact');
  });
  //**End of Contact Page****//

  //**Start of Blog Page****//
  routes.get('/blog',(req,res)=>
  {
    res.render('blog');
  });
  //**End of Blog Page****//

  //**Start of Post Details****//
  routes.get('/post-details',(req,res)=>
  {
    res.render('post-details');
  });
  //**End of Post Details****//

  //**Start of Show Error Page****//
  routes.get('*',(req,res)=>
  {
    res.render('error',{message:"Opps! Page Not Found!"});
  });
  //**End of Show Error Page*****//


  //**Exporting the Routes!***//
  module.exports = routes;