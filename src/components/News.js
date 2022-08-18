import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  constructor() {
    super();
    console.log("hello this constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("this componentdidmount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2d2bf652983f47fba4d1ec0385faba4f";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    console.log("1");
  }

  render() {
    console.log("render");
    return (
      <div>
        <div className="container my-3">
          <h2> NewsApp </h2>
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
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
