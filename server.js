var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:5050/
app.get('/', function(req, res) {
  res.sendfile('test/start_page.html');
});

app.use(express.static(__dirname + '/test'));

// запускаем сервер на порту 8080
app.listen(5050);
// отправляем сообщение
console.log('Server running on port 5050');