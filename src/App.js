import { useState } from "react";

function App() {
//  const user = {
//     fname: 'aa',
//     lname: 'vv',
//     address: [
//       {name: 'dd', count: 0}
//     ]
//   }

  const [user, setUser] = useState({
    
      fname: 'sada',
      sname: 'ssd',
      address: [
        { 
          count: 0,
          sas: 1
        }
      ]
    
  })

  function Addcount() {
    user.address[0].count++;

    let a = {...user}
    setUser(a)
  }
  function Removecount() {
    user.address[0].count--;

    let a = {...user}
    setUser(a)
  }
  return (
    <div>
      <h1>{user.address[0].count}</h1>
      <button onClick={Addcount}>+</button>
      <button onClick={Removecount}>-</button>
    </div>
  )
}

export default App;
