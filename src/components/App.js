import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid" style={{ paddingTop: "5px" }}>
      <div className="ui row">
        <div className="ui column eight wider">
          <SongList />
        </div>
        <div className="ui column five wider">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
