import React, { useState } from "react";
import "./App.css"

const App = () => {
  const Electronics = [
    {
      id: 1,
      name: "Laptops",
    },
    {
      id: 2,
      name: "Smartphones",
    },
  ];
  const Wear = [
    {
      id: 1,
      name: "Mens wear",
    },
    {
      id: 2,
      name: "womens wear",
    },
  ];
  const [Electronic, setElectronic] = useState([]);
  const [fashion, setFashion] = useState([]);

  const [data, setData] = useState([]);

  const [state, setState] = useState(false);
  const [category, setCategory] = useState("Select a category");
  const handleElectronics = () => {
    setElectronic(Electronics);
    setState(true);
    setCategory("")
   
  };

  const handleFashion = () => {
    setFashion(Wear);
    setState(false);
    setCategory("")
    
  };

  const handleCart = (a) => {
    console.log(a)
    setData((prev) => [...prev, a]);
  };

  return (
    <div>
      <div className="child1">
        <div className="left">
        <h1>Categories</h1>
          <div className="btn">
            <button onClick={handleElectronics}>🖥️ Electronics</button>
            <br />
            <br />
          <button onClick={handleFashion}>🧑‍🤝‍🧑Fashion</button>
          </div>
        </div>
        <div className="right">
        <h1>🛍️Products</h1>
        {category ? "Select a Category" :""}
        {state ? (
          <>
            <table>
              <tbody>
                {Electronic.map((e, key) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {e.name}{" "}
                          <button onClick={() => handleCart(e)}>
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table>
              <tbody>
                {fashion.map((w, key) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {w.name}{" "}
                          <button onClick={() => handleCart(w)}>
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        </div>
        
      </div>
      <div className="cart-container">
        <h1>🛒Cart items {data.length}</h1>
        {data.map((x)=>{
          return (

            <h4 style={{backgroundColor:"whitesmoke",fontFamily:"cursive"}}>{x.name}</h4>
          )
        })}

      </div>
    </div>
  );
};

export default App;
