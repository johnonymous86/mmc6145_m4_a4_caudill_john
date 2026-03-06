import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from './actions';

export default function reducer(state, action) {
  switch (action.action) {
    case SEARCH_BOOKS: {
      return {
        ...state,
        bookSearchResults: action.payload,
      };
    }
    case ADD_BOOK: {
      const updatedFavorites = [...state.favoriteBooks, action.payload];
      saveToLocalStorage(updatedFavorites);
      return {
        ...state,
        favoriteBooks: updatedFavorites,
      };
    }
    case REMOVE_BOOK: {
      const updatedFavorites = state.favoriteBooks.filter(
        (book) => book.id !== action.payload
      );
      saveToLocalStorage(updatedFavorites);
      return {
        ...state,
        favoriteBooks: updatedFavorites,
      };
    }
    default:
      return state;
  }
}


function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks));
}