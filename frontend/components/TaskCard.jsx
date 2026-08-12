'use client';

export default function TaskCard({ task, onStatusUpdate, onDelete }) {
  // Balanced professional colors matching the blue-slate vibe
  const statusColors = {
    'To Do': 'bg-slate-100 text-slate-700 border-slate-200',
    'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
    'Done': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const res = await fetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const updated = await res.json();
      onStatusUpdate(updated);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/tasks/${task._id}`, {
        method: 'DELETE',
      });
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-slate-900">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">{task.title}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${statusColors[task.status]} whitespace-nowrap`}>
          {task.status}
        </span>
      </div>
      
      {task.description && (
        <p className="text-slate-500 text-sm mb-4 leading-relaxed">{task.description}</p>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-3">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="border border-slate-300 bg-white rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button
          onClick={handleDelete}
          className="text-rose-600 hover:text-rose-700 text-sm font-semibold transition-colors cursor-pointer p-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}