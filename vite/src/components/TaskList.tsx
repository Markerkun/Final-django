import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  isLoading,
  onToggle,
  onDelete,
}) => {
  if (isLoading && tasks.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-500">Loading tasks...</div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No tasks yet. Create one to get started! 🚀</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              disabled={isLoading}
              className="w-5 h-5 mt-1 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <div className="flex-1 min-w-0">
              <h3
                className={`text-lg font-medium ${
                  task.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-900'
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p
                  className={`text-sm mt-1 ${
                    task.completed ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {task.description}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(task.created_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => onDelete(task.id)}
              disabled={isLoading}
              className="px-3 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white text-sm rounded-lg transition-colors flex-shrink-0"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
