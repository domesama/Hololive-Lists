import React, { Component } from "react";
import UserItems from "./UsersItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "Usada Pekora",
        avatar_url:
          "https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png",
        github_url: "https://github.com/domesama",
      },
      {
        id: "2",
        login: "Amelia Watson",
        avatar_url:
          "https://static.zerochan.net/Watson.Amelia.full.3068543.jpg",
        github_url: "https://github.com/domesama",
      },
      {
        id: "3",
        login: "Gawr Gura",
        avatar_url:
          "https://yt3.ggpht.com/a/AATXAJwyNfLKBDLZoKA3c7u_vPOKbQitz4fcDwi7Iqhi=s900-c-k-c0x00ffffff-no-rj",
        github_url: "https://github.com/domesama",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
