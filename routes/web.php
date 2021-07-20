<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  foobar();

  die();

  $message = 'zxczxczxc';

  return view('home', ['message' => $message]);
});
