<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function index()
    {
        return Project::all(); // Get all projects
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:active,inactive,completed',
        ]);

        return Project::create($request->all()); // Create a new project
    }

    public function show($id)
    {
        return Project::findOrFail($id); // Get a single project
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->update($request->all()); // Update existing project
        return $project;
    }

    public function destroy($id)
    {
        Project::destroy($id); // Delete a project
        return response()->json(['message' => 'Project deleted successfully']);
    }
}
