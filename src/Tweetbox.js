import React, { useState } from "react";
import "./Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";
import firebase from 'firebase';
import { useStateValue } from "./StateProvider";

function Tweetbox() {
  const [{ user }, dispatch] = useStateValue();
  const [babbleMessage, setBabbleMessage] = useState("");
  const [babbleImage, setBabbleImage] = useState("");

  const sendBabble = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      verified: true,
      text: babbleMessage,
      image: babbleImage,
      avatar: user.photoURL
    });

    setBabbleMessage('');
    setBabbleImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={user.photoURL} />
          <input
            onChange={(e) => setBabbleMessage(e.target.value)}
            value={babbleMessage}
            placeholder={`What's happening ${user.displayName}?`}
            type="text"
          />
        </div>
        <input
          onChange={(e) => setBabbleImage(e.target.value)}
          value={babbleImage}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendBabble} className="tweetBox_tweetButton">
          Babble
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
