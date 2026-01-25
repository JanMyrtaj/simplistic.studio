import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { GoogleMap } from "./GoogleMap";
import { motion } from 'motion/react';
import { projectId } from '../utils/supabase/info';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    if (!formData.name.trim() || formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10 || formData.message.trim().length > 5000) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-548e39aa`;
      
      const response = await fetch(`${serverUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-24 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`${isDark ? "text-white" : "text-neutral-900"} mb-4`}>
            Get In Touch
          </h2>
          <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} max-w-2xl mx-auto`}>
            Ready to start your project? We'd love to hear from you. Reach out to discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block ${isDark ? "text-white" : "text-neutral-900"} mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  className={`w-full px-4 py-3 ${
                    isDark 
                      ? "bg-neutral-900 border-neutral-700 text-white focus:border-white" 
                      : "bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900"
                  } border focus:outline-none`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${isDark ? "text-white" : "text-neutral-900"} mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className={`w-full px-4 py-3 ${
                    isDark 
                      ? "bg-neutral-900 border-neutral-700 text-white focus:border-white" 
                      : "bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900"
                  } border focus:outline-none`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${isDark ? "text-white" : "text-neutral-900"} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  className={`w-full px-4 py-3 ${
                    isDark 
                      ? "bg-neutral-900 border-neutral-700 text-white focus:border-white" 
                      : "bg-white border-neutral-300 text-neutral-900 focus:border-neutral-900"
                  } border focus:outline-none resize-none`}
                />
              </div>
              <button
                type="submit"
                className={`w-full px-8 py-4 ${
                  isDark ? "bg-white text-neutral-900 hover:bg-neutral-100" : "bg-neutral-900 text-white hover:bg-neutral-800"
                } transition-colors`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-2">Thank you for your message. We'll get back to you soon!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-2">An error occurred. Please try again later.</p>
              )}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className={`${isDark ? "text-white" : "text-neutral-900"} mb-6`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className={`${isDark ? "text-white" : "text-neutral-900"} mt-1`} size={20} />
                  <div>
                    <p className={`${isDark ? "text-white" : "text-neutral-900"} mb-1`}>Email</p>
                    <p className={isDark ? "text-neutral-300" : "text-neutral-600"}>simplistic.architecture@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className={`${isDark ? "text-white" : "text-neutral-900"} mt-1`} size={20} />
                  <div>
                    <p className={`${isDark ? "text-white" : "text-neutral-900"} mb-1`}>Phone</p>
                    <p className={isDark ? "text-neutral-300" : "text-neutral-600"}>+383 44 615 600</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className={`${isDark ? "text-white" : "text-neutral-900"} mt-1`} size={20} />
                  <div>
                    <p className={`${isDark ? "text-white" : "text-neutral-900"} mb-1`}>Location</p>
                    <p className={isDark ? "text-neutral-300" : "text-neutral-600"}>
                      Rruga Muharrem Ibrahimi<br />
                      Kosovo, Gjilan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`${isDark ? "text-white" : "text-neutral-900"} mb-4`}>
                Office Hours
              </h3>
              <div className={`space-y-2 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
                <p>Monday - Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <GoogleMap isDark={isDark} />
      </div>
    </section>
  );
}