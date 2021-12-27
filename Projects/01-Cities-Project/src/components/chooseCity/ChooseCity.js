import React from "react";

const inStyle = {
  photo: {
    width: "400px",
    height: "400px",
    backgroundColor: "aquamarine",
    borderRadius: "60%",
    boxShadow: "0 0 50px #ccc",
  },
  p: { fontSize: "2rem", marginRight: "50px" },
  div: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
  },
};
export const ChooseCity = () => {
  return (
    <div style={inStyle.div}>
      <p style={inStyle.p}>Add some city to favorites...</p>
      <img
        style={inStyle.photo}
        src="https://t3.ftcdn.net/jpg/04/42/39/50/360_F_442395035_5ceQ6Cry8TuUD5Rjd69ObGA1MIUJ2roy.jpg"
        alt="vocation"
      />
    </div>
  );
};
