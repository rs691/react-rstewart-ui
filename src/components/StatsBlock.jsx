

function StatsBlock() {
  return (
    <div className="stats shadow">
    <div className="stat">
      <div className="stat-figure text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
      <div className="stat-title">Total GPA</div>
      <div className="stat-value text-primary">3.66</div>
      <div className="stat-desc">Top 5% percent in class</div>
    </div>
  
    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div className="stat-title">Page Views</div>
      <div className="stat-value text-secondary">2.6M</div>
      <div className="stat-desc">21% more than last month</div>
    </div>
  
    <div className="stat">
      <div className="stat-figure text-accent">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-8 w-8 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 17h2V7H3v10zm6 0h2V4H9v13zm6 0h2v-7h-2v7zm6 0h2v-4h-2v4z">
    </path>
  </svg>
      </div>
      <div className="stat-value">86%</div>
      <div className="stat-title">Tasks done</div>
      <div className="stat-desc">31 tasks remaining</div>
    </div>
  </div>
        );
        }

        export default StatsBlock; 