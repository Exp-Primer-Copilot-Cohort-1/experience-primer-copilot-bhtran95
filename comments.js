// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Create comments array
const comments = [];

// GET method
app.get('/', (req, res) => {
  res.render('index', { comments });
});

// POST method
app.post('/', urlencodedParser, (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.redirect('/');
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

```pug
// Path: views/index.pug
html
  head
    title Comments
  body
    h1 Comments
    form(action='/', method='POST')
      input(type='text', name='comment')
      input(type='submit', value='Add comment')
    ul
      each comment in comments
        li= comment
```

## 3.5.4. Middleware
###