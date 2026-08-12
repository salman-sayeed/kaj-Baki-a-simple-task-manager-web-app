'use client';

import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import Image from 'next/image';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks');
const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleStatusUpdate = (updatedTask) => {
    setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
  };

  const handleDelete = (deletedId) => {
    setTasks(tasks.filter((t) => t._id !== deletedId));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      
      {/* ─── UPPER PART (NAVBAR sort of xs) ─── */}
      <header className="w-full bg-white border-b border-slate-200 shadow-sm pl-12 py-4">
        <div className=" flex items-center gap-3">
          <Image
            src="/images/logo.png" 
            alt="Kaj Baki Logo" 
            width={80} 
            height={100}
            priority
            className="object-contain"
          /> 
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Kaj Baki
          </h1>
          <p className="text-xl font-black text-slate-600 tracking-tight">
            Your Daily Task Manager 
          </p>
        </div>
      </header>

      {/* ─── LOWER PART ─── */}
      <div className=" flex-1 flex flex-col items-center justify-center p-4">
        <main className=" w-full max-w-2xl bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
          
          {/* Task Entry Form */}
          <TaskForm onTaskAdded={handleTaskAdded} tasks={tasks} />
          
          {/* Scrollable Container for Task List */}
          <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto pr-1">
            {loading ? (
              <p className="text-slate-500 text-center py-4 font-medium">Loading tasks...</p>
            ) : tasks.length === 0 ? (
              <p className="text-slate-500 text-center py-4 font-medium">No tasks yet. Add one above!</p>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onStatusUpdate={handleStatusUpdate}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>

        </main>
      </div>

      <footer className="w-full bg-slate-900 border-t border-slate-800 py-8 px-6 mt-auto">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Copyright  */}
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold tracking-tight text-slate-400">
        © {new Date().getFullYear()} Kaj Baki.
      </span>
      <span className="text-sm text-slate-400">
        Handcrafted by{' '}
        <a 
          href="https://www.salmansayeed.dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="no-underline text-inherit hover:text-blue-300 font-semibold transition-colors  decoration-blue-400/30 "
        >
          &lt; Salman &gt;
        </a>
      </span>
    </div>

    {/* Social Links */}
    <div className="flex items-center gap-5">
      
      <div className="flex items-center gap-5">
  
      {/* Website */}
      <a 
        href="https://www.salmansayeed.dev" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-blue-300 transition-colors duration-200"
        title="Portfolio Website"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/salman-sayeed" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-[#f0f6fc] transition-colors duration-200"
        title="GitHub Profile"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608 0 1.003.733 1.524 1.507 1.761.892.508 2.041.362 2.539.277.09-.648.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/YOUR_USERNAME" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-[#0a66c2] transition-colors duration-200"
        title="LinkedIn Profile"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/salman_bin_lemon/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-[#e1306c] transition-colors duration-200"
        title="Instagram Profile"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
        </svg>
      </a>

      {/* Mail */}
      <a 
        href="mailto:ss.salmansayeed@gmail.com" 
        className="text-slate-400 hover:text-[#ea4335] transition-colors duration-200"
        title="Send an Email"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>

    </div>

    </div>
  </div>
</footer>

    </div>
  );
}