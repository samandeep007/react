import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const MyApp = () =>  {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const Saman = {
//   type: 'h1',
//   props: {
//      id: "heading"
//   },
//   children: "My name is Sheila, Sheela kii jawaani"
// }

// const anotherElement = (

//   <a href="https://google.com" target="_blank">Visit Google</a>
// )


const anotherUser = "Samandeep Singh"
const reactElement = React.createElement('a', {href: "https://google.com", target: "_blank"}, "click me to visit google ", anotherUser)



ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <App/>
 </React.StrictMode>
)
