import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { GlobalProvider } from "./context/GlobalState";
import EditTask from "./components/Tasks/EditTask/EditTask";

function App() {
  return (
    <>
      <Router>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/editTask/:_id" element={<EditTask />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
