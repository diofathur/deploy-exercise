let express = require('express')
let app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello ADINUSA - diofathurr'));
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
