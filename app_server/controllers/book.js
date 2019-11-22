var booksArray=[
    {
    name:"Half Girlfriend",genre:"Love Story",author:"Chetan Bhagat"
  },
  {
    name:"Superman",genre:"Action",author:"Joe Shuster"
  },
  {
  name:"Sin City",genre:"Comic",author:"Frank Miller"
  },
    {
  name:"Harry Potter",genre:"Cartoons",author:"J. K. Rowling"
  },
{
  name:"Pride and Prejudice",genre:"Romantic",author:" Jane Austen"
  }

];

  const book = function(req, res){
      res.render('list-display', { books: booksArray });
    };
    
    module.exports = {
        book    
    };