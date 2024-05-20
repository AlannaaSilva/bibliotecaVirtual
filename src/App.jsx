import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";

 export function App() {
  return(
    <div>
    <Header/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </div>
   
  )   
   
}


