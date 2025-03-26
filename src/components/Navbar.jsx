import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownloadReport = async () => {
    try {
      const response = await axios.get(BASE_URL + "/results/download-csv", {
        withCredentials: true,
        responseType: "blob", // Important for handling file downloads
      });

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "results.csv"); // Set the file name
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error downloading file:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between navbar bg-gray-950">
        {user ? (
          <div className="navbar bg-gray-950">
            <Link
              to="/"
              className="btn btn-ghost hover:bg-sky-800 text-xl font-light"
            >
              PLACEMENT CELL
            </Link>
          </div>
        ) : (
          <div className="navbar bg-gray-950">
            <Link
              to="/login"
              className="btn btn-ghost hover:bg-sky-800 text-xl font-light"
            >
              PLACEMENT CELL
            </Link>
          </div>
        )}
        {user && (
          <div className="flex-none">
            <ul className="menu menu-horizontal px-5 mr-10">
              <li>
                <details className="px-10">
                  <summary>Options</summary>
                  <ul className="bg-gray-500 rounded-t-none">
                    <li>
                      <a onClick={handleDownloadReport}>Download Report</a>
                    </li>
                    <li>
                      <p onClick={handleLogout}>Logout</p>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
