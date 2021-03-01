const mediaServerUrl = process.env.MEDIA_SERVER_URL || "http://localhost:3000";

export const loadMediaIcons = async () => {
  return await fetch(`${mediaServerUrl}/icons`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data.icons;
    });
};
