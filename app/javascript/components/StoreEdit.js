import React from "react";

const StoreEdit = ({ store }) => {
  const { name, hours, location } = store;
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";
  const defaultHours = hours ? hours : "";
  return (
    <>
      <h1>Store Edit</h1>
      <form action={`/stores/${store.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          placeholder="Store Name"
          defaultValue={defaultName}
          name="store[name]"
        />
        <input
          type="text"
          placeholder="Store Location"
          defaultValue={defaultLocation}
          name="store[location]"
        />
        <input
          type="number"
          placeholder="Store Hours"
          defaultValue={defaultHours}
          name="store[hours]"
        />
        <button type="submit">Edit</button>
      </form>
    </>
  );
};
export default StoreEdit;
