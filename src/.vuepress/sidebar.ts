import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // 后端
  "/backend/": [
    ""
  ],

  // 前端
  "/fontend/": [
    {
      text: "HTML",
      prefix: "html/",
      collapsible: true,
      children: [
        "HTML.md",
      ],
    },
  ],
});
