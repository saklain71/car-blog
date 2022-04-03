import { Route,  Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ReviewHeader from "./Components/ReviewHeader/ReviewHeader";


function App() {
  return (
    <div className="App">
       <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/reviews" element={<ReviewHeader></ReviewHeader>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
