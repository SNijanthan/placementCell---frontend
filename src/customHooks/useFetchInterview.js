import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addInterview } from "../utils/interviewSlice";

const useFetchInterview = () => {
  const dispatch = useDispatch();
  const interview = useSelector((store) => store.interview);

  useEffect(() => {
    if (!interview || interview.length === 0) {
      const fetchInterview = async () => {
        try {
          const res = await axios.get(BASE_URL + "/interviews", {
            withCredentials: true,
          });
          dispatch(addInterview(res.data?.interviews));
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

      fetchInterview();
    }
  }, [dispatch]);
};

export default useFetchInterview;
