const products = [];
exports.serveForm = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "..", "views", "add-product.html"));
  res.render("admin/add-product", { docTitle: "add-product" , path: "/admin/add-product"  });
}
exports.addProduct =  (req, res, next) => {
  console.log("Form submitted!");
  console.log("Product added:", req.body.title);
  console.log("Price:", req.body.price);
  products.push({ title: req.body.title , price: req.body.price });
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    console.log('Deepak from home page');
    // console.log("Products from admin:", adminData.products);
    // const filePath = path.join(__dirname, '..', '..', 'views', 'shop.html');
    // // console.log('File path:', filePath);
    // res.sendFile(filePath);
    // const products = adminData.products 
    res.render('shop/product-list' , {prods : products , docTitle: 'My products' , path: '/'});
              //  path to view 
}

exports.checkout = (req,res,next)=>{
    res.render('shop/checkout' , {docTitle:'checkout',prods : products})
}

exports.cart = (req,res,next ) =>{
  res.render('shop/cart' , { docTitle:'cart' , prods:products});
}