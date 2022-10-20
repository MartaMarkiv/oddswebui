export const sportsBooksFilter = (data, books) => {
    
    const tableData = data.map((game) => {
        const booksList = Object.keys(game.books);
        const filteredBooks = booksList.filter(item => books.indexOf(item) >= 0);

        const updatedBooks = {};
        filteredBooks.forEach(item => updatedBooks[item] = game.books[item]);
        
        return { ...game, books: updatedBooks};
    });

    return tableData;
};