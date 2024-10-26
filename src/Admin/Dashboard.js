import React from 'react';
import { Link } from 'react-router-dom';
import '../Admin/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>

      <section>
        <li><Link to="/">Cloths</Link></li>
      </section>
      <section>
        <li><Link to="/">Furniture</Link></li>
      </section>
      <section>
        <li><Link to="/">Reviews</Link></li>
      </section>
      <section>
        <li><Link to="/">Users</Link></li>
      </section>

      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bed</td>
              <td>8</td>
              <td>Due</td>
              <td className="warning">Deliver</td>
              <td className="primary">Details</td>
            </tr>
            <tr>
              <td>Kids-Cloths</td>
              <td>85</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
