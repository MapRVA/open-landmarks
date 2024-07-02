const fetchedImages = {};
export const handleStyleImageMissing = async (ev) => {
  if (ev.id.startsWith("maki/") || ev.id.startsWith("temaki/")) {
    if (!fetchedImages[ev.id]) {
      fetchedImages[ev.id] = true;
      const image = await ev.target.loadImage(`https://overpass-ultra.us/icons/${ev.id}.png`);
      ev.target.addImage(ev.id, image.data, { sdf: true });
    }
  }
};
export default handleStyleImageMissing;
