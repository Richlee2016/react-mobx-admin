import { observable, action, computed, runInAction } from "mobx";
import {
  get_movie_list,
  get_crawler_page,
  get_crawler_home,
  get_online_list,
  get_users
} from "@/servers/server";
import { detection } from "@/utils";
class Movie {
  // menu
  @observable list; //电影列表
  @observable onlineList; //电影列表
  @observable loading; //loading缓冲
  @observable crawlerRes;
  @observable users
  constructor() {
    this.list = {};
    this.onlineList = {}
    this.loading = false;
    this.crawlerRes = null;
    this.users = []
  }

  // 获取电影列表
  getList = async qs => {
    this.loading = true;
    const res = await get_movie_list(qs);
    runInAction(() => {
      detection(res, () => {
        this.list = res.data.data;
        this.loading = false;
      });
    });
  };

  // 获取电影列表
  fetchOnlineList = async qs => {
    this.loading = true;
    const res = await get_online_list(qs);
    const {data:{code,data}} = res;
    runInAction(() => {
      if(code === 1){
         this.onlineList = data;   
         this.loading = false; 
      };
    });
  };

  // 爬虫
  crawlerGet = async (type) => {
    this.loading = true;
    let res= {};
    if(type === 'page'){
      res = await get_crawler_page();
    }else if(type === 'home'){
      res = await get_crawler_home();
    };
    runInAction(() => {
        this.crawlerRes = res;
        this.loading = false;
    });
  };

  // 获取用户信息
  fetchUsers = async () => {
    this.loading = true;
    const res = await get_users();
    const {data:{code,data}} = res;
    runInAction(() => {
      if(code === 1){
         this.users = data;   
         this.loading = false; 
      };
    });
  };
}

const movie = new Movie();
export default movie;
