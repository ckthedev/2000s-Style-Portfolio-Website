
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, JOURNAL_ENTRIES } from '../data';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <div className="retro-box">
          <div className="retro-header">brief introduction</div>
          <div className="retro-content">
            <p className="mb-4">
              Welcome to my professional online workspace. I am a <b>Frontend Engineer and UI Designer</b> specializing 
              in standards-compliant web development and clean, user-centric interfaces.
            </p>
            <p>
              I leverage the latest technologies like PHP 4, CSS2, and XHTML 1.1 to deliver high-quality digital 
              experiences. Explore my <Link to="/projects">latest projects</Link> or view my <Link to="/about">experience</Link>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="retro-box">
          <div className="retro-header">featured project</div>
          <div className="retro-content">
            <div className="flex gap-4">
              <div className="w-32 h-20 bg-gray-100 border border-gray-300 shrink-0">
                <img src="https://picsum.photos/128/80?random=1" alt="Featured Project" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <h3 className="font-bold text-[12px] uppercase tracking-tight text-[#336699]">
                  {PROJECTS[0].name} ({PROJECTS[0].year})
                </h3>
                <p className="text-[11px] mb-2">{PROJECTS[0].description}</p>
                <Link to="/projects" className="text-[10px] font-bold underline">View all work &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="retro-box">
          <div className="retro-header">latest from the log</div>
          <div className="retro-content flex flex-col gap-4">
            {JOURNAL_ENTRIES.slice(-1).map(entry => (
              <div key={entry.id}>
                <Link to={`/journal/${entry.id}`} className="font-bold text-md block mb-1">
                  &raquo; {entry.title}
                </Link>
                <p className="text-[11px] text-gray-500 italic mb-2">
                  {entry.excerpt}
                </p>
                <Link to="/journal" className="text-[10px] text-gray-400">View more entries &raquo;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
