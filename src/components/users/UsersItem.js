import React, { Component } from "react";

export class UsersItem extends Component {
  render() {
    const { login, avatar_url, github_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px", height: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={github_url} className="btn btn-dark btn-sm my-1">
            {" "}
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UsersItem;
