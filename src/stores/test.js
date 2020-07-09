import { set, observable, toJS, action, computed, runInAction, decorate} from 'mobx';

class Test {
    @observable isTest = false;
   
    @action 
    setIsTest(){
      this.isTest = !this.isTest
      console.log('触发 action', this.isTest);
    }
}


export default new Test();