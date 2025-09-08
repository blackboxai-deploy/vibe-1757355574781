"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<'chat' | 'services'>('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SKV Global Business Service LLC</h1>
                <p className="text-sm text-slate-600">🌍 Hungary | London | Worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                24/7 AI Support
              </span>
              <button 
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => window.open('mailto:info@skvbusiness.com')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveSection('chat')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeSection === 'chat' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500'
              }`}
            >
              💬 AI Assistant
            </button>
            <button
              onClick={() => setActiveSection('services')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeSection === 'services' ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500'
              }`}
            >
              🏢 Our Services
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'chat' && (
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">
                      Welcome to SKV Global Business Service LLC
                    </h2>
                    <p className="text-slate-700 mb-4">
                      Your AI-powered business assistant with complete knowledge of all our services. 
                      We connect you directly with our expert team!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Expert Team Routing</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Instant Responses</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Global Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-2xl px-4 py-3 max-w-[80%]">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🤖</span>
                        </div>
                        <span className="text-sm font-medium">SKV AI Assistant</span>
                      </div>
                      <div className="text-sm">
                        <p className="mb-3">Hello! I can help you with:</p>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold">🛂 Visa & Licenses → Rahul (rahul@skvbusiness.com)</p>
                            <p className="text-xs ml-4 text-slate-600">• Tourist, Business, Student Visas • Business Licenses & Renewals</p>
                          </div>
                          
                          <div>
                            <p className="font-semibold">💰 Tax Services → Mohit (mohit@skvbusiness.com)</p>
                            <p className="text-xs ml-4 text-slate-600">• Tax Filing & GST Services • International Tax Planning</p>
                          </div>
                          
                          <div>
                            <p className="font-semibold">🇬🇧 European & London Setup → Nikita (nikita@skvbusiness.com)</p>
                            <p className="text-xs ml-4 text-slate-600">• UK Company Formation • EU Business Registration</p>
                          </div>
                          
                          <div>
                            <p className="font-semibold">⚖️ Legal & Advisory → Sunil (sunil@skvbusiness.com)</p>
                            <p className="text-xs ml-4 text-slate-600">• Legal Consultation & Contracts • Business Advisory Services</p>
                          </div>
                        </div>
                        
                        <p className="mt-4 font-medium">What can I help you with today?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expert Team & Services</h2>
              <p className="text-xl text-slate-600">Professional business solutions with dedicated specialists</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Visa & License Services */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">🛂</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visa & License Services</h3>
                    <p className="text-slate-600 mb-3">Expert: Rahul | rahul@skvbusiness.com</p>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Starting from $199</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Tourist & Business Visas</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Student Visas & Work Permits</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Business License Applications</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>License Renewals</span>
                    </li>
                  </ul>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors"
                    onClick={() => window.open('mailto:rahul@skvbusiness.com?subject=Visa Services Inquiry')}
                  >
                    Contact Rahul
                  </button>
                </div>
              </div>

              {/* Tax Services */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">💰</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tax Services</h3>
                    <p className="text-slate-600 mb-3">Expert: Mohit | mohit@skvbusiness.com</p>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Starting from $99</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Tax Filing & GST Registration</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>International Tax Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Financial Planning</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Tax Optimization</span>
                    </li>
                  </ul>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-green-700 hover:to-blue-700 transition-colors"
                    onClick={() => window.open('mailto:mohit@skvbusiness.com?subject=Tax Services Inquiry')}
                  >
                    Contact Mohit
                  </button>
                </div>
              </div>

              {/* European & London Setup */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">🇬🇧</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">European & London Setup</h3>
                    <p className="text-slate-600 mb-3">Expert: Nikita | nikita@skvbusiness.com</p>
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Starting from £299</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>UK Company Formation</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>EU Business Registration</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>London Office Setup</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>European Banking</span>
                    </li>
                  </ul>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors"
                    onClick={() => window.open('mailto:nikita@skvbusiness.com?subject=European Business Setup Inquiry')}
                  >
                    Contact Nikita
                  </button>
                </div>
              </div>

              {/* Legal & Advisory */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-200">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">⚖️</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Legal & Advisory</h3>
                    <p className="text-slate-600 mb-3">Expert: Sunil (CEO) | sunil@skvbusiness.com</p>
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Starting from $149</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Legal Consultation</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Contract Review & Drafting</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Business Advisory</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">•</span>
                      <span>Compliance Auditing</span>
                    </li>
                  </ul>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-md hover:from-red-700 hover:to-orange-700 transition-colors"
                    onClick={() => window.open('mailto:sunil@skvbusiness.com?subject=Legal Consultation Inquiry')}
                  >
                    Contact Sunil (CEO)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SKV Global Business Service LLC</h3>
              <p className="text-slate-300 mb-4">
                Your trusted partner for global business solutions with AI-powered support.
              </p>
              <div className="flex space-x-4">
                <span className="inline-flex items-center rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700">
                  🇭🇺 Hungary Office
                </span>
                <span className="inline-flex items-center rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700">
                  🇬🇧 London Office
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Expert Team Contacts</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>📧 General: info@skvbusiness.com</p>
                <p>🛂 Visa & Licenses: rahul@skvbusiness.com</p>
                <p>💰 Tax Services: mohit@skvbusiness.com</p>
                <p>🇬🇧 European Setup: nikita@skvbusiness.com</p>
                <p>⚖️ Legal & Advisory: sunil@skvbusiness.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 SKV Global Business Service LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}