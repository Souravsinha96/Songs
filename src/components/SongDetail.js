import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <h4 className="item">Select a Song</h4>;
  }
  return (
    <div className="ui segment">
      <h3>Details For:</h3>
      <p className="item">
        <em>Title:</em> {song.title}
        <br />
        <em>Duration: </em>
        {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
