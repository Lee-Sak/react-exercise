import { useEffect, useState } from "react";
import axios from "axios";
import { Movie_Comp } from "../components/movie_comp";
const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setCoins(json);
  //       setLoading(false);
  //     });
  // }, []);

  const getApi = async () => {
    const res = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    setCoins(res.data.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1>The Movies {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {coins.map((movie) => {
            return (
              <Movie_Comp
                key={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Movies };
