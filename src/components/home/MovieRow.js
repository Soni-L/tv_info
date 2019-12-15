import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieRow extends Component {
  render() {
    const shows = this.props;
    console.log({ showdata: shows });
    return (
      <div className="row">
        <td>{shows.show.TMDB_ID}</td>
        <td>{shows.show.title}</td>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(MovieRow);
