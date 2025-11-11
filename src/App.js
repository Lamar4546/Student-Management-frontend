
import React, {useEffect, useState} from 'react';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} ({student.email}) - Age: {student.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
