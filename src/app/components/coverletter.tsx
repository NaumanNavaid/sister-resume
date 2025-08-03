import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const CoverLetter = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg border rounded-lg space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+92-300-1234567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>jane.doe@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>House #123, Block A, Gulshan-e-Iqbal, Karachi</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-800 leading-relaxed">
        <p>Dear Hiring Manager,</p>

        <p>
          I am writing to express my interest in any research or educational opportunities where my academic
          background in Zoology and hands-on experience in research can be of value. With a Master’s degree in
          Applied Zoology and several field and lab projects under my belt, I bring a curious mind, strong work ethic,
          and collaborative spirit.
        </p>

        <p>
          My academic journey has equipped me with a deep understanding of animal biology, data analysis, and
          research methodologies. I've conducted field research on topics ranging from parasitology to fish species
          identification, and have presented findings at international conferences. My additional certifications in
          creative writing and digital literacy support my ability to communicate and adapt effectively in various
          professional environments.
        </p>

        <p>
          I would be thrilled to contribute my skills to a team that values scientific exploration and academic
          excellence. I welcome the opportunity to discuss how I can contribute to your work or research initiatives.
        </p>

        <p>Thank you for your time and consideration.</p>

        <p>Sincerely,<br />Jane Doe</p>
      </div>
    </div>
  );
};

export default CoverLetter;
