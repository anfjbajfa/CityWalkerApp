import './App.css';
import {useEffect} from "react";
import { Routes,Route } from 'react-router-dom';
import routes from "./router/index"
function App() {
  
  useEffect(()=>{
    const hasVisited = sessionStorage.getItem("hasVisited")
    if(!hasVisited){
    const message = `Welcome to Madison CityWalker APP, which is an app that used to share the best routes around Madison area!Here are some tips for the operation:
    \n1.The bottom-left button can be used to see others' recommended routes
    \n2.Single click on the added route will highlight the route; Double click will delete the route
    \n3.When you login successfully, you will need to click the login again and the edit component will show up at the bottom-left`;
    sessionStorage.setItem("hasVisited",'true')
    window.alert(message)
  }
  },[]);
  return (  
     <Routes>
        {routes.map((route,index)=>(
        <Route key={index} path={route.path} element={route.element} />
        ))}
     </Routes>
  );
}


export default App;