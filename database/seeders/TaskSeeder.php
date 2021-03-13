<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([

            'text'=>'doctor',
            'day'=>'24 Feb 2021',
            'reminder'=> true,
        ]);
    }
}
