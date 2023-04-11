import randomJokeImage from "../images/random-joke-img.jpg";
import shoppingCartImage from "../images/shopping-card.png";
import pizzaProjectImage from "../images/pizzaproject.png";
import reactMovieList from "../images/redux-movie-list.png"
//colorPalette= dccfdd,dbdaea,dbebf5,dbf4fa,cab2b3,d4bbc2,9e907c,b19d90 
export const ProjectsData = [
  {
    name: "Shopping Cart",
    explanation:
      "In this project, a shopping cart feature was developed using React's useContext hook to persist added products in local storage. Additionally, users are able to remove unwanted products from the cart, and the user interface was designed using CSS styled components.",
    libraries: ["react", "styled-components", "router"],
    gitHubLink: "https://github.com/oykugokcek/fsweb-s11g1-shopping-cart",
    vercelLink: "https://shopping-cart-six-xi.vercel.app/",
    imgsrc: shoppingCartImage,
    backgroundColor: "#dbebf5",
  },
  {
    name: "Movie Watchlist",
    explanation:
      "In this project, you can view the details of the movie that interests you, modify the information you want to change, and add a new movie. Additionally, you can add your favorite movies to the favorites list. The data transfer between components is implemented using the Redux library.",
    libraries: ["react", "vercel", "redux", "router", "tailwindcss"],
    gitHubLink: "https://github.com/oykugokcek/fsweb-s10g3-redux-watchlist",
    vercelLink: "https://fsweb-s10g3-redux-watchlist-982u.vercel.app",
    imgsrc: reactMovieList,
    backgroundColor: "#DDC3D0 ",
  },
 
  {
    name: "Pizza Project",
    explanation:
      "This is a front-end project that allows users to order pizza through a home page and specific pizza order routes. The homepage also offers various restaurant and kitchen options. The pizza order form is implemented using React-hook-form, and the application is designed responsively using Tailwind CSS.",
    libraries: ["react", "vercel", "axios", "router"],
    gitHubLink: "https://github.com/oykugokcek/pizza-project",
    vercelLink: "https://pizza-project-alpha.vercel.app",
    imgsrc: pizzaProjectImage,
    backgroundColor: "#dbfcff",
  },
  
  // {
  //   name: "Gratitude Journal",
  //   explanation:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut, odit laborum aliquam voluptatum nisi mollitia.",
  //   libraries: ["react", "vercel", "axios", "router"],
  //   gitHubLink: "https://github.com/oykugokcek/fsweb-s10g3-redux-watchlist",
  //   vercelLink: "https://fsweb-s10g3-redux-watchlist-982u.vercel.app",
  //   imgsrc: randomJokeImage,
  //   backgroundColor: "#dbebf5",
  // },
];
