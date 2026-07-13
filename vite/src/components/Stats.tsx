import React from 'react';

interface Stats {
  total: number;
  completed: number;
  pending: number;
}

interface StatsProps {
  stats: Stats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
        <div className="text-sm text-gray-600">Total Tasks</div>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
        <div className="text-sm text-gray-600">Pending</div>
      </div>
    </div>
  );
};
