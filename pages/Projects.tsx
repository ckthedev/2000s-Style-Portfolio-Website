
import React from 'react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 px-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest border-b border-gray-200">
        Project Portfolio
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map(project => (
          <div key={project.id} className="retro-box">
            <div className="retro-header flex justify-between">
              <span>{project.name}</span>
              <span className="font-normal">{project.year}</span>
            </div>
            <div className="retro-content">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-50 border border-gray-200 shrink-0">
                  <img src={`https://picsum.photos/200/200?random=${project.id}`} alt={project.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-[#336699] font-bold uppercase mb-1">{project.category}</div>
                  <p className="text-[11px] mb-3 leading-snug">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="bg-gray-100 border border-gray-200 px-2 py-0.5 text-[9px] text-gray-500 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="retro-box">
        <div className="retro-header">service inquiry</div>
        <div className="retro-content">
          <p className="text-[11px]">
            If you are interested in hiring me for a custom project, please reach out via the 
            <a href="#/guestbook" className="mx-1 underline">guestbook</a> or email my professional inbox. 
            Rates starting at $35/hr for standard HTML/CSS work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
