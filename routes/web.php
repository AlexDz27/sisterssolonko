<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function() {
  $message = 'zxczxczxc';

  return view('home', ['message' => $message]);
});

Route::get('/spring-2021', function() {
  // TODO: should be a generic template with dresses data hydrated (?)
  return view('pages/spring-2021');
});
