
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNAL_ENTRIES } from '../data';
import { Comment } from '../types';

const JournalEntryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const entry = JOURNAL_ENTRIES.find(e => e.id === id);

  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  // Load comments from localStorage
  useEffect(() => {
    if (id) {
      const saved = localStorage.getItem(`comments_${id}`);
      if (saved) {
        setComments(JSON.parse(saved));
      } else {
        // Initial sample comment
        setComments([{
          id: 'sample-1',
          author: 'web_traveler',
          text: 'Really enjoyed reading this! It resonates with me.',
          date: '2003.05.02 14:22'
        }]);
      }
    }
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !commentText) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      text: commentText,
      date: new Date().toISOString().slice(0, 16).replace('T', ' ').replace(/-/g, '.')
    };

    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updated));
    setAuthor('');
    setCommentText('');
  };

  if (!entry) {
    return (
      <div className="retro-box">
        <div className="retro-header">error</div>
        <div className="retro-content">Entry not found. <Link to="/journal">Go back</Link></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <article className="retro-box">
        <div className="retro-header flex justify-between">
          <span>{entry.title}</span>
          <span className="font-normal">{entry.date}</span>
        </div>
        <div className="retro-content whitespace-pre-wrap leading-relaxed text-[12px]">
          {entry.content}
        </div>
      </article>

      <section>
        <div className="retro-box">
          <div className="retro-header">comments ({comments.length})</div>
          <div className="retro-content">
            <div className="flex flex-col gap-4 mb-6">
              {comments.map(c => (
                <div key={c.id} className="border-b border-gray-100 pb-2 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-[11px] text-[#336699]">{c.author} says...</span>
                    <span className="text-[9px] text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-[11px]">{c.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="bg-[#fcfcfc] border border-gray-100 p-3">
              <div className="text-[10px] font-bold mb-2 uppercase text-gray-400">Add a comment</div>
              <div className="mb-2">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full border border-gray-300 p-1 text-[11px] outline-none focus:border-[#336699]"
                />
              </div>
              <div className="mb-2">
                <textarea 
                  rows={3}
                  placeholder="Your message..." 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full border border-gray-300 p-1 text-[11px] outline-none focus:border-[#336699]"
                />
              </div>
              <button 
                type="submit"
                className="bg-[#eee] border border-[#ccc] px-3 py-1 text-[10px] hover:bg-white active:bg-gray-200"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>

      <Link to="/journal" className="text-[10px]">&larr; Back to Journal</Link>
    </div>
  );
};

export default JournalEntryPage;
