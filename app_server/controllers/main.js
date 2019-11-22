/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Online Book Store' });
};

module.exports = {
  index
};