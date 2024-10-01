import { Route, Routes } from "react-router-dom";
import { CreateProject, Login } from "./Pages";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProjectList from "./Pages/ProjectList/ProjectList";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createproject" element={<CreateProject/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projectlist" element={<ProjectList/>} />
      </Routes>
    </div>
  );
}

export default App;
