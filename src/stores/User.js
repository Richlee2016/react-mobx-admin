import { observable, action, computed, runInAction } from "mobx";
import {
  get_users
} from "@/servers/server";
class User {
  @observable user
  constructor() {
    this.user = []
  }
  // 获取用户信息
  fetchUsers = async () => {
    this.loading = true;
    const res = await get_users();
    const {data:{code,data}} = res;
    runInAction(() => {
      if(code === 1){
         this.user = data;   
         this.loading = false; 
      };
    });
  };
}

const user = new User();
export default user;
