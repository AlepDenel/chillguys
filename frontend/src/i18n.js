import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations for each language
const resources = {
  en: {
    translation: {

      // Header
      main: "Home",
      aboutus: "About Us",
      faqtitle: "FAQ",

      // Home

      home: {
        title: "Environmental Index Monitoring Web",
        subtitle: "Sarawak Natural Quality Status",
        availableLocations: "Available Locations",
        availableStations: "Available Stations",
        airQualityIndex: "Air Quality Index Data Panel",
        waterQualityIndex: "Water Quality Index Data Panel",
        aqi: "AQI",
        wqi: "WQI",
        aqiDashboard: "AQI Dashboard",
        wqiDashboard: "WQI Dashboard",
        time: "Time",
        status: "Status",
        temperature: "Temperature",
        humidity: "Humidity",
        pressure: "Pressure",
        locations: "Locations",
        stations: "Stations",
        implication: "Implication",
        healthAdvice: "Health Advice",
        goBack: "Go Back",

        implications: {
          GOOD: "Air quality is excellent! This environment is clean and poses no risk to health.",
          MODERATE: "Air quality is considered acceptable, but a few unusually sensitive individuals may experience slight discomfort.",
          RISKY: "Sensitive groups may feel side effects. Healthy people may notice slight irritation.",
          UNHEALTHY: "Everyone may feel effects, especially outdoors. Sensitive groups more serious reactions.",
          TOXIC: "Serious health effects likely for all. Avoid exposure.",
          HAZARDOUS: "Health emergency! Immediate danger to everyone."
        },
        
        advice: {
          GOOD: "Breathe easy! Air is fresh and safe.",
          MODERATE: "Safe for most. Asthmatic people should limit outdoor activity.",
          RISKY: "Limit outdoor time. Air quality declining.",
          UNHEALTHY: "Stay indoors. Mask if needed.",
          TOXIC: "Avoid all outdoor activity. Use air purifiers.",
          HAZARDOUS: "Stay inside. Evacuate if told."
        },
        
        wqiImplications: {
          CLEAN: "Water is excellent. Safe for all purposes.",
          "SLIGHTLY POLLUTED": "Slight pollution. Not suitable for drinking without treatment.",
          CONTAMINATED: "Heavily polluted. Unsafe for any use."
        },
        
        wqiAdvice: {
          CLEAN: "Safe and refreshing!",
          "SLIGHTLY POLLUTED": "Use with caution. Not for drinking.",
          CONTAMINATED: "Avoid contact. Do not use or drink."
        }
      },

      // About Us
      about: {
        title: "About",
        sarawak: "Sarawak",
        sense: "Sense",
        
        paragraph1: "SarawakSense is a real-time monitoring web application designed to track and present air and water quality data in an intuitive, user-friendly way. This project was developed as part of our university coursework in Object-Oriented Programming (OOP), combining both technical skills and social responsibility.",
        
        paragraph2: "Our small team, knwon as Chill Guys,  consists of dedicated students who are passionate about using technology to address real-world challenges. With SarawakSense, we aim to raise public awareness and provide accessible environmental information to communities across Sarawak.",
        
        whoWeAre: "Who We Are",
        paragraph3: "Chill Guys is a team of passionate university students working together to build SarawakSense — a real-time environmental monitoring web app. Each of us brings unique strengths to the table, combining backend logic, frontend experience, and smooth integration to create a meaningful, functional tool for the public, introducing the members:",
        
        aleef_role: "as Backend Developer 🛠",
        aleef_description: "Handles the server-side of the application using Django and manage databases, including to contributing to website design and integration.",
        
        azariena_role: "as Frontend Developer 🎨",
        azariena_description: "Specialises in and focuses on crafting a clean, responsive, and user friendly UI/UX experience.",
        
        nurzafirah_role: "as Frontend Developer 🎨",
        nurzafirah_description: "Bridges the gap between frontend and backend by managing API requests, authentication systems, and application logic.",
        
        ourMission: "Our Mission",
        missionParagraph: "To provide real-time air and water(currently N/A) quality information through a simple and informative web interface, encouraging environmental awareness and responsible action.",
        ourVision: "Our Vision",
        visionParagraph: "To contribute to a smarter, greener Sarawak where data-driven insights support sustainable living and informed community decisions."
      },

      // FAQ
      faq: {
        title: "FAQs",
        notWhatYoureLookingFor: "Not what you're looking for?",
        feedback: "This project is part of a university coursework, but we’re happy to hear your thoughts! You can leave feedback suggestions by ",
        feedbackLink: "clicking here.",

        questions: [
          {
            question: "WHAT IS SARAWAKSENSE?",
            answer: "SarawakSense is a student-developed web app designed to monitor and visualize real-time air and water quality across Sarawak. It helps raise environmental awareness by presenting data in a clear, accessible format."
          },
          {
            question: "WHERE DOES THE DATA COME FROM?",
            answer: "Air quality data is sourced from the AQICN APIs, which provides reliable, real-time air pollution data from monitoring stations. Water quality data is currently simulated for demonstration purposes, as no open real-time public sources are available."
          },
          {
            question: "HOW FREQUENTLY IS THE AIR AND WATER QUALITY DATA UPDATED?",
            answer: "Both air and water quality is refreshed automatically every 15 minutes using a scheduled background progress. This ensures the dashboard stays up-to-date with the latest available readings, whether from live API sources or simulated data."
          },

          {
            question: "WHAT IS AQICN, AND HOW TRUSTWORTHY IS IT?",
            answer: "The AQICN (World Air Quality Index Project) is a globally recognized platform that aggregates data from over 100 countries. It pulls readings from government and verified monitoring stations, making it a reliable source for real-time air quality data."
          },

          {
            question: "WHAT DOES THE AIR QUALITY INDEX (AQI) REPRESENT?",
            answer: "The AQI is a single number that reflects the overall air quality at a specific location. It combines multiple pollutant readings into one value to indicate how clean or polluted the air is, and what it means for public health.\n\nValues range from 0 (Good) to 300+ (Hazardous) — the higher the number, the greater the level of air pollution and the health concern."
          },

          {
            question: "HOW IS WATER QUALITY EVALUATED IF THE DATA IS SIMULATED?",
            answer: "Water data is generated using realistic environmental thresholds based on standard Water Quality Index (WQI) values. These help simulate typical readings for educational and UI testing purposes."
          },

          {
            question: "WHO IS THIS APP FOR?",
            answer: "SarawakSense is built for students, educators, families, researchers, and even specially for the local authorities. Whether you're learning about environmental data or making informed decisions, this tool is for you."
          },

          {
            question: "WHAT TECHNOLOGIES ARE USED TO BUILD SARAWAKSENSE?",
            answer: "SarawakSense is built using Django for the backend and React for the frontend. It retrieves air quality data from the AQICN API and uses simulated data for water quality. The system follows Object-Oriented Programming (OOP) principles and integrates REST APIs to manage data communication between the frontend and backend."
          },

          {
            question: "WHY IS AIR QUALITY MORE DETAILED THAN WATER IN THIS VERSION?",
            answer: "Due to limited public access to real-time water quality sources, we’ve prioritized air quality accuracy using AQICN’s live data. Water monitoring is conceptually modeled and serves as a foundation for future expansion."
          }
        ]
      },

      // Footer
      footer: {
        contactUs: "CONTACT US",
        line: "Line",
        email: "Email",
        specialThanks: "SPECIAL THANKS TO",
        credit: "and all of you!"
      }
    }
  },
  
  ms: {
    translation: {

      // Header
      home: "Laman Utama",
      about: "Tentang Kami",
      faq: "Soalan Lazim"

      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  zh: {
    translation: {

      // Header
      home: "家",
      about: "关于我们",
      faq: "常见问题"

      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  ar: {
    translation: {

      // Header
      home: "الرئيسية",
      about: "معلومات عنا",
      faq: "الأسئلة الشائعة"

      // Home


      // About Us


      // FAQ

    }
  },
  es: {
    translation: {

      // Header
      home: "Inicio",
      about: "Sobre Nosotros",
      faq: "Preguntas Frecuentes"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  fr: {
    translation: {

      // Header
      home: "Accueil",
      about: "À propos de nous",
      faq: "FAQ"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  hi: {
    translation: {

      // Header
      home: "होम",
      about: "हमारे बारे में",
      faq: "सामान्य प्रश्न"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  ja: {
    translation: {

      // Header
      home: "ホーム",
      about: "私たちについて",
      faq: "よくある質問"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  ko: {
    translation: {

      // Header
      home: "홈",
      about: "회사 소개",
      faq: "자주 묻는 질문"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  },
  th: {
    translation: {

      // Header
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      faq: "คำถามที่พบบ่อย"


      // Home


      // About Us


      // FAQ


      // Footer

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;