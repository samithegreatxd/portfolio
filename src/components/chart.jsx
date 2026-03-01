import React, { useState } from "react";
import "./chart.css";

const Chart = () => {
  const [subjects, setSubjects] = useState([
    { name: "English", optional: false },
    { name: "Math", optional: false },
    { name: "Physics", optional: false },
    { name: "Chemistry", optional: false },
  ]);
  const [scores, setScores] = useState({});
  const [gpa, setGpa] = useState(null);
  const [newSubject, setNewSubject] = useState("");

  const handleChange = (subjectName, value) => {
    setScores({ ...scores, [subjectName]: Number(value) });
  };

  const toggleOptional = (subjectName) => {
    setSubjects(
      subjects.map((sub) =>
        sub.name === subjectName ? { ...sub, optional: !sub.optional } : sub
      )
    );
  };

  const addSubject = () => {
    if (newSubject && !subjects.find((sub) => sub.name === newSubject)) {
      setSubjects([...subjects, { name: newSubject, optional: false }]);
      setNewSubject("");
    }
  };

  const getPoint = (score) => {
    if (score >= 80) return 5.0;
    if (score >= 70) return 4.0;
    if (score >= 60) return 3.5;
    if (score >= 50) return 3.0;
    if (score >= 40) return 2.0;
    return 0;
  };

  const calculateGPA = () => {
    let total = 0;
    let count = 0;
    subjects.forEach((sub) => {
      if (!sub.optional) {
        total += getPoint(scores[sub.name] || 0);
        count += 1;
      }
    });
    if (count === 0) return;
    setGpa((total / count).toFixed(2));
  };

  return (
    <div className="chart-wrapper">
      <h2 className="chart-title">Enter Marks & Calculate GPA</h2>

      {/* Add new subject */}
      <div className="add-subject">
        <input
          type="text"
          placeholder="New Subject"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <button onClick={addSubject}>Add Subject</button>
      </div>

      {/* Subject inputs */}
      <div className="chart-inputs">
        {subjects.map((subject) => (
          <div key={subject.name} className="input-group">
            <label>
              {subject.name}{" "}
              <input
                type="checkbox"
                checked={subject.optional}
                onChange={() => toggleOptional(subject.name)}
              />{" "}
              Optional
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={scores[subject.name] || ""}
              onChange={(e) => handleChange(subject.name, e.target.value)}
              disabled={subject.optional}
              placeholder={subject.optional ? "Optional" : ""}
            />
          </div>
        ))}
      </div>

      <button className="calc-btn" onClick={calculateGPA}>
        Calculate GPA
      </button>

      {/* Display results */}
      {gpa && (
        <>
          {gpa === "0.00" ? (
            <div className="failure-wrapper">
              <img
                src="https://media1.tenor.com/m/1J364RWIOS0AAAAd/failure-steven-he.gif"
                alt="failure gif"
                className="failure-gif"
              />
            </div>
          ) : (
            <>
              <h2 className="gpa-result">Your GPA: {gpa}</h2>

              <div className="chart-bars">
                {subjects.map((subject) => (
                  <div key={subject.name} className="chart-card">
                    <h3 className="chart-subject">
                      {subject.name} {subject.optional && "(Optional)"}
                    </h3>
                    <div className="chart-bar-wrapper">
                      <div
                        className="chart-bar"
                        style={{
                          width: `${scores[subject.name] || 0}%`,
                          opacity: subject.optional ? 0.4 : 1,
                        }}
                      ></div>
                    </div>
                    <span className="chart-percent">
                      {scores[subject.name] || 0}/100
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Chart;