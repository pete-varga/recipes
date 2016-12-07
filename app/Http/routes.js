'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

//Route.on('/').render('welcome')
//Route.on('/').render('main.njk')
Route.get('/','RecipeController.list');
Route.get('/create','RecipeController.create');
Route.post('/create','RecipeController.createNew');
Route.get('/recipe/:id','RecipeController.show');
Route.get('/recipe/:id/edit','RecipeController.edit');
Route.post('/recipe/:id/edit','RecipeController.editSubmit');
Route.post('/recipe/:id/delete','RecipeController.delete');
Route.get('/register','UserController.register');
Route.post('/register','UserController.registerSubmit');
Route.get('/login','UserController.login');
Route.post('/login','UserController.loginSubmit');
Route.get('/logout','UserController.logout');
Route.post('/search','RecipeController.search');
Route.get('/search','RecipeController.search');
Route.group('ajax', function () {
  Route.delete('/recipe/:id/delete', 'RecipeController.ajaxDelete')//.middleware('auth')
  Route.get('/search', 'RecipeController.ajaxSearch')//.middleware('auth')
  Route.post('/login', 'UserController.ajaxLogin')
}).prefix('/ajax')