// Cú pháp JSX
// JSX(Javacripts XML)
// Cần Babel để dùng JSX
// Khi làm JSX mà muốn code javacripts dùng {}
// JSX không phải HTML
// dùng React.Fragment để wrap element
const root = document.querySelector("#root");
// const courses = [
//   {
//     name: "HTML,CSS",
//   },
//   {
//     name: "Responsive web design",
//   },
//   {
//     name: "ReactJS",
//   },
// ];
const ul = (
  <React.Fragment>
    <h1>javacripts</h1>
    <h1>React</h1>
  </React.Fragment>
);
// console.log(ul)

ReactDOM.render(ul, root);
