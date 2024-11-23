import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(10));
    console.log("Setting items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default List;
