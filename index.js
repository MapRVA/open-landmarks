import MapLibre from "https://www.unpkg.com/@trailstash/maplibre-component@latest/dist/index.js";
import handleStyleImageMissing from "./maki_temaki/sprites.js";
import { layer } from "./maki_temaki/style.js";

customElements.define("map-libre", MapLibre);

const sourceName = "OpenLandmarks";
const source = { type: "geojson", data: "./landmarks.geojson" };

const init = async () => {
  const style = await (
    await fetch("https://styles.trailsta.sh/osm-bright.json")
  ).json();
  style.sources[sourceName] = source;
  style.layers.push(layer(sourceName));
  const mapLibre = document.createElement("map-libre");
  mapLibre.options = {
    style,
    center: [-100, 40],
    zoom: 4,
    hash: true,
    attributionControl: {},
  };
  mapLibre.controls = [
    {
      type: "NavigationControl",
      position: "bottom-right",
      options: { visualizePitch: true },
    },
  ];
  document.body.appendChild(mapLibre);
  mapLibre.map.on("styleimagemissing", handleStyleImageMissing);
};

init();
