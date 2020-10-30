import React, { Component } from "react";
import UserItems from "./UsersItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "Pekora",
        avatar_url:
          "https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png",
        github_url: "https://github.com/domesama",
      },
      {
        id: "2",
        login: "Amelia",
        avatar_url:
          "https://static.wikia.nocookie.net/virtualyoutuber/images/9/97/Watson_Amelia_Portrait.png/revision/latest/top-crop/width/360/height/450?cb=20200910193116",
        github_url: "https://github.com/domesama",
      },
      {
        id: "3",
        login: "Gura",
        avatar_url:
          "https://yt3.ggpht.com/a/AATXAJwyNfLKBDLZoKA3c7u_vPOKbQitz4fcDwi7Iqhi=s900-c-k-c0x00ffffff-no-rj",
        github_url: "https://github.com/domesama",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
