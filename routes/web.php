<?php

use Illuminate\Support\Facades\Route;
use App\Models\Dress;

Route::get('/', function() {
  $message = 'zxczxczxc';

  return view('home', ['message' => $message]);
});

Route::get('/spring-2021', function() {
  $dresses = Dress::all();

  return view('pages/spring-2021', ['dresses' => $dresses]);
});

Route::get('/cart', function() {
  return view('pages/cart');
});
