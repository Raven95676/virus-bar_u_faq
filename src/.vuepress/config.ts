import { defineUserConfig } from "vuepress";
import { inject } from "@vercel/analytics"

inject();


import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "病毒吧非官方 FAQ",
  description: "这里是吧友们可能会问的问题，非病毒吧官方网站。",
  head: [
    ['meta', { name: 'keywords', content: '计算机安全,小白教程,教程,计算机'}]
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
