import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utilities/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  useEffect(()=>{
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        console.log("HERE COMES BUBBLES! ", res.data)
        // set that data to the colorList state property
        setColorList(res.data);
      })
      .catch(err => {
        console.log("CONTACT YOUR TL!");
      })
  }, []);

  

  return (
    <section>
        <div>
          <ColorList colors={colorList} updateColors={setColorList} />
        </div>
        <div>
          <Bubbles colors={colorList} />
        </div>
    </section>
  );
};

export default BubblePage;
