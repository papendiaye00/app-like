import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";
import"./main.css";




// const elementJsx = <h1>Ceci est un titre</h1>
// const Application = () => {
  // return <div>
  //   <h1>Voici un composant</h1>
  //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ea in consequatur alias explicabo ducimus modi laborum distinctio totam voluptatem fugiat dolores, rem voluptas molestias molestiae nulla similique! Tempora, blanditiis.</p>
  // </div>

// }

// class Application extends React.Component {
//   render () {
//    return( <div>
//     <h1>Voici un composant</h1>
//     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ea in consequatur alias explicabo ducimus modi laborum distinctio totam voluptatem fugiat dolores, rem voluptas molestias molestiae nulla similique! Tempora, blanditiis.</p>
//   </div>
//    );
//   }
// }



ReactDom.createRoot(document.getElementById("root")).render(<App/>);