console.log("test");

const Button = ({ children, className, ...props }) => {
  return `
    <button ${{ ...props }} class="${className}">${children}</button>
    `;
};

// console.log(Button(
//     {
//         children: "Click me",
//         className: "button__clicker"
//      }
// ));
const buttonProps = {
  mousehover: "onMouseHover",
  onclick: "onCLick",
  classname: "className",
  id: "id",
  type: "type",
};

const { mousehover, ...props } = buttonProps;

console.log(props.classname);
