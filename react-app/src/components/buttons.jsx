//Create a props
const btnProps = {
  children: "",
  color: "",
  onClick: () => {},
};
function ButtonGroup({ children, color, onClick } = btnProps) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default ButtonGroup;
