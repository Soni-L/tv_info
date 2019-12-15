import React, { Component } from "react";

import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Table, Divider, Tag, Button } from "antd";
import { importTVShow, fetchTVShows } from "../../actions/importsActions";
import MovieRow from "./MovieRow";

export class ImportedMovies extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }

  componentDidUpdate(nextProps) {
    this.props.fetchTVShows();
  }

  onDeleteShow = (key, e) => {
    e.preventDefault();
    debugger;
  }

  render() {
    const { imported_shows } = this.props;
    let content = "";
    try {
      content = imported_shows.imported_shows.map((show, index) => (
        <MovieRow key={index} show={show} />
      ));
    } catch {
      //
    }

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
            onClick={(e) => { this.onDeleteShow(record.id, e); }}
          >
            Delete
          </Button>
        ),
      }
    ];

    const data = imported_shows;
    // try{
    //   data = imported_shows.imported_shows.map((show, index) => (
    //     {key: index, id : show.show.TMDB_ID} 
    //   ));
    //   console.log(data);
    // }
    // catch{

    // }
    // debugger;
    

    // const data = [
    //   {
    //     key: "1",
    //     id: "233",
    //     title: 'the office',
    //     rating: 9.0,
    //   },
    // ];

    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <h1 className="display-4 mb-3">
          Imported Shows
        </h1>
        <div className="container">
          {/* <Table columns={columns} dataSource={data} /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imported_shows: state.imported_shows
});

export default connect(mapStateToProps, {
  importTVShow,
  fetchTVShows
})(ImportedMovies);
