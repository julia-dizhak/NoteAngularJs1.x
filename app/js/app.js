// Declare app level module which depends on ngRoute
angular.module('NoteWrangler', ['ngRoute'])
.config(function($gravatarProvider){
  $gravatarProvider.setSize(100);
});
