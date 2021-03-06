import React from "react";

const Stores = (props) => {
  const { stores } = props;

  const url = "http://localhost:3000/stores/";
  return (
    <>
      <h1>Stores</h1>
      <a href="/stores/new">Create a Store</a>
      {stores.map((store) => (
        <>
          <p>{store.name}</p>
          <a href={url + store.id}>show</a>
          <br />
          <a href={url + store.id} data-method='delete'>delete</a>
        </>
      ))}
    </>
  );
};
export default Stores;
