import { ServiceItem, GalleryItem, PackageItem, VideoItem, TestimonialItem } from '../types';

export const STUDIO_INFO = {
  nameBn: 'আলো ছবি স্টুডিও',
  nameEn: 'ALO CHOBI STUDIO',
  taglineBn: 'আপনার সুন্দর মুহূর্তগুলোকে ছবিতে চিরস্থায়ী করে রাখি',
  taglineSubBn: 'আলো ছবি স্টুডিও — আপনার জীবনের বিশেষ মুহূর্তের জন্য প্রফেশনাল ফটোগ্রাফি ও ভিডিওগ্রাফি।',
  phone: '+91 70293 21228',
  phoneDisplay: '+91 70293 21228',
  whatsappNumber: '917029321228',
  email: 'alochobistudio@gmail.com',
  addressBn: '৭৪/এ, শ্যামবাজার স্ট্রিট (শ্যামবাজার ৫ মাথার মোড় সংলগ্ন), কলকাতা - ৭০০০4',
  addressEn: '74/A, Shyambazar Street, Near Shyambazar 5-Point Crossing, Kolkata - 700004',
  openingHoursBn: 'প্রতিদিন সকাল ১০:০০ - রাত ৯:৩০ (সপ্তাহের ৭ দিন খোলা)',
  experienceYears: '১২+',
  completedEvents: '১৫০০+',
  happyClients: '৯৯.৮%',
  awardsCount: '১৫+',
  socialLinks: {
    facebook: 'https://facebook.com/alochobistudio',
    instagram: 'https://instagram.com/alochobistudio',
    youtube: 'https://youtube.com/@alochobistudio',
    whatsapp: 'https://wa.me/917029321228'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-photography',
    nameBn: 'ওয়েডিং ফটোগ্রাফি',
    nameEn: 'Wedding Photography',
    category: 'wedding',
    descriptionBn: 'বাঙালি বিয়ের শুভদৃষ্টি, সাতপাকে বাঁধা, মালাবদল ও সিঁদুরদানের প্রতিটি আবেগঘন মুহূর্তের ক্যান্ডিড ও ট্র্যাডিশনাল কভারেজ।',
    fullDetailsBn: 'বাঙালি বিয়ের রীতিনীতি অত্যন্ত আবেগময় ও বর্ণিল। আমরা শুধু ছবি তুলি না, প্রতিটি চোখের জল, লাজুক হাসি এবং শুভ মুহূর্তকে জীবন্ত গল্পের মতো ক্যামেরাবন্দী করি। সিনিয়র ফটোগ্রাফারদের তত্ত্বাবধানে প্রতিটি ফ্রেম হয় নিখুঁত।',
    deliverablesBn: ['আনলিমিটেড হাই-রেজোলিউশন র ফটো', '৩০০+ কালার গ্রেডেড মাস্টার ফটো', '১টি প্রিমিয়াম লেদার-বাউন্ড ফটো অ্যালবাম', 'হাই-স্পিড ড্রাইভ ও পেনড্রাইভ ডেলিভারি'],
    equipmentBn: 'Sony Alpha A7 IV / Canon EOS R5 + G-Master 24-70mm f/2.8 & 85mm f/1.4',
    iconName: 'Camera',
    highlight: true
  },
  {
    id: 'wedding-videography',
    nameBn: 'ওয়েডিং সিনেমাটোগ্রাফি',
    nameEn: 'Wedding Videography',
    category: 'wedding',
    descriptionBn: '৪K রেজোলিউশনে সিনেমাটিক টিজার, ওয়েডিং ট্রেলার এবং পূর্ণাঙ্গ রীতিনীতির সিনেমাটিক ফিল্ম মেকিং।',
    fullDetailsBn: 'সিনেমাটিক ফিল্ম মেকিং স্টাইলে আপনার বিয়ের গল্পকে রূপালী পর্দার মতো রূপ দিই। রোমান্টিক আবহ সঙ্গীত, অরিজিনাল ভয়েসওভার এবং উন্নত জিম্বল স্টেবিলাইজেশনের সাথে পুরো বিয়ের মুহূর্তকে অমর করে রাখি।',
    deliverablesBn: ['৪-৫ মিনিটের সিনেমাটিক হাইলাইট টিজার', '৬০-৯০ মিনিটের পূর্ণাঙ্গ সিনেমাটিক ফিল্ম', 'ইনস্টাগ্রাম রিলস ও সোশ্যাল মিডিয়া শর্টস', '৪K আল্ট্রা এইচডি পেনড্রাইভ'],
    equipmentBn: 'Sony FX3 Cinema Line + Ronin RS3 Pro Gimbal + Sennheiser Wireless Mic',
    iconName: 'Video',
    highlight: true
  },
  {
    id: 'pre-wedding-photography',
    nameBn: 'প্রি-ওয়েডিং ফটোগ্রাফি',
    nameEn: 'Pre-Wedding Photography',
    category: 'wedding',
    descriptionBn: 'ঐতিহাসিক রাজবাড়ি, গঙ্গার ঘাট বা প্রাকৃতিক লোকেশনে বর-কনের রোমান্টিক ও নান্দনিক ফটোশ্যুট।',
    fullDetailsBn: 'বিয়ের আগে নিজেদের একান্ত সময় ও রসায়নকে ফ্রেমবন্দী করার সবচেয়ে আনন্দময় অভিজ্ঞতা। লোকেশন নির্বাচন, পোশাকের গাইডলাইন এবং কমফোর্টেবল পোজ ডিরেকশন দিয়ে অসাধারণ সব ড্রিম ফ্রেম তৈরি করি।',
    deliverablesBn: ['ফুল ডে অথবা হাফ ডে লোকেশন শ্যুট', '৫০+ সিগনেচার রিটাচড ফটো', 'প্রি-ওয়েডিং টিজার ভিডিও (অপশনাল)', 'বিয়ের অভ্যর্থনায় প্রদর্শনের জন্য ওয়েলকাম ফ্রেম'],
    equipmentBn: 'Sony A7 IV + Prime Lenses (35mm f/1.4, 50mm f/1.2)',
    iconName: 'Heart',
    highlight: true
  },
  {
    id: 'drone-cinematography',
    nameBn: 'ড্রোন সিনেমাটোগ্রাফি',
    nameEn: 'Drone Photography/Videography',
    category: 'production',
    descriptionBn: 'আকাশ থেকে বিয়ের আসর, শোভাযাত্রা ও আলোকসজ্জার মহিমান্বিত সিনেমাটিক ড্রোন ফ্রেম।',
    fullDetailsBn: 'DGCA অনুমোদিত লাইসেন্সধারী দক্ষ ড্রোন পাইলট দ্বারা ৪K আল্ট্রা রেজোলিউশনে এরিয়াল ভিজ্যুয়াল রেকর্ড করা হয়। ভেন্যু, বারাত শোভাযাত্রা এবং উন্মুক্ত ইভেন্টে এক অতুলনীয় রাজকীয় মাত্রা যোগ করে।',
    deliverablesBn: ['৪K ৬০FPS সিনেমাটিক এরিয়াল শট', 'হাই-রেজোলিউশন বার্ডস-আই-ভিউ ফটো', 'ফুল সিনেমাটিক ফিল্মে ইনক্লুশন'],
    equipmentBn: 'DJI Mavic 3 Pro Cine (Hasselblad Camera with Triple Lens)',
    iconName: 'Aperture',
    highlight: true
  },
  {
    id: 'annaprashan-photography',
    nameBn: 'অন্নপ্রাশন ও মুখে ভাত',
    nameEn: 'Annaprashan Photography',
    category: 'personal',
    descriptionBn: 'ছোট্ট সোনার মুখে ভাতের মিষ্টি হাসি, ধান-দূর্বার আশীর্বাদ ও কাঁসার থালার নিখাদ মুহূর্ত।',
    fullDetailsBn: 'বাঙালির জীবনের প্রথম বড় পারিবারিক উৎসব অন্নপ্রাশন বা মুখে ভাত। বাচ্চার যাতে কোনো অস্বস্তি না হয় সেদিকে বিশেষ নজর রেখে নরম প্রাকৃতিক আলো ও দ্রুতগতির লেন্সে মিষ্টি সব এক্সপ্রেশন ধারণ করি।',
    deliverablesBn: ['২০০+ হাই কোয়ালিটি ফটো', '৫০+ মাস্টার এডিটেড ছবি', 'ডিজিটাল ফটো বুক', 'পারিবারিক গ্রুপ পোর্ট্রেট'],
    equipmentBn: 'Canon EOS R6 Mark II + Silent Shutter Lens',
    iconName: 'Smile',
    highlight: true
  },
  {
    id: 'rice-ceremony',
    nameBn: 'রাইস সেরেমনি কভারেজ',
    nameEn: 'Rice Ceremony Photography',
    category: 'personal',
    descriptionBn: 'সম্পূর্ণ পারিবারিক আনন্দ, আত্মীয়স্বজনের আশীর্বাদ ও অনুষ্ঠানের রীতিনীতির বিস্তারিত ছবি।',
    fullDetailsBn: 'শিশু ও পরিবারের এই পবিত্র মুহূর্তের প্রতিটি আচার-অনুষ্ঠান, উপহার প্রদান ও আনন্দময় পরিবেশের সম্পূর্ণ ডকুমেন্টেশন।',
    deliverablesBn: ['ফুল ইভেন্ট কভারেজ', 'সকল কাঁচা ও এডিটেড ছবি', 'ক্লাউড লিঙ্ক অ্যাক্সেস'],
    equipmentBn: 'Sony A7 III + 24-70mm f/2.8 GM',
    iconName: 'Gift'
  },
  {
    id: 'birthday-photography',
    nameBn: 'বার্থডে ফটোগ্রাফি',
    nameEn: 'Birthday Photography',
    category: 'event',
    descriptionBn: 'কেক কাটার উচ্ছ্বাস, থিম ডেকোরেশন ও বন্ধুদের সাথে রঙিন মুহূর্তের প্রফেশনাল ফটোশ্যুট।',
    fullDetailsBn: '১ম জন্মদিন থেকে শুরু করে ৫০তম বা ৭৫তম জুবিলি বার্থডে—প্রতিটি স্পেশাল দিনের হাসি-আনন্দ ও সাজসজ্জাকে উজ্জ্বল রঙে ধরে রাখি।',
    deliverablesBn: ['কেক কাটিং ও পার্টি কভারেজ', 'ক্যান্ডিড কিডস মোমেন্টস', '১০০+ রিটাচড ফটো'],
    equipmentBn: 'Sony A7 IV + Godox Studio Speedlights',
    iconName: 'Cake'
  },
  {
    id: 'engagement-photography',
    nameBn: 'এনগেজমেন্ট ও আংটিবদল',
    nameEn: 'Engagement Photography',
    category: 'wedding',
    descriptionBn: 'রিং এক্সচেঞ্জ, রোমান্টিক কাপল ফ্রেম এবং দুই পরিবারের মিলনের শুভ মুহূর্তের ফ্রেমবন্দী রূপ।',
    fullDetailsBn: 'নতুন যাত্রার সূচনার বিশেষ দিন। রিং শট থেকে শুরু করে কাপল ও আত্মীয়স্বজনের আবেগঘন প্রতিটি পলকে যত্নসহকারে তোলা হয়।',
    deliverablesBn: ['১৫০+ মাস্টার এডিটেড ফটো', 'ম্যাক্রো রিং ডিটেইল শট', 'ইনস্ট্যান্ট সোশ্যাল প্রিভিউ'],
    equipmentBn: 'Sony 90mm Macro f/2.8 + 50mm f/1.2 GM',
    iconName: 'Sparkles'
  },
  {
    id: 'baby-photography',
    nameBn: 'বেবি ও নিউবর্ন শ্যুট',
    nameEn: 'Baby & Newborn Photography',
    category: 'personal',
    descriptionBn: 'নিরাপদ, উষ্ণ ও স্বাস্থ্যসম্মত পরিবেশে ছোট্ট শিশুর কিউট এক্সপ্রেশন ও প্রপস সহ ক্রিয়েটিভ শ্যুট।',
    fullDetailsBn: 'নবজাতক ও ১-২ বছরের শিশুদের জন্য বিশেষ বেবি-ফ্রেন্ডলি স্টুডিও সেটআপ। স্যানিটাইজড প্রপস, সফট ন্যাচারাল লাইটিং এবং অভিজ্ঞ ধৈর্যের সাথে শ্যুট পরিচালিত হয়।',
    deliverablesBn: ['৩-৪টি ভিন্ন থিম ও কস্টিউম সেট', '৩০টি হাই-এন্ড রিটাচড ছবি', 'মিনি স্মৃতি অ্যালবাম'],
    equipmentBn: 'Sony A7 IV + Softbox Continuous Diffused Lighting',
    iconName: 'Baby'
  },
  {
    id: 'maternity-photography',
    nameBn: 'ম্যাটারনিটি ফটোশ্যুট',
    nameEn: 'Maternity Photography',
    category: 'personal',
    descriptionBn: 'মাতৃত্বের স্বর্গীয় সৌন্দর্য ও ভালোবাসার স্মৃতির নান্দনিক ইনডোর বা আউটডোর ফটোশ্যুট।',
    fullDetailsBn: 'মায়ের গর্ভের নতুন প্রাণের আগমনী বার্তা। অত্যন্ত শালীন, ক্লাসি ও শৈল্পিক ফ্রেমের মাধ্যমে মাতৃত্বের এই বিরল অধ্যায়কে চিরস্মরণীয় করে রাখি।',
    deliverablesBn: ['স্টুডিও অথবা আউটডোর সেশন', 'গাউন ও প্রপস সাপোর্ট', '২৫+ ফাইন-আর্ট ফিনিশ ছবি'],
    equipmentBn: 'Canon R5 + Profoto Studio Softbox',
    iconName: 'HeartHandshake'
  },
  {
    id: 'portrait-photography',
    nameBn: 'প্রফেশনাল পোর্ট্রেট',
    nameEn: 'Portrait Photography',
    category: 'personal',
    descriptionBn: 'মডেলিং পোর্টফোলিও, কর্পোরেট হেডশট, পাত্র-পাত্রীর বায়োডাটা ও ক্রিয়েটিভ পার্সোনাল পোর্ট্রেট।',
    fullDetailsBn: 'স্টুডিও কোয়ালিটি লাইটিং ও পারফেক্ট অ্যাঙ্গেলে আপনার ব্যক্তিত্বকে ফুটিয়ে তোলা। কর্পোরেট লিঙ্কডইন প্রোফাইল বা ফ্যাশন পোর্টফোলিওর জন্য আদর্শ।',
    deliverablesBn: ['মাল্টিপল লাইটিং সেটআপ', 'স্কিন টেক্সচার রিটেইনিং রিটাচ', 'হাই-রেজোলিউশন ও ওয়েব সাইজ কপি'],
    equipmentBn: 'Sony A7R V + 85mm f/1.4 GM',
    iconName: 'User'
  },
  {
    id: 'passport-id-photo',
    nameBn: 'পাসপোর্ট ও ভিসা সাইজ ফটো',
    nameEn: 'Passport / ID Photo',
    category: 'personal',
    descriptionBn: 'আন্তর্জাতিক মানদণ্ড অনুযায়ী বায়োমেট্রিক পাসপোর্ট, ভিসা ও যেকোনো সরকারি আইডির দ্রুত ও নিখুঁত ছবি।',
    fullDetailsBn: 'ইউএসএ, শেনজেন, কানাডা, অস্ট্রেলিয়া ভিসা স্পেসিফিকেশন অনুযায়ী ব্যাকগ্রাউন্ড ও রেশিও মেনে ছবি তোলা ও ইনস্ট্যান্ট প্রিন্ট প্রদান।',
    deliverablesBn: ['১০ মিনিটে জরুরি ডেলিভারি', 'ডিজিটাল সফটকপি ও প্রিন্টেড কপি', 'বায়োমেট্রিক স্ট্যান্ডার্ড অনুগত'],
    equipmentBn: 'Studio Flash + Epson Pro Photo Printer',
    iconName: 'IdCard'
  },
  {
    id: 'event-photography',
    nameBn: 'ইভেন্ট ফটোগ্রাফি',
    nameEn: 'Event Photography',
    category: 'event',
    descriptionBn: 'সাংস্কৃতিক সন্ধ্যা, স্কুলের বার্ষিক অনুষ্ঠান, কনফারেন্স ও সামাজিক মিলনমেলার প্রাণবন্ত ছবি।',
    fullDetailsBn: 'যেকোনো পাবলিক ও প্রাইভেট অনুষ্ঠানের লাইভ অ্যাকশন, ভিআইপি স্পিকার ও অডিয়েন্স রিঅ্যাকশনের ডাইনামিক ফ্রেম।',
    deliverablesBn: ['ফুল ইভেন্ট কভারেজ', 'সেম-ডে প্রেস প্রিভিউ সিলেকশন', 'হাই-স্পিড ক্লাউড গ্যালারি'],
    equipmentBn: 'Sony Dual Camera Setup (Wide + Telephoto)',
    iconName: 'Users'
  },
  {
    id: 'event-videography',
    nameBn: 'ইভেন্ট ভিডিওগ্রাফি',
    nameEn: 'Event Videography',
    category: 'event',
    descriptionBn: 'সম্পূর্ণ ইভেন্টের হাই-ডেফিনিশন মাল্টি-ক্যামেরা ভিডিও রেকর্ডিং ও লাইভ স্ট্রিমিং ব্যবস্থা।',
    fullDetailsBn: 'কর্পোরেট সেমিনার, মঞ্চনাটক বা সঙ্গীতানুষ্ঠানের ক্রিস্টাল ক্লিয়ার অডিও এবং মাল্টি-অ্যাঙ্গেল ভিজ্যুয়াল প্রোডাকশন।',
    deliverablesBn: ['ফুল এইচডি / ৪K মাস্টার ভিডিও', 'প্রফেশনাল অডিও মিক্সিং', 'সোশ্যাল মিডিয়া রিলস'],
    equipmentBn: 'Multi-cam Sony FX3 & A7 IV + Digital Audio Mixer',
    iconName: 'Film'
  },
  {
    id: 'traditional-video',
    nameBn: 'ট্র্যাডিশনাল ভিডিও',
    nameEn: 'Traditional Video',
    category: 'production',
    descriptionBn: 'অনুষ্ঠানের শুরু থেকে শেষ পর্যন্ত প্রতিটি মন্ত্রোচ্চারণ, নিয়মকানুন ও অতিথিদের বিস্তারিত পূর্ণাঙ্গ ভিডিও।',
    fullDetailsBn: 'যারা কোনো মুহূর্তই মিস করতে চান না, তাদের জন্য প্রতিটি রিচুয়াল বিস্তারিতভাবে ধারণ করা হয় এবং সুন্দর টাইটেল ও মিউজিক দিয়ে সাজানো হয়।',
    deliverablesBn: ['২-৩ ঘণ্টার ফুল এডিটেড ভিডিও ফাইল', 'অধ্যায়ভিত্তিক ডিভিডি/পেনড্রাইভ ফরম্যাট', 'টিভি ও মোবাইলে সহজে দেখার সুবিধা'],
    equipmentBn: 'Broadcast Quality 4K Camcorders + LED Light Panels',
    iconName: 'Tv'
  },
  {
    id: 'cinematic-video',
    nameBn: 'সিনেমাটিক ভিডিও',
    nameEn: 'Cinematic Video',
    category: 'production',
    descriptionBn: 'চলচ্চিত্রের মতো কালার গ্রেডিং, স্লো-মোশন ও আবেগঘন সঙ্গীত সমন্বয়ে তৈরি আধুনিক মাস্টারপিস।',
    fullDetailsBn: 'হলিউড লেভেল সিনেমাটিক ফ্রেম রেট, ডাইনামিক ড্রোন শট, স্পিড র‍্যাম্পিং ও গল্পভিত্তিক এডিটিংয়ের মাধ্যমে তৈরি এক মোহময় ভিডিও অভিজ্ঞতা।',
    deliverablesBn: ['৪-৬ মিনিটের ট্রেইলার ও টিজার', '১০-১৫ মিনিটের ড্রিম ওয়েডিং ফ্লিক', 'রিল ও শর্টস প্যাক'],
    equipmentBn: 'Sony FX3 (S-Log3 10-bit 4:2:2) + Cinema Prime Lenses',
    iconName: 'Clapperboard'
  },
  {
    id: 'photo-album-design',
    nameBn: 'প্রিমিয়াম ফটো অ্যালবাম ডিজাইন',
    nameEn: 'Photo Album Design & Print',
    category: 'production',
    descriptionBn: 'আন্তর্জাতিক মানের ক্যানভাস বা সিল্ক পেপার, পিভিসি মেটালিক শিট এবং লাক্সারি উডেন ও লেদার বক্স অ্যালবাম।',
    fullDetailsBn: 'ছবি যখন হাতে স্পর্শ করা যায়, তখন তার অনুভূতি অন্যরকম। আমাদের ইন-হাউস ক্রিয়েটিভ ডিজাইনারদের হাতে তৈরি নন-টিয়ার ক্রিস্টাল ও ভেলভেট অ্যালবাম যা ৫০ বছরেও রঙ হারায় না।',
    deliverablesBn: ['২০-৪০ পাতার কাস্টমাইজড লেআউট', 'ওয়াটারপ্রুফ মেটালিক ও সিল্ক পেপারিং', 'প্রিমিয়াম লেদার/উডেন সুটকেস বক্স'],
    equipmentBn: 'Color Calibrated EIZO Monitors + Italian Binding Technology',
    iconName: 'BookOpen'
  },
  {
    id: 'photo-editing-retouching',
    nameBn: 'ফটো এডিটিং ও রিটাচিং',
    nameEn: 'Photo Editing & Retouching',
    category: 'production',
    descriptionBn: 'ন্যাচারাল স্কিন টোন রিটাচিং, ব্যাকগ্রাউন্ড ক্লিনআপ, কালার কারেকশন ও ওল্ড ফটো রিস্টোরেশন।',
    fullDetailsBn: 'ছবিকে অতিরিক্ত প্লাস্টিক বা কৃত্রিম না বানিয়ে প্রাকৃতিক সৌন্দর্য অক্ষুণ্ণ রেখে প্রফেশনাল ডজ অ্যান্ড বার্ন টেকনিকে গ্ল্যামারাস রূপদান। পুরোনো নষ্ট হয়ে যাওয়া ছবির ডিজিটাল পুনর্জীবনও করা হয়।',
    deliverablesBn: ['হাই-এন্ড ম্যাগাজিন গ্রেড রিটাচিং', 'কালার গ্রেডিং ও টোন ম্যাচিং', 'পুরোনো ছবি রিস্টোরেশন'],
    equipmentBn: 'Adobe Photoshop & Lightroom Pro + Wacom Intuos Pro Pen Tablet',
    iconName: 'Sliders'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    titleBn: 'শুভদৃষ্টির শুভ লগ্ন',
    titleEn: 'Subho Drishti Moment',
    category: 'wedding',
    categoryLabelBn: 'বিয়ে',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Sony A7 IV',
    lensInfo: '85mm f/1.4 GM',
    locationBn: 'সোনারপুর রাজবাড়ি, কলকাতা',
    storyBn: 'পান পাতার আড়াল সরিয়ে বরের চোখে চোখ রাখার সেই অলৌকিক মুহূর্ত।'
  },
  {
    id: 'gal-2',
    titleBn: 'সিঁদুরদান ও লাজুক হাসি',
    titleEn: 'Sindoor Daan Elegance',
    category: 'wedding',
    categoryLabelBn: 'বিয়ে',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Sony FX3',
    lensInfo: '50mm f/1.2 GM',
    locationBn: 'সল্টলেক প্যালেস, কলকাতা',
    storyBn: 'নতুন জীবনের শুভ সূচনার পবিত্র সিঁদুরের রক্তিম আভা।'
  },
  {
    id: 'gal-3',
    titleBn: 'গঙ্গার ঘাটে সোনালী প্রি-ওয়েডিং',
    titleEn: 'Golden Hour Riverfront Romance',
    category: 'prewedding',
    categoryLabelBn: 'প্রি-ওয়েডিং',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cameraInfo: 'Canon EOS R5',
    lensInfo: '35mm f/1.4L II',
    locationBn: 'প্রিন্সেপ ঘাট, গঙ্গার তীর',
    storyBn: 'সূর্যাস্তের মৃদু আলোয় কপোত-কপোতীর অকৃত্রিম প্রেমালাপ।'
  },
  {
    id: 'gal-4',
    titleBn: 'মুখে ভাতের ছোট্ট রাজপুত্র',
    titleEn: 'Annaprashan Little Prince',
    category: 'baby',
    categoryLabelBn: 'বেবি',
    imageUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Sony A7 IV',
    lensInfo: '90mm Macro f/2.8',
    locationBn: 'হাওড়া স্টুডিও ফ্লোর',
    storyBn: 'রেশমি ধুতি-পাঞ্জাবি পরে কাঁসার থালার সামনে সাত মাসের ছোট্ট আনন্দের হাসি।'
  },
  {
    id: 'gal-5',
    titleBn: 'লাল বেনারসিতে বাঙালি বধূ',
    titleEn: 'Traditional Bengali Bridal Portrait',
    category: 'portrait',
    categoryLabelBn: 'পোর্ট্রেট',
    imageUrl: 'https://images.unsplash.com/photo-1609151162377-794fa68b02f1?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Canon EOS R5',
    lensInfo: '85mm f/1.2L',
    locationBn: 'উত্তর কলকাতা হেরিটেজ বাড়ি',
    storyBn: 'সোনার গয়না ও চন্দনের কল্কার নিখুঁত কারুকাজে সাজানো বাঙালি কন্যা।'
  },
  {
    id: 'gal-6',
    titleBn: 'সংগীত ও আলোকময় রাতের উচ্ছ্বাস',
    titleEn: 'Sangeet Night Celebration',
    category: 'event',
    categoryLabelBn: 'ইভেন্ট',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cameraInfo: 'Sony A7 IV',
    lensInfo: '24-70mm f/2.8 GM',
    locationBn: 'ইকো পার্ক কনভেনশন সেন্টার',
    storyBn: 'দুই পরিবারের নাচ-গান ও আনন্দমুখর রাতের জীবন্ত ক্যান্ডিড ফ্রেম।'
  },
  {
    id: 'gal-7',
    titleBn: 'ঐতিহাসিক রাজবাড়ি প্রি-ওয়েডিং',
    titleEn: 'Heritage Palace Pre-Wedding',
    category: 'prewedding',
    categoryLabelBn: 'প্রি-ওয়েডিং',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cameraInfo: 'Sony A7R V',
    lensInfo: '24mm f/1.4 GM',
    locationBn: 'ইটাচুনা রাজবাড়ি, হুগলি',
    storyBn: 'ঐতিহ্যের স্থাপত্য ও আধুনিক প্রেমের যুগলবন্দী।'
  },
  {
    id: 'gal-8',
    titleBn: 'সাতপাকে বাঁধা',
    titleEn: 'Saat Paake Bandha Ritual',
    category: 'wedding',
    categoryLabelBn: 'বিয়ে',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Sony FX3',
    lensInfo: '35mm f/1.4 GM',
    locationBn: 'দমদম এয়ারপোর্ট সংলগ্ন ব্যাঙ্কোয়েট',
    storyBn: 'পিঁড়িতে বসে বরের চারদিকে সাতপাক ঘোরার স্বর্গীয় রিচুয়াল।'
  },
  {
    id: 'gal-9',
    titleBn: 'আকাশ থেকে বিয়ের মণ্ডপ (ড্রোন)',
    titleEn: 'Aerial Mandap Grandeur',
    category: 'other',
    categoryLabelBn: 'অন্যান্য',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cameraInfo: 'DJI Mavic 3 Pro',
    lensInfo: 'Hasselblad 24mm',
    locationBn: 'নিউ টাউন ওপেন এয়ার গার্ডেন',
    storyBn: 'সন্ধ্যায় আলোকমালায় সাজানো রাজকীয় বিয়ের মণ্ডপের পাখির চোখের দৃশ্য।'
  },
  {
    id: 'gal-10',
    titleBn: 'প্রথম জন্মদিনের কেক কাটিং',
    titleEn: 'First Birthday Joy',
    category: 'baby',
    categoryLabelBn: 'বেবি',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
    cameraInfo: 'Sony A7 IV',
    lensInfo: '50mm f/1.4',
    locationBn: 'গড়িয়া, কলকাতা',
    storyBn: '১ম জন্মদিনের থিম পার্টি ও কেকের মিষ্টি ফ্রেম।'
  },
  {
    id: 'gal-11',
    titleBn: 'বাঙালি বরের অভিজাত রূপ',
    titleEn: 'Bengali Groom Portrait',
    category: 'portrait',
    categoryLabelBn: 'পোর্ট্রেট',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    cameraInfo: 'Sony A7R V',
    lensInfo: '85mm f/1.4 GM',
    locationBn: 'আলো ছবি স্টুডিও লাউঞ্জ',
    storyBn: 'তসর শেরওয়ানি ও টোপরে বরের আত্মবিশ্বাসী রাজকীয় চাহনি।'
  },
  {
    id: 'gal-12',
    titleBn: 'প্রিমিয়াম লেদার ফটো অ্যালবাম',
    titleEn: 'Handcrafted Heritage Photo Album',
    category: 'other',
    categoryLabelBn: 'অন্যান্য',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cameraInfo: 'Canon R5',
    lensInfo: '100mm Macro',
    locationBn: 'স্টুডিও ডিসপ্লে কর্নার',
    storyBn: 'ইতালিয়ান সিল্ক পেপারে প্রিন্ট করা আজীবন সুরক্ষিত স্মৃতির অ্যালবাম।'
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'basic-package',
    nameBn: 'বেসিক প্যাকেজ',
    nameEn: 'BASIC PACKAGE',
    taglineBn: 'ছোট পারিবারিক অনুষ্ঠান, জন্মদিন ও অন্নপ্রাশনের জন্য উপযুক্ত',
    featuresBn: [
      '১ জন সিনিয়র ট্র্যাডিশনাল/ক্যান্ডিড ফটোগ্রাফার',
      '৪ থেকে ৫ ঘণ্টা নিবেদিত ইভেন্ট কভারেজ',
      'আনলিমিটেড হাই-রেজোলিউশন র ছবি তোলা',
      '১০০+ সেরা ছবি প্রফেশনাল কালার গ্রেডিং ও রিটাচ',
      'হাই-স্পিড গুগল ড্রাইভ ডিজিটাল ডেলিভারি (১৫ দিনের মধ্যে)',
      'সোশ্যাল মিডিয়ার জন্য ইনস্ট্যান্ট হাইলাইট প্যাক (২৪ ঘণ্টায়)'
    ],
    suitableForBn: 'ছোট পারিবারিক ঘরোয়া অনুষ্ঠান, জন্মদিন বা অন্নপ্রাশনের জন্য উপযুক্ত',
    deliverablesBn: ['১০০+ এডিটেড ফটো', 'ফুল র ফাইল ব্যাকআপ', 'ডিজিটাল ক্লাউড লিঙ্ক'],
    popular: false
  },
  {
    id: 'standard-package',
    nameBn: 'স্ট্যান্ডার্ড প্যাকেজ',
    nameEn: 'STANDARD PACKAGE',
    taglineBn: 'বিয়ে ও রিসেপশন অনুষ্ঠানের পরিপূর্ণ ফটোগ্রাফি ও সিনেমাটিক ভিডিও',
    badgeBn: 'সবচেয়ে জনপ্রিয়',
    featuresBn: [
      '২ জন প্রফেশনাল ফটোগ্রাফার (১ ক্যান্ডিড + ১ ট্র্যাডিশনাল)',
      '১ জন ডেডিকেটেড সিনেমাটোগ্রাফার (জিম্বল সহ)',
      'পূর্ণাঙ্গ দিন/রাতের বিয়ে বা রিসেপশন কভারেজ',
      '২৫০+ মাস্টার রিটাচড হাই-এন্ড ফটো',
      '১টি প্রিমিয়াম ওয়াটারপ্রুফ ফটো অ্যালবাম (৩০ পাতা / ১২০ ছবি)',
      '৩-৫ মিনিটের সিনেমাটিক হাইলাইটস টিজার + পূর্ণাঙ্গ অনুষ্ঠান ফিল্ম',
      'প্রিমিয়াম কাঠের পেনড্রাইভ বক্সে ফুল ডেলিভারি'
    ],
    suitableForBn: 'বিয়ে, রিসেপশন ও প্রধান পারিবারিক সামাজিক উৎসবের সেরা সমাধান',
    deliverablesBn: ['৩০ পাতার লাক্সারি অ্যালবাম', 'সিনেমাটিক টিজার ও লং ফিল্ম', '২৫০+ মাস্টার ফটো', 'ডিজিটাল ড্রাইভ'],
    popular: true
  },
  {
    id: 'premium-package',
    nameBn: 'প্রিমিয়াম প্যাকেজ',
    nameEn: 'PREMIUM PACKAGE',
    taglineBn: 'কমপ্লিট ফটোগ্রাফি + সিনেমাটিক ভিডিওগ্রাফি + ড্রোন + প্রি-ওয়েডিং',
    badgeBn: 'সম্পূর্ণ রাজকীয় অভিজ্ঞতা',
    featuresBn: [
      'চিফ ফটোগ্রাফারের নেতৃত্বে ৪ জনের বিশেষ এক্সপার্ট টিম',
      '২ জন ক্যান্ডিড স্পেশালিস্ট + ১ জন ট্র্যাডিশনাল + ২ জন সিনেমাটোগ্রাফার',
      '৪K আল্ট্রা এইচডি এরিয়াল ড্রোন কভারেজ (DJI Mavic 3 Pro)',
      'কমপ্লিমেন্টারি ফুল ডে আউটডোর প্রি-ওয়েডিং শ্যুট',
      '২টি লাক্সারি মেটালিক ফটো অ্যালবাম (বিয়ে ও রিসেপশন আলাদা)',
      'অভিভাবকদের জন্য ১টি স্পেশাল মিনি প্যারেন্টস অ্যালবাম',
      '৪-৬ মিনিটের ড্রিম সিনেমাটিক টিজার + ইনস্টাগ্রাম রিলস + ফুল মুভি',
      'রিসার্ভড ভিআইপি এডিটিং প্রায়োরিটি (দ্রুততম ডেলিভারি)'
    ],
    suitableForBn: 'যাঁরা জীবনের সবচেয়ে বড় উৎসবকে রাজকীয়ভাবে অমর করে রাখতে চান',
    deliverablesBn: ['২টি মেটালিক লাক্সারি অ্যালবাম', '৪K ড্রোন সিনেমাটোগ্রাফি', 'ফুল প্রি-ওয়েডিং শ্যুট', 'লাইফটাইম ক্লাউড ব্যাকআপ'],
    popular: false
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-1',
    titleBn: 'অনির্বাণ ও পৌলমীর রাজকীয় বিয়ের সিনেমাটিক টিজার',
    titleEn: 'Anirban & Paulami Royal Wedding Highlights',
    duration: '04:12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    categoryBn: 'ওয়েডিং টিজার',
    viewsBn: '১২.৫ হাজার ভিউ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: 'vid-2',
    titleBn: 'গঙ্গার তীরে সূর্যাস্তের ড্রিম প্রি-ওয়েডিং ফিল্ম',
    titleEn: 'Sunset Pre-Wedding Film along the Hooghly',
    duration: '03:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    categoryBn: 'প্রি-ওয়েডিং',
    viewsBn: '১৮.৩ হাজার ভিউ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: 'vid-3',
    titleBn: 'আকাশ থেকে আলোকোজ্জ্বল বিয়ের আসর (ড্রোন শোকেস)',
    titleEn: 'Grand Venue Aerial Drone Showcase',
    duration: '02:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85',
    categoryBn: 'ড্রোন সিনেমা',
    viewsBn: '৯.১ হাজার ভিউ',
    embedId: 'dQw4w9WgXcQ'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientNameBn: 'সৌরভ ও ঈশিতা মজুমদার',
    eventBn: 'ওয়েডিং ও রিসেপশন কভারেজ',
    dateBn: 'জানুয়ারি ২০২৬',
    rating: 5,
    reviewBn: 'আলো ছবি স্টুডিও আমাদের বিয়ের প্রতিটি মুহূর্তকে যেভাবে ক্যামেরা বন্দি করেছে, তা দেখে আমাদের দুই পরিবারের সবাই মুগ্ধ! শুভদৃষ্টির সময় যে ক্যান্ডিড শটটা নিয়েছেন, সেটা আমাদের ড্রয়িংরুমে আজ বাঁধিয়ে রাখা। টিমটা ভীষণ বিনয়ী ও সময়নিষ্ঠ।',
    locationBn: 'সল্টলেক, কলকাতা',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-2',
    clientNameBn: 'অরিন্দম ও প্রিয়দর্শিনী চক্রবর্তী',
    eventBn: 'প্রি-ওয়েডিং ও সিনেমাটিক ফিল্ম',
    dateBn: 'নভেম্বর ২০২৫',
    rating: 5,
    reviewBn: 'আমাদের প্রি-ওয়েডিং শ্যুটের লোকেশন ও পোজ সিলেকশন অসাধারণ ছিল। প্রথমে আমরা ক্যামেরার সামনে একটু লাজুক ছিলাম, কিন্তু ফটোগ্রাফার দাদা এত সহজভাবে কথা বললেন যে শ্যুটটা রূপকথার মতো হয়ে উঠল। ভিডিওর ব্যাকগ্রাউন্ড মিউজিক সিলেকশন অনবদ্য!',
    locationBn: 'উত্তরপাড়া, হুগলি',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-3',
    clientNameBn: 'মৌসুমী ও দেবমাল্য রায়',
    eventBn: 'ছেলে রুদ্রের অন্নপ্রাশন',
    dateBn: 'ডিসেম্বর ২০২৫',
    rating: 5,
    reviewBn: 'বাচ্চার ছবি তোলা যে কত কঠিন তা আমরা জানি। কিন্তু আলো ছবি স্টুডিওর সদস্যরা এত ধৈর্য ধরে রুদ্রের হাসির প্রতিটা ফ্রেম ক্যাপচার করেছে! সময়মতো সুন্দর অ্যালবামের প্রিন্ট পেয়েছি। আত্মীয়রা সবাই প্রশংসায় পঞ্চমুখ।',
    locationBn: 'শ্যামবাজার, কলকাতা',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-4',
    clientNameBn: 'রাজেশ ও তনুশ্রী ব্যানার্জী',
    eventBn: 'বিয়ে ও এরিয়াল ড্রোন কভারেজ',
    dateBn: 'ফেব্রুয়ারি ২০২৬',
    rating: 5,
    reviewBn: 'ড্রোন শটগুলো পুরো বিয়ের ভেন্যুকে এক রাজকীয় দৃশ্য দিয়েছে! বিশেষ করে বারাতে নাচ এবং সিঁদুরদানের ক্লোজ-আপ ভিডিওর কোয়ালিটি অতুলনীয়। প্রতিশ্রুতি মতো নির্দিষ্ট সময়ের আগেই অ্যালবাম হাতে পেয়েছি। ধন্যবাদ আলো ছবি স্টুডিও!',
    locationBn: 'বারাসাত, উত্তর ২৪ পরগনা',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: 'exp',
    titleBn: 'অভিজ্ঞ ফটোগ্রাফার',
    descBn: '১২+ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন দক্ষ ও আবেগপ্রবণ ফটোগ্রাফি টিম, যারা প্রতিটি ঐতিহ্য ও রীতিনীতি নিখুঁতভাবে বোঝেন।',
    icon: 'Award',
    metric: '১২+ বছর'
  },
  {
    id: 'gear',
    titleBn: 'উন্নতমানের ক্যামেরা',
    descBn: 'Sony FX3 Cinema Line, Canon R5 এবং DJI Mavic 3 Pro Cine ড্রোন—বিশ্বমানের ইকুইপমেন্টে সর্বোচ্চ ৪K স্বচ্ছতা।',
    icon: 'Camera',
    metric: 'Sony FX3 + 4K'
  },
  {
    id: 'edit',
    titleBn: 'প্রফেশনাল এডিটিং',
    descBn: 'সিনেমার মতো নিখুঁত ন্যাচারাল স্কিন রিটাচিং এবং হাই-এন্ড সিনেমাটিক কালার গ্রেডিং, যা ছবিকে দেবে আন্তর্জাতিক ফিনিশ।',
    icon: 'Sliders',
    metric: '100% ফাইন-আর্ট'
  },
  {
    id: 'delivery',
    titleBn: 'সময়মতো ডেলিভারি',
    descBn: 'আমরা নির্দিষ্ট সময়ের মূল্য বুঝি। প্রতিশ্রুত ৩০-৪৫ দিনের মধ্যে আপনার সুরভিত ফটো অ্যালবাম ও ভিডিও ফাইল সরবরাহ করি।',
    icon: 'Clock',
    metric: 'অন-টাইম গ্যারান্টি'
  },
  {
    id: 'creativity',
    titleBn: 'সৃজনশীল গল্পবলা',
    descBn: 'বাঁধাধরা মেকি পোজ নয়, আপনার সহজাত আবেগ, অকৃত্রিম চোখের জল ও হাসির মুহূর্তকে জীবন্ত গল্পের মতো তুলে ধরা আমাদের বৈশিষ্ট্য।',
    icon: 'Heart',
    metric: 'আবেগঘন মুহূর্ত'
  },
  {
    id: 'pricing',
    titleBn: 'সাশ্রয়ী ও কাস্টম প্যাকেজ',
    descBn: 'কোনো গোপন বা অতিরিক্ত খরচ নেই। আপনার বাজেট ও পছন্দের চাহিদা অনুযায়ী নমনীয়ভাবে সাজানো আধুনিক প্যাকেজ ব্যবস্থা।',
    icon: 'ShieldCheck',
    metric: 'স্বচ্ছ মূল্য তালিকা'
  }
];

