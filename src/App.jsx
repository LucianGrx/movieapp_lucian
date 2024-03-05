import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInfo, Movies, Navbar, Profile } from "./components/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import "./styles/App.css";
import store from "./app/store";

const theme = createTheme({});

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
