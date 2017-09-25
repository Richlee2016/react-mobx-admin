import { observable, action, computed,autorun } from "mobx";

class App {
  // menu
  @observable session
  constructor() {
    this.session = {
      username:null
    }
  }
  
}

const app = new App();
export default app;
