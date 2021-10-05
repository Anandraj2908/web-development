const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("CONNECTION OPEN")
})
.catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    /* name:{
        type: String,
        required: true
    } ,
    price:{
        type:Number
    } */
    

    title:String,
    author:String,
    body: String,
    comments:[
        {
            body:String,
            tip:Number
        }
    ],
    hidden:Boolean,
    meta:{
        votes:Number,
        favs: Number
    }
});
 
/* productSchema.methods.greet =function(){
    console.log("HELLO!!!");
    console.log(`- from ${this.title}`);
}; */

productSchema.methods.toggleOnHide = function(){
    this.hidden =!this.hidden;
    
}

productSchema.methods.addComment =function(addCmnt) {
    this.comments.push(addCmnt);
    return this.save();
}
productSchema.statics.fireSale = function() {
    return this.updateMany({},{hidden:true,body:'AAA'});
}

const Product = mongoose.model('Product', productSchema);

const findProduct =async () => {
   const foundProduct= await Product.findOne({title:'Alchemist'});
   console.log(foundProduct);
   await foundProduct.toggleOnHide();
   console.log(foundProduct);
   await foundProduct.addComment({"body":'i will do it', "tip":333});
}
/* findProduct(); */
Product.fireSale().then( res => console.log(res));


/* const bike= new Product (
    {
    title:'Alchemist',
    author:'Paulo',
    body:'Body area',
    comments:[{
                "body":'i dont know',
                "tip":15
              },
              {
                "body":'i know a little bit',
                "tip":64
              }],
    hidden:false ,
    meta:{
           votes:54535,
            favs:435
         }})
bike.save()
.then(data => {
    console.log("IT WORKED!")
    console.log(data);
})
.catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
}) */