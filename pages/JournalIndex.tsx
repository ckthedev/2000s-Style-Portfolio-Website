
import React from 'react';
import { Link } from 'react-router-dom';
import { JOURNAL_ENTRIES } from '../data';

const JournalIndex: React.FC = () => {
  // Simple reverse chronological sort
  const entries = [...JOURNAL_ENTRIES].reverse();

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 px-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest border-b border-gray-200">
        Journal Index
      </div>
      
      {entries.map(entry => (
        <div key={entry.id} className="retro-box">
          <div className="retro-header flex justify-between">
            <span>{entry.title}</span>
            <span className="font-normal">{entry.date}</span>
          </div>
          <div className="retro-content">
            <p className="text-[11px] mb-3">{entry.excerpt}</p>
            <Link to={`/journal/${entry.id}`} className="text-[10px] font-bold">
              [ Read full entry... ]
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalIndex;
