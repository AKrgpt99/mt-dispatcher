const areaServerUrl = process.env.AREA_SERVER_URL || "http://localhost:3001";

export const loadAreasObj = async () => {
  return await fetch(`${areaServerUrl}/areas`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data.areas;
    });
};
