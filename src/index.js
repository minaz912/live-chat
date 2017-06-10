const app = require('express')();
const http = require('http').Server(app);
import morgan from 'morgan';

app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.json({
    data: 'Index'
  });
});


http.listen(3000, () => {
  //eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
