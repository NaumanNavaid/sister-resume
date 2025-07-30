import Image from "next/image";
import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex text-sm text-gray-900">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-black text-white p-6 flex flex-col justify-start">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-[6px] border-blue-700">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <h1 className="mt-4 text-lg font-bold text-white text-center">RICHARD SANCHEZ</h1>
        </div>

        {/* About Me */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About Me</h2>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam augue dui.
          </p>
        </div>

        {/* Contact */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-blue-400">📞</span>
            <span>+123-456-7890</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-400">📧</span>
            <span>hello@reallygreatsite.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-400">📍</span>
            <span>123 Anywhere St., Any City</span>
          </div>
        </div>

        {/* Language */}
        <div className="mb-6">
          <h2 className="text-md font-semibold border border-white rounded-full px-4 py-1 inline-block mb-2">Language</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>English</li>
            <li>Germany (basic)</li>
            <li>Spain (basic)</li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h2 className="text-md font-semibold border border-white rounded-full px-4 py-1 inline-block mb-2">Expertise</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Management Skills</li>
            <li>Creativity</li>
            <li>Digital Marketing</li>
            <li>Negotiation</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-2/3 bg-white p-8">
        {/* Header */}
        <div className="relative mb-10">
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-5 flex items-center rounded-r-full">
            <div className="text-left">
              <p className="text-md mt-1">Product Designer</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h2 className="text-white bg-blue-900 px-6 py-1 rounded-full inline-block text-sm font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Arowwai Industries</h3>
              <p className="italic text-sm">Sydney - Australia | 2020 - 2022</p>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="font-bold">Wardiere Inc.</h3>
              <p className="italic text-sm">Sydney - Australia | 2016 - 2020</p>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="font-bold">Studio Showde</h3>
              <p className="italic text-sm">Sydney - Australia | 2010 - 2015</p>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-white bg-blue-900 px-6 py-1 rounded-full inline-block text-sm font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Borcell University</h3>
              <p className="italic text-sm">Bachelor of Business Management | 2014 - 2023</p>
            </div>
            <div>
              <h3 className="font-bold">Borcell University</h3>
              <p className="italic text-sm">Master of Business Management | 2014 - 2018</p>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div>
          <h2 className="text-white bg-blue-900 px-6 py-1 rounded-full inline-block text-sm font-semibold mb-4">Skills Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium">Design Process</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-700 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Project Management</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-700 h-2 rounded-full" style={{ width: '81%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
