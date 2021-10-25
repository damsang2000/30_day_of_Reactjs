// ** Form component
// ** Boolean,null,undefined không được render
// ** Kết hợp toán tử logic khi render dữ liệu
// ** Get element
const $ = document.querySelector.bind(document);

// const Form={
//     Input(){
//         return <input />
//     },
//     CheckBox(){
//         return <input type='checkbox'/>
//     }
// }
// ** object style
// ** Component Button
function Button({title,href,onClick}) {
    let Component='button'
    const prop={}
    if(href){
        Component='a'
        prop.href=href
    }
    if(onClick){
        prop.onClick=onClick
    }
    return (
        <Component {...prop}>{title}</Component>
    )
}
// Component App
function App() {
//   const type='CheckBox'
//   const Component=Form[type]
  return (
      <div className='wrapper'>
      <Button 
          title='ClickMe'
          href='https://www.youtube.com/watch?v=5SU6P-cqoJw&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=17'
          onClick={()=>alert('welcom my web')}
      />
      </div>
  )
}

// render
ReactDOM.render(<App />, $("#root"));
