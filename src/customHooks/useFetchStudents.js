import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addStudent } from "../utils/studentSlice";

const useFetchStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((store) => store.student);

  useEffect(() => {
    if (!students || students.length === 0) {
      const fetchStudents = async () => {
        try {
          const res = await axios.get(BASE_URL + "/students", {
            withCredentials: true,
          });
          dispatch(addStudent(res?.data?.students));
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

      fetchStudents();
    }
  }, [dispatch]);
};

export default useFetchStudents;
