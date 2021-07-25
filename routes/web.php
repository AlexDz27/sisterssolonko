<?php

use Illuminate\Support\Facades\Route;
use App\Models\Dress;

Route::get('/', function() {
  $dresses = Dress::all();

  return view('home', ['dresses' => $dresses]);
});

Route::get('/spring-2021', function() {
  $dresses = Dress::all();

  return view('pages/spring-2021', ['dresses' => $dresses]);
});

Route::get('/cart', function() {
  return view('pages/cart');
});
