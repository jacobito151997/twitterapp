import Route from '@ember/routing/route';
import {
  isEmpty,
  isPresent
} from '@ember/utils';
import Ember from 'ember';

export default Route.extend({

  model(){
    const store = this.get('store');
    const file = store.createRecord('file');
    const tweetFile = Ember.$.getJSON("posts.json");
    

    
    return {
      file : file,
      tweetFile: tweetFile

    };
  },

  actions:{
    onLoad(){
      this.transitionTo('file-entered');
    }
   
  }
});
