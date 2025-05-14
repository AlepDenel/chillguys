import React from 'react';

function FAQ() {
  return (
    <div className="glass-box">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Q:</strong> Where is the data from?<br />
          <strong>A:</strong> Data is monitored in Sibu, Sarawak in real-time.
        </li>
        <li>
          <strong>Q:</strong> What is WQI?<br />
          <strong>A:</strong> Water Quality Index — it measures water cleanliness.
        </li>
        <li>
          <strong>Q:</strong> Where did you get the WQI?<br />
          <strong>A:</strong>  the WQI data is a dummy data (no source, just representation of how its calculated and monitored)
        </li>
      </ul>
    </div>
  );
}

export default FAQ;
