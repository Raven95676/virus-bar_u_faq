import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "预先防毒",
    link: "/prevention/",
    icon: "fas fa-shield",
    activeMatch: "^/prevention/",
  },
  {
    text: "后继措施",
    link: "/follow-up/",
    icon: "fas fa-shield-virus",
    activeMatch: "^/follow-up/",
  },
  {
    text: "实用技巧",
    link: "/useful_tips/",
    icon: "fas fa-star",
    activeMatch: "^/useful_tips/",
  },
  "links"
]);
