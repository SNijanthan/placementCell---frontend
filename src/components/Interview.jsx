import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Interview = () => {
  const [interviews, setInterviews] = useState([]);

  const [error, setError] = useState("");

  const fetchInterviews = async () => {
    try {
      const res = await axios.get(BASE_URL + "/interviews", {
        withCredentials: true,
      });
      setInterviews(
        Array.isArray(res?.data?.interviews) ? res.data.interviews : []
      );
    } catch (error) {
      setError(error?.data?.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);
  return error ? (
    <p className="text-red-500 font-semibold text-[13px]">{error}</p>
  ) : (
    <div>
      <h1 className="text-center my-5 text-5xl font-light text-purple-500">
        INTERVIEW DETAILS
      </h1>
      {interviews.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No interview found.</p>
      ) : (
        <>
          <div className="overflow-x-auto w-5/6 m-auto bg-gray-900 rounded-box p-2">
            <table className="table">
              <thead>
                <tr className="text-center font-mono">
                  <th>Company Name</th>
                  <th>Interview Date</th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((interview) => (
                  <tr
                    key={interview._id}
                    className="hover:bg-base-300 text-center"
                  >
                    <td>{interview.companyName}</td>
                    <td>
                      {new Date(interview.interviewDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="flex justify-end mt-5">
        <button className="btn bg-green-700 mr-8">
          <Link to="/interview">Add Interview</Link>
        </button>
        <button className="btn bg-green-700 mr-32">Assign Interview</button>
      </div>
    </div>
  );
};

export default Interview;
