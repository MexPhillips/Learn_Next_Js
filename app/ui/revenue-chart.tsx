export default function RevenueChart() {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Recent Revenue</h3>
      <div className="chart">
        <div className="chart-bar" style={{ height: '40%' }}>
          <span className="chart-label">Jan</span>
        </div>
        <div className="chart-bar" style={{ height: '70%' }}>
          <span className="chart-label">Feb</span>
        </div>
      </div>
      <p className="chart-footer">Last 6 months</p>
    </div>
  );
}
