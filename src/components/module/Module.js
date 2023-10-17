import { useEffect } from 'react';
import { add, multiply, subtract, square } from './math.js';




function Module () {

  const importMath = async () => {
      const module = await import("./math.js");
      console.log("Add: ", module.add(1, 2));
      console.log("Multiply: ", module.multiply(3, 2));
  }

  useEffect(() => {

    /*************************** */
    /**** Or with async/await ****/
    /*************************** */
    const button = document.getElementById("btn");
    button.addEventListener("click", async () => {await importMath()});
    
    return (
      button.removeEventListener("click",  async () => {await importMath()})
    )
  },[])


  return (
    <>
    <h4>Test</h4>
    <button id='btn'>button</button>
    <button onClick={importMath}>button</button>
    </>
  )
}


export { add, multiply, subtract, square };
export default Module
