import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  convertingUpperCase = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("hello this constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.convertingUpperCase(this.props.category)} - News`;
  }

  async updateNow() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    console.log("this componentdidmount");

    this.updateNow();
  }

  handleNextClick = async () => {
    console.log("next");

    this.setState({ page: this.state.page + 1 });
    this.updateNow();
  };

  handlePrevClick = async () => {
    console.log("prev");

    this.setState({ page: this.state.page - 1 });
    this.updateNow();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <>
        {/* <div className="container my-3"> */}
        <h2 className="text-center">
          NewsApp - Top {this.convertingUpperCase(this.props.category)}{" "}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-2 mx-3 my-3" key={element.url}>
                    <NewsItem
                      title={element.title.slice(0, 40)}
                      description={
                        element.description === null
                          ? element.description
                          : element.description.slice(0, 80)
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://i-invdn-com.investing.com/news/SP500StandardandPoors500Index_800x533_L_1657544297.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* </div> */}
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
