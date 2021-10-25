// **handle DOM Event
// ? Create Component App
// ? Component viết hoa chữ cái đầu lên
// ?
const $ = document.querySelector.bind(document);
const courses = [
  {
    name: "Javacripts",
    img: "https://vietnix.vn/wp-content/uploads/2021/07/javascript-la-gi.webp",
    desc: "Bạn có kiến thức ngôn ngữ lập trình Javacripts",
  },
  {
    name: "Reactjs",
    img: "https://wiki.tino.org/wp-content/uploads/2021/09/pasted-image-0.png",
    desc: "Bạn có kiến thức ngôn ngữ lập trình Reactjs",
  },
  {
    name: "Nodejs",
    img: "https://www.redprismgroup.com/img/nodejs2.jpeg",
    desc: "Bạn có kiến thức ngôn ngữ lập trình Nodejs",
  },
];
// **UI Component
function CoursesItem({ props, onClick }) {
  return (
    <div>
      <img src={props.img} style={{ width: "150px", height: "100px" }} />
      <h1 onClick={() => onClick(props)}>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
function App() {
  const handleClick = (course) => {
    alert(course.name);
  };
  return (
    <div className="Wrapper">
      {courses.map((course, index) => (
        <CoursesItem 
          key={index} 
          props={course} 
          onClick={handleClick} />
      ))}
    </div>
  );
}
ReactDOM.render(<App />, $("#root"));
