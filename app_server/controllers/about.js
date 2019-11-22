/* GET home page */
const about = function(req, res){
    res.render('about', { title: 'About My Site' });
  };
  
  module.exports = {
    about
  };