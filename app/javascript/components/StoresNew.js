import React from "react";

const StoresNew = ({ store }) => {
  console.log(store);
  const { name, hours, location } = store;
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";
  const defaultHours = hours ? hours : "";

  return (
    <>
      <h1>New Store</h1>
      <form action="/stores" method="post">
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={defaultName}
          name="store[name]"
        />
        <input 
          type='text'
          placeholder='Store Location'
          defaultValue={defaultLocation}
          name="store[location]"
        />
        <input
          type='number'
          placeholder='Store Hours'
          defaultValue={defaultHours}
          name="store[hours]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default StoresNew;
