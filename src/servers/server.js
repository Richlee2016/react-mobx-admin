import rxios from "./rxios";

// 电影
const get_movie_list = qs => rxios("GET", "/movie_api/list", qs);
// 在线电影
const get_online_list = qs => rxios("GET", "/online_api/list", qs);
//爬虫
const get_crawler_home = () => rxios("GET", "/crawler/movie_home");
const get_crawler_page = () => rxios("GET", "/crawler/movie_page");
// 用户
const log_in = qs => rxios("GET",`/oauth/users/${qs}`);
const log_out = () => rxios("DEL", "/oauth/users");
const get_users = () => rxios("GET", "/oauth/users");

// 电影列表
//登录
//登出
export {
  get_movie_list,
  get_online_list,
  get_crawler_home,
  get_crawler_page,
  log_in,
  log_out,
  get_users
};
