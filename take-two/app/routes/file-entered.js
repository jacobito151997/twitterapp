import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    const store = this.get('store');
    const file = store.peekAll('file').objectAt(0);

    return{
      file: file
    };
  }
});
