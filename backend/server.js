require('dotenv').config();

const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
