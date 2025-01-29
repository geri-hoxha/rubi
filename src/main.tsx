import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./Game.tsx";
import { Layout, MainBody } from "./App.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative">
              <Layout>
                <MainBody />
              </Layout>
            </div>
          }
        />
        {/* Dynamic route */}
        <Route
          path="/game/:id"
          element={
            <Layout>
              <Game />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

createRoot(document.getElementById("root")!).render(<App />);
