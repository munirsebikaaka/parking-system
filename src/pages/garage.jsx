import "../uniqueStyles/galage.css";

const Garage = () => {
  // Sample vehicle data
  const vehicles = [
    {
      id: 1,
      plateNumber: "ABC 1234",
      type: "Car",
      entryTime: "10:30 AM",
      entryDate: "2023-06-15",
      status: "Parked",
    },
    {
      id: 2,
      plateNumber: "XYZ 5678",
      type: "Motorcycle",
      entryTime: "11:45 AM",
      entryDate: "2023-06-15",
      status: "Parked",
    },
    {
      id: 3,
      plateNumber: "DEF 9012",
      type: "Truck",
      entryTime: "09:15 AM",
      entryDate: "2023-06-15",
      status: "Parked",
    },
    {
      id: 4,
      plateNumber: "GHI 3456",
      type: "Van",
      entryTime: "02:20 PM",
      entryDate: "2023-06-15",
      status: "Parked",
    },
    {
      id: 5,
      plateNumber: "JKL 7890",
      type: "Car",
      entryTime: "04:05 PM",
      entryDate: "2023-06-15",
      status: "Parked",
    },
  ];

  return (
    <div className="garage-container">
      <h2 className="garage-title">Current Vehicles in Garage</h2>

      <div className="garage-stats">
        <div className="stat-card">
          <div className="stat-value">{vehicles.length}</div>
          <div className="stat-label">Total Vehicles</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {vehicles.filter((v) => v.type === "Car").length}
          </div>
          <div className="stat-label">Cars</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {vehicles.filter((v) => v.type === "Motorcycle").length}
          </div>
          <div className="stat-label">Motorcycles</div>
        </div>
      </div>

      <div className="vehicles-table-container">
        <table className="vehicles-table">
          <thead>
            <tr>
              <th>License Plate</th>
              <th>Vehicle Type</th>
              <th>Entry Date</th>
              <th>Entry Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.plateNumber}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.entryDate}</td>
                <td>{vehicle.entryTime}</td>
                <td>
                  <span
                    className={`status-badge ${vehicle.status.toLowerCase()}`}
                  >
                    {vehicle.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Garage;
