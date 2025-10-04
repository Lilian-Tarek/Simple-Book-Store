import React from 'react'
import { useSelector } from 'react-redux';
export default function Details() {
    const {BookInfo } = useSelector((state) => state.books);
  return (
    <div>
      <h1>Book Details</h1>
      <div className="border border-secondary d-flex justify-content-between rounded p-2 align-items-center flex-column">
        {BookInfo ? (
          <>
            <h3>{BookInfo.title}</h3>
            <h1>Price: ${BookInfo.price}</h1>
            <p>Description:{BookInfo.description}</p>
          </>
        ) : (
          <p>There is No books</p>
        )}
      </div>
    </div>
  );
}
