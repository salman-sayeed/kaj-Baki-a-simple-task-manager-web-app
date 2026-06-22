'use client';

import { useState } from 'react';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, status }),
      });
      const newTask = await res.json();
      onTaskAdded(newTask);
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (error) {
      console.error('Error adding task:', error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8 text-slate-900">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Add New Task</h2>
      
      <input
        type="text"
        placeholder="Task title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-4 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 transition-colors cursor-pointer shadow-sm"
      >
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}