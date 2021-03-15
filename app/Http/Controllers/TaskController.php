<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function store(Request $request ){

        $request->validate([
            'text'=>['required'],
            'day'=>['required'],
            'reminder'=>['required']
        ]);

        $task = Task::create([

            'text'=>$request->text,
            'day'=>$request->day,
            'reminder'=>$request->reminder,
            
        ]);

        return response()->json($task);

    }

    public function index(){

        $task = Task::all();

        return $task;   

    }

    public function update(Request $request, $id){

    
        $reminder = Task::where('id', $id)->update(['reminder' => $request->reminder]);
        return response()->json($reminder);

        // $reminder = Task::where('id', $id)->update(['reminder' => true]);
        // return response()->json(['success' => 'Done']);

        // $reminder = Task::findOrFail($id)->update(['reminder' => $request->reminder]);
        // $reminder->reminder = $request['reminder'];
        // $reminder->save(); 
        // return response()->json($reminder);
    }

    public function destroy($id)
    {
        return Task::findOrFail($id)->delete();
    } //
}
