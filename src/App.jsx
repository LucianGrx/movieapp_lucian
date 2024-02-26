import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInfo, Movies, Navbar, Profile } from "./components/index";
import './styles/App.css'
 

const App = () => {
  return (
    <div className="container">
      <CssBaseline />
      <Navbar />
      <main className="content">
      <div className="toolbar" />
        <Routes>
          <Route path="/" element={<Movies />}/>
          <Route path="/movie/:id" element={<MovieInfo />}/>
          <Route path="/actors/:id" element={<Actors />}/> 
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App