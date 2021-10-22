// Cú pháp JSX
// JSX(Javacripts XML)
// Cần Babel để dùng JSX
// Khi làm JSX mà muốn code javacripts dùng {}
// JSX không phải HTML

const root = document.querySelector("#root");
const courses = [
  {
    name: "HTML,CSS",
  },
  {
    name: "Responsive web design",
  },
  {
    name: "ReactJS",
  },
];
const ul = (
  <ul>
    {courses.map((el, index) => (
      <li key={index}>{el.name}</li>
    ))}
  </ul>
);
// console.log(ul)

ReactDOM.render(ul, root);
