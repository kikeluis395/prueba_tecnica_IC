import "./customcss/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalDataProvider } from "./context/GlobalContext";

//importar nuestros componentes
import ShowTasks from "./components/ShowTasks";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalDataProvider>
          <Routes>
            <Route path="/" element={<ShowTasks />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </GlobalDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
