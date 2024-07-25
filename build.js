import fs from "fs";
import osmtogeojson from "osmtogeojson";

const features = [];
for (const inp of JSON.parse(fs.readFileSync("landmarks.json"))) {
  const resp = await fetch(
    `https://overpass-api.de/api/interpreter?data=[out:json];nwr[wikidata="${inp.wikidata}"]${inp.extra_qualifier || ""};out center;`,
  );
  const { features: [feature] } = osmtogeojson(await resp.json());
  features.push({ ...feature, properties: { ...feature.properties, ...inp } });
};
fs.writeFileSync("landmarks.geojson", JSON.stringify({ type: "FeatureCollection", features }));
