const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Assuming the async function is exported from 3-read_file_async.js

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Assuming 'database.csv' is passed as an argument to countStudents function
    countStudents('database.csv')
      .then((studentsData) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');

        // Display the number of students in each field and the list of first names
        Object.entries(studentsData).forEach(([field, students]) => {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        });

        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

module.exports = app;