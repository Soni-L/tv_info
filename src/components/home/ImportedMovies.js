import React, { Component } from "react";

import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from "antd";
import { fetchTVShows, deleteTVShow } from "../../actions/importsActions";

import "antd/dist/antd.css";

export class ImportedMovies extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }

  onDeleteShow = (key, e) => {
    debugger;
    e.preventDefault();
    this.props.deleteTVShow(key);
    this.props.fetchTVShows();
  };

  render() {
    const imported_shows = this.props.shows.imported_shows.shows;

    const columns = [
      {
        title: "TMDB_ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Rating",
        dataIndex: "rating",
        key: "rating"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Button
            // className={`${this.props.className}-delete`}
            onClick={e => {
              this.onDeleteShow(record.id, e);
            }}
          >
            Delete
          </Button>
        )
      }
    ];

    const data = imported_shows.map((show, index) => ({
      key: index,
      id: show.TMDB_ID,
      title: show.title,
      rating: show.rating,
    }));

    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <h1 className="display-4 mb-3">Imported Shows</h1>
        <div className="container">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state
});

export default connect(mapStateToProps, {
  fetchTVShows,
  deleteTVShow
})(ImportedMovies);
