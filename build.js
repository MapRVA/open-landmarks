import fs from "fs";
import osmtogeojson from "osmtogeojson";

fs.writeFileSync(
  "landmarks.geojson",
  JSON.stringify({
    type: "FeatureCollection",
    features: await Promise.all(
      JSON.parse(fs.readFileSync("landmarks.json")).map(async (inp) => {
        const resp = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];nwr[wikidata="${inp.wikidata}"]${inp.extra_qualifier || ""};out center;`,
        );
        const {
          features: [feature],
        } = osmtogeojson(await resp.json());
        return { ...feature, properties: { ...feature.properties, ...inp } };
      }),
    ),
  }),
);
