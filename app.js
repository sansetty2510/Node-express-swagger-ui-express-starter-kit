import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from './routes';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


const PORT = 5000;

// swagger setup
const swaggerDefinition = {
  info: {
    title: 'Todos swagger API',
    version: '1.0.0',
    description: 'stater kit for express and swagger',
  },
  basePath: '/',
};
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSdoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, true));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
