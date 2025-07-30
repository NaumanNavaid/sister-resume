import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  User,
  Cog
} from 'lucide-react';

const resumeData = {
  name: "Sarah Johnson",
  title: "Senior Software Engineer",
  contact: {
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Tech Street, San Francisco, CA 94102"
  },
  objective: "Experienced software engineer with 8+ years in full-stack development, seeking to leverage expertise in React, Node.js, and cloud technologies to drive innovative solutions in a senior technical leadership role. Passionate about mentoring teams and building scalable applications.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description: "Led development of enterprise-scale applications using React and Node.js. Managed a team of 5 developers and improved system performance by 40%. Implemented CI/CD pipelines and modern development practices."
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations Corp.",
      duration: "2019 - 2021",
      description: "Developed and maintained multiple web applications using modern JavaScript frameworks. Implemented microservices architecture and DevOps practices."
    },
    {
      role: "Frontend Developer",
      company: "StartupHub Solutions",
      duration: "2017 - 2019",
      description: "Built responsive web applications and collaborated with UX/UI teams to create intuitive user interfaces. Specialized in React and modern CSS frameworks."
    },
    {
      role: "Junior Web Developer",
      company: "Creative Tech Studio",
      duration: "2016 - 2017",
      description: "Developed interactive websites and web applications. Worked closely with designers to implement pixel-perfect designs."
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2015 - 2017",
      description: "Specialized in distributed systems and machine learning. Completed advanced coursework in algorithms, data structures, and software architecture. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "UC Berkeley",
      duration: "2011 - 2015",
      description: "Comprehensive study of software development principles, programming languages, and system design. Active in computer science clubs and hackathons."
    }
  ],
  keySkills: [
    "Team Leadership",
    "System Architecture",
    "Code Review",
    "Agile Development",
    "Problem Solving",
    "Technical Mentoring"
  ],
  references: [
    {
      name: "Michael Rodriguez",
      title: "Tech Solutions Inc. / CTO",
      phone: "123-456-7890",
      email: "m.rodriguez@techsolutions.com"
    },
    {
      name: "Jennifer Chen",
      title: "Digital Innovations Corp. / CEO",
      phone: "123-456-7891",
      email: "j.chen@digitalinnovations.com"
    }
  ]
};

const ModernProfessionalResume = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl flex">
        {/* Left Sidebar */}
        <div className="w-1/3 text-white p-8 relative overflow-hidden" style={{ backgroundColor: '#a3bdd8' }}>
          <div className="absolute top-0 left-0 w-0 h-0 z-0" style={{
            borderRight: '230px solid transparent',
            borderTop: '230px solid #608abf'
          }}></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex  text-center items-center justify-center overflow-hidden">
                <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-gray-500" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-light mb-2">{resumeData.name.split(' ')[0]}</h1>
            <h1 className="text-3xl font-light mb-4">{resumeData.name.split(' ')[1]}</h1>
            <p className="text-lg opacity-90">{resumeData.title}</p>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 mr-3" />
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <hr className="border-white opacity-50 mb-4" />
            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>{resumeData.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span className="break-all">{resumeData.contact.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>{resumeData.contact.address}</span>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 mr-3" />
              <h3 className="text-lg font-semibold">About Me</h3>
            </div>
            <hr className="border-white opacity-50 mb-4" />
            <p className="text-sm leading-relaxed opacity-90">
              {resumeData.objective}
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center mb-4">
              <Cog className="w-5 h-5 mr-3" />
              <h3 className="text-lg font-semibold">Skills</h3>
            </div>
            <hr className="border-white opacity-50 mb-4" />
            <ul className="space-y-2 text-sm">
              {resumeData.keySkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-8 bg-white">
          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
            </div>
            <hr className="border-gray-300 mb-6" />
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    {index < resumeData.education.length - 1 && (
                      <div className="w-0.5 h-20 bg-blue-500 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600 italic text-sm">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            </div>
            <hr className="border-gray-300 mb-6" />
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    {index < resumeData.experience.length - 1 && (
                      <div className="w-0.5 h-20 bg-blue-500 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                        <p className="text-blue-600 italic text-sm">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 mr-3 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">References</h2>
            </div>
            <hr className="border-gray-300 mb-6" />
            <div className="grid grid-cols-2 gap-8">
              {resumeData.references.map((ref, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-800 mb-1">{ref.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{ref.title}</p>
                  <div className="text-sm text-gray-600">
                    <div className="mb-1">
                      <span className="font-medium">Phone:</span> {ref.phone}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {ref.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModernProfessionalResume;
