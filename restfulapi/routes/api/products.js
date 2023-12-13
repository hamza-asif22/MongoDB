const express = require("express");
let router = express.Router();

// router.get("/",async(req,res)=>{
//     return res.send(["Pen","Pencil"]);
// });

router.get("/", async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product)
            return res.status(400).send("Product with given ID is not Available...!!!");
        return res.send(product);
    }
    catch (err) {
        return res.status(400).send("Invalid ID...!!!");
    }
});


// router.delete('/:id', async (req, res) => {
//     let product = await Product.findByIdAndDelete(req.params.id);

//     return res.send(product);
// });

// module.exports = router;