const getTheTitles = function(books) {
    return books.reduce( (booksTitles, book) => {
        booksTitles.push(book.title);
        return booksTitles;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
