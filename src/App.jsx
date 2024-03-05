import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInfo, Movies, Navbar, Profile } from "./components/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./styles/App.css";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <CssBaseline />
        <Navbar />
        <main className="content">
          <div className="toolbar" />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
