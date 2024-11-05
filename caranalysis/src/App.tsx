import "./index.css"

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
    return(
        <div className="App">
            <header><Navbar/></header>
            <Outlet />
        </div>
    )
}
export default App;