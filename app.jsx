import { useState } from "react";
import KPI from "./components/KPI";
import TrendChart from "./components/TrendChart";
import DepartmentChart from "./components/DepartmentChart";

function App() {
  const [department, setDepartment] = useState("All");

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Interactive Executive Dashboard
      </h1>

      <div className="row mb-4">
        <div className="col-md-3">
          <KPI
            title="Revenue"
            value="$120K"
            color="#007bff"
          />
        </div>

        <div className="col-md-3">
          <KPI
            title="Sales"
            value="450"
            color="#28a745"
          />
        </div>

        <div className="col-md-3">
          <KPI
            title="Customers"
            value="1,250"
            color="#ffc107"
          />
        </div>

        <div className="col-md-3">
          <KPI
            title="Growth"
            value="18%"
            color="#dc3545"
          />
        </div>
      </div>

      <div className="mb-4">
        <label>Select Department:</label>

        <select
          className="form-control"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >
          <option>All</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>Finance</option>
          <option>HR</option>
          <option>Operations</option>
        </select>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card p-3 shadow">
            <h4>Trends Over Time</h4>
            <TrendChart />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>Department Snapshot</h4>
            <DepartmentChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
