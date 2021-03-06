import React from "react";

const Store = ({ store }) => {
  const { id, name, location, hours } = store;
  const url = "http://localhost:3000/stores/";
  
  return (
    <>
      <h1>{name}</h1>
      <a href={url + id + "/edit"}>edit</a>
      <p>Location: {location}</p>
      <p>Hours: {hours} hours</p>
      <a href="/">back</a>
    </>
  );
};
export default Store;
