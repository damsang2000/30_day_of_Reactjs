// 1.github,NPMJS,UNPKG
// 2.Add React to website
// 3.Official docs

// 1
// -github nơi lưu trữ mã nguồn thư viện Reactjs
// -NPMJS nơi công bống thư viện để người dùng install
// -UNPKG nơi lấy link cdn thư viện reactjs

// 1.React.createElement()=> React element
// 2.So sánh với document.createElement()=>Dom element
// 3.Thay đổi:id,className,style,...
// 4.Thêm:text,HTML
// 5.Tạo
// <h1 title='hello' class='heading'>Hello guys</h1>
const root = document.querySelector("#root");

// React create element
const ulReact = React.createElement(
  "ul",
    null, 
  React.createElement('li',null,'Javacripts'),
  React.createElement('li',null,'ReactJS')
);
// React-DOM
ReactDOM.render(ulReact, root);
