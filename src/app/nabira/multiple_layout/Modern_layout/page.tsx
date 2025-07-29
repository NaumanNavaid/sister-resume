import React from 'react';
import { resumeData } from "@/app/data/Resumedata"

const ModernCleanLayout = () => (
  <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
    <div className="border-b-4 border-blue-600 pb-6 mb-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{resumeData.name}</h1>
      <h2 className="text-xl text-blue-600 font-medium">{resumeData.title}</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
        <div>{resumeData.contact.phone} | {resumeData.contact.email}</div>
        <div>{resumeData.contact.address}</div>
        <div>Father's Name: {resumeData.contact.father}</div>
        <div>DOB: {resumeData.contact.dob}</div>
        <div>Religion: {resumeData.contact.religion}</div>
        <div>Nationality: {resumeData.contact.nationality}</div>
      </div>
    </div>

    <section className="mb-6">
      <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">OBJECTIVE</h3>
      <p className="text-gray-700 leading-relaxed">{resumeData.objective}</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">EDUCATION</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
              <div className="text-sm text-gray-600">
                <p>{edu.duration}</p>
                {edu.gpa && <p>CGPA: {edu.gpa}</p>}
                {edu.grade && <p>Grade: {edu.grade}</p>}
                {edu.status && <p>Status: {edu.status}</p>}
                {edu.specialization && <p>{edu.specialization}</p>}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">EXPERIENCE</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-800">{exp.role}</h4>
              <p className="text-gray-600 text-sm">{exp.duration}</p>
              <p className="text-gray-700 text-sm">Subjects: {exp.subjects}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">PROJECTS</h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-800">{project.title}</h4>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          ))}
        </section>
      </div>

      <div>
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">TECHNICAL SKILLS</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {resumeData.technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">KEY SKILLS</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {resumeData.keySkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">CERTIFICATIONS</h3>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium text-sm text-gray-800">{cert.name}</p>
              <p className="text-xs text-blue-600">{cert.institution}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">LANGUAGES</h3>
          <ul className="text-sm text-gray-700">
            {resumeData.languages.map((lang, index) => (
              <li key={index}>{lang.language} - {lang.proficiency}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">CONFERENCES</h3>
          {resumeData.conferences.map((conf, index) => (
            <div key={index} className="mb-2">
              <p className="text-sm font-medium text-gray-800">{conf.name}</p>
              <p className="text-xs text-blue-600">{conf.institution}</p>
              <p className="text-xs text-gray-600">{conf.date}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  </div>
);

export default ModernCleanLayout