import React from "react";
import { resumeData } from "@/app/data/Resumedata";


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

        <section className=" mt-[250px] pt-10">
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

        <section className="mb-8 mt-60 pt-10">
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

export default MinimalLayout