const express = require('express');
const cors = require('cors')
const app = express();
const controller = require('./controller');

app.use(cors());
app.use(express.json());

app.post('/camping/campgrounds/', (req, res) => {
  controller.getCampgrounds(req.body, (err, data) => {
    if (!err) {
      res.status(200).send(data);
    } else {
      console.log('express error', err)
    }
  })
})

const PORT = 3000;
app.listen(PORT, () => console.log('Server listening on port: ', PORT));