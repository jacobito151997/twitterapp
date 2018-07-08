import Route from '@ember/routing/route';

export default Route.extend({


  actions:{
    onNewSet(){
      this.transitionTo('training-set');
    },
    onPriorityList(){
      this.transitionTo('priority-list');

    }
  }

});
