
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import JournalIndex from './pages/JournalIndex';
import JournalEntryPage from './pages/JournalEntryPage';
import About from './pages/About';
import Music from './pages/Music';
import Guestbook from './pages/Guestbook';
import Projects from './pages/Projects';
import { JOURNAL_ENTRIES } from './data';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-[180px] shrink-0">
      <div className="retro-box">
        <div className="retro-header">navigation</div>
        <div className="retro-content flex flex-col gap-1">
          <Link to="/">[ main / home ]</Link>
          <Link to="/about">[ resume / bio ]</Link>
          <Link to="/projects">[ projects / work ]</Link>
          <Link to="/journal">[ dev log ]</Link>
          <Link to="/music">[ studio vibes ]</Link>
          <Link to="/guestbook">[ guestbook ]</Link>
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">availability</div>
        <div className="retro-content italic text-[10px] text-gray-500">
          Status: Accepting new projects for June 2003.
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">recent logs</div>
        <div className="retro-content text-[10px] flex flex-col gap-2">
          {JOURNAL_ENTRIES.slice(-3).reverse().map(entry => (
            <Link key={entry.id} to={`/journal/${entry.id}`} className="block leading-tight border-b border-gray-100 pb-1">
              &bull; {entry.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">external</div>
        <div className="retro-content flex flex-col gap-1">
          <a href="#" target="_blank">&raquo; sourceforge</a>
          <a href="#" target="_blank">&raquo; dev.art</a>
          <a href="#" target="_blank">&raquo; macromedia</a>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center opacity-70">
        <div className="badge">built with php</div>
        <div className="badge">best in 1024x768</div>
        <div className="badge">w3c compliant</div>
      </div>
    </aside>
  );
};

const Header = () => (
  <header className="mb-6 border-b border-dotted border-gray-300 pb-4">
    <h1 className="text-2xl font-bold tracking-tighter text-[#444]">
      Portfolio <span className="font-normal text-gray-400 text-sm">// Alex.Dev</span>
    </h1>
    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
      Professional Web Designer & Frontend Developer
    </div>
  </header>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen py-8 flex justify-center">
      <div className="w-full max-w-[760px] mx-4 bg-white p-6 shadow-sm border border-[#e5e5e5]">
        <Header />
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 min-w-0 fade-in" key={location.pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/journal" element={<JournalIndex />} />
              <Route path="/journal/:id" element={<JournalEntryPage />} />
              <Route path="/music" element={<Music />} />
              <Route path="/guestbook" element={<Guestbook />} />
            </Routes>
          </main>

          {/* Sidebar */}
          <Sidebar />
        </div>

        <footer className="mt-12 pt-4 border-t border-dotted border-gray-200 text-center text-[10px] text-gray-400">
          &copy; 2003 Alex Dev Portfolio. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
