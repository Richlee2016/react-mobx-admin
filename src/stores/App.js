import { observable, action, computed, runInAction } from "mobx";

class App {
  // menu
  @observable session;
  constructor() {
    this.session = {
      username: 'rich'
    };
  }

  getSession = async () => {
    runInAction(() => {
      this.session.username = "rich";
    });
  }

  login = async (cb) => {
    runInAction(() => {
      this.session.username = "rich";
    });
    cb();
  };

  logout = async () => {
    runInAction(() => {
      this.session.username = null;
    });
  };
}

const app = new App();
export default app;
