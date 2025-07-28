import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  User,
  FileText,

} from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden">
        <Link href="/nabira/multiple_layout" className="text-blue-500 hover:underline">Multiple Layouts</Link>
      {/* Header Section */}
      <div className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Syeda Nabira Navaid</h1>
            <p className="text-gray-300 text-lg">MS Medical Physics Candidate</p>
          </div>
          <div className="mt-4 md:mt-0 space-y-2">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>0313-8466127</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>nabiranavaid@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Flat No 105 Mateen Arcade Apartments, Gulshan-e-Iqbal Block 7, Karachi</span>
            </div>
            <div className="flex items-center text-gray-300">
              <User className="w-4 h-4 mr-2" />
              <span>Father's Name: Syed Navaid Iqbal</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date of Birth: 1st June 2001</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Objective Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <User className="w-6 h-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Objective</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Highly motivated and results-oriented student with a strong academic track record seeking a
            position in a reputable organization. I flourish in dynamic environments where I can contribute
            my skills and gain valuable experience working on meaningful projects.
          </p>
        </div>

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Qualification</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800">MS in Medical Physics</h3>
                  <p className="text-gray-600 font-medium">NED University of Engineering & Technology (In Progress)</p>
                  <p className="text-gray-600 text-sm mt-1">CGPA: 4.0</p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800">BS in Applied Physics</h3>
                  <p className="text-gray-600 font-medium">NED University of Engineering & Technology</p>
                  <p className="text-gray-600 text-sm mt-1">CGPA: 3.644 - Specialization in Electronics</p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800">HSC (Pre-Engineering)</h3>
                  <p className="text-gray-600 font-medium">Govt. Degree Science & Commerce College for Women</p>
                  <p className="text-gray-600 text-sm mt-1">Grade: B</p>
                </div>
                <div className="border-l-4 border-gray-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800">O’Level (Science)</h3>
                  <p className="text-gray-600 font-medium">Army Public School & College System</p>
                  <p className="text-gray-600 text-sm mt-1">Grade: B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Certifications</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Applications of Nuclear Techniques & Radiation Effects</h3>
                  <p className="text-gray-600 text-sm">NED University</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Workshop on GEOMAGNETIC OBSERVATION</h3>
                  <p className="text-gray-600 text-sm">NED University</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills + Projects */}
        <div className="grid md:grid-cols-2 gap-12 pt-32">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Teamwork & Communication</li>
                <li>Organizational Skills</li>
                <li>Python, Matlab & Simulink</li>
                <li>MS Office Suite</li>
                <li>Analytical & Leadership Abilities</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>

          {/* Projects & Internship */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Projects & Internship</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Evaluation & Analysis of Infrared Radiations at Upper Atmosphere</h3>
                  <p className="text-gray-600 text-sm">Based on 10 years of NASA CERES data (2013–2022)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Internship at JPMC</h3>
                  <p className="text-gray-600 text-sm">CybeKnife & Tomotherapy – Aug 27 to Sep 12, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
  
    </div>
  );
};

export default Resume;
