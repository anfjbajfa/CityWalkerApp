import './App.css';
import MapPage from './MapPage'
// import Test from './test'
import {useEffect} from "react";
function App() {
  useEffect(()=>{
    console.log("1")
    const message = `Welcome to Madison CityWalker APP, which is an app that used to share the best routes around Madison area!Here are some tips for the operation:
    \n1.The bottom-left button can be used to see others' recommended routes
    \n2.Single click on the added route will highlight the route; Double click will delete the route`;
    window.alert(message)
  },[])
  return (
    <div>
      <MapPage></MapPage>
      {/* <Test></Test> */}
    </div>
  );
}

export default App;