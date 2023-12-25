const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Expression Evaluator</h1>
        <form action="/evaluate" method="post">
          <label for="expression">Enter Expression:</label>
          <input type="text" id="expression" name="expression" required>
          <button type="submit">Evaluate</button>
        </form>
      </body>
    </html>
  `);
});

// Evaluate expression and send result
app.post('/evaluate', (req, res) => {
  const expression = req.body.expression;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error: Invalid expression';
  }

  res.send(`
    <html>
      <body>
        <h1>Expression Evaluator</h1>
        <p>Expression: ${expression}</p>
        <p>Result: ${result}</p>
        <a href="/">Go back</a>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});