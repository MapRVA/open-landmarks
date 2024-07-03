export const layer = (sourceName) => ({
  id: "OpenLandmarksMakiTemaki",
  source: sourceName,
  type: "symbol",
  minzoom: 12,
  layout: {
    "icon-image": ["get", "maki_temaki"],
    "text-field": "{name}",
    "text-font": ["Open Sans Regular"],
    "text-variable-anchor": ["top"],
    "text-justify": "auto",
    "text-radial-offset": 1.25,
    "text-size": 12,
  },
  paint: {
    "icon-color": "rgb(51, 51, 51)",
    "text-color": "rgb(51, 51, 51)",
    "icon-halo-color": "white",
    "icon-halo-width": 3,
    "text-halo-color": "white",
    "text-halo-width": 2,
  },
});
