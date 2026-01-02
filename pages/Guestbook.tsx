
import React, { useState, useEffect } from 'react';
import { GuestbookEntry } from '../types';

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('guestbook_entries');
    if (saved) {
      setEntries(JSON.parse(saved));
    } else {
      // Sample data
      setEntries([
        {
          id: '1',
          name: 'Mysterious Stranger',
          message: 'Found your site through a web ring. Love the aesthetic!',
          date: '2003.04.11 09:12'
        },
        {
          id: '2',
          name: 'Lina_92',
          message: 'Nice layout! Very clean. Check out my homepage too!',
          date: '2003.04.14 18:45'
        }
      ]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toISOString().slice(0, 16).replace('T', ' ').replace(/-/g, '.')
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('guestbook_entries', JSON.stringify(updated));
    setName('');
    setMessage('');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="retro-box">
        <div className="retro-header">sign the guestbook</div>
        <div className="retro-content">
          <p className="mb-4 text-[11px] text-gray-500 italic">Please leave a polite message. Spammers will be blocked by IP.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <label className="text-[10px] font-bold block mb-1">NAME:</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-1 text-[11px] outline-none focus:border-[#336699]"
                placeholder="e.g. Neo"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold block mb-1">MESSAGE:</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 p-1 text-[11px] outline-none focus:border-[#336699]"
                placeholder="Say hello..."
              />
            </div>
            <div>
              <button 
                type="submit"
                className="bg-[#eee] border border-[#ccc] px-4 py-1 text-[10px] hover:bg-white active:bg-gray-200"
              >
                &raquo; SIGN GUESTBOOK
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="px-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest border-b border-gray-200">
          Previous Messages
        </div>
        
        {entries.map(entry => (
          <div key={entry.id} className="retro-box">
            <div className="retro-header flex justify-between bg-[#fcfcfc]">
              <span>FROM: <b>{entry.name}</b></span>
              <span className="font-normal">{entry.date}</span>
            </div>
            <div className="retro-content text-[11px]">
              {entry.message}
            </div>
          </div>
        ))}

        {entries.length === 0 && (
          <div className="text-center py-4 text-gray-400 text-[11px]">No messages yet. Be the first to sign!</div>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
