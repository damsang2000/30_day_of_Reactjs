// Props trong Reactjs
// React element
// sử dụng props giống như với attribute của thẻ HTML
// 2 props class,for =>className,htmlFor
// Phải tuân theo quy ước có sẳn
const arr = [
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
// example
function PostItem({element}) {
    console.log(element)
  return (
    <div className="post-item">
      <img src={element.img} style={{ width: "250px", height: "150px" }} />
      <h2 className="post-title">{element.name}</h2>
      <p className="post-desc">{element.desc}</p>
    </div>
  );
}
// React component
// Sử dụng props giống như đối số cho component
// Tư do đặt tên props
//    -Đặt tên theo camelCase
//    -Có thể bao gồm dấu gạch ngang
// Example

function App() {
  return <div className="Wrapper">
  {
      arr.map((el,index) => (
        <PostItem 
            key={index}
            element={el}
        />
      ))
  }</div>;
}
ReactDOM.render(<App />, document.querySelector("#root"));

// Chú ý
// -prop key là prop đặt biệc
// -prop cơ bản là đối số của component
//   -có thể là bất cứ kiểu dữ liệu gì
// Sử dụng destructuring
