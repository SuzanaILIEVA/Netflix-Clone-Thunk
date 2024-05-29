import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"
import Header from "./Components/Header"
import MainPage from "../src/Pages/MainPage"
import DetailPage from "../src/Pages/DetailPage"


function App() {
  
  return (
    <Router>
    <div className="p-5 md:p-10 lg:p-15 xl:px-20">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/movie/:id" element={<DetailPage/>}/>
        
      </Routes>
    </div>
    </Router>
   
  )
}

export default App
