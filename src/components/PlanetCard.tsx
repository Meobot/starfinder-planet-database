import { getPlanetDocument } from "firebase-config.js";
import { useEffect, useState } from "react";

// Function to convert camel case to spaced words
const camelCaseToWords = (camelCaseString) => {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const PlanetCard = (props) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const spacedName = camelCaseToWords(props.name);
        const planet = await getPlanetDocument(spacedName);
        setPlanet(planet);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlanet();
  }, []);

  if (!planet) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col space-y-4">
        <h2>{planet.name}</h2>
        <p>{planet.description}</p>
        <p>Atmosphere: {planet.atmosphere}</p>
        <p>Temperature: {planet.temperature}</p>
      </div>
    );
  }
};

export default PlanetCard;
