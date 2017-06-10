const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
import bodyParser from 'body-parser';
import morgan from 'morgan';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.json({
    data: 'Index'
  });
});

io.on('connection', (socket) => {
  //eslint-disable-next-line no-console
  console.log('client connected');
  socket.on('disconnect', () => {
    //eslint-disable-next-line no-console
    console.log('client disconnected');
  })
});


http.listen(process.env.PORT || 8000, () => {
  //eslint-disable-next-line no-console
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
