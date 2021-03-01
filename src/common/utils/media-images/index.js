const mediaServerUrl = process.env.MEDIA_SERVER_URL || "http://localhost:3000";

export const loadMediaImages = async () => {
  return await fetch(`${mediaServerUrl}/images`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data.images;
    });
};
