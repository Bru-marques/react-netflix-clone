/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.css";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let desc = item.overview;
  /*if (desc.length > 200) {
    desc = desc.substring(0, 200) + "...";
  }*/

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>

          {/*<div className="featured--info">
            <div className="featured--points">{item.vote_average} points</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="feature--seasons">
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>*/}

          <div className="featured--description"> {desc}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchButton">
              ► Watch
            </a>
            <a href={`/list/add/${item.id}`} className="featured--myListButton">
              + My List
            </a>
          </div>
          <div className="featured--genres">
            Genres: <strong>{genres.join(", ")}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
