export default {
  menus: [
    {
      name: "movie",
      title:"电影",
      icon: "desktop",
      navs: [
        { title: "影片", href: "/movie_home", icon: "link" },
        { title: "用户", href: "/movie_user", icon: "heart-o" },
        { title: "日志", href: "/movie_log", icon: "eye-o" },
        { title: "爬虫", href: "/movie_crawler", icon: "man" },
        { title: "API", href: "/movie_api", icon: "api" }
      ]
    },
    {
      name: "book",
      title:"书城",
      icon: "hdd",
      navs: [
        { title: "书籍", href: "/book_home", icon: "edit" },
        { title: "用户", href: "/book_user", icon: "user" },
        { title: "日志", href: "/book_log", icon: "line-chart" },
        { title: "爬虫", href: "/book_crawler", icon: "man" },
        { title: "API", href: "/book_api", icon: "api" }
      ]
    }
  ]
};
