import React, { Component } from "react";

import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from "antd";
import { fetchTVShows, deleteTVShow } from "../../actions/importsActions";
import axios from "axios";

import "antd/dist/antd.css";

export class ImportedMovies extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }

  async onDeleteShow(key, e){
    e.preventDefault();
    //this.props.deleteTVShow(key);
    await axios
    .delete(`http://127.0.0.1:5000/tv_shows/delete/${key}`)
    await this.props.fetchTVShows();
  };

  render() {
    const imported_shows = this.props.shows
    
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
  shows: state.imported_shows.shows
});

export default connect(mapStateToProps, {
  fetchTVShows,
  deleteTVShow
})(ImportedMovies);
