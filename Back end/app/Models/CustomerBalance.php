<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerBalance extends Model
{
    protected $table = 'customer_balance';
    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $primaryKey = 'id';

    protected $fillable = [
        'username',
        'email',
        'card_no',
        'bank_name',
        'added',
        'transferred',
        'loan',
        'loanreq ',
        'balance ',
        'phone',
        'mobile_recharge',
        'electricity_bill',
        'profile_img',
        'status',
        'created_at',
        'updated_at',
    ];
}
