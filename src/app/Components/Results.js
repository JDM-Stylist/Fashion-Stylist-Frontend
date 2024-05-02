import React, { useState } from 'react';
import data from './Data.json';
import './Results.css'; // Import your CSS file where you define the styles

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div className='cardgroup'>
      <div className='SearchBar'>
        <input id="SearchId" type='text' placeholder='Search Here' onChange={(event) => {
          setSearchTerm(event.target.value);
        }}></input>
      </div>
      <div className="card-container"> {/* Wrapping only cards */}
        {
          data
            .filter((item) => {
              if (searchTerm === "") {
                return; // Return true to show all if search term is empty
              }
              return item.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((item) => (
              <div className="template" key={item.product_id}>
                <img src={item.img1} alt={item.title}></img>
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p> {/* Wrapped description */}
                <p>INR {item.variant_price}</p>
              </div>
            ))
        }
      </div>
      </div>
    </div>
  );
}

export default App;
