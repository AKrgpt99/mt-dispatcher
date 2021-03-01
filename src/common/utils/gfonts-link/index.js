export const loadFontLink = () => {
  const fontFamily =
    "Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900";
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
  const links = document.getElementsByTagName("link");

  for (let i = 0; i < links.length; i++) {
    if (links.item(i).href.indexOf(fontUrl) === 0) {
      return links.item(i);
    }
  }

  const fontLink = document.createElement("link");
  fontLink.href = fontUrl;
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

  return fontLink;
};
