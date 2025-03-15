import Layout from "../layouts/Layout"
import React from "react";

const ContactUsPage = () => {
  return (
    <Layout children={
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-gradient-radial from-emerald-500/20 to-transparent top-1/2 right-1/4 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient mt-8">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Cards */}
            <div className="space-y-6">
              <ContactCard
                title="Faculty Coordinator"
                name="Dr. Simranjit Singh"
                // phone="+91 98725 52898"
                accent="cyan"
              />
              <ContactCard
                title="Faculty Co-coordinator"
                name="Dr. Sudesh Rani"
                // phone="+91 98768 60085"
                accent="emerald"
              />
              <ContactCard
                title="Student Convener"
                name="Chirag Gupta"
                phone="+91 8427709189"
                accent="cyan"
              />
              <ContactCard
                title="Student Co-convener"
                name="Sukhmanpreet Singh"
                phone="+91 9814833924"
                accent="emerald"
              />
              <ContactCard
                title="Marketing Head"
                name="Aditya Singla"
                phone="+91 8872950097"
                accent="emerald"
              />
            </div>

            {/* Right Column - Other Info */}
            <div className="space-y-8">
              {/* Visit Section */}
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Visit Us</h2>
                    <p className="text-gray-400 leading-relaxed">
                      Entrepreneurship & Incubation Cell - Incubator<br />
                      (Near Siemens Lab), Punjab Engineering College<br />
                      Sector-12 (160012), Chandigarh
                    </p>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="mt-4 rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3451028947993!2d76.78419437579618!3d30.764892274568737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College!5e0!3m2!1sen!2sin!4v1741604569639!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>


              {/* Email Section */}
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-400/10 rounded-lg">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Email Us</h2>
                    <div className="space-y-2">
                      <a href="mailto:eicpec@pec.edu.in" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                        eicpec@pec.edu.in
                      </a>
                      <a href="mailto:eicesummit@gmail.com" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                        eicesummit@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links (Optional) */}
              <div className="flex justify-center space-x-6 mt-8">
              <a href="https://www.linkedin.com/company/eicpec/posts/?feedView=all" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.038-1.852-3.038-1.853 0-2.136 1.447-2.136 2.941v5.666H9.354V9h3.413v1.561h.049c.476-.9 1.636-1.852 3.367-1.852 3.603 0 4.264 2.37 4.264 5.455v6.288zM5.337 7.433c-1.143 0-2.068-.926-2.068-2.067 0-1.143.925-2.068 2.068-2.068s2.067.925 2.067 2.068c0 1.141-.924 2.067-2.067 2.067zM6.922 20.452H3.75V9h3.172v11.452z" />
                    </svg>
                  </a>

                  <a href="https://www.youtube.com/watch?v=qhqkavoq5P4" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.499 6.203a2.89 2.89 0 00-2.033-2.033C19.33 3.75 12 3.75 12 3.75s-7.33 0-9.466.42a2.89 2.89 0 00-2.033 2.033C.75 8.34.75 12 .75 12s0 3.66.421 5.797a2.89 2.89 0 002.033 2.033c2.137.421 9.466.421 9.466.421s7.33 0 9.466-.42a2.89 2.89 0 002.033-2.033c.421-2.137.421-5.797.421-5.797s0-3.66-.421-5.797zM9.75 15.568V8.432l6.818 3.568-6.818 3.568z" />
                    </svg>
                  </a>

                <a href="https://www.instagram.com/eicpec/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    } />
  );
};

const ContactCard = ({ title, name, phone, accent }) => {
  const accentColor = {
    cyan: 'border-cyan-400/30 hover:border-cyan-400/60',
    emerald: 'border-emerald-400/30 hover:border-emerald-400/60'
  };

  return (
    <div className={`group bg-black/40 backdrop-blur-lg p-6 rounded-2xl border ${accentColor[accent]} transition-all duration-300 hover:translate-y-[-4px]`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 bg-${accent}-400/10 rounded-lg`}>
          <svg className={`w-8 h-8 text-${accent}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-200 transition-colors">{name}</p>
          <a href={`tel:${phone}`} className={`mt-2 inline-block text-${accent}-400 hover:text-${accent}-300 transition-colors`}>
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;