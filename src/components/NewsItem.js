import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt } =
      this.props;

    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on
                {" " + new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <Link
              className="btn btn-primary"
              to={newsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
