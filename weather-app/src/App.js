import { useState } from "react";
import axios from "axios";

import Search from "./search";
import Display from "./display";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const api_key = "c2313166477915b20bc6a8dcb86b857b";

  const fetchWether = async (query) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: query,
            units: "metric",
            appid: api_key,
          },
        }
      );

      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    }
  };

  return (
    <div className="App">
      <Search onSearch={fetchWether} />
      <Display error={error} data={data} />
    </div>
  );
}

export default App;
