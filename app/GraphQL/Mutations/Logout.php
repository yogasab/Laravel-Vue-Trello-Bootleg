<?php

namespace App\GraphQL\Mutations;

use GraphQL\Error\Error;
use Illuminate\Support\Facades\Auth;

class Logout
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $guard = Auth::guard('web');
        if (!$guard) {
            throw new Error('Error hehehehe siiiiu');
        }
        $user = $guard->user();
        $guard->logout();
        return $user;
    }
}
