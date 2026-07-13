import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const taskApi = {
  // Get all tasks
  getTasks: async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks/`);
    return response.data;
  },

  // Create new task
  createTask: async (title: string, description: string = '') => {
    const response = await axios.post(`${API_BASE_URL}/tasks/`, {
      title,
      description,
      completed: false,
    });
    return response.data;
  },

  // Update task
  updateTask: async (id: number, data: any) => {
    const response = await axios.patch(`${API_BASE_URL}/tasks/${id}/`, data);
    return response.data;
  },

  // Delete task
  deleteTask: async (id: number) => {
    await axios.delete(`${API_BASE_URL}/tasks/${id}/`);
  },

  // Toggle task completion
  toggleTask: async (id: number) => {
    const response = await axios.post(
      `${API_BASE_URL}/tasks/${id}/toggle_completion/`
    );
    return response.data;
  },

  // Get stats
  getStats: async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks/stats/`);
    return response.data;
  },
};
