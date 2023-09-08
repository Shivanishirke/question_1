import './App.css';
import {useState} from "react"

function App() {

  // state to store the value of coutry

  const [country, setCountry] = useState({ name: "", value: "", cities:[]});
 
  const countries = [
    {
      name: "India",
      value: 'IN',
      cities: [
        'Delhi',
        'Mumbai'
      ]
    },

    {
      name: "Pak",
      value: 'PK',
      cities: [
        'Lahore',
        'Karachi'
      ]
    },

    {
      name: "Bangaladesh",
      value: 'BG',
      cities: [
        'Dhaka',
        'Chittagong'
      ]
    },

  ];


  return (
    <div className="App">

    {/* 1st Dropdown  */}
       <select 
        value={country}
        onChange={(e) => {
           console.log(e.target.value);
           setCountry(e.target.value)
       }}
       >
           {
                countries.map((item, index) => {
                     return  <option value={index}>{item.name}</option>
                })
           }
       </select>


     {/* 2nd Dropdown  */}


     <select value={country}>
  { countries[country].cities.map((item, index) => {
        return <option value={index}>{item}</option>;
      })
  }
       </select>


       
    </div>
  );
}

export default App;
