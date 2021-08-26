import { useEffect, useState } from "react";
import { isWebGLAvailable } from "../utils/3D";
import { Mercury } from "./planets";

import "../css/PlanetPage.css";

export const PlanetPage = () => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    if (isWebGLAvailable()) {
      let planetComponent = <Mercury viewWidth={500} viewHeight={500} />;
      setPlanet(planetComponent);
    }
  }, []);

  return (
    <main>
      {planet ?? (
        <img
          className="left-side"
          src={require("../images/planet-photos/mercury.jpg").default}
          alt="Mercury against the 
            black of space.  It is a medium gray with light-colored lines running primarily
            north and south, but with white spots with those light-colored lines runnning
            out away from the circle like the rays of the sun.  These lines transverse the 
            north/south lines."
        />
      )}

      <section className="right-side">
        <h1>Mercury</h1>
        <article className="planet-facts planet-name" id="planet-name-facts">
          <h2>Planet Facts</h2>
          <div className="facts-container">
            <ul>
              <li>Distance from sun:</li>
              <li>Diameter:</li>
              <li>Length of year:</li>
              <li>Length of day:</li>
              <li>Average temperature:</li>
              <li>Gravitational pull at surface:</li>
            </ul>
          </div>
        </article>
        <article className="planet-details plant-name" id="planet-name-details">
          <h2>Planet Details</h2>
          <div className="details-container">
            <p>
              Here are a few paragraphs about Mercury. Peace understanding
              knowledge love smile happy puppy kitty action achievement
              agreeable amazing adventure bountiful brave brilliant bubbles
              bright color calm clean cheery certain constant creative
              delightful energetic enthusiastic encouraging easy engaging
              familiar fabulous fantastic friendly funny fresh genius giving
              generous good glowing great green orange yellow blue purple pink
              peach teal turquoise graceful.
            </p>
            <p>
              Jolly joy kind laugh light lucky legendary marvelous meaningful
              miraculous nice nurturing open optimistic pleasant progress
              powerful plentiful productive successful protected endearing
              protective quiet music quality refreshing rejoice reliable reward
              remarkable skilled smiling sunny sparkling special superb secure
              safe stupendous support terrific thriving thrilling tranquil
              upbeat valued vibrant victory victorious welcome worthy yes yummy
              zealous.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
