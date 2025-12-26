
import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT_WEBHOOK, PHONE_NUMBER, EMAIL } from '../constants';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'BuildView Studios Website'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send inquiry. Please try again later.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Book Your Shoot</h2>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Create a Masterpiece Together</p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Have a vision? From music videos to brand films, our production team is ready to bring it to life with cinematic precision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-3xl transition-all hover:bg-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Direct Call</h4>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                    className="text-gray-400 transition-colors hover:text-blue-400 font-medium"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-3xl transition-all hover:bg-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Inquiry Email</h4>
                  <a 
                    href={`mailto:${EMAIL}`} 
                    className="text-gray-400 transition-colors hover:text-blue-400 font-medium"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-blue-500/10">
            {status === 'success' ? (
              <div className="text-center py-12 flex flex-col items-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Received!</h3>
                <p className="text-gray-600 mb-8 max-w-sm">
                  We'll review your project details and get back to you with a quote within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={PHONE_NUMBER}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Production Type</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Commercial/Ad Film">Commercial/Ad Film</option>
                      <option value="Music Video">Music Video</option>
                      <option value="Corporate Film">Corporate Film</option>
                      <option value="Social Media Content">Social Media Content</option>
                      <option value="Post-Production only">Post-Production (Editing)</option>
                      <option value="Wedding Film">Wedding/Event Film</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the project duration, location, and your vision..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 hover:bg-blue-700 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      Book Free Consultation
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
