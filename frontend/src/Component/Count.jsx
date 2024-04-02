import React from "react";
import { useSelector } from "react-redux";


export default function Count() {
  const count = useSelector((state) => state.user.count);

  return (
    <div>
      <h3>API Call Count: {count}</h3>
    </div>
  )
};

