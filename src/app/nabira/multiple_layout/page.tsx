"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

const ResumeLayouts = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  const resumeData = {
    name: "Syeda Nabira Navaid",
    title: "MS Medical Physics Candidate",
    contact: {
      phone: "0313-8466127",
      email: "nabiranavaid@gmail.com",
      linkedin: "https://www.linkedin.com/in/nabira-navaid-2b29b6257",
      address: "Flat No 105 Mateen Arcade Apartments Gulshan-e-Iqbal Block 7, opposite al Jannat restaurant, Karachi",
      father: "Syed Navaid Iqbal",
      dob: "1st June 2001",
      religion: "Islam",
      nationality: "Pakistani"
    },
    objective: "Highly motivated and results-oriented student with a strong academic track record seeking a position in a reputable organization. I flourish in dynamic environments where I can contribute my skills and gain valuable experience working on meaningful projects.",
    experience: [
      {
        role: "Home Tutor - Karachi Board",
        duration: "8 months",
        subjects: "Physics, Chemistry, Mathematics"
      },
      {
        role: "Home Tutor - O Level",
        duration: "1 year",
        subjects: "Physics, Chemistry, Mathematics"
      }
    ],
    education: [
      {
        degree: "MS in Medical Physics",
        institution: "NED University of Engineering & Technology",
        duration: "2025-Present",
        status: "In Progress",
        gpa: "4.0"
      },
      {
        degree: "BS in Applied Physics",
        institution: "NED University of Engineering & Technology",
        duration: "2020-2024",
        gpa: "3.644",
        specialization: "Specialization in Electronics"
      },
      {
        degree: "HSC (Pre-Engineering)",
        institution: "Government Degree Science & Commerce College for Women, Block 16, F.B Area",
        duration: "2018-2020",
        grade: "B"
      },
      {
        degree: "O'Level (Science)",
        institution: "Army Public School & College System",
        duration: "Till 2018",
        grade: "B"
      }
    ],
    internship: {
      organization: "Jinnah Postgraduate Medical College (JPMC)",
      department: "CybeKnife & Tomotherapy",
      duration: "27 August 2022 to 12 September 2022"
    },
    projects: [
      {
        title: "Evaluation & Analysis of Infrared Radiations at Upper Atmosphere",
        description: "Research and analytic project using data from NASA CERES website for a data range of 10 years from 2013 to 2022"
      }
    ],
    certifications: [
      {
        name: "Applications of Nuclear Techniques & Radiation Effects",
        institution: "Department of Physics, NED University of Engineering & Technology"
      },
      {
        name: "2-day Workshop on GEOMAGNETIC OBSERVATION",
        institution: "NED University of Engineering & Technology"
      }
    ],
    conferences: [
      {
        name: "First International Conference on Applied Physics & Engineering (ICAPE)",
        institution: "NED University",
        date: "16th Sept 2021 – 17th Sept 2021"
      },
      {
        name: "5th Annual National Conference on the International Day of Medical Physics",
        institution: "ZIAUDDIN University",
        date: "19th Nov 2022"
      }
    ],
    keySkills: [
      "Group collaboration",
      "Organizational skills",
      "Good working relationships",
      "Communication skills",
      "Welcome new responsibilities",
      "Effective and efficient results delivery",
      "Continuous learning",
      "Creativity",
      "Analytical skills",
      "Leadership"
    ],
    technicalSkills: [
      "MS Excel",
      "MS Word",
      "MS PowerPoint",
      "Computer skills",
      "Basics of Python",
      "Basics of Matlab & Simulink",
      "Problem solving"
    ],
    languages: [
      {
        language: "English",
        proficiency: "Reading-Writing-Speaking"
      },
      {
        language: "Urdu",
        proficiency: "Reading-Writing-Speaking"
      },
      {
        language: "Chinese",
        proficiency: "Reading-Speaking"
      }
    ]
  };

  // Layout 1: Modern Clean
  const ModernCleanLayout = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{resumeData.name}</h1>
        <h2 className="text-xl text-blue-600 font-medium">{resumeData.title}</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
          <div>{resumeData.contact.phone} | {resumeData.contact.email}</div>
          <div className="text-blue-600 break-all">{resumeData.contact.linkedin}</div>
          <div>{resumeData.contact.address}</div>
          <div>Father's Name: {resumeData.contact.father} | DOB: {resumeData.contact.dob}</div>
        </div>
      </div>

      <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">OBJECTIVE</h3>
        <p className="text-gray-700 leading-relaxed">{resumeData.objective}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">EXPERIENCE</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                <p className="text-blue-600 font-medium">{exp.duration}</p>
                <p className="text-sm text-gray-600">Subjects: {exp.subjects}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">EDUCATION</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                <div className="text-sm text-gray-600">
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
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">INTERNSHIP</h3>
            <div>
              <h4 className="font-semibold text-gray-800">{resumeData.internship.organization}</h4>
              <p className="text-blue-600 font-medium">{resumeData.internship.department}</p>
              <p className="text-sm text-gray-600">{resumeData.internship.duration}</p>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">PROJECTS</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </section>
        </div>

        <div>
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">KEY SKILLS</h3>
            <ul className="space-y-1">
              {resumeData.keySkills.map((skill, index) => (
                <li key={index} className="text-gray-700 text-sm">• {skill}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">TECHNICAL SKILLS</h3>
            <ul className="space-y-1">
              {resumeData.technicalSkills.map((skill, index) => (
                <li key={index} className="text-gray-700 text-sm">• {skill}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">LANGUAGES</h3>
            {resumeData.languages.map((lang, index) => (
              <div key={index} className="mb-2">
                <h4 className="font-medium text-gray-800 text-sm">{lang.language}</h4>
                <p className="text-gray-600 text-xs">{lang.proficiency}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">CERTIFICATIONS</h3>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
                <p className="text-blue-600 text-xs">{cert.institution}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-100 pb-2 mb-4">CONFERENCES</h3>
            {resumeData.conferences.map((conf, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-medium text-gray-800 text-sm">{conf.name}</h4>
                <p className="text-blue-600 text-xs">{conf.institution}</p>
                <p className="text-gray-500 text-xs">{conf.date}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );

  // Layout 2: Two Column Professional
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

  // Layout 3: Minimal Elegant
  const MinimalLayout = () => (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      <header className="text-center border-b border-gray-200 pb-8 mb-8">
        <h1 className="text-3xl font-light text-gray-800 mb-2">{resumeData.name}</h1>
        <h2 className="text-lg text-gray-600 mb-4">{resumeData.title}</h2>
        <div className="text-sm text-gray-500 space-y-1">
          <div>{resumeData.contact.phone} • {resumeData.contact.email}</div>
          <div className="text-blue-600 break-all">{resumeData.contact.linkedin}</div>
          <div>{resumeData.contact.address}</div>
          <div>Father's Name: {resumeData.contact.father} • DOB: {resumeData.contact.dob}</div>
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Objective</h3>
        <p className="text-gray-700 leading-relaxed text-center italic">{resumeData.objective}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-light text-gray-800 mb-6 text-center uppercase tracking-wide">Experience</h3>
        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="text-center border-b border-gray-100 pb-4">
              <h4 className="font-medium text-gray-800">{exp.role}</h4>
              <p className="text-gray-600 text-sm">{exp.duration}</p>
              <p className="text-gray-500 text-sm">Subjects: {exp.subjects}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-light text-gray-800 mb-6 text-center uppercase tracking-wide">Education</h3>
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="text-center border-b border-gray-100 pb-4">
              <h4 className="font-medium text-gray-800 text-lg">{edu.degree}</h4>
              <p className="text-gray-600 font-medium">{edu.institution}</p>
              <div className="text-sm text-gray-500 mt-1">
                {edu.duration && <span>{edu.duration} • </span>}
                {edu.gpa && <span>CGPA: {edu.gpa}</span>}
                {edu.grade && <span>Grade: {edu.grade}</span>}
                {edu.status && <span> ({edu.status})</span>}
                {edu.specialization && <span className="block mt-1 italic">{edu.specialization}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-light text-gray-800 mb-6 text-center uppercase tracking-wide">Internship</h3>
        <div className="text-center border-b border-gray-100 pb-4">
          <h4 className="font-medium text-gray-800 text-lg">{resumeData.internship.organization}</h4>
          <p className="text-gray-600 font-medium">{resumeData.internship.department}</p>
          <p className="text-gray-500 text-sm">{resumeData.internship.duration}</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-light text-gray-800 mb-6 text-center uppercase tracking-wide">Projects</h3>
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="text-center border-b border-gray-100 pb-4">
              <h4 className="font-medium text-gray-800 text-lg">{project.title}</h4>
              <p className="text-gray-700 mt-2 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section>
          <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Key Skills</h3>
          <div className="text-center">
            {resumeData.keySkills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm m-1">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Technical Skills</h3>
          <div className="text-center">
            {resumeData.technicalSkills.map((skill, index) => (
              <span key={index} className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm m-1">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <section>
          <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Languages</h3>
          <div className="space-y-2">
            {resumeData.languages.map((lang, index) => (
              <div key={index} className="text-center border-b border-gray-100 pb-2">
                <h4 className="font-medium text-gray-800 text-sm">{lang.language}</h4>
                <p className="text-gray-600 text-xs italic">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Certifications</h3>
          <div className="space-y-3">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="text-center border-b border-gray-100 pb-2">
                <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
                <p className="text-gray-600 text-xs italic">{cert.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-light text-gray-800 mb-4 text-center uppercase tracking-wide">Conferences</h3>
          <div className="space-y-3">
            {resumeData.conferences.map((conf, index) => (
              <div key={index} className="text-center border-b border-gray-100 pb-2">
                <h4 className="font-medium text-gray-800 text-sm">{conf.name}</h4>
                <p className="text-gray-600 text-xs italic">{conf.institution}</p>
                <p className="text-gray-500 text-xs">{conf.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  // Layout 4: Modern Executive
  const ExecutiveLayout = () => (
    <div className="bg-white max-w-4xl mx-auto shadow-lg">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
            <h2 className="text-lg opacity-90">{resumeData.title}</h2>
          </div>
          <div className="text-right text-sm opacity-90">
            <div>{resumeData.contact.phone}</div>
            <div>{resumeData.contact.email}</div>
          </div>
        </div>
        <div className="mt-4 text-sm opacity-80">
          <div className="break-all">{resumeData.contact.linkedin}</div>
          <div>{resumeData.contact.address}</div>
          <div>Father's Name: {resumeData.contact.father} • DOB: {resumeData.contact.dob}</div>
        </div>
      </div>

      <div className="p-8">
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <Eye className="w-4 h-4 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Objective</h3>
          </div>
          <p className="text-gray-700 leading-relaxed ml-11">{resumeData.objective}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
              </div>
              <div className="ml-11 space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-indigo-100 pl-4">
                    <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                    <p className="text-indigo-600 font-medium">{exp.duration}</p>
                    <p className="text-gray-700 text-sm">Subjects: {exp.subjects}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <div className="ml-11 space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-indigo-100 pl-4">
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-indigo-600 font-medium">{edu.institution}</p>
                    <div className="text-sm text-gray-600">
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

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Internship</h3>
              </div>
              <div className="ml-11 border-l-2 border-indigo-100 pl-4">
                <h4 className="font-semibold text-gray-800">{resumeData.internship.organization}</h4>
                <p className="text-indigo-600 font-medium">{resumeData.internship.department}</p>
                <p className="text-gray-700">{resumeData.internship.duration}</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Projects</h3>
              </div>
              <div className="ml-11 space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-indigo-100 pl-4">
                    <h4 className="font-semibold text-gray-800">{project.title}</h4>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Conferences</h3>
              </div>
              <div className="ml-11 space-y-4">
                {resumeData.conferences.map((conf, index) => (
                  <div key={index} className="border-l-2 border-indigo-100 pl-4">
                    <h4 className="font-medium text-gray-800">{conf.name}</h4>
                    <p className="text-indigo-600 text-sm">{conf.institution}</p>
                    <p className="text-gray-500 text-sm">{conf.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Key Skills</h3>
              </div>
              <div className="ml-11">
                {resumeData.keySkills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-medium block">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
              </div>
              <div className="ml-11">
                {resumeData.technicalSkills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium block">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
              </div>
              <div className="ml-11 space-y-2">
                {resumeData.languages.map((lang, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800 text-sm">{lang.language}</h4>
                    <p className="text-gray-600 text-xs">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold text-sm">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
              </div>
              <div className="ml-11 space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
                    <p className="text-indigo-600 text-xs">{cert.institution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  const layouts = [ModernCleanLayout, TwoColumnLayout, MinimalLayout, ExecutiveLayout];
  const layoutNames = ["Modern Clean", "Two Column Professional", "Minimal Elegant", "Modern Executive"];

  const nextLayout = () => {
    setCurrentLayout((prev) => (prev + 1) % layouts.length);
  };

  const prevLayout = () => {
    setCurrentLayout((prev) => (prev - 1 + layouts.length) % layouts.length);
  };

  const CurrentLayoutComponent = layouts[currentLayout];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Complete Resume Layout Designer</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={prevLayout}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              <span className="text-sm text-gray-600">
                {currentLayout + 1} of {layouts.length}: {layoutNames[currentLayout]}
              </span>
              <button
                onClick={nextLayout}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          
          <div className="text-center text-gray-600 mb-4">
            <p>Complete resume with all sections: Experience, Education, Skills, Languages, Certifications, Conferences & more</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <CurrentLayoutComponent />
        </div>

        <div className="mt-6 text-center">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete Information Included:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-medium text-blue-600">✓ Personal Info</div>
                <div>Name, Contact, LinkedIn</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-green-600">✓ Experience</div>
                <div>Teaching positions</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-purple-600">✓ Education</div>
                <div>MS, BS, HSC, O-Level</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-orange-600">✓ Skills & More</div>
                <div>Technical, Languages, Certs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLayouts;