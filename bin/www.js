var app = require('../app');

app.set('port', 8888);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on ' + server.address().port);
});

