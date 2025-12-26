import React, { useEffect, useRef } from "react";
import "./App.css";
import studentData from "./data.json";
import Chart from "chart.js/auto"; 

function App() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getFeedback = (score) => {
    if (score >= 8) return "Excellent performance with strong control."; 
    if (score >= 6) return "Good performance with minor inaccuracies."; 
    return "Needs improvement."; 
  };

  useEffect(() => {
    if (chartRef.current) {
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["Pronunciation", "Fluency", "Vocabulary", "Grammar"], 
          datasets: [{
            label: "Student Score",
            data: [
              studentData.breakdown.pronunciation,
              studentData.breakdown.fluency,
              studentData.breakdown.vocabulary,
              studentData.breakdown.grammar,
            ],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
          }],
        },
        options: {
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 9, 
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="app-container">
      <header className="report-header">
        <h1>Student Speaking Assessment Report</h1>
      </header>

      <div className="report-card">
        <div className="score-section">
          <div className="overall-score-box">
            <h2>Overall Score</h2>
            <div className="big-score">
              {studentData.overall_score} <span className="total">/ 9</span> [cite: 19]
            </div>
            <p className="main-feedback">
              {getFeedback(studentData.overall_score)} [cite: 42]
            </p>
          </div>

          <div className="chart-container">
            <canvas ref={chartRef} /> 
          </div>
        </div>

        <div className="details-section">
          <h2>Skill Breakdown</h2> [cite: 20]
          <div className="skills-list">
            {Object.entries(studentData.breakdown).map(([skill, score]) => (
              <div key={skill} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </span>
                  <span className="skill-score">{score}/9</span>
                </div>
                <div className="progress-bg">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(score / 9) * 100}%`,
                      backgroundColor: score >= 8 ? "#4caf50" : score >= 6 ? "#ff9800" : "#f44336",
                    }}
                  ></div>
                </div>
                <p className="skill-feedback">{getFeedback(score)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;