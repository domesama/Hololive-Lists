import React, { Fragment, Component, useEffect, useState } from "react";

const YoutubeSubCount = (props) => {
  const [subscriberCount, setSubscriberCount] = useState("0");
  const api_key = "AIzaSyAE8QjNEVRTgHa9hXXJ3zdzu0Z3R3K2QIk";
  const id = props.id;

  useEffect(() => {
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${api_key}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        const count = data["items"][0]["statistics"]["subscriberCount"];
        setSubscriberCount(count.toString());
      });
  });
  return (
    <Fragment>
      <h4>{subscriberCount.substr(0, 3)}k Subscribers</h4>
    </Fragment>
  );
};

export default YoutubeSubCount;

// import React, { Component } from "react";

// export class YoutubeSubCount extends Component {
//   state = {
//     api_key: "AIzaSyAE8QjNEVRTgHa9hXXJ3zdzu0Z3R3K2QIk",
//     id: this.props.id,
//   };

//   render() {
//     return <div> {this.state.id} </div>;
//   }
// }

// export default YoutubeSubCount;
