<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/epay/signup',[AdminController::class,'userSignUp']);
Route::post('/epay/login',[AdminController::class,'userLogin']);


Route::get('/',[AdminController::class,'index']);
Route::get('/epay/view/all', [AdminController::class,'allshow']);
Route::get('/epay/ctransition', [AdminController::class,'cbalance']);
Route::delete('/epay/ctransition/delete/{id}', [AdminController::class,'cdestroy']);
Route::get('/epay/view/{id}', [AdminController::class,'show']);
Route::post('/epay/cadd', [AdminController::class,'customeradd']);
Route::get('/epay/edit/{id}', [AdminController::class,'edit']);
Route::post('/epay/update/{id}', [AdminController::class,'update']);
Route::delete('/epay/delete/{id}', [AdminController::class,'destroy']);
Route::get('/epay/review', [AdminController::class,'rshow']);
Route::delete('/epay/review/delete/{id}', [AdminController::class,'rdestroy']);