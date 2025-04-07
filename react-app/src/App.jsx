import { useState } from "react";
import ButtonGroup from "./components/buttons";
import ListGroup from "./components/ListGroup";
import DismissableAlert from "./components/DismissableAlert";

export default function App() {
  const ListItems = [
    "Montserrado",
    "Grand Bassa",
    "Maryland",
    "River Gee",
    "River Cess",
  ];

  const handleSelectedItem = (items) => {
    console.log(items);
  };

  //Create a hook to keep track of button click
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <ListGroup
        ListItems={ListItems}
        heading={"Counties"}
        onSelectedItem={handleSelectedItem}
      />
      {isVisible === true && (
        <DismissableAlert
          onClose={() => setIsVisible(false)}
        ></DismissableAlert>
      )}
      <ButtonGroup
        color="dark"
        onClick={() => {
          console.log("Button is clicked!");
          setIsVisible(true);
        }}
      >
        Primary Button
      </ButtonGroup>
    </div>
  );
}
