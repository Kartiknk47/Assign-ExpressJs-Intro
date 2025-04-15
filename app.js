const express = require('express');
const colors = require('colors');

const app = express();

app.use(express.json())
// app.use(cors())

const port = 3000;

app.get('/api', (req, res) => {
    res.status(202).send({ message: 'Server running successfully', greet: "Hello user", success: true });
});

app.post('/api',(req, res)=>{
    
    console.log(req.body)
    res.status(202).send({ message: 'This is post', greet: "Hello post user", success: true });
})

app.delete("/api/:ID", (req, res) => {
    console.log(req.params);
    res.status(200).send("This ID is requested");
});

app.put('/api/:id', (req, res) => {
    console.log(req.params);
    res.status(200).send(`PUT request received for ID: ${req.params.id}`);
});

app.get('/about', (req, res) => {
    res.send("This is About");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact");
});


const products  = [{id:1, name:"iPhone15pro", category:"Electronics", price:120000, instock:true},
{id:2, name:"iPhone16pro", category:"Electronics", price:120200, instock:true}
]

app.get("/getAllProducts",(req,res)=>{
res.status(200).send({products:products, success:true})
})

app.get("/getProductsByID/:ID",(req,res)=>{
    const id = req.params.ID;
    const prod = products.filter(p=> p.id == id)
    res.status(200).send({products:prod, success:true})
})

app.post("/addProducts",(req,res)=>{
    console.log("----", req.body, "-----")
    const newProduct = {id:Date.now(),
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        instock:true
    }

    products.push(newProduct);
    res.send({message: "product added successfully", success:true})
})

app.delete('/deleteProduct/:ID', (req,res)=>{
    const ID = req.params.ID
    index = products.findIndex(p=> p.id == ID)
    if(index == -1){
        res.status(200).send({message:'products Not Found',success:false})
    }
    products.splice(index,1)
    res.status(200).send({message:'products Deleted', success:true})
})


app.put("/updateProduct/:ID",(req,res)=>{
    const ID = req.params.ID
    index = products.findIndex(p=> p.id == ID)
    if (index == -1){
        res.status(200).send({message:'product not found', success:false})
    }
    products[index].price = req.body.price
    res.status(200).send({message:'updated product', success:true})
})



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`.rainbow);
});

// http://localhost:7002/api