import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;

    return (
      <div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a className="btn btn-primary" href="/">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
