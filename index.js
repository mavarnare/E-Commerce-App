const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/cart');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ['asd+64dc+d+c+ds2w+6vdf64v65f']
    })
);

app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
    console.log("Listening");
});