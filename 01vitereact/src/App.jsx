import Chai from './Chai'



function App() {

  const username = "Samandeep Singh"

  return (
    // <> You can return only one element inside jsx --> React fragments
   <>
    <h2>Good Morning {username}</h2> {/*curly brace will be treated as variable --> it should be final value*/}
    </>
  )
}

export default App