export const WEDDING_RITUALS_TABS = [
  {
    id: 'holud',
    nameBn: 'গায়ে হলুদ ও আইবুড়োভাত',
    descBn: 'কাঁচা হলুদের সুবাস, আত্মীয়দের উচ্ছল হাসি এবং আইবুড়োভাতের বাঙালিয়ানা আবেগ।',
    subtextBn: 'হলুদ সন্ধ্যার উজ্জ্বল রঙ ও ক্যান্ডিড ফ্রেম'
  },
  {
    id: 'subho-drishti',
    nameBn: 'শুভদৃষ্টি ও মালাবদল',
    descBn: 'পান পাতার ফাঁক দিয়ে প্রথম দৃষ্টিবিনিময় ও বরমাল্য পরানোর রোমাঞ্চকর ক্ষণ।',
    subtextBn: 'আবেগময় প্রথম চাহনির চিরন্তন ফ্রেম'
  },
  {
    id: 'sindoor',
    nameBn: 'সাতপাক ও সিঁদুরদান',
    descBn: 'অগ্নিসাক্ষী করে সাতটি অঙ্গীকার ও কনের সিঁথিতে রক্তিম সিঁদুরের অমর মুহূর্ত।',
    subtextBn: 'পবিত্র অগ্নি ও শঙ্খধ্বনির শুভ মিলন'
  },
  {
    id: 'boubhat',
    nameBn: 'ভাত-কাপড় ও রিসেপশন',
    descBn: 'ভাত-কাপড়ের মিষ্টি অঙ্গীকার এবং আত্মীয়স্বজনের সামনে নবদম্পতির রাজকীয় সংবর্ধনা।',
    subtextBn: 'গ্র্যান্ড রিসেপশনের আধুনিক গ্ল্যামার'
  }
];

