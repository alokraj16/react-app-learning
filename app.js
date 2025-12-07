// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello in world  React"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
// const jsxHeading = <h1 id="heading">Hello jsxHaeding</h1>;
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello h1 tag")
//   )
// );

const Age = () => {
  const ages = 20;
  return (
    <div>
      {ages >= 18 ? (
        <h1 className="heading">My age is:{ages}</h1>
      ) : (
        <h1 className="heading">My age is not valid:{ages}</h1>
      )}
    </div>
  );
};

function Header() {
  return <h1 className="heading">Welcome to My Website</h1>;
}
const Fotter = () => {
  return <h1 className="heading">This is fotter</h1>;
};
const Alok = () => {
  return <h1 className="heading">My Name is ALok</h1>;
};
export { Alok };
export { Header };
export { Fotter };
export default Age;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Age />
    <Alok />
    <Fotter />
  </div>
);
