import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isloading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleOnRemoveTour = (id) => {
    const newTours = tours.filter((item) => item.id != id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours to Display</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={handleOnRemoveTour} />
    </main>
  );
}

export default App;
