/*<!--     Author- Ankit Mahendru       -->
<!--     StudentID-301205519     -->
<!--     Last Updated on 28/09/2021      -->*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
