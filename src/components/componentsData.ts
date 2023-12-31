import CardOne from "./card/card one/CardOne";
import NavBarOne from "./nav bar/nav bar one/NavBarOne";

export const components = [
  {
    alt: "Nav One",
    type: "navbar",
    name: "Magic Navigation Menu Indicator",
    youtubeLink: "https://www.youtube.com/watch?v=ASavSteKab4",
    route: "nav-1",
    element: NavBarOne,
    imgSrc: "/src/assets/images/NavBar-1.gif",
    date: "2023-12-30",
  },
  {
    alt: "Card One",
    type: "card",
    name: "Inverted border-radius Card",
    youtubeLink: "https://www.youtube.com/watch?v=JXaTx4s0kEk",
    route: "card-1",
    element: CardOne,
    imgSrc: "/src/assets/images/Card-1.PNG",
    date: "2023-12-31",
  },
];
