<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = new Usuario();
        return $usuario->index();
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
    public function store()
    {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if ($data) {
            try {
                $usuario = new Usuario();
                $usuario->email = $data['email'];
                $usuario->password = $data['password'];
                $usuario->rol = $data['rol'];
                $usuario->save();
                return response()->json(['message' => 'Usuario created successfully.'], 200);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error creating Usuario.', 'error' => $e->getMessage()], 500);
            }
            return response()->json(['message' => 'Usuario created successfully.'], 200);
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $usuario = Usuario::find($id);
        return $usuario->toJson();
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
    public function update(string $id)
    {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if ($data) {
            try {
                $usuario = Usuario::find($id);
                if ($usuario) {
                    $usuario->email = $data['email'];
                    $usuario->password = $data['password'];
                    $usuario->rol = $data['rol'];
                    $usuario->save();
                    return response()->json(['message' => 'Usuario updated successfully.'], 200);
                } else {
                    return response()->json(['message' => 'Usuario not found.'], 404);
                }
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error updating Usuario.', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data not found.'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuario::find($id);

        if ($usuario) {
            $usuario->delete();
            return response()->json(['message' => 'Usuario deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Usuario not found.'], 404);
        }
    }
}
