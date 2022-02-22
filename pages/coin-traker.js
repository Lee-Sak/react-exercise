import { useEffect, useState } from "react";
import axios from "axios";

const coinTraker = () => {
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
    const res = await axios.get("https://api.coinpaprika.com/v1/tickers");
    setCoins(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((e) => {
            return (
              <li key={e.id}>
                {e.name} {e.symbol} : {e.quotes.USD.price} USD
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default coinTraker;
