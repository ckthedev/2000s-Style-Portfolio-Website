
import React, { useState } from 'react';
import { TRACK_LIST } from '../data';
import { Track } from '../types';

const Music: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACK_LIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex flex-col gap-6">
      {/* Winamp-Lite Player */}
      <div className="w-full max-w-[400px] mx-auto bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] p-2 shadow-md">
        <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center text-[10px] font-bold mb-2">
          <span>Digital Audio Player 1.0</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080]"></div>
            <div className="w-3 h-3 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080]"></div>
          </div>
        </div>
        
        <div className="bg-black p-3 mb-2 flex flex-col items-center">
          <div className="text-[#00ff00] font-mono text-center overflow-hidden h-6 w-full text-[14px]">
            {isPlaying ? `>>> PLAYING: ${currentTrack.title} <<<` : `[ STOPPED: ${currentTrack.title} ]`}
          </div>
          <div className="w-full h-1 bg-[#222] mt-2 relative overflow-hidden">
             <div className={`h-full bg-[#00ff00] transition-all duration-300 ${isPlaying ? 'w-1/2 animate-pulse' : 'w-0'}`}></div>
          </div>
        </div>

        <div className="flex gap-1 justify-center mb-2">
          <button onClick={togglePlay} className="w-10 h-6 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] text-[10px] active:bg-[#808080]">
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
          <button onClick={() => setIsPlaying(false)} className="w-10 h-6 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] text-[10px] active:bg-[#808080]">
            STOP
          </button>
        </div>

        <div className="bg-white border-t border-l border-[#808080] border-b border-r border-white p-1 text-[10px] h-32 overflow-y-auto font-mono">
          {TRACK_LIST.map(track => (
            <div 
              key={track.id} 
              onClick={() => setCurrentTrack(track)}
              className={`cursor-pointer px-1 hover:bg-[#000080] hover:text-white ${currentTrack.id === track.id ? 'bg-[#eee]' : ''}`}
            >
              {track.id}. {track.artist} - {track.title}
            </div>
          ))}
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">studio atmosphere</div>
        <div className="retro-content">
          <p className="mb-2">A professional workspace is nothing without the right background noise. Above is a selection of low-fidelity tracks I use to maintain focus during complex programming sessions.</p>
          <p>I believe audio is just as important as visual aesthetics in creating a productive development environment.</p>
        </div>
      </div>
    </div>
  );
};

export default Music;
