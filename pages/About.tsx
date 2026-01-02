
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="retro-box">
        <div className="retro-header">professional summary</div>
        <div className="retro-content flex gap-4">
          <div className="w-24 h-24 bg-gray-200 shrink-0 border border-gray-300">
             <img src="https://picsum.photos/100/100?grayscale" alt="Author Avatar" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
          <div>
            <p className="mb-2"><b>Name:</b> Alex M. (Frontend Specialist)</p>
            <p className="mb-2"><b>Location:</b> Remote / Silicon Valley</p>
            <p className="mb-2"><b>Specialties:</b> W3C Standards, Cross-browser compatibility (IE 5.5+, Netscape 7), CSS Layouts, PHP Backend development.</p>
            <p>Dedicated to crafting pixel-perfect interfaces that prioritize user experience and site speed.</p>
          </div>
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">technical skillset</div>
        <div className="retro-content grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold text-[10px] uppercase border-b border-gray-100 mb-1">Development</div>
            <ul className="list-none text-[11px] flex flex-col gap-1">
              <li>&bull; HTML 4.01 / XHTML 1.1</li>
              <li>&bull; CSS 2.0 (Table-less)</li>
              <li>&bull; PHP 4.3 (Zend Engine)</li>
              <li>&bull; JavaScript (DHTML)</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[10px] uppercase border-b border-gray-100 mb-1">Software</div>
            <ul className="list-none text-[11px] flex flex-col gap-1">
              <li>&bull; Adobe Photoshop 7.0</li>
              <li>&bull; Macromedia Dreamweaver MX</li>
              <li>&bull; Macromedia Flash MX</li>
              <li>&bull; Microsoft FrontPage 2003</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="retro-box">
        <div className="retro-header">work history</div>
        <div className="retro-content flex flex-col gap-4">
          <div className="border-b border-gray-50 pb-2">
            <div className="flex justify-between font-bold text-[11px]">
              <span>Lead Designer @ WebCore Solutions</span>
              <span className="text-gray-400">2001 - Present</span>
            </div>
            <p className="text-[10px] text-gray-500">Overseeing the visual redesign of over 15 high-traffic corporate portals.</p>
          </div>
          <div>
            <div className="flex justify-between font-bold text-[11px]">
              <span>Junior Webmaster @ Pixel Perfect</span>
              <span className="text-gray-400">1999 - 2001</span>
            </div>
            <p className="text-[10px] text-gray-500">Managed day-to-day site updates and email server administration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
