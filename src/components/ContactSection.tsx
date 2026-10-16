import React, { useState } from 'react';
import { 
  Phone, MessageCircle, Mail, MapPin, Clock, Send, 
  CheckCircle, AlertCircle, ExternalLink, Calendar, User, Sparkles
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/photographyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'বিবাহ অনুষ্ঠান (Wedding)',
    eventDate: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'অনুগ্রহ করে আপনার নাম লিখুন।';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'অনুগ্রহ করে আপনার মোবাইল নম্বর দিন।';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = 'সঠিক মোবাইল নম্বর লিখুন।';
    }
    if (!formData.eventDate) {
      errors.eventDate = 'অনুষ্ঠানের সম্ভাব্য তারিখ নির্বাচন করুন।';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `নমস্কার আলো ছবি স্টুডিও,\n\nআমি একটি অনুষ্ঠানের বুকিং অনুসন্ধান পাঠাচ্ছি:\n- নাম: ${formData.name}\n- মোবাইল: ${formData.phone}\n- ইভেন্ট: ${formData.eventType}\n- তারিখ: ${formData.eventDate}\n- বার্তা: ${formData.message || 'অনুগ্রহ করে বিস্তারিত প্যাকেজ ও কোটেশন জানান।'}`
    );
  };

  return (
    <section id="contact" className="py-24 bg-[#090A0E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
              GET IN TOUCH & BOOKING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            আপনার বিশেষ দিনের তারিখটি আগেভাগে সংরক্ষণ করতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি কল/হোয়াটসঅ্যাপ করুন।
          </p>
        </div>

        {/* Contact Content Grid: Left Form, Right Studio Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#12141A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-bengali">
                  ধন্যবাদ, আপনার অনুরোধ সফলভাবে গৃহীত হয়েছে!
                </h3>
                <p className="text-sm text-stone-300 font-bengali max-w-md mx-auto leading-relaxed">
                  আলো ছবি স্টুডিও-র সিনিয়র প্রতিনিধি খুব দ্রুত আপনার সাথে <span className="font-mono text-[#D4AF37]">{formData.phone}</span> নম্বরে যোগাযোগ করবেন।
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>হোয়াটসঅ্যাপে ইনস্ট্যান্ট চ্যাট করুন</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        eventType: 'বিবাহ অনুষ্ঠান (Wedding)',
                        eventDate: '',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-semibold rounded-lg border border-white/10"
                  >
                    নতুন বার্তা পাঠান
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white font-bengali">
                    বুকিং ও অনুসন্ধানের তথ্য
                  </h3>
                  <p className="text-xs text-stone-400 font-bengali mt-0.5">
                    সমস্ত ঘরগুলো সতর্কতার সাথে পূরণ করুন।
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                    নাম (FULL NAME) *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="আপনার পূর্ণ নাম লিখুন (উদা: সুদীপ্ত রায়)"
                      className={`w-full bg-[#0A0C10] border ${
                        formErrors.name ? 'border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                      } rounded-lg px-4 py-3 text-sm text-white font-bengali focus:outline-none transition-colors`}
                    />
                    <User className="w-4 h-4 text-stone-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {formErrors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-bengali">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                    মোবাইল নম্বর (PHONE NUMBER) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="১০ সংখ্যার মোবাইল নম্বর (উদা: 70293 21228)"
                      className={`w-full bg-[#0A0C10] border ${
                        formErrors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                      } rounded-lg px-4 py-3 text-sm text-white font-mono focus:outline-none transition-colors`}
                    />
                    <Phone className="w-4 h-4 text-stone-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-bengali">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Event Type & Date Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                      ইভেন্টের ধরন *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#0A0C10] border border-white/15 focus:border-[#D4AF37] rounded-lg px-4 py-3 text-sm text-white font-bengali focus:outline-none"
                    >
                      <option value="বিবাহ অনুষ্ঠান (Wedding)">বিবাহ অনুষ্ঠান (Wedding)</option>
                      <option value="ওয়েডিং সিনেমাটোগ্রাফি">ওয়েডিং সিনেমাটোগ্রাফি</option>
                      <option value="প্রি-ওয়েডিং শ্যুট">প্রি-ওয়েডিং শ্যুট (Pre-Wedding)</option>
                      <option value="অন্নপ্রাশন ও মুখে ভাত">অন্নপ্রাশন ও মুখে ভাত</option>
                      <option value="জন্মদিনের পার্টি">জন্মদিনের পার্টি (Birthday)</option>
                      <option value="এনগেজমেন্ট ও আংটিবদল">এনগেজমেন্ট ও আংটিবদল</option>
                      <option value="বেবি ও নিউবর্ন শ্যুট">বেবি ও নিউবর্ন শ্যুট</option>
                      <option value="ম্যাটারনিটি ফটোশ্যুট">ম্যাটারনিটি ফটোশ্যুট</option>
                      <option value="প্রফেশনাল পোর্ট্রেট">প্রফেশনাল পোর্ট্রেট</option>
                      <option value="কর্পোরেট / অন্যান্য ইভেন্ট">কর্পোরেট / অন্যান্য ইভেন্ট</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                      ইভেন্টের তারিখ *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className={`w-full bg-[#0A0C10] border ${
                          formErrors.eventDate ? 'border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        } rounded-lg px-4 py-3 text-sm text-white font-mono focus:outline-none transition-colors`}
                      />
                      <Calendar className="w-4 h-4 text-stone-500 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {formErrors.eventDate && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-bengali">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.eventDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                    আপনার বার্তা (YOUR MESSAGE)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="অনুষ্ঠানের ভেন্যু, বিশেষ কোনো রীতিনীতি বা আপনার পছন্দসমূহ সম্পর্কে লিখুন..."
                    className="w-full bg-[#0A0C10] border border-white/15 focus:border-[#D4AF37] rounded-lg px-4 py-3 text-sm text-white font-bengali focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#C5A059] text-black font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 font-bengali"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'পাঠানো হচ্ছে...' : 'অনুরোধ পাঠান'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-[#12141A] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-bengali border-b border-white/10 pb-4">
                সরাসরি যোগাযোগের ঠিকানা
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-400">ফোন নম্বর</p>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="text-base font-bold font-mono text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {STUDIO_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-stone-400 font-bengali mt-0.5">
                    সকাল ১০:০০ টা থেকে রাত ৯:৩০ টা পর্যন্ত
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-400">হোয়াটসঅ্যাপ সাপোর্ট</p>
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold font-mono text-white hover:text-[#25D366] transition-colors"
                  >
                    +{STUDIO_INFO.whatsappNumber}
                  </a>
                  <p className="text-xs text-stone-400 font-bengali mt-0.5">
                    ২৪/৭ ইনস্ট্যান্ট রিপ্লাই ও পোর্টফোলিও শেয়ারিং
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-400">ইমেইল</p>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-sm font-mono text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-400">স্টুডিও ঠিকানা</p>
                  <p className="text-sm font-bengali text-white mt-0.5 leading-snug">
                    {STUDIO_INFO.addressBn}
                  </p>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {STUDIO_INFO.addressEn}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-stone-400">স্টুডিও খোলা থাকে</p>
                  <p className="text-sm font-bengali text-white mt-0.5">
                    {STUDIO_INFO.openingHoursBn}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase text-stone-400 mb-3">
                  সোশ্যাল মিডিয়াতে যুক্ত থাকুন
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={STUDIO_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-stone-300 font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                  <a
                    href={STUDIO_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-stone-300 font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                  <a
                    href={STUDIO_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-stone-300 font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Realistic Styled Embed Container */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-[#101217]">
              <div className="p-3 bg-[#0A0C10] border-b border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>শ্যামবাজার ৫ মাথার মোড়, কলকাতা</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Shyambazar+Five+Point+Crossing+Kolkata"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>ম্যাপে খুলুন</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64 w-full bg-[#181B22] relative">
                <iframe
                  title="Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8449033327663!2d88.37050087588362!3d22.603606979468943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d81dcb0d535%3A0xc34b3f8151ce50f4!2sShyambazar%20Five%20Point%20Crossing!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
