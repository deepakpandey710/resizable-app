import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../store";

export default function Update({ email, number }) {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(getDetail())
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3>User Detail</h3>
      <div className="add-component">
        <span className="span-text">Id: {data._id}</span>
        <span className="span-text">Email: {data.email}</span>
        <span className="span-text">Number: {data.number}</span>
      </div>
    </div>
  )
};

