
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Countries/Country';


// main app
function App() {

  return (
    <div className="App">
        <Obj></Obj>
    </div>
  );
}

function Obj(){
    const [count, setCount] = useState([]);
  useEffect( () =>{
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCount(data));
    },[]);

  return(
    <div className="">
      <h1>count:{count.length}</h1>
      <div className="container">
        {
          count.map((count => <Country 
            count={count}
            key={count.cca3}></Country>))
        }
      </div>
    </div>
  )
}



export default App;








// const array = ["kabila","nur","hassan","rose","kibriya"];
// const array2 = [
//           {name:"khanna", job:"swiper"},
//           {name:"mousumi", job:"it"},
//           {name:"jalak", job:"marketing"},
//           {name:"kanika", job:"steel"},
//      ];