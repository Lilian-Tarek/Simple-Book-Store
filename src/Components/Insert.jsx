import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { InsertBooks } from '../Store/BookSlice';
import { LogInOut } from '../Store/AuthSlice';
export default function Insert() {
  const {isLoggedIn}=useSelector(state => state.author)
  const dispatch = useDispatch();
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  return (
    <>
      <div className='text-center my-2'>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(LogInOut())}
        >
          Login
        </button>
      </div>
      <form
        className="col-4 p-3 border border-dark rounded my-3"
        onSubmit={(e) => {
          e.preventDefault();
          const BookData = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value
          };
          dispatch(InsertBooks(BookData));
          title.current.value = null;
          price.current.value = null;
          description.current.value = null;
        }}
      >
        <h1>Insert Book</h1>
        <div className="my-2">
          <label htmlFor="title" className="my-2">
            Title
          </label>
          <br />
          <input type="text" id="title" className="rounded w-100" ref={title} />
        </div>
        <div className="my-2">
          <label htmlFor="price" className="my-2">
            Price
          </label>
          <br />
          <input
            type="number"
            id="price"
            className="rounded w-100"
            ref={price}
          />
        </div>
        <div className="my-2">
          <label htmlFor="price" className="my-2">
            Description
          </label>
          <br />
          <textarea id="desc" className="rounded w-100" ref={description} />
        </div>
        <button className="btn btn-primary" disabled={!isLoggedIn}>
          Submit
        </button>
      </form>
    </>
  );
     
}
