const express =  require('express');
const app = express();
const calculatorRouter = require('./v1/routers');
const PORT = 3000;

app.use(express.json());
app.use('/v1/routers', calculatorRouter);


app.listen(PORT, () => {
   console.log(`server is running on port ${PORT}`);
})
