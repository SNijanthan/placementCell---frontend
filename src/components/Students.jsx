import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      const res = await axios.get(BASE_URL + "/students", {
        withCredentials: true,
      });
      setStudents(Array.isArray(res?.data?.students) ? res.data.students : []);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return error ? (
    <p className="text-red-500 font-semibold text-[13px]">{error}</p>
  ) : (
    <>
      <h1 className="text-center mb-5 text-5xl font-light text-purple-500">
        STUDENT'S DETAILS
      </h1>
      {students.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No students found.</p>
      ) : (
        <>
          <div className="overflow-x-auto w-5/6 m-auto bg-gray-900 rounded-box p-2">
            <table className="table">
              <thead>
                <tr className="text-center font-mono text-amber-50">
                  <th>Name</th>
                  <th>College</th>
                  <th>DSA Score</th>
                  <th>Web Developement Score</th>
                  <th>React Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student._id}
                    className="hover:bg-base-300 text-center"
                  >
                    <td>{student.name}</td>
                    <td>{student.college}</td>
                    <td>{student.dsaScore}</td>
                    <td>{student.webDScore}</td>
                    <td>{student.reactScore}</td>
                    <td>{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <button className="btn bg-green-700 mr-32 mt-5">
              <Link to="/student">Add student</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Students;
