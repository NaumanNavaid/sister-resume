import React from 'react';
import { resumeData } from "@/app/data/Resumedata"
const TwoColumnLayout = () => (
    <div className="bg-white max-w-4xl mx-auto shadow-lg">
      <div className="bg-slate-800 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
        <h2 className="text-lg text-slate-300">{resumeData.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-slate-50 p-6">
          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">CONTACT</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div>{resumeData.contact.phone}</div>
              <div>{resumeData.contact.email}</div>
              <div className="text-blue-600 break-all text-xs">{resumeData.contact.linkedin}</div>
              <div>{resumeData.contact.address}</div>
              <div>Father: {resumeData.contact.father}</div>
              <div>DOB: {resumeData.contact.dob}</div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">KEY SKILLS</h3>
            <ul className="space-y-1">
              {resumeData.keySkills.map((skill, index) => (
                <li key={index} className="text-sm text-slate-600">• {skill}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">TECHNICAL SKILLS</h3>
            <ul className="space-y-1">
              {resumeData.technicalSkills.map((skill, index) => (
                <li key={index} className="text-sm text-slate-600">• {skill}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">LANGUAGES</h3>
            {resumeData.languages.map((lang, index) => (
              <div key={index} className="mb-2">
                <h4 className="font-medium text-slate-800 text-sm">{lang.language}</h4>
                <p className="text-slate-600 text-xs">{lang.proficiency}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">CERTIFICATIONS</h3>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-medium text-slate-800 text-sm">{cert.name}</h4>
                <p className="text-slate-600 text-xs">{cert.institution}</p>
              </div>
            ))}
          </section>
        </div>

        <div className="md:col-span-2 p-6">
          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">OBJECTIVE</h3>
            <p className="text-slate-700 leading-relaxed">{resumeData.objective}</p>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">EXPERIENCE</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-slate-800">{exp.role}</h4>
                <p className="text-slate-600 font-medium">{exp.duration}</p>
                <p className="text-sm text-slate-500">Subjects: {exp.subjects}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">EDUCATION</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-slate-800">{edu.degree}</h4>
                <p className="text-slate-600 font-medium">{edu.institution}</p>
                <div className="text-sm text-slate-500">
                  {edu.duration && <span>{edu.duration} • </span>}
                  {edu.gpa && <span>CGPA: {edu.gpa}</span>}
                  {edu.grade && <span>Grade: {edu.grade}</span>}
                  {edu.status && <span> ({edu.status})</span>}
                  {edu.specialization && <span className="block">{edu.specialization}</span>}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">INTERNSHIP</h3>
            <div>
              <h4 className="font-semibold text-slate-800">{resumeData.internship.organization}</h4>
              <p className="text-slate-600 font-medium">{resumeData.internship.department}</p>
              <p className="text-sm text-slate-500">{resumeData.internship.duration}</p>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">PROJECTS</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-slate-800">{project.title}</h4>
                <p className="text-slate-700">{project.description}</p>
              </div>
            ))}
          </section>

          <section>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">CONFERENCES</h3>
            {resumeData.conferences.map((conf, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-medium text-slate-800 text-sm">{conf.name}</h4>
                <p className="text-slate-600 text-xs">{conf.institution}</p>
                <p className="text-slate-500 text-xs">{conf.date}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );


  export default TwoColumnLayout