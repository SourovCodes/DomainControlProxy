<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::middleware(['auth'])->group(function () {
    Route::get('/domains', [\App\Http\Controllers\DomainController::class, 'index'])->name('domains.index');
    Route::get('/domains/{domain}/edit', [\App\Http\Controllers\DomainController::class, 'edit'])->name('domains.edit');
    Route::put('/domains/{domain}', [\App\Http\Controllers\DomainController::class, 'update'])->name('domains.update');
});

Route::get('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login'])->name('login')->middleware(['guest']);
Route::post('/logout', [\App\Http\Controllers\Auth\AuthController::class, 'logout'])->name('logout')->middleware(['auth']);
Route::get('/auth/google', [\App\Http\Controllers\Auth\GoogleAuthController::class, 'redirect'])->name('auth.google')->middleware(['guest']);
Route::get('/auth/google/callback', [\App\Http\Controllers\Auth\GoogleAuthController::class, 'callback'])->name('auth.google.callback')->middleware(['guest']);
