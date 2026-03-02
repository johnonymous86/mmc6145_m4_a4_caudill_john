const storedFavorites = localStorage.getItem('favoriteBooks');

const initialState = {
    bookSearchResults: [],
    favoriteBooks: storedFavorites ? JSON.parse(storedFavorites) : [],
};

export default initialState