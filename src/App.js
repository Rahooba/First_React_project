import { Route, Routes } from "react-router-dom";

import Home from './Components/Home';
import HTML from './Components/HTML';
import CSS from './Components/CSS';
function App() {
  return (

<>
<Routes>


<Route path='/'  element={<Home/>} />
<Route path="/html" element= { <HTML/>}/>
<Route path="/css" element= { <CSS/>}/>
</Routes>
</>
  );
}

export default App;
