import React from 'react';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f7fafd]">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-[#2ec4c8] w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="text-white text-2xl font-bold">J</span>
          </div>
          <span className="text-[#2ec4c8] text-2xl font-bold">Jobify</span>
        </div>
        <nav className="flex flex-col gap-6 text-gray-500">
          <a href="#" className="flex items-center gap-2 text-[#2ec4c8] font-medium">
            <span className="material-icons">event_note</span> Add Job
          </a>
          <a href="#" className="flex items-center gap-2">
            <span className="material-icons">work_outline</span> All Jobs
          </a>
          <a href="#" className="flex items-center gap-2">
            <span className="material-icons">bar_chart</span> Stats
          </a>
          <a href="#" className="flex items-center gap-2">
            <span className="material-icons">assignment_ind</span> Profile
          </a>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <span className="material-icons">menu</span>
            </button>
          </div>
          <h1 className="text-2xl font-medium text-center flex-1">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="bg-gray-100 p-2 rounded-full">
              <span className="material-icons">dark_mode</span>
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 bg-[#2ec4c8] text-white px-4 py-2 rounded-lg">
                <span className="material-icons">person</span> Zippy <span className="material-icons">expand_more</span>
              </button>
            </div>
          </div>
        </header>
        {/* Add Job Form */}
        <main className="flex-1 flex items-start justify-center py-12">
          <div className="bg-white rounded-lg shadow-md w-full max-w-4xl p-10">
            <h2 className="text-3xl font-semibold mb-8">Add Job</h2>
            <form className="grid grid-cols-3 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Position</label>
                <input type="text" className="border rounded px-3 py-2 bg-[#f7fafd]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Company</label>
                <input type="text" className="border rounded px-3 py-2 bg-[#f7fafd]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Job Location</label>
                <input type="text" className="border rounded px-3 py-2 bg-[#f7fafd]" value="Codeville" readOnly />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Job Status</label>
                <select className="border rounded px-3 py-2 bg-[#f7fafd]">
                  <option>pending</option>
                  <option>interview</option>
                  <option>declined</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Job Type</label>
                <select className="border rounded px-3 py-2 bg-[#f7fafd]">
                  <option>full-time</option>
                  <option>part-time</option>
                  <option>remote</option>
                  <option>internship</option>
                </select>
              </div>
              <div className="flex items-end h-full">
                <button type="submit" className="w-full bg-[#2ec4c8] text-white py-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
