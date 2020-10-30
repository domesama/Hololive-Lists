import React, { Fragment, useEffect, useState } from "react";

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
  if (subscriberCount.length > 4 && subscriberCount.length < 7) {
    return <h4>{subscriberCount.substr(0, 3)}k Subscribers</h4>;
  } else if (subscriberCount.length >= 7 && subscriberCount.length < 9) {
    return (
      <h4>
        {subscriberCount.substr(0, 1)}.{subscriberCount.substr(1, 2)} M
        Subscribers
      </h4>
    );
  } else if (subscriberCount.length == 8) {
    return (
      <h4>
        {subscriberCount.substr(0, 2)}.{subscriberCount.substr(2, 2)} M
        Subscribers
      </h4>
    );
  } else if (subscriberCount.length >= 9) {
    return <h4>{subscriberCount.substr(0, 3)} M Subscribers</h4>;
  }

  return <Fragment> </Fragment>;
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
