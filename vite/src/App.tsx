import React, { useEffect, useState } from 'react';
import { taskApi } from './api/taskApi';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Stats } from './components/Stats';
import './index.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface StatsData {
  total: number;
  completed: number;
  pending: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState<StatsData>({ total: 0, completed: 0, pending: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load tasks and stats on mount
  useEffect(() => {
    loadTasks();
    loadStats();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const data = await taskApi.getTasks();
      setTasks(Array.isArray(data.results) ? data.results : data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load tasks');
      console.error('Error loading tasks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const data = await taskApi.getStats();
      setStats(data);
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  const handleAddTask = async (title: string, description: string) => {
    try {
      setIsLoading(true);
      const newTask = await taskApi.createTask(title, description);
      setTasks([newTask, ...tasks]);
      await loadStats();
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to add task');
      console.error('Error adding task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleTask = async (id: number) => {
    try {
      setIsLoading(true);
      const updatedTask = await taskApi.toggleTask(id);
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
      await loadStats();
    } catch (err: any) {
      setError(err.message || 'Failed to toggle task');
      console.error('Error toggling task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      setIsLoading(true);
      await taskApi.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
      await loadStats();
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to delete task');
      console.error('Error deleting task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📋 My ToDoList</h1>
          <p className="text-gray-600">Organize your tasks and stay productive</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Stats */}
        <Stats stats={stats} />

        {/* Add task form */}
        <TaskForm onSubmit={handleAddTask} isLoading={isLoading} />

        {/* Task list */}
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
