import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchBooks = createAsyncThunk("books/fetchBooks", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    
    const response = await fetch("/api/books");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return rejectWithValue(error.message);
  }
});
export const InsertBooks = createAsyncThunk(
  "books/InsertBooks",
  async (NewBook, thunkAPI) => {
    const { rejectWithValue,getState } = thunkAPI;
    try {
      NewBook.author = getState().author.Author;
      const response = await fetch("/api/books", {
        method: "POST",
        body: JSON.stringify(NewBook),
        headers: {
          'Content-Type': 'application/json',
        }
      }
      );
          const data = await response.json();
          console.log(data);
          return data;
    }
    catch (error) {
          console.error("Error:", error);
          return rejectWithValue(error.message);
    }
    
  }
);
export const DeleteBooks = createAsyncThunk(
  "books/DeleteBooks",
  async (ID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`/api/books/${ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      return ID;
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const ReadBooks = createAsyncThunk(
  "books/ReadBooks",
  async (ID, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:9000/books/${ID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const BookSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    BookInfo:null
  },
  extraReducers: (builder) => {
    // get books
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
      state.items = action.payload;

      })
      .addCase(fetchBooks.rejected, (state,action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    // insert
        .addCase(InsertBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(InsertBooks.fulfilled, (state, action) => {
        state.isLoading = false;
      state.items.push( action.payload);

      })
      .addCase(InsertBooks.rejected, (state,action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
        .addCase(DeleteBooks.fulfilled, (state, action) => {
        state.items = state.items.filter((book) => book.id !== action.payload);
      })
      .addCase(DeleteBooks.rejected, (state, action) => {
        state.error = action.payload;
      })
       .addCase(ReadBooks.fulfilled, (state, action) => {
        state.BookInfo =  action.payload;
      })
      .addCase(ReadBooks.rejected, (state, action) => {
        state.error = action.payload;
      })

  }
});

export default BookSlice.reducer;

