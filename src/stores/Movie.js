import { observable, action, computed, runInAction } from "mobx";
import {get_movie_list} from '@/servers/server'
class Movie {
  // menu
  @observable list;//电影列表
  @observable loading;//loading缓冲
  constructor() {
    this.list = {};
    this.loading = true;
  }

  // 获取电影列表
  getList = async (qs) => {
    this.loading = true;  
    const res = await get_movie_list(qs);
    runInAction(() => {
        if(res.data.code === 1){
            this.list = res.data.data;
            this.loading = false; 
        };
    });
  }
}

const movie = new Movie();
export default movie;
