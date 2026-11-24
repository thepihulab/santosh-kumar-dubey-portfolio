import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Copy, Check, Sparkles, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot field for spam bots
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const phone = "9973473449";
  const email = "santoshdubeymotihari@gmail.com";
  const location = "Muzaffarpur, Bihar, India";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 2) {
      errors.subject = 'Subject must be at least 2 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      errors.message = 'Message must be at least 5 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam protection
    if (formData.botField) {
      // Silently discard bot submission
      setStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/santoshdubeymotihari@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: `New Portfolio Inquiry – ${formData.subject.trim()}`,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _replyto: formData.email.trim(),
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botField: ''
        });
        setFormErrors({});
      } else {
        // If the service returned an error message
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send your inquiry right now. Please try again or reach out directly at santoshdubeymotihari@gmail.com or +91 9973473449.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-400/20 text-sky-700 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} />
            Connect & Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Initiate Direct Executive Dialogue
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for strategic consultations, pharmaceutical advisory, regional sales leadership opportunities, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Profile Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 sm:p-8 border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-6">
              
              <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-sky-500/40 shrink-0">
                  <img
                    src="/images/portrait-headshot.jpg"
                    alt="Santosh Kumar Dubey"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Santosh Kumar Dubey</h3>
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-bold">Senior Area Manager</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Dr. Reddy's Laboratories</div>
                </div>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Direct Mobile</div>
                      <a href={`tel:${phone}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300">
                        +91 {phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Official Email</div>
                      <a href={`mailto:${email}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 break-all">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(email, 'email')}
                    className="p-2 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Headquarters Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Headquarters</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
                >
                  <Phone size={15} className="text-sky-600 dark:text-sky-400" />
                  Call Directly
                </a>
                <a
                  href="https://wa.me/919973473449?text=Hello%20Mr.%20Santosh%20Dubey,%20I%20visited%20your%20executive%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fill in the form below to immediately dispatch your inquiry to his email.</p>
              </div>

              {/* Status Alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-emerald-900 dark:text-emerald-200">Inquiry Delivered</strong>
                    Thank you! Your inquiry has been sent successfully. Santosh Kumar Dubey will get back to you soon.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-sm font-medium flex items-start gap-3 animate-in fade-in">
                  <AlertCircle size={18} className="text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-rose-900 dark:text-rose-200">Delivery Error</strong>
                    {errorMessage || 'Failed to send your inquiry. Please try again.'}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Leave this field empty</label>
                  <input
                    id="botField"
                    type="text"
                    name="botField"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                        formErrors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-all shadow-inner`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-500 font-semibold">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="doctor@hospital.org"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                        formErrors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-all shadow-inner`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 font-semibold">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Territory Partnership, Advisory, or Professional Inquiry"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                      formErrors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-800'
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-all shadow-inner`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-rose-500 font-semibold">{formErrors.subject}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your note, meeting request, or discussion agenda here..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border ${
                      formErrors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300 dark:border-slate-800'
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-all resize-none shadow-inner`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-500 font-semibold">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-400 hover:to-cyan-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-sky-500/25 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
