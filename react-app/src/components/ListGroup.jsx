import { useState } from "react";
import Alert from "./Alert";

const props = {
  ListItems: [],
  heading: "",
  onSelectedItem: () => {},
};

function ListGroup({ ListItems, heading, onSelectedItem } = props) {
  const getMessage = () => {
    return ListItems.length === 0 && <p>No Item Found.</p>;
  };

  //Creating hook with state
  const [selectedList, setSelectedList] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {getMessage()}
        {ListItems.map((list, index) => (
          <li
            className={
              selectedList === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedList(index);
              onSelectedItem(list);
            }}
          >
            {list}
          </li>
        ))}
      </ul>

      <Alert>
        Hello world!{" "}
        <span className="text-secondary">This is my first app</span>
      </Alert>
    </>
  );
}

export default ListGroup;