export const STUDIO_FAQS = [
  {
    qBn: 'বিয়ের কতদিন আগে বুকিং করা উচিত?',
    aBn: 'জনপ্রিয় বিয়ের লগ্নগুলোর তারিখ খুব দ্রুত বুক হয়ে যায়। তাই অনুষ্ঠান তারিখের কমপক্ষে ২ থেকে ৩ মাস আগে অগ্রিম বুকিং করে রাখা সবচেয়ে নিরাপদ।'
  },
  {
    qBn: 'আমরা কি সব কাঁচা (RAW) ছবি ও ফুটেজ পাব?',
    aBn: 'হ্যাঁ, অনুষ্ঠানের সমস্ত আনকাট হাই-রেজোলিউশন ছবি ও ভিডিও ক্লিপস আমরা হার্ডড্রাইভ বা ক্লাউড ড্রাইভের মাধ্যমে সম্পূর্ণভাবে ক্লায়েন্টকে হস্তান্তর করি।'
  },
  {
    qBn: 'কলকাতার বাইরে কি আপনাদের টিম গিয়ে কাজ করে?',
    aBn: 'হ্যাঁ, পশ্চিমবঙ্গসহ ভারতের যেকোনো জেলা বা ডেস্টিনেশন বিয়েতে (যেমন দীঘা, পুরী, জয়পুর, উত্তরবঙ্গ) আমরা পূর্ণাঙ্গ ইকুইপমেন্ট সহ গিয়ে কভারেজ দিই।'
  },
  {
    qBn: 'ফটো অ্যালবাম ডেলিভারি হতে কতদিন সময় লাগে?',
    aBn: 'ছবি সিলেক্ট করার পর ডিজাইন ড্রাফট অনুমোদনের সাধারণত ২০ থেকে ২৫ দিনের মধ্যে ইতালিয়ান বাইন্ডিং সহ প্রিমিয়াম অ্যালবাম ডেলিভারি দেওয়া হয়।'
  }
];
