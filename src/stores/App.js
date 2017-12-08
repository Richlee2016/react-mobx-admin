import { observable, action, computed, runInAction } from "mobx";
import { log_in, log_out } from "@/servers/server";
class App {
  // menu
  @observable user;
  constructor() {
    this.user = null;
  }

  //保持会话
  Login = async hash => {
    console.log(hash);
    const reg = /#/;
    const openid = hash ? hash.replace(reg, "") : "no";
    const res = await log_in(openid);
    runInAction(() => {
      const { data: { code, data } } = res;
      if (code === 1) {
        this.user = data;
      } else {
        this.user = null;
      }
    });
  };

  LogOut = async () => {
    const res = await log_out();
    runInAction(() => {
      const { data: { code, data } } = res;
      if (code === 1) {
        this.user = null;
        const baseUrl = location.origin;
        location.href = baseUrl;
      }
    });
  };
}

const app = new App();
export default app;
