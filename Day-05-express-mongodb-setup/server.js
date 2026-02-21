// import express from 'express'

const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require ('body-parser');
app.use(bodyParser.json()); // req.body

const person = require('./models/person');
const menuItem = require('./models/Menuitem')

app.get('/', (req, res) => {
  res.send('Welcome to my hotel... How i can help you ?, we have list of menus')
})

//Post route to add a person
app.post('/person', async (req, res) =>{
  try{
    
    const data = req.body // Assuming the request body contains the person data

  // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);
   
  // Save the new Person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    
  }

})

//GET method to get the person
app.get('/person', async(req, res) =>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// //Post route to add a menuItem
// app.post('/menuItem', async (req, res) =>{
//   try{
    
//     const data = req.body // Assuming the request body contains the person data

//   // Create a new menuItem document using the Mongoose model
//     const newmenuItem = new menuItem(data);
   
//   // Save the new menuItem to the database
//     const response = await newmenuItem.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
    
//   }

// })



app.post('/menuItem', async (req, res) => {
  try {

    console.log(req.body) 

    const data = req.body

    const newmenuItem = new menuItem(data)

    const response = await newmenuItem.save()
    console.log('data saved')

    res.status(200).json(response)

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


//GET method to get the menuItem
app.get('/menuItem', async(req, res) =>{
  try{
    const data = await menuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

app.listen(3000, () => {        
  console.log('listening on port 3000');
})
