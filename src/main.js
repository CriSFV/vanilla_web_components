import "./main.css";
import { Router } from "@vaadin/router";

import "./pages/home.page";
import "./app-element";

const outlet = document.querySelector("#outlet");
const router = new Router(outlet);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/app", component: "app-element" },
  { path: "(.*)", redirect: "/" },
]);
