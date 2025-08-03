import React from 'react';
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
    <div className="max-w-4xl mx-auto bg-white  overflow-hidden">
      {/* Header Section */}
      <div className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Syeda Nawira Navaid</h1>
            <p className="text-gray-300 text-lg">MSc Applied Zoology</p>
          </div>
          <div className="mt-4 md:mt-0 space-y-2">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span>+92-317-2566127</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>syedanawira@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Flat No 105 Mateen Arcade Apartment, Gulshan-e-Iqbal Block 7, Karachi</span>
            </div>
            <div className="flex items-center text-gray-300">
              <User className="w-4 h-4 mr-2" />
              <span>Father's Name: Syed Navaid Iqbal</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date of Birth: May 2, 2000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <User className="w-6 h-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            MSc in Applied Zoology with a strong academic background in biological sciences.
            Proven track record of academic excellence complemented by technical certifications in digital literacy
            and creative writing. Seeking opportunities to apply scientific knowledge and research skills in professional settings.
          </p>
        </div>

        {/* Education + Certifications side by side */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2024-Present</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">MSc in Zoology</h3>
                  <p className="text-gray-600 font-medium">University of Karachi</p>
                  <p className="text-gray-600 text-sm mt-1">Specialization in applied zoology (result pending)</p>
                </div>

                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2021-2024</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">BSc Honors in Zoology</h3>
                  <p className="text-gray-600 font-medium">University of Karachi</p>
                </div>

                <div className="border-l-4 border-gray-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2017-2019</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">HSC (Pre-Medical)</h3>
                  <p className="text-gray-600 font-medium">Government Degree College for Women</p>
                </div>

                <div className="border-l-4 border-gray-600 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2017</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">O-Levels (Science)</h3>
                  <p className="text-gray-600 font-medium">APSACS</p>
                  <p className="text-gray-600 text-sm mt-1">Completed Cambridge International Examinations</p>
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
                  <h3 className="font-semibold text-gray-800">Freelancing</h3>
                  <p className="text-gray-600 text-sm">Digiskills</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Creative Writing</h3>
                  <p className="text-gray-600 text-sm">Digiskills</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Digital Literacy</h3>
                  <p className="text-gray-600 text-sm">Digiskills</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills + Research Work side by side */}
        <div className="grid md:grid-cols-2 gap-12 pt-16">
          {/* Skills */}
          {/* Skills */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Microsoft Word',
                  'Microsoft Excel',
                  'Microsoft PowerPoint',
                  'Data Analysis',
                  'Creative Writing',
                  'Digital Literacy',
                  'Communication',
                  'Problem Solving',
                  'Team Responsibility',
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-gray-600' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Work */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Research Work</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Study of Endoparasites in Blackbuck</h3>
                  <p className="text-gray-600 text-sm">At Karachi Zoo</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Fish Identification and Quality Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    At Multiple Locations: Imtiaz Super Market, Musa Colony Fish Market, Water Pump Fish Market
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-800">Vertebrate Pest & Their Management</h3>
                  <p className="text-gray-600 text-sm">At Safari Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conferences / Seminars */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Conferences / Seminars</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-600">
            <h3 className="font-semibold text-gray-800">
              International Conference on Marine Biodiversity, Socio-Environmental Aspects & Technology (ICMBSEAT)
            </h3>
            <p className="text-gray-600 text-sm">Attended </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
