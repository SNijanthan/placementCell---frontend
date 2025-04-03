import { Link } from "react-router-dom";
import useFetchInterview from "../customHooks/useFetchInterview";
import { useSelector } from "react-redux";

const Interview = () => {
  const interviews = useSelector((store) => store.interview);
  useFetchInterview();

  return (
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
