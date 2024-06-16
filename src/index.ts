import express from 'express';
import cors from 'cors';

import customerTypeRoutes from './routes/customerType';
import accountIndustryRoutes from './routes/accountIndustry';
import teamRoutes from './routes/team';
import productLineRoutes from './routes/productLine';

const app = express();
app.use(cors());

app.use('/api/customer-type', customerTypeRoutes);
app.use('/api/account-industry', accountIndustryRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/product-line', productLineRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
