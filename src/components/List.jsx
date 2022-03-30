import React from "react";
import ListItem from "./ListItem";

function List(props) {
  console.log("Render: List");
  const { list } = props;
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export default React.memo(List);
