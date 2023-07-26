import "./main.css";
import "./app-element";
import { Router } from "@vaadin/router";

import "./pages/home.page";
import "./pages/posts.page";

console.log("Vanilla");

const outlet = document.querySelector("#outlet");
const router = new Router(outlet);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/posts", component: "posts-page" },
  { path: "(.*)", redirect: "/" },
]);
