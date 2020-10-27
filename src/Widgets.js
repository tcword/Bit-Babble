import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Bit-Babble" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1309900815860146177"} />
        {/* <TwitterTweetEmbed tweetId={"1305554926890749953"} /> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="seanfeucht"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/bethelschooloftechnology"}
          options={{ text: 'This school is amazing', via: "TylerWord89"}}
        />
      </div>
    </div>
  );
}

export default Widgets;
