import React from "react";
import { resumeData } from "@/app/data/Resumedata";
import { Eye } from 'lucide-react';

const ExecutiveLayout = () => (
  <div className="bg-white max-w-4xl mx-auto shadow-lg print:shadow-none">
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{resumeData.name}</h1>
          <h2 className="text-base sm:text-lg opacity-90">{resumeData.title}</h2>
        </div>
        <div className="text-left sm:text-right text-sm font-semibold">
          <div>{resumeData.contact.phone}</div>
          <div>{resumeData.contact.email}</div>
        </div>
      </div>
      <div className="mt-4 text-lg  space-y-1">
        <div className="break-all">{resumeData.contact.linkedin}</div>
        <div>{resumeData.contact.address}</div>
        <div>Father's Name: {resumeData.contact.father} • DOB: {resumeData.contact.dob}</div>
      </div>
    </div>

    <div className="p-6  mt-12">
      {/* Objective Section */}
      <section className="mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
            <Eye className="w-4 h-4 text-indigo-600 print:w-3 print:h-3" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Objective</h3>
        </div>
        <p className="text-gray-700 leading-relaxed ml-11 print:ml-9 text-sm sm:text-base">{resumeData.objective}</p>
      </section>

      {/* Main Content - Single Column Layout */}
      <div className="space-y-6">
        {/* Experience Section */}
        <section>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
              <span className="text-indigo-600 font-bold text-sm print:text-xs">💼</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Experience</h3>
          </div>
          <div className="ml-11 print:ml-9 space-y-3">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-indigo-100 pl-4 pb-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{exp.role}</h4>
                <p className="text-indigo-600 font-medium text-sm">{exp.duration}</p>
                <p className="text-gray-700 text-xs sm:text-sm">Subjects: {exp.subjects}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
              <span className="text-indigo-600 font-bold text-sm print:text-xs">🎓</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Education</h3>
          </div>
          <div className="ml-11 print:ml-9 space-y-3">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-indigo-100 pl-4 pb-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{edu.degree}</h4>
                <p className="text-indigo-600 font-medium text-sm">{edu.institution}</p>
                <div className="text-xs sm:text-sm text-gray-600">
                  {edu.duration && <span>{edu.duration} • </span>}
                  {edu.gpa && <span>CGPA: {edu.gpa}</span>}
                  {edu.grade && <span>Grade: {edu.grade}</span>}
                  {edu.status && <span> ({edu.status})</span>}
                  {edu.specialization && <span className="block">{edu.specialization}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section - Side by Side on Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20">
          <section>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
                <span className="text-indigo-600 font-bold text-sm print:text-xs">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Key Skills</h3>
            </div>
            <div className="ml-11 print:ml-9 space-y-2">
              {resumeData.keySkills.map((skill, index) => (
                <span key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium inline-block mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
                <span className="text-indigo-600 font-bold text-sm print:text-xs">💻</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Technical Skills</h3>
            </div>
            <div className="ml-11 print:ml-9 space-y-2">
              {resumeData.technicalSkills.map((skill, index) => (
                <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium inline-block mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Internship Section */}
        <section>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
              <span className="text-indigo-600 font-bold text-sm print:text-xs">🏥</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Internship</h3>
          </div>
          <div className="ml-11 print:ml-9 border-l-2 border-indigo-100 pl-4">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{resumeData.internship.organization}</h4>
            <p className="text-indigo-600 font-medium text-sm">{resumeData.internship.department}</p>
            <p className="text-gray-700 text-xs sm:text-sm">{resumeData.internship.duration}</p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
              <span className="text-indigo-600 font-bold text-sm print:text-xs">🔬</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Projects</h3>
          </div>
          <div className="ml-11 print:ml-9 space-y-3">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-indigo-100 pl-4 pb-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{project.title}</h4>
                <p className="text-gray-700 text-xs sm:text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages and Certifications - Side by Side on Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
                <span className="text-indigo-600 font-bold text-sm print:text-xs">🌐</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Languages</h3>
            </div>
            <div className="ml-11 print:ml-9 space-y-2">
              {resumeData.languages.map((lang, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-800 text-sm">{lang.language}</h4>
                  <p className="text-gray-600 text-xs">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
                <span className="text-indigo-600 font-bold text-sm print:text-xs">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Certifications</h3>
            </div>
            <div className="ml-11 print:ml-9 space-y-2">
              {resumeData.certifications.map((cert, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
                  <p className="text-indigo-600 text-xs">{cert.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Conferences Section */}
        <section>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 print:w-6 print:h-6">
              <span className="text-indigo-600 font-bold text-sm print:text-xs">📊</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Conferences</h3>
          </div>
          <div className="ml-11 print:ml-9 space-y-3">
            {resumeData.conferences.map((conf, index) => (
              <div key={index} className="border-l-2 border-indigo-100 pl-4 pb-2">
                <h4 className="font-medium text-gray-800 text-sm sm:text-base">{conf.name}</h4>
                <p className="text-indigo-600 text-xs sm:text-sm">{conf.institution}</p>
                <p className="text-gray-500 text-xs">{conf.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ExecutiveLayout;