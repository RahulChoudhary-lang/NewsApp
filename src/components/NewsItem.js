import React from "react";
// import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;

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
          <a
            className="btn btn-primary"
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
