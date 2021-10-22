// React element type:string,function,class
// Function dùng làm component đặt tên viết hoa chữ cái đầu
// Class component => function
// Function component =>funtion
const root = document.querySelector("#root");
// function component
function Header() {
  return <div className="header">new header</div>;
}
// class component
class Content extends React.Component {
  render() {
    return <div className="content">new content</div>;
  }
}
class Footer extends React.Component {
  render() {
    return <div className="footer">new footer</div>;
  }
}
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
// function component
// function PostItem() {
//   return arr.map((el) => {
//     return (
//       <div className="post-item">
//         <img src={el.img} style={{width:'250px',height:'150px'}}/>
//         <h2 className="post-title">{el.name}</h2>
//         <p className="post-desc">{el.desc}</p>
//         <p className="post-published">Một ngày trước</p>
//       </div>
//     );
//   });
// }
class PostItem extends React.Component {
  render() {
    return arr.map((el) => {
      return (
        <div className="post-item">
          <img src={el.img} style={{ width: "250px", height: "150px",borderRadius:'5px'}} />
          <h2 className="post-title">{el.name}</h2>
          <p className="post-desc">{el.desc}</p>
          <p className="post-published">Một ngày trước</p>
        </div>
      );
    });
  }
}
const app = (
  <div className="posts-list">
    <PostItem />
  </div>
);
console.log(app);
// reactDom render
ReactDOM.render(app, root);
