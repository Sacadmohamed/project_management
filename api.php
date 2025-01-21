<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

// Route to get the authenticated user's information
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Resource route for ProjectController
Route::resource('projects', ProjectController::class);