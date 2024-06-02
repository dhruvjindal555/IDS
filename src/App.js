import Navbar from "./components/Navbar";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DashBoard from "./components/DashBoard";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="barChart" element={<BarChart />}/>
          <Route path="lineChart" element={<LineChart />}/>
          <Route path="pieChart" element={<PieChart />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
