// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb+srv://sharjith_ambadi:Sharjith_Ambadi@cluster0.ytiwyis.mongodb.net/sharjith_ambadi?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  const mongoose = require("mongoose");
  //Write missing code 
  mongoose.connect('mongodb+srv://sharjith_ambadi:Sharjith_Ambadi@cluster0.ytiwyis.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
  }).catch((res)=>{
    console.log('DB not connected')
  })