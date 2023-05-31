import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Superheroes from "./components/Superheroes/Superheroes";
import SuperheroesRQ from "./components/SuperheroesRQ/SuperheroesRQ";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/superheroes">
              <li>Superheroes</li>
            </Link>
            <Link to="/superheroesrq">
              <li>SuperheroesRQ</li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/superheroes" element={<Superheroes />}></Route>
          <Route path="/superheroesrq" element={<SuperheroesRQ />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
