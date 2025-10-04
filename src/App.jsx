
import './App.css'
import Details from './Components/Details';
import Insert from './Components/Insert'
import List from './Components/List';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from "./Store/BookSlice";
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const {error } = useSelector((state) => state.books);
  useEffect(() => {
  dispatch(fetchBooks())
},[])
  return (
    <>
     {error? <div class="alert alert-danger" role="alert">
    {error}
      </div>:""}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <Insert />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <List />
          </div>
          <div className="col-md-6">
            <Details />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
