import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutline from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, verified, text, image, avatar, timestamp }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUserIcon className="post_badge" />}
                </span>
              </h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutline className="footer_icon" fontSize="small" />
            <RepeatIcon className="footer_icon" fontSize="small" />
            <FavoriteBorderIcon className="footer_icon" fontSize="small" />
            <PublishIcon className="footer_icon" fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
