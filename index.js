const e = require('express');
const express = require('express');
const app = express();

app.use(express.json());

//simple user data
let users =
 [ ]
       
//GET all users
app.get('/users',(req,res)=>{
    res.json(users); //fixed from res.join(users) to res.json(users
});
//POST - Add a new user
app.post('/users',(req, res) => {
    const newUser = { id: users.length + 1, ...req.body,
        name:"name", ...req.body,
       
    };
    users.push(newuser);
    res.status(201).json(newuser);
   
});
//PUT - update a user
app.put('/users/:id',(req,res)=>{
    const user = users.find(u=> u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message:"user not found" });
    user.name = req.body.name|| user.name;
    user.email = req.body.email|| user.email;c

    res.json(user);
});

//DELETE -Remove a user
app.delete('/user/:id',(req,res)=>{
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.json({message:'user deleted'});
});


   // start the Server
   app.listen(8000, () => console.log("server is running on port 8000"))