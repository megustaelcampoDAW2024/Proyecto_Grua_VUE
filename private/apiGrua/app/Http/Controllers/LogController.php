<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $log = new Log();
        return $log->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if ($data) {
            try {
                $log = new Log();
                $log->usuario_id = $data['usuario'];
                $log->accion = $data['accion'];
                $log->fecha = $data['fecha'];
                $log->save();
                return response()->json(['message' => 'Log created successfully.'], 200);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error creating log.', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
