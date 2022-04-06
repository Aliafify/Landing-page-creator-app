// Users Contents'
  users = [
     {username:"ali",password:"Alaraby93",email:"ali.afify93746@gmail.com",role:"user",open:true,date:"1/1/2020"
           ,phone:  "+201210949604",url:"ali0",id:0,clicks:0,adsId:"",sendTo:"",
           style:  {backgroundColor:"#fff",background:"/uploads/React-Blogs.png",titleColor:"#333333",titleSize:"40px",disColor:"#333333",disSize:"19",product:"https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-beauty-cosmetics-product-design-png-image_3350331.jpg",wh:"inline-block",ph:"inline-block"},
           content:{title:"العنوان.......",discription:"ادخل محتوى الصفحة هنا....",whatsapp:"201210949604",logo:"https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-beauty-cosmetics-product-design-png-image_3350331.jpg"}
           },
           {username:"aliafify",password:"Alaraby93",email:"physics9374@gmail.com",role:"admin",
           phone:  "+201210949604",whatsapp:"201210949604",id:1
           
           }  
        ];
      
// Require Express to run server and routes
  
const express=require('express');
const app =express();
const fileUpload = require('express-fileupload');
const path = require("path");

//const mongoose =require('mongoose');
// app.use(express.static("client/src"))

const cors=require("cors");
app.use(cors());

// Start up an instance of app 

/* Middleware*/

const bodyParser=require("body-parser");


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.resolve(__dirname, "./client/build")));

 
// Initialize the main project folder

const port=process.env.PORT||3030;

// Setup Server 

app.listen(port,(err)=>{
   if(err){
       
       console.log('error with server');
    }else{
        console.log('server runing on port'+port);
    }
    
}) ;
/*send user data */ 
/*get request */
app.get('/getRout', sendData)
// Callback function to complete GET '/all'
function sendData (req, res) {
    res.send((users))
}


app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"||"./client/public/index.html"),function(err){
        if(err){

            res.status(500).send(err)
        }
    })
})
app.post("/create",async ( req,res)=>{
    try{

        const newUser = await req.body;
        const checkUser= users.filter(u=>u.email===newUser.email);
        
        if(checkUser.length===0){
            
            const newUserId=await users.length;
            users[newUserId]= await{...newUser,id:newUserId};
            
            res.status(200).send(users[newUserId]);
           
        } 
        else{res.status(400).send(false);
            console.log("false");
                
        } 
    }catch(err){
        console.error(err)
    }
  
})
app.post("/login",authenticat);
function authenticat(req,res){
    const userCredentials=req.body;
    try{
        const userInfo=users.filter(u=>u.email===userCredentials.id);
        
        const userData= {...userInfo[0]};
       if(userCredentials.pass===userData.password){

           res.send(userData);
           res.end();
       } 
       else{ 
           const err ="password isn't correct,,,try again";
           res.status(300).send(err);
       } 
    }catch(err){ 
     const e="this email adress isn't registered"
    res.status(404).send(e);

    }
         
}


//editing any single property of user 

app.post("/editUser",editUserProperty);
function editUserProperty(req,res){
    try{
        var property=req.body.stateProperty
        const value   =req.body.value;
        const id=req.body.id;
        if(users[id].style[property]){
            users[id].style[property]=value;
            res.send(users[id]);
        }
        else if(users[id].content[property]){ 
            users[id].content[property]=value; 
            res.send(users[id]);
        }
        else{
            users[id][property]=value
            
            res.send(users)
           
        }
    }catch(err){
        res.send(console.error(err));
    }


} 
app.post("/edit",editProperty);

function editProperty(req,res){
    try{
        var property=req.body[0];
        const keys=Object.keys(property);
        const id=req.body[1];
        keys.map(k=>{users[id][k]=property[k]}) 
        console.log(users[id]);
        res.send(users[id])
           
        
    }catch(err){
        res.send(console.error(err));
    }


} 
// Upload Endpoint
app.post('/upload', (req, res) => {
    
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    } 
    const property=req.body.property;
    const id=   req.body.id;
    const file = req.files.file;
    
     file.mv(`${__dirname}/client/public/uploads/${file.name}` , err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } 
          
        users[id].style[property]=`/uploads/${file.name}`;
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`,user:users[id] });
        
          
    });
  });
  app.post("/del", (req, res) =>{
      try{

          const id=req.body.id;
          users=users.filter( (u,index) => index != id ); 
          res.status(200).send(users);
      }catch(err){
          console.log(err)
          
      }
  })    

  app.get(`/script/:id`,(req,res)=>{
    const id =req.params.id;
    const user=users[id];
    const adsId=user.adsId; 
    const sendTo=user.sendTo;
    res.type(".js");
    res.send(`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'AW-${adsId}');
  

    `);
    
  });
  app.get(`/script1/:id`,(req,res)=>{
    const id =req.params.id;
    const user=users[id];
    const adsId=user.adsId; 
    const sendTo=user.sendTo;
    res.type(".js");
    res.send(`
    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-${adsId}/${sendTo}',
            'event_callback': callback
        });
        return false;
      }
      
  

    `);
    
  })
//   app.get('/home',(req,res)=>{
      
//       res.send((home));
//   });
// const  home={policy:"policy"};
 
//   app.get('/hom',(req, res)=> {
     
//     res.send("hi")
//  } )
// Callback function to complete GET '/all'

 