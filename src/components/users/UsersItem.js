import React, { Component } from "react";
import YoutuberSubCount from "../Youtube/YoutubeSubCount";

const UsersItem = (props) => {
  const { id, login, avatar_url, channel_url } = props.user;
  console.log(id);
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "120px", height: "120px" }}
      />
      <h3>{login}</h3>
      <YoutuberSubCount key={id} id={id} />
      <div>
        <a href={channel_url} className="btn btn-dark btn-sm my-1">
          {" "}
          More
        </a>
      </div>
    </div>
  );
};

export default UsersItem;
