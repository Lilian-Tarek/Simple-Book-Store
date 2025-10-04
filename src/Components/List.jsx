import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBooks, ReadBooks } from '../Store/BookSlice';
export default function List() {
  const { isLoading, items } = useSelector(state => state.books);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Book List</h1>
      <div className="border border-secondary d-flex justify-content-between rounded p-2 align-items-center flex-column">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {items.length>0?items.map((e) => (
              
                <div className='d-flex justify-content-between w-100 my-1' key={e.id}>
                  <p className="my-0"> {e.title}</p>
                  <div className="buttons d-flex">
                    <button className="btn btn-primary me-2" onClick={()=>{dispatch(ReadBooks(e.id))}}>Read</button>
                    <button className="btn btn-danger" onClick={()=>{dispatch(DeleteBooks(e.id))}}>Delete</button>
                  </div>
                </div>
              
            )):<p>No Books are Available</p>}
          </>
        )}
      </div>
    </>
  );
}
