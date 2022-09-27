import React from "react";
import Panel from "./panel/panel";
import Sidebar from "./sidebar/sidebar";
import Posts from "./posts/posts";
import "./forum.css";

function Forum() {
  return (
    <div className="content row">
      <div className="column">
        <Sidebar />
      </div>
      <div className="column">
        <Posts />
      </div>
      <div className="column">
        <Panel />
      </div>
    </div>
  );
}

export default Forum;
