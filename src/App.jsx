import React from "react";
const VITE_ID = import.meta.env.VITE_ID;
// console.log(import.meta.env.VITE_ID);
console.log(VITE_ID);

const App = () => {
  return (
    <div>
      App
      {VITE_ID}
    </div>
  );
};

export default App;
