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
        
        paragraph2: "Our small team, known as Chill Guys, consists of dedicated students who are passionate about using technology to address real-world challenges. With SarawakSense, we aim to raise public awareness and provide accessible environmental information to communities across Sarawak.",
        
        whoWeAre: "Who We Are",
        paragraph3: "Chill Guys is a team of passionate university students working together to build SarawakSense — a real-time environmental monitoring web app. Each of us brings unique strengths to the table, combining backend logic, frontend experience, and smooth integration to create a meaningful, functional tool for the public, introducing the members:",
        
        aleef_role: " as Backend Developer 🛠",
        aleef_description: "Handles the server-side of the application using Django and manage databases, including to contributing to website design and integration.",
        
        azariena_role: " as Frontend Developer 🎨",
        azariena_description: "Specialises in and focuses on crafting a clean, responsive, and user friendly UI/UX experience.",
        
        nurzafirah_role: " as Midend Developer🔌",
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
        contactUs: "CONTACT US (pls dont)",
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
    main: "Laman Utama",
    aboutus: "Tentang Kami",
    faqtitle: "Soalan Lazim",

  // Home

  home: {
    title: "Laman Pemantauan Indeks Alam Sekitar",
    subtitle: "Status Kualiti Alam Semula Jadi Sarawak",
    availableLocations: "Lokasi Tersedia",
    availableStations: "Stesen Tersedia",
    airQualityIndex: "Panel Data Indeks Kualiti Udara",
    waterQualityIndex: "Panel Data Indeks Kualiti Air",
    aqi: "AQI",
    wqi: "WQI",
    aqiDashboard: "Papan Pemuka AQI",
    wqiDashboard: "Papan Pemuka WQI",
    time: "Masa",
    status: "Status",
    temperature: "Suhu",
    humidity: "Kelembapan",
    pressure: "Tekanan",
    locations: "Lokasi",
    stations: "Stesen",
    implication: "Implikasi",
    healthAdvice: "Nasihat Kesihatan",
    goBack: "Kembali",

    implications: {
      GOOD: "Kualiti udara sangat baik! Persekitaran bersih dan tidak membahayakan kesihatan.",
      MODERATE: "Kualiti udara boleh diterima, tetapi individu sensitif mungkin rasa sedikit ketidakselesaan.",
      RISKY: "Kumpulan sensitif mungkin alami kesan sampingan. Orang sihat mungkin rasa kerengsaan ringan.",
      UNHEALTHY: "Semua orang mungkin alami kesan, terutama di luar. Kumpulan sensitif lebih teruk.",
      TOXIC: "Kesan kesihatan serius berkemungkinan besar. Elakkan pendedahan.",
      HAZARDOUS: "Kecemasan kesihatan! Bahaya segera kepada semua orang."
    },

    advice: {
      GOOD: "Nafas lega! Udara bersih dan selamat.",
      MODERATE: "Selamat untuk kebanyakan orang. Penghidap asma disaran kurangkan aktiviti luar.",
      RISKY: "Kurangkan masa di luar. Kualiti udara semakin merosot.",
      UNHEALTHY: "Tinggal di dalam rumah. Pakai pelitup muka jika perlu.",
      TOXIC: "Elakkan semua aktiviti luar. Guna penapis udara.",
      HAZARDOUS: "Tinggal dalam rumah. Pindah jika diarahkan."
    },

    wqiImplications: {
      CLEAN: "Air sangat bersih. Selamat untuk semua kegunaan.",
      "SLIGHTLY POLLUTED": "Sedikit tercemar. Tidak sesuai untuk diminum tanpa rawatan.",
      CONTAMINATED: "Sangat tercemar. Tidak selamat untuk digunakan."
    },

    wqiAdvice: {
      CLEAN: "Selamat dan menyegarkan!",
      "SLIGHTLY POLLUTED": "Guna dengan berhati-hati. Jangan minum.",
      CONTAMINATED: "Elakkan sentuhan. Jangan guna atau minum."
    }
  },

  // About Us
  about: {
    title: "Tentang",
    sarawak: "Sarawak",
    sense: "Sense",

    paragraph1: "SarawakSense ialah aplikasi web pemantauan masa nyata yang direka untuk mengesan dan memaparkan data kualiti udara dan air dengan cara yang intuitif dan mesra pengguna. Projek ini dibangunkan sebagai sebahagian daripada tugasan kursus universiti kami dalam Pemrograman Berorientasikan Objek (OOP), menggabungkan kemahiran teknikal dan tanggungjawab sosial.",

    paragraph2: "Pasukan kecil kami, dikenali sebagai Chill Guys, terdiri daripada pelajar berdedikasi yang bersemangat menggunakan teknologi untuk menyelesaikan cabaran dunia sebenar. Dengan SarawakSense, kami ingin meningkatkan kesedaran awam dan menyediakan maklumat alam sekitar yang mudah diakses kepada komuniti seluruh Sarawak.",

    whoWeAre: "Siapa Kami",
    paragraph3: "Chill Guys ialah pasukan pelajar universiti yang berdedikasi membina SarawakSense — aplikasi pemantauan alam sekitar masa nyata. Setiap ahli membawa kepakaran unik seperti logik backend, reka bentuk frontend dan integrasi sistem, memperkenalkan ahli pasukan:",

    aleef_role: " sebagai Pembangun Backend 🛠",
    aleef_description: "Mengendalikan bahagian pelayan menggunakan Django dan mengurus pangkalan data serta menyumbang dalam reka bentuk dan integrasi laman web.",

    azariena_role: " sebagai Pembangun Frontend 🎨",
    azariena_description: "Pakar dalam membina UI/UX yang bersih, responsif dan mesra pengguna.",

    nurzafirah_role: " sebagai Pembangun Midend 🔌",
    nurzafirah_description: "Menghubungkan frontend dan backend melalui pengurusan permintaan API, sistem pengesahan dan logik aplikasi.",

    ourMission: "Misi Kami",
    missionParagraph: "Untuk menyediakan maklumat kualiti udara dan air (kini N/A) masa nyata melalui antara muka laman web yang mudah dan informatif, serta menggalakkan kesedaran alam sekitar dan tindakan bertanggungjawab.",
    ourVision: "Visi Kami",
    visionParagraph: "Untuk menyumbang kepada Sarawak yang lebih bijak dan hijau, di mana wawasan berasaskan data menyokong kehidupan lestari dan keputusan komuniti yang bijak."
  },

  // FAQ
  faq: {
    title: "Soalan Lazim",
    notWhatYoureLookingFor: "Bukan apa yang anda cari?",
    feedback: "Projek ini adalah sebahagian daripada tugasan universiti, tapi kami sangat menghargai pendapat anda! Anda boleh beri maklum balas dengan ",
    feedbackLink: "klik di sini.",

    questions: [
      {
        question: "APA ITU SARAWAKSENSE?",
        answer: "SarawakSense ialah aplikasi web yang dibangunkan oleh pelajar untuk memantau dan memaparkan data kualiti udara dan air masa nyata di seluruh Sarawak. Ia membantu meningkatkan kesedaran alam sekitar melalui paparan data yang jelas dan mudah difahami."
      },
      {
        question: "DARI MANA DATA DIPEROLEH?",
        answer: "Data kualiti udara diperoleh daripada API AQICN, yang menyediakan data pencemaran udara masa nyata dari stesen pemantauan. Data kualiti air kini disimulasikan untuk tujuan demonstrasi kerana tiada sumber awam masa nyata tersedia."
      },
      {
        question: "SEBERAPA KERAP DATA KUALITI UDARA DAN AIR DIKEMASKINI?",
        answer: "Data kualiti udara dan air dikemaskini secara automatik setiap 15 minit melalui sistem latar belakang berjadual. Ini memastikan papan pemuka sentiasa menunjukkan bacaan terkini — sama ada dari API masa nyata atau data simulasi."
      },
      {
        question: "APA ITU AQICN, DAN SEJAUH MANA IA DIPERCAYAI?",
        answer: "AQICN (World Air Quality Index Project) ialah platform yang diiktiraf di peringkat global yang mengumpulkan data dari lebih 100 negara. Ia menggunakan bacaan dari stesen pemantauan kerajaan dan disahkan, menjadikannya sumber yang boleh dipercayai untuk data kualiti udara masa nyata."
      },
      {
        question: "APA MAKSUD INDEKS KUALITI UDARA (AQI)?",
        answer: "AQI ialah satu nombor yang menunjukkan tahap kualiti udara di sesuatu lokasi. Ia menggabungkan pelbagai bacaan pencemar menjadi satu nilai bagi menunjukkan sama ada udara bersih atau tercemar, dan apa kesannya kepada kesihatan awam.\n\nNilai bermula dari 0 (Baik) hingga lebih 300 (Berbahaya) — lebih tinggi nombor, lebih tinggi tahap pencemaran dan risiko kesihatan."
      },
      {
        question: "BAGAIMANA KUALITI AIR DINILAI JIKA DATANYA DISIMULASIKAN?",
        answer: "Data air dijana menggunakan ambang nilai alam sekitar yang realistik berdasarkan standard Indeks Kualiti Air (WQI). Ini membantu mensimulasikan bacaan tipikal untuk tujuan pendidikan dan ujian UI."
      },
      {
        question: "SIAPA YANG BOLEH MENGGUNAKAN APLIKASI INI?",
        answer: "SarawakSense direka untuk pelajar, pendidik, keluarga, penyelidik, dan juga pihak berkuasa tempatan. Sama ada anda sedang belajar tentang data alam sekitar atau membuat keputusan bijak, alat ini adalah untuk anda."
      },
      {
        question: "APAKAH TEKNOLOGI YANG DIGUNAKAN UNTUK BINA SARAWAKSENSE?",
        answer: "SarawakSense dibina menggunakan Django untuk bahagian backend dan React untuk frontend. Ia mengambil data kualiti udara daripada API AQICN dan menggunakan data simulasi untuk kualiti air. Sistem ini mengikuti prinsip Pemrograman Berorientasikan Objek (OOP) dan mengintegrasikan REST API untuk komunikasi data antara frontend dan backend."
      },
      {
        question: "KENAPA KUALITI UDARA LEBIH TERPERINCI DARIPADA AIR DALAM VERSI INI?",
        answer: "Disebabkan kekangan akses data kualiti air masa nyata, kami memberi keutamaan kepada ketepatan data udara menggunakan data langsung AQICN. Pemantauan air buat masa ini adalah model konsep dan asas untuk pengembangan pada masa hadapan."
      }
    ]
  },

  // Footer
  footer: {
    contactUs: "HUBUNGI KAMI (pls jgn)",
    line: "Line",
    email: "E-mel",
        specialThanks: "UCAPAN TERIMA KASIH KHAS KEPADA",
        credit: "dan anda semua!"
      }
    }
  },

  zh: {
    translation: {

      // Header
    main: "主页",
    aboutus: "关于我们",
    faqtitle: "常见问题",

  // Home

  home: {
    title: "环境指数监测网站",
    subtitle: "砂拉越自然质量状况",
    availableLocations: "可用地点",
    availableStations: "可用站点",
    airQualityIndex: "空气质量指数数据面板",
    waterQualityIndex: "水质指数数据面板",
    aqi: "空气质量指数",
    wqi: "水质指数",
    aqiDashboard: "空气质量仪表盘",
    wqiDashboard: "水质仪表盘",
    time: "时间",
    status: "状态",
    temperature: "温度",
    humidity: "湿度",
    pressure: "气压",
    locations: "地点",
    stations: "站点",
    implication: "影响",
    healthAdvice: "健康建议",
    goBack: "返回",

    implications: {
      GOOD: "空气质量优良！环境清新，对健康无害。",
      MODERATE: "空气质量尚可，极少数敏感人群可能感到轻微不适。",
      RISKY: "敏感人群可能出现不适。健康人可能感到轻微刺激。",
      UNHEALTHY: "所有人可能受到影响，尤其在户外活动时。敏感人群反应更严重。",
      TOXIC: "所有人可能出现严重健康影响。应避免暴露。",
      HAZARDOUS: "健康紧急情况！对所有人构成直接危险。"
    },

    advice: {
      GOOD: "尽情呼吸！空气清新安全。",
      MODERATE: "大多数人安全。哮喘患者应减少户外活动。",
      RISKY: "减少户外时间。空气质量下降。",
      UNHEALTHY: "待在室内。如有需要，佩戴口罩。",
      TOXIC: "避免所有户外活动。使用空气净化器。",
      HAZARDOUS: "留在室内。如有指示，立即撤离。"
    },

    wqiImplications: {
      CLEAN: "水质优良。适用于所有用途。",
      "SLIGHTLY POLLUTED": "轻度污染。未经处理不适合饮用。",
      CONTAMINATED: "严重污染。不适合任何用途。"
    },

    wqiAdvice: {
      CLEAN: "安全且清爽！",
      "SLIGHTLY POLLUTED": "谨慎使用。不适合饮用。",
      CONTAMINATED: "避免接触。请勿使用或饮用。"
    }
  },

  // About Us
  about: {
    title: "关于",
    sarawak: "Sarawak",
    sense: "Sense",

    paragraph1: "SarawakSense 是一个实时监测的网页应用，旨在以直观、用户友好的方式跟踪和展示空气和水质数据。该项目是我们大学面向对象编程（OOP）课程的一部分，结合了技术技能和社会责任。",

    paragraph2: "我们的团队名为 Chill Guys，由一群热衷于利用技术解决现实世界问题的学生组成。通过 SarawakSense，我们希望提高公众意识，并向砂拉越各地社区提供可访问的环境信息。",

    whoWeAre: "我们是谁",
    paragraph3: "Chill Guys 是一支由热情的大学生组成的团队，共同开发了 SarawakSense —— 一个实时环境监测的网页应用。我们每个人都带来了独特的优势，结合后端逻辑、前端体验和顺畅的集成，打造了一个有意义、实用的公共工具。成员介绍：",

    aleef_role: " 作为后端开发人员 🛠",
    aleef_description: "使用 Django 处理应用的服务器端并管理数据库，同时参与网站设计和集成。",

    azariena_role: " 作为前端开发人员 🎨",
    azariena_description: "专注于打造简洁、响应式和用户友好的 UI/UX 体验。",

    nurzafirah_role: " 作为中端开发者 🔌",
    nurzafirah_description: "通过管理 API 请求、认证系统和应用逻辑，连接前端和后端。",

    ourMission: "我们的使命",
    missionParagraph: "通过一个简单而信息丰富的网页界面，提供实时的空气和水质（目前不可用）信息，鼓励环境意识和负责任的行动。",
    ourVision: "我们的愿景",
    visionParagraph: "为建设一个更智能、更绿色的砂拉越做出贡献，让数据驱动的洞察支持可持续生活和明智的社区决策。"
  },

  // FAQ
  faq: {
    title: "常见问题",
    notWhatYoureLookingFor: "不是您要找的？",
    feedback: "这个项目是大学课程的一部分，但我们很乐意听取您的意见！您可以通过 ",
    feedbackLink: "点击这里。",

    questions: [
      {
        question: "什么是 SarawakSense？",
        answer: "SarawakSense 是一个由学生开发的网页应用，旨在监测和可视化砂拉越各地的实时空气和水质。它通过清晰、易于访问的格式展示数据，帮助提高环境意识。"
      },
      {
        question: "数据来源于哪里？",
        answer: "空气质量数据来自 AQICN API，该 API 提供来自监测站的可靠、实时空气污染数据。水质数据目前是模拟的，用于演示目的，因为没有可用的实时公共数据源。"
      },
      {
        question: "空气和水质数据的更新频率是多少？",
        answer: "空气和水质数据每 15 分钟自动刷新一次，使用计划的后台进程。这确保仪表盘始终显示最新的可用读数，无论是来自实时 API 还是模拟数据。"
      },
      {
        question: "什么是 AQICN，它有多可靠？",
        answer: "AQICN（世界空气质量指数项目）是一个全球认可的平台，汇集了来自 100 多个国家的数据。它从政府和经过验证的监测站获取读数，使其成为实时空气质量数据的可靠来源。"
      },
      {
        question: "空气质量指数（AQI）代表什么？",
        answer: "AQI 是一个数字，反映特定地点的整体空气质量。它将多种污染物读数合并为一个值，以指示空气的清洁或污染程度，以及对公众健康的意义。\n\n数值范围从 0（优）到 300+（危险）——数值越高，空气污染程度和健康风险越大。"
      },
      {
        question: "如果水质数据是模拟的，如何评估水质？",
        answer: "水质数据是根据标准水质指数（WQI）值的现实环境阈值生成的。这些有助于模拟典型读数，用于教育和用户界面测试目的。"
      },
      {
        question: "这个应用适合谁？",
        answer: "SarawakSense 面向学生、教育工作者、家庭、研究人员，甚至特别是地方当局。无论您是在学习环境数据还是做出明智的决策，这个工具都适合您。"
      },
      {
        question: "构建 SarawakSense 使用了哪些技术？",
        answer: "SarawakSense 使用 Django 构建后端，React 构建前端。它从 AQICN API 获取空气质量数据，并使用模拟数据进行水质。系统遵循面向对象编程（OOP）原则，并集成了 REST API，以管理前端和后端之间的数据通信。"
      },
      {
        question: "为什么这个版本的空气质量比水质更详细？",
        answer: "由于实时水质数据的公共访问受限，我们优先使用 AQICN 的实时数据确保空气质量的准确性。水质监测目前是概念性建模，为未来的扩展奠定基础。"
      }
    ]
  },

  // Footer
  footer: {
    contactUs: "联系我们",
    line: "Line",
    email: "电子邮件",
    specialThanks: "特别感谢",
    credit: "以及所有的你们！"
    }
  }
  },

  ar: {
    translation: {

      // Header
      main: "الرئيسية",
      aboutus: "من نحن",
      faqtitle: "الأسئلة الشائعة",
    
      // Home
    
      home: {
        title: "منصة مراقبة المؤشرات البيئية",
        subtitle: "حالة جودة البيئة في ساراواك",
        availableLocations: "المواقع المتاحة",
        availableStations: "المحطات المتاحة",
        airQualityIndex: "لوحة بيانات مؤشر جودة الهواء",
        waterQualityIndex: "لوحة بيانات مؤشر جودة المياه",
        aqi: "مؤشر جودة الهواء",
        wqi: "مؤشر جودة المياه",
        aqiDashboard: "لوحة تحكم جودة الهواء",
        wqiDashboard: "لوحة تحكم جودة المياه",
        time: "الوقت",
        status: "الحالة",
        temperature: "درجة الحرارة",
        humidity: "الرطوبة",
        pressure: "الضغط",
        locations: "المواقع",
        stations: "المحطات",
        implication: "الآثار",
        healthAdvice: "نصيحة صحية",
        goBack: "رجوع",
    
        implications: {
          GOOD: "جودة الهواء ممتازة! الجو نقي وآمن للجميع.",
          MODERATE: "جودة الهواء معتدلة، وقد يشعر الأشخاص الحساسون بانزعاج طفيف.",
          RISKY: "قد يشعر الأشخاص الحساسون بأعراض واضحة. من الأفضل تقليل النشاط الخارجي.",
          UNHEALTHY: "الجميع قد يتأثر. من الأفضل تجنب البقاء في الخارج.",
          TOXIC: "خطر صحي كبير لجميع الأفراد. يُنصح بالبقاء في الداخل.",
          HAZARDOUS: "حالة طارئة! الهواء خطير للغاية ويشكل تهديدًا مباشرًا للصحة."
        },
    
        advice: {
          GOOD: "تنفس بحرية! الهواء نظيف وآمن.",
          MODERATE: "آمن لمعظم الأشخاص. على مرضى الربو توخي الحذر.",
          RISKY: "قلل من الوقت في الخارج. استخدم الكمامات إذا لزم الأمر.",
          UNHEALTHY: "ابق في الداخل. أغلق النوافذ واستخدم أجهزة تنقية الهواء.",
          TOXIC: "تجنب تمامًا الخروج. يفضل استخدام أجهزة تنقية الهواء.",
          HAZARDOUS: "ابق في مأوى مغلق. اتبع تعليمات السلامة فورًا."
        },
    
        wqiImplications: {
          CLEAN: "جودة المياه ممتازة. صالحة لجميع الاستخدامات.",
          "SLIGHTLY POLLUTED": "تلوث طفيف. غير صالحة للشرب دون معالجة.",
          CONTAMINATED: "ملوثة بشكل كبير. غير صالحة للاستخدام."
        },
    
        wqiAdvice: {
          CLEAN: "آمنة ومنعشة للاستخدام.",
          "SLIGHTLY POLLUTED": "تجنب الشرب المباشر. يمكن استخدامها بحذر.",
          CONTAMINATED: "تجنب أي ملامسة للماء. لا تستخدمها مطلقًا."
        }
      },
    
      // About Us
      about: {
        title: "حول",
        sarawak: "ساراواك",
        sense: "Sense",
    
        paragraph1: "SarawakSense هو تطبيق ويب يراقب جودة الهواء والمياه بشكل فوري، ويعرض البيانات بطريقة مرئية وسهلة الاستخدام. تم تطوير هذا المشروع كجزء من دورة برمجة كائنية التوجه (OOP) في جامعتنا، بهدف الجمع بين المعرفة التقنية والمسؤولية الاجتماعية.",
    
        paragraph2: "يتكون فريقنا، Chill Guys، من طلاب شغوفين باستخدام التكنولوجيا لحل مشاكل واقعية. من خلال SarawakSense، نهدف إلى رفع مستوى الوعي البيئي وتوفير بيانات موثوقة لمجتمعات ساراواك.",
    
        whoWeAre: "من نحن",
        paragraph3: "Chill Guys هو فريق من طلاب جامعيين متحمسين عملوا معًا لإنشاء SarawakSense — تطبيق ويب لمراقبة البيئة في الوقت الحقيقي. كل عضو في الفريق ساهم بمهاراته الخاصة لتقديم واجهة سهلة الاستخدام وذات مغزى. الأعضاء هم:",
    
        aleef_role: "كمطور الواجهة الخلفية 🛠",
        aleef_description: "مسؤول عن تنفيذ منطق الخادم باستخدام Django وإدارة قاعدة البيانات، بالإضافة إلى المساهمة في التصميم العام والتكامل.",
    
        azariena_role: "كمطور الواجهة الأمامية 🎨",
        azariena_description: "ركزت على تصميم تجربة مستخدم واضحة واستجابة وسهلة الاستخدام.",
    
        nurzafirah_role: "كمطور متوسط ​​المستوى 🔌",
        nurzafirah_description: "جسر بين الواجهة الأمامية والخلفية، يدير طلبات API ونظام المصادقة ومنطق التطبيق.",
    
        ourMission: "مهمتنا",
        missionParagraph: "تقديم بيانات فورية حول جودة الهواء والمياه (المياه حاليًا غير متوفرة) من خلال واجهة ويب بسيطة ومعلوماتية لتعزيز الوعي البيئي والسلوك المسؤول.",
        ourVision: "رؤيتنا",
        visionParagraph: "المساهمة في ساراواك أكثر ذكاءً وخضرة من خلال دعم القرارات المجتمعية المستدامة باستخدام البيانات البيئية."
      },
    
      // FAQ
      faq: {
        title: "الأسئلة الشائعة",
        notWhatYoureLookingFor: "هل لم تجد ما تبحث عنه؟",
        feedback: "هذا المشروع جزء من مقرر جامعي، لكننا نرحب بملاحظاتكم! يمكنكم التواصل معنا عبر ",
        feedbackLink: "الضغط هنا.",
    
        questions: [
          {
            question: "ما هو SarawakSense؟",
            answer: "SarawakSense هو تطبيق ويب تم تطويره من قبل طلاب لمراقبة جودة الهواء والمياه في مناطق مختلفة من ساراواك، وتقديم البيانات في واجهة سهلة الفهم لزيادة الوعي البيئي."
          },
          {
            question: "من أين يتم جلب البيانات؟",
            answer: "يتم جلب بيانات جودة الهواء من واجهة برمجة التطبيقات AQICN، وهي مصدر موثوق يقدم قراءات لحظية من محطات المراقبة. أما بيانات جودة المياه فهي حالياً محاكاة لأغراض العرض."
          },
          {
            question: "ما مدى تكرار تحديث البيانات؟",
            answer: "تُحدث بيانات جودة الهواء والمياه تلقائيًا كل 15 دقيقة باستخدام عمليات خلفية مجدولة. هذا يضمن عرض أحدث البيانات دائمًا على لوحة التحكم."
          },
          {
            question: "ما هو AQICN ومدى موثوقيته؟",
            answer: "AQICN (مؤشر جودة الهواء العالمي) هو مصدر موثوق عالميًا يجمع بيانات من أكثر من 100 دولة من محطات حكومية معتمدة، مما يجعله منصة دقيقة وموثوقة لبيانات جودة الهواء."
          },
          {
            question: "ماذا يعني مؤشر جودة الهواء (AQI)؟",
            answer: "AQI هو رقم يعكس جودة الهواء في منطقة معينة. يتم احتساب القيمة استنادًا إلى مجموعة من الملوثات وتشير إلى مدى نظافة أو تلوث الهواء وتأثيره الصحي على العامة.\n\nتتراوح القيم من 0 (جيد) إلى أكثر من 300 (خطير)، وكلما ارتفع الرقم زاد الخطر الصحي."
          },
          {
            question: "إذا كانت بيانات جودة المياه محاكاة، فكيف يتم التقييم؟",
            answer: "يتم توليد بيانات المياه بناءً على حدود بيئية معيارية ضمن مؤشر جودة المياه (WQI)، وهي تُستخدم لأغراض العرض والتجربة والتعليم فقط."
          },
          {
            question: "لمن هذا التطبيق؟",
            answer: "SarawakSense مفيد للطلاب، والمعلمين، والأسر، والباحثين، والسلطات المحلية. سواء كنت تتعلم أو تبحث عن معلومات موثوقة لاتخاذ قرارات مدروسة، فهذا التطبيق مناسب لك."
          },
          {
            question: "ما هي التقنيات المستخدمة في SarawakSense؟",
            answer: "تم بناء SarawakSense باستخدام Django في الواجهة الخلفية وReact في الواجهة الأمامية. تُستخدم واجهة AQICN للحصول على بيانات الهواء، بينما تُستخدم بيانات محاكاة لجودة المياه. يعتمد المشروع مبادئ البرمجة كائنية التوجه (OOP) وREST API."
          },
          {
            question: "لماذا جودة الهواء تبدو أكثر تفصيلًا من المياه؟",
            answer: "نظرًا لعدم توفر بيانات مياه لحظية بشكل عام، فإننا نعتمد على بيانات موثوقة من AQICN للهواء. حالياً يتم عرض جودة المياه لأغراض مفاهيمية تمهيداً للتوسع المستقبلي."
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "اتصل بنا",
        line: "Line",
        email: "البريد الإلكتروني",
        specialThanks: "شكر خاص",
        credit: "ولكل من ساهم!"
      }
    }
  },

  es: {
    translation: {

      // Header
      main: "Inicio",
      aboutus: "Sobre nosotros",
      faqtitle: "Preguntas frecuentes",
    
      // Home
    
      home: {
        title: "Plataforma de monitoreo ambiental",
        subtitle: "Estado de la calidad ambiental en Sarawak",
        availableLocations: "Ubicaciones disponibles",
        availableStations: "Estaciones disponibles",
        airQualityIndex: "Panel del Índice de Calidad del Aire",
        waterQualityIndex: "Panel del Índice de Calidad del Agua",
        aqi: "ICA",
        wqi: "ICM",
        aqiDashboard: "Panel del Aire",
        wqiDashboard: "Panel del Agua",
        time: "Hora",
        status: "Estado",
        temperature: "Temperatura",
        humidity: "Humedad",
        pressure: "Presión",
        locations: "Ubicaciones",
        stations: "Estaciones",
        implication: "Implicación",
        healthAdvice: "Consejo de salud",
        goBack: "Regresar",
    
        implications: {
          GOOD: "¡Excelente calidad del aire! Seguro y limpio para todos.",
          MODERATE: "Calidad del aire moderada. Las personas sensibles pueden notar molestias leves.",
          RISKY: "Las personas sensibles podrían experimentar síntomas evidentes. Limite las actividades al aire libre.",
          UNHEALTHY: "Riesgo para todos. Se recomienda permanecer en interiores.",
          TOXIC: "Grave amenaza para la salud. Evite la exposición completamente.",
          HAZARDOUS: "¡Emergencia! El aire es extremadamente peligroso."
        },
    
        advice: {
          GOOD: "¡Respira tranquilo! El aire es seguro.",
          MODERATE: "Generalmente seguro. Precaución para personas con asma.",
          RISKY: "Reduzca el tiempo al aire libre. Use mascarilla si es necesario.",
          UNHEALTHY: "Permanezca en interiores con ventanas cerradas.",
          TOXIC: "Evite completamente salir. Use purificadores de aire.",
          HAZARDOUS: "Refúgiese inmediatamente. Siga instrucciones de seguridad."
        },
    
        wqiImplications: {
          CLEAN: "El agua está limpia. Apta para todos los usos.",
          "SLIGHTLY POLLUTED": "Ligeramente contaminada. No beber sin tratamiento.",
          CONTAMINATED: "Altamente contaminada. No apta para ningún uso."
        },
    
        wqiAdvice: {
          CLEAN: "Segura para consumo y actividades.",
          "SLIGHTLY POLLUTED": "Evite beber directamente. Uso limitado.",
          CONTAMINATED: "Evite cualquier contacto. No usar en absoluto."
        }
      },
    
      // About Us
      about: {
        title: "Sobre",
        sarawak: "Sarawak",
        sense: "Sense",
    
        paragraph1: "SarawakSense es una aplicación web que monitorea en tiempo real la calidad del aire y del agua, presentando datos en una interfaz clara y visual. Este proyecto fue desarrollado como parte del curso de Programación Orientada a Objetos (POO) en nuestra universidad, con el objetivo de unir tecnología y responsabilidad social.",
    
        paragraph2: "Nuestro equipo, Chill Guys, está compuesto por estudiantes apasionados por usar la tecnología para resolver problemas reales. Con SarawakSense, buscamos aumentar la conciencia ambiental y proporcionar datos confiables a las comunidades de Sarawak.",
    
        whoWeAre: "Quiénes somos",
        paragraph3: "Chill Guys es un equipo de estudiantes universitarios entusiastas que colaboraron para crear SarawakSense: una aplicación web de monitoreo ambiental en tiempo real. Cada miembro aportó habilidades únicas para crear una experiencia amigable y significativa. Los miembros son:",
    
        aleef_role: " como Desarrolladora Backend 🛠",
        aleef_description: "Encargado de la lógica del servidor con Django, gestión de base de datos, y coordinación del diseño general e integración.",
    
        azariena_role: " como Desarrolladora Frontend 🎨",
        azariena_description: "Enfocada en diseñar una experiencia de usuario clara, receptiva y accesible.",
    
        nurzafirah_role: " como Desarrolladora Midend 🔌",
        nurzafirah_description: "Conectó el frontend y el backend, manejando las solicitudes API, autenticación y lógica de la aplicación.",
    
        ourMission: "Nuestra misión",
        missionParagraph: "Proporcionar datos en tiempo real sobre la calidad del aire y del agua (el agua aún no disponible) a través de una interfaz web simple e informativa, fomentando la conciencia y responsabilidad ambiental.",
        ourVision: "Nuestra visión",
        visionParagraph: "Contribuir a una Sarawak más inteligente y sostenible, apoyando decisiones comunitarias con datos ambientales precisos."
      },
    
      // FAQ
      faq: {
        title: "Preguntas frecuentes",
        notWhatYoureLookingFor: "¿No encontraste lo que buscas?",
        feedback: "Este proyecto forma parte de un curso universitario, ¡pero agradecemos tus comentarios! Puedes contactarnos ",
        feedbackLink: "haciendo clic aquí.",
    
        questions: [
          {
            question: "¿Qué es SarawakSense?",
            answer: "SarawakSense es una aplicación web creada por estudiantes para monitorear la calidad del aire y del agua en diferentes áreas de Sarawak. Presenta los datos en una interfaz fácil de entender para promover la conciencia ambiental."
          },
          {
            question: "¿De dónde provienen los datos?",
            answer: "Los datos de calidad del aire provienen de la API de AQICN, una fuente confiable con lecturas en tiempo real. Los datos de calidad del agua están actualmente simulados para fines de demostración."
          },
          {
            question: "¿Con qué frecuencia se actualizan los datos?",
            answer: "Los datos del aire y del agua se actualizan automáticamente cada 15 minutos mediante tareas programadas en segundo plano, garantizando información actualizada."
          },
          {
            question: "¿Qué es AQICN y cuán confiable es?",
            answer: "AQICN (Índice Mundial de Calidad del Aire) es una fuente global confiable que recopila datos de más de 100 países desde estaciones oficiales, siendo precisa y respetada en todo el mundo."
          },
          {
            question: "¿Qué significa el Índice de Calidad del Aire (ICA)?",
            answer: "El ICA es un número que indica cuán limpio o contaminado está el aire y los posibles efectos sobre la salud. Va de 0 (bueno) a más de 300 (peligroso); cuanto más alto el número, mayor el riesgo."
          },
          {
            question: "Si los datos del agua están simulados, ¿cómo se evalúan?",
            answer: "Los datos se generan utilizando rangos estándar del Índice de Calidad del Agua (ICM) con fines de demostración educativa solamente."
          },
          {
            question: "¿A quién está dirigido esta aplicación?",
            answer: "SarawakSense es útil para estudiantes, educadores, familias, investigadores y autoridades locales. Ya sea para aprender o tomar decisiones informadas, esta aplicación es para ti."
          },
          {
            question: "¿Qué tecnologías se usaron en SarawakSense?",
            answer: "SarawakSense está construido con Django para el backend y React para el frontend. Usa la API de AQICN para datos del aire y simulaciones para el agua. Sigue principios de POO y API REST."
          },
          {
            question: "¿Por qué la calidad del aire se ve más detallada que la del agua?",
            answer: "Debido a la falta de disponibilidad de datos en tiempo real del agua, actualmente se prioriza la calidad del aire con datos reales de AQICN. La calidad del agua se presenta de forma conceptual."
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "Contáctanos",
        line: "Line",
        email: "Correo electrónico",
        specialThanks: "Agradecimientos especiales",
        credit: "¡Y a todos los que ayudaron!"
      }
    }
  },

  fr: {
    translation: {

      // Header
      main: "Accueil",
      aboutus: "À propos de nous",
      faqtitle: "FAQ",
    
      // Home
    
      home: {
        title: "Plateforme de surveillance environnementale",
        subtitle: "État de la qualité environnementale au Sarawak",
        availableLocations: "Lieux disponibles",
        availableStations: "Stations disponibles",
        airQualityIndex: "Tableau de l’indice de qualité de l’air",
        waterQualityIndex: "Tableau de l’indice de qualité de l’eau",
        aqi: "IQA",
        wqi: "IQE",
        aqiDashboard: "Tableau de l'air",
        wqiDashboard: "Tableau de l'eau",
        time: "Heure",
        status: "Statut",
        temperature: "Température",
        humidity: "Humidité",
        pressure: "Pression",
        locations: "Lieux",
        stations: "Stations",
        implication: "Conséquence",
        healthAdvice: "Conseil de santé",
        goBack: "Retour",
    
        implications: {
          GOOD: "Excellente qualité de l’air ! Sûre et propre pour tous.",
          MODERATE: "Qualité de l’air modérée. Les personnes sensibles peuvent ressentir de légers inconforts.",
          RISKY: "Les personnes sensibles peuvent présenter des symptômes visibles. Limitez les activités extérieures.",
          UNHEALTHY: "Dangereux pour tous. Restez à l'intérieur recommandé.",
          TOXIC: "Grave menace pour la santé. Évitez toute exposition.",
          HAZARDOUS: "Urgence ! L'air est extrêmement dangereux."
        },
    
        advice: {
          GOOD: "Respirez librement ! L'air est sûr.",
          MODERATE: "Généralement sûr. Prudence pour les personnes asthmatiques.",
          RISKY: "Réduisez les activités extérieures. Portez un masque si nécessaire.",
          UNHEALTHY: "Restez à l'intérieur avec les fenêtres fermées.",
          TOXIC: "Ne sortez pas. Utilisez des purificateurs d'air.",
          HAZARDOUS: "Cherchez un abri immédiatement. Suivez les consignes de sécurité."
        },
    
        wqiImplications: {
          CLEAN: "L’eau est propre. Adaptée à tous les usages.",
          "SLIGHTLY POLLUTED": "Légèrement polluée. Ne pas boire sans traitement.",
          CONTAMINATED: "Fortement contaminée. Inadaptée à toute utilisation."
        },
    
        wqiAdvice: {
          CLEAN: "Sûre pour la consommation et les activités.",
          "SLIGHTLY POLLUTED": "Évitez de boire directement. Utilisation limitée.",
          CONTAMINATED: "Évitez tout contact. À ne pas utiliser."
        }
      },
    
      // About Us
      about: {
        title: "À propos",
        sarawak: "Sarawak",
        sense: "Sense",
    
        paragraph1: "SarawakSense est une application web qui surveille en temps réel la qualité de l’air et de l’eau, en affichant les données dans une interface claire et visuelle. Ce projet a été développé dans le cadre du cours de Programmation Orientée Objet (POO) à notre université, afin de combiner technologie et responsabilité sociale.",
    
        paragraph2: "Notre équipe, Chill Guys, est composée d'étudiants passionnés par l’utilisation de la technologie pour résoudre des problèmes réels. Avec SarawakSense, nous visons à accroître la sensibilisation environnementale et à fournir des données fiables aux communautés de Sarawak.",
    
        whoWeAre: "Qui sommes-nous",
        paragraph3: "Chill Guys est une équipe d’étudiants universitaires enthousiastes qui ont collaboré pour créer SarawakSense : une application web de surveillance environnementale en temps réel. Chaque membre a apporté des compétences uniques pour offrir une expérience conviviale et utile. Les membres sont :",
    
        aleef_role: " Développeur Backend 🛠",
        aleef_description: "Responsable de la logique serveur avec Django, de la gestion de la base de données, de la coordination de la conception et de l’intégration globale.",
    
        azariena_role: " Développeuse Frontend 🎨",
        azariena_description: "Concentrée sur la conception d'une interface utilisateur claire, réactive et accessible.",
    
        nurzafirah_role: " Développeuse Intermédiaire 🔌",
        nurzafirah_description: "A intégré le frontend et le backend, en gérant les appels API, l’authentification et la logique applicative.",
    
        ourMission: "Notre mission",
        missionParagraph: "Fournir des données en temps réel sur la qualité de l’air et de l’eau (eau en cours) à travers une interface web simple et informative, afin de promouvoir la conscience environnementale.",
        ourVision: "Notre vision",
        visionParagraph: "Contribuer à un Sarawak plus intelligent et durable, en soutenant les décisions communautaires grâce à des données environnementales précises."
      },
    
      // FAQ
      faq: {
        title: "Foire aux questions",
        notWhatYoureLookingFor: "Pas ce que vous cherchez ?",
        feedback: "Ce projet fait partie d'un cours universitaire, mais nous apprécions vos retours ! Vous pouvez nous contacter ",
        feedbackLink: "en cliquant ici.",
    
        questions: [
          {
            question: "Qu’est-ce que SarawakSense ?",
            answer: "SarawakSense est une application web développée par des étudiants pour surveiller la qualité de l’air et de l’eau dans différentes zones du Sarawak. Elle affiche les données dans une interface conviviale pour sensibiliser à l’environnement."
          },
          {
            question: "D’où proviennent les données ?",
            answer: "Les données sur la qualité de l’air proviennent de l’API AQICN, une source fiable offrant des lectures en temps réel. Les données sur l’eau sont actuellement simulées à des fins de démonstration."
          },
          {
            question: "À quelle fréquence les données sont-elles mises à jour ?",
            answer: "Les données sur l’air et l’eau sont mises à jour automatiquement toutes les 15 minutes à l’aide de tâches planifiées en arrière-plan, garantissant des informations récentes."
          },
          {
            question: "Qu’est-ce que l’AQICN et est-il fiable ?",
            answer: "AQICN (Indice mondial de la qualité de l’air) est une source mondiale respectée recueillant des données provenant de plus de 100 pays à partir de stations officielles. Elle est largement considérée comme précise et fiable."
          },
          {
            question: "Que signifie l’Indice de Qualité de l’Air (IQA) ?",
            answer: "L’IQA est un chiffre indiquant la propreté ou la pollution de l’air, et ses effets potentiels sur la santé. Il va de 0 (bon) à plus de 300 (dangereux) ; plus le chiffre est élevé, plus le risque est grand."
          },
          {
            question: "Si les données sur l’eau sont simulées, comment sont-elles évaluées ?",
            answer: "Les données sont générées selon les plages standard de l’indice de qualité de l’eau (IQE), à des fins purement éducatives et démonstratives."
          },
          {
            question: "À qui s’adresse cette application ?",
            answer: "SarawakSense est utile aux étudiants, enseignants, familles, chercheurs et autorités locales. Que ce soit pour l’apprentissage ou pour prendre des décisions, cette application est faite pour vous."
          },
          {
            question: "Quelles technologies ont été utilisées dans SarawakSense ?",
            answer: "SarawakSense est construit avec Django pour le backend et React pour le frontend. Il utilise l’API AQICN pour les données de l’air et des simulations pour l’eau. Il suit les principes de la POO et des API REST."
          },
          {
            question: "Pourquoi la qualité de l’air semble-t-elle plus détaillée que celle de l’eau ?",
            answer: "En raison du manque de données en temps réel sur l’eau, la priorité a été donnée à la qualité de l’air, alimentée par des données réelles. L’eau est présentée de manière conceptuelle."
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "Contactez-nous",
        line: "Line",
        email: "E-mail",
        specialThanks: "Remerciements spéciaux",
        credit: "Et à tous ceux qui nous ont aidés !"
      }
    }    
  },

  hi: {
    translation: {

      // Header
      main: "मुख्य पृष्ठ",
      aboutus: "हमारे बारे में",
      faqtitle: "सामान्य प्रश्न",
    
      // Home
      home: {
        title: "पर्यावरण निगरानी मंच",
        subtitle: "सरवाक में पर्यावरण गुणवत्ता की स्थिति",
        availableLocations: "उपलब्ध स्थान",
        availableStations: "उपलब्ध स्टेशन",
        airQualityIndex: "वायु गुणवत्ता सूचकांक डैशबोर्ड",
        waterQualityIndex: "जल गुणवत्ता सूचकांक डैशबोर्ड",
        aqi: "AQI",
        wqi: "WQI",
        aqiDashboard: "वायु डैशबोर्ड",
        wqiDashboard: "जल डैशबोर्ड",
        time: "समय",
        status: "स्थिति",
        temperature: "तापमान",
        humidity: "नमी",
        pressure: "दबाव",
        locations: "स्थान",
        stations: "स्टेशन",
        implication: "प्रभाव",
        healthAdvice: "स्वास्थ्य सलाह",
        goBack: "वापस जाएं",
    
        implications: {
          GOOD: "वायु की गुणवत्ता बहुत अच्छी है! सभी के लिए सुरक्षित और स्वच्छ।",
          MODERATE: "मध्यम वायु गुणवत्ता। संवेदनशील व्यक्तियों को हल्का असुविधा हो सकती है।",
          RISKY: "संवेदनशील लोगों को लक्षण हो सकते हैं। बाहरी गतिविधियों को सीमित करें।",
          UNHEALTHY: "सभी के लिए अस्वस्थकर। घर के अंदर रहना बेहतर है।",
          TOXIC: "गंभीर स्वास्थ्य खतरा। एक्सपोज़र से बचें।",
          HAZARDOUS: "आपातकाल! वायु अत्यंत खतरनाक है।"
        },
    
        advice: {
          GOOD: "बेझिझक सांस लें! हवा सुरक्षित है।",
          MODERATE: "आम तौर पर सुरक्षित। अस्थमा पीड़ितों को सावधानी बरतनी चाहिए।",
          RISKY: "बाहरी गतिविधियाँ कम करें। ज़रूरत हो तो मास्क पहनें।",
          UNHEALTHY: "घर के अंदर रहें और खिड़कियाँ बंद रखें।",
          TOXIC: "बाहर न जाएं। एयर प्यूरीफायर का उपयोग करें।",
          HAZARDOUS: "तुरंत सुरक्षित स्थान की तलाश करें। सुरक्षा निर्देशों का पालन करें।"
        },
    
        wqiImplications: {
          CLEAN: "पानी स्वच्छ है। सभी उपयोगों के लिए उपयुक्त।",
          "SLIGHTLY POLLUTED": "थोड़ा प्रदूषित। बिना शुद्धिकरण के न पिएं।",
          CONTAMINATED: "गंभीर रूप से प्रदूषित। किसी भी उपयोग के लिए अनुपयुक्त।"
        },
    
        wqiAdvice: {
          CLEAN: "पीने और गतिविधियों के लिए सुरक्षित।",
          "SLIGHTLY POLLUTED": "सीधे न पिएं। सीमित उपयोग करें।",
          CONTAMINATED: "संपर्क से बचें। उपयोग न करें।"
        }
      },
    
      // About Us
      about: {
        title: "हमारे बारे में",
        sarawak: "सरवाक",
        sense: "सेंस",
    
        paragraph1: "SarawakSense एक वेब एप्लिकेशन है जो वायु और जल की गुणवत्ता की रीयल-टाइम निगरानी करता है, और इसे एक साफ, दृश्य इंटरफ़ेस में प्रदर्शित करता है। यह परियोजना हमारी यूनिवर्सिटी के ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP) कोर्स के तहत विकसित की गई है ताकि तकनीक और सामाजिक जिम्मेदारी को जोड़ा जा सके।",
    
        paragraph2: "हमारी टीम Chill Guys, तकनीक का उपयोग करके वास्तविक समस्याओं को हल करने के लिए उत्साही छात्रों से बनी है। SarawakSense के माध्यम से हम पर्यावरणीय जागरूकता बढ़ाने और सरवाक के समुदायों को विश्वसनीय डेटा प्रदान करने का लक्ष्य रखते हैं।",
    
        whoWeAre: "हम कौन हैं",
        paragraph3: "Chill Guys कुछ यूनिवर्सिटी छात्रों की एक टीम है जिन्होंने मिलकर SarawakSense को बनाया — एक रीयल-टाइम पर्यावरण निगरानी वेब ऐप। हर सदस्य ने उपयोगकर्ता के अनुकूल और उपयोगी अनुभव देने में अपनी अनूठी क्षमताओं का योगदान दिया। सदस्य हैं:",
    
        aleef_role: "बैकएंड डेवलपर 🛠",
        aleef_description: "Django का उपयोग करके सर्वर-तर्क, डेटाबेस हैंडलिंग और संपूर्ण समन्वयन के लिए ज़िम्मेदार।",
    
        azariena_role: "फ्रंटएंड डेवलपर 🎨",
        azariena_description: "एक स्पष्ट, प्रतिक्रियाशील और सुलभ UI डिज़ाइन पर केंद्रित।",
    
        nurzafirah_role: "मिड-एंड डेवलपर 🔌",
        nurzafirah_description: "फ्रंटएंड और बैकएंड को एकीकृत किया, API कॉल्स, प्रमाणीकरण और ऐप लॉजिक संभाला।",
    
        ourMission: "हमारा उद्देश्य",
        missionParagraph: "सरल और जानकारीपूर्ण वेब इंटरफेस के माध्यम से वायु और जल गुणवत्ता (जल आंशिक रूप से) का रीयल-टाइम डेटा प्रदान करना, ताकि पर्यावरणीय चेतना को बढ़ाया जा सके।",
        ourVision: "हमारी दृष्टि",
        visionParagraph: "एक स्मार्ट और स्थायी सरवाक की दिशा में योगदान देना, समुदाय को सटीक पर्यावरण डेटा से सशक्त बनाना।"
      },
    
      // FAQ
      faq: {
        title: "अक्सर पूछे जाने वाले प्रश्न",
        notWhatYoureLookingFor: "जो आप ढूंढ रहे हैं वो नहीं मिला?",
        feedback: "यह एक यूनिवर्सिटी प्रोजेक्ट है, लेकिन हम आपकी प्रतिक्रिया की सराहना करते हैं! आप हमसे संपर्क कर सकते हैं ",
        feedbackLink: "यहाँ क्लिक करके।",
    
        questions: [
          {
            question: "SarawakSense क्या है?",
            answer: "SarawakSense एक वेब ऐप है जिसे छात्रों ने सरवाक के विभिन्न क्षेत्रों में वायु और जल गुणवत्ता की निगरानी के लिए विकसित किया है। इसका उद्देश्य एक उपयोगकर्ता-अनुकूल इंटरफ़ेस के माध्यम से पर्यावरणीय जागरूकता फैलाना है।"
          },
          {
            question: "डेटा कहाँ से आता है?",
            answer: "वायु गुणवत्ता डेटा AQICN API से आता है, जो रीयल-टाइम रीडिंग्स के लिए एक विश्वसनीय स्रोत है। जल डेटा इस समय प्रदर्शन उद्देश्यों के लिए नकली (simulated) है।"
          },
          {
            question: "डेटा कितनी बार अपडेट होता है?",
            answer: "वायु और जल डेटा दोनों हर 15 मिनट में स्वतः अपडेट होते हैं, जिससे यह सुनिश्चित होता है कि उपयोगकर्ता को हाल की जानकारी मिले।"
          },
          {
            question: "AQICN क्या है और क्या यह विश्वसनीय है?",
            answer: "AQICN (वायु गुणवत्ता सूचकांक नेटवर्क) एक प्रसिद्ध वैश्विक स्रोत है जो 100+ देशों से आधिकारिक स्टेशनों के माध्यम से डेटा इकट्ठा करता है। यह काफी विश्वसनीय और सटीक माना जाता है।"
          },
          {
            question: "AQI का क्या अर्थ है?",
            answer: "AQI एक संख्या है जो बताती है कि वायु कितनी स्वच्छ या प्रदूषित है, और इसका स्वास्थ्य पर क्या प्रभाव हो सकता है। यह 0 (अच्छा) से 300+ (खतरनाक) तक जाता है।"
          },
          {
            question: "अगर जल डेटा नकली है तो मूल्यांकन कैसे किया गया?",
            answer: "जल डेटा WQI के मानक रेंज के अनुसार जनरेट किया गया है, केवल शैक्षणिक और प्रदर्शन उद्देश्यों के लिए।"
          },
          {
            question: "यह ऐप किनके लिए है?",
            answer: "SarawakSense छात्रों, शिक्षकों, परिवारों, शोधकर्ताओं और स्थानीय अधिकारियों के लिए उपयोगी है। चाहे आप सीखना चाहते हों या निर्णय लेना, यह ऐप आपके लिए है।"
          },
          {
            question: "SarawakSense में कौन-कौन सी तकनीकें उपयोग की गई हैं?",
            answer: "SarawakSense Django बैकएंड और React फ्रंटएंड से बना है। यह AQICN API से वायु डेटा प्राप्त करता है और जल के लिए सिमुलेशन का उपयोग करता है। यह OOP और RESTful API के सिद्धांतों को लागू करता है।"
          },
          {
            question: "वायु की तुलना में जल डेटा कम क्यों दिखता है?",
            answer: "चूंकि जल पर रीयल-टाइम डेटा नहीं था, इसलिए प्राथमिकता वायु गुणवत्ता पर दी गई, जो कि रीयल डेटा से संचालित होती है। जल डेटा वैचारिक रूप से दर्शाया गया है।"
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "संपर्क करें",
        line: "लाइन",
        email: "ईमेल",
        specialThanks: "विशेष धन्यवाद",
        credit: "और उन सभी को धन्यवाद जिन्होंने हमारी मदद की!"
      }
    }    
  },

  ja: {
    translation: {

      // Header
      main: "ホーム",
      aboutus: "私たちについて",
      faqtitle: "よくある質問",
    
      // Home
      home: {
        title: "環境モニタリングプラットフォーム",
        subtitle: "サラワクの環境品質状況",
        availableLocations: "利用可能な場所",
        availableStations: "利用可能なステーション",
        airQualityIndex: "大気質インデックスダッシュボード",
        waterQualityIndex: "水質インデックスダッシュボード",
        aqi: "AQI",
        wqi: "WQI",
        aqiDashboard: "空気ダッシュボード",
        wqiDashboard: "水ダッシュボード",
        time: "時間",
        status: "状態",
        temperature: "気温",
        humidity: "湿度",
        pressure: "気圧",
        locations: "場所",
        stations: "ステーション",
        implication: "影響",
        healthAdvice: "健康へのアドバイス",
        goBack: "戻る",
    
        implications: {
          GOOD: "空気はとても良好です！誰にとっても安全で清潔です。",
          MODERATE: "中程度の空気品質。一部の敏感な人には軽度の不快感があるかもしれません。",
          RISKY: "敏感な人々に影響が出る可能性があります。屋外活動を控えましょう。",
          UNHEALTHY: "すべての人にとって不健康です。屋内に留まるのが望ましいです。",
          TOXIC: "重大な健康リスク。外出を避けましょう。",
          HAZARDOUS: "緊急事態！空気は非常に危険です。"
        },
    
        advice: {
          GOOD: "安心して深呼吸してください！空気は安全です。",
          MODERATE: "一般的に安全ですが、喘息持ちの方は注意が必要です。",
          RISKY: "屋外活動を減らしましょう。必要であればマスクを着用してください。",
          UNHEALTHY: "屋内に留まり、窓を閉めましょう。",
          TOXIC: "外出は避け、空気清浄機を使用してください。",
          HAZARDOUS: "すぐに安全な場所へ避難してください。安全指示に従ってください。"
        },
    
        wqiImplications: {
          CLEAN: "水は清潔で、あらゆる用途に適しています。",
          "SLIGHTLY POLLUTED": "わずかに汚染されています。浄水せずに飲まないでください。",
          CONTAMINATED: "高度に汚染されています。使用に適していません。"
        },
    
        wqiAdvice: {
          CLEAN: "飲用や活動に安全です。",
          "SLIGHTLY POLLUTED": "そのまま飲むのは避け、使用を制限してください。",
          CONTAMINATED: "接触を避けてください。使用は避けましょう。"
        }
      },
    
      // About Us
      about: {
        title: "私たちについて",
        sarawak: "サラワク",
        sense: "センス",
    
        paragraph1: "SarawakSenseは、空気と水の品質をリアルタイムで監視し、クリーンで視覚的なインターフェースで表示するWebアプリケーションです。このプロジェクトは、私たちの大学のオブジェクト指向プログラミング（OOP）の授業の一環として、技術と社会的責任を組み合わせるために開発されました。",
    
        paragraph2: "私たちのチーム Chill Guys は、現実の問題を解決するためにテクノロジーを活用する意欲的な学生で構成されています。SarawakSenseを通じて、環境意識を高め、サラワクのコミュニティに信頼できるデータを提供することを目指しています。",
    
        whoWeAre: "メンバー紹介",
        paragraph3: "Chill Guys は、SarawakSense というリアルタイム環境モニタリングWebアプリを構築した大学生のチームです。各メンバーは、ユーザーに役立つ体験を提供するために独自のスキルを発揮しました。メンバーは以下の通りです：",
    
        aleef_role: "バックエンド開発者 🛠",
        aleef_description: "Djangoを使用して、サーバーロジック、データベース処理、統合を担当しました。",
    
        azariena_role: "フロントエンド開発者 🎨",
        azariena_description: "クリーンでレスポンシブ、アクセシブルなUI設計に注力しました。",
    
        nurzafirah_role: "ミッドエンド開発者 🔌",
        nurzafirah_description: "フロントエンドとバックエンドの連携、API通信、認証、アプリロジックを構築しました。",
    
        ourMission: "私たちの使命",
        missionParagraph: "空気と水の品質データ（部分的に）を、シンプルかつわかりやすいWebインターフェースでリアルタイムに提供し、環境意識を促進すること。",
        ourVision: "私たちのビジョン",
        visionParagraph: "正確な環境データを通じて、スマートで持続可能なサラワクを築く手助けをすること。"
      },
    
      // FAQ
      faq: {
        title: "よくある質問",
        notWhatYoureLookingFor: "お探しの情報が見つかりませんか？",
        feedback: "これは大学のプロジェクトですが、皆さんのフィードバックを歓迎しています！ご意見は ",
        feedbackLink: "こちらからご連絡ください。",
    
        questions: [
          {
            question: "SarawakSenseとは何ですか？",
            answer: "SarawakSenseは、サラワク地域の空気と水の品質をモニターするために学生が開発したWebアプリです。使いやすいインターフェースを通じて、環境への意識を高めることを目的としています。"
          },
          {
            question: "データはどこから取得していますか？",
            answer: "空気の品質データは、リアルタイムの測定を提供する信頼できるAPIであるAQICNから取得しています。水のデータは現在はデモ目的の模擬データです。"
          },
          {
            question: "データはどれくらいの頻度で更新されますか？",
            answer: "空気および水のデータはどちらも15分ごとに自動的に更新されます。"
          },
          {
            question: "AQICNとは？信頼できますか？",
            answer: "AQICN（Air Quality Index Network）は、100か国以上の公式観測所からデータを集めており、信頼性の高いソースとされています。"
          },
          {
            question: "AQIとは何ですか？",
            answer: "AQIは空気の清浄さまたは汚染度を数値化し、健康への影響を示す指標です。スケールは0（良好）から300+（有害）まであります。"
          },
          {
            question: "水のデータが模擬なら、どうやって表示しているのですか？",
            answer: "水質データは、WQIの標準範囲に基づいたシミュレーションであり、学習とプレゼンテーションの目的でのみ使用されています。"
          },
          {
            question: "このアプリは誰のためのものですか？",
            answer: "SarawakSenseは、学生、教育者、家庭、研究者、地元当局など、誰でも利用できます。学びたい人も、判断材料が欲しい人にも役立ちます。"
          },
          {
            question: "SarawakSenseにはどんな技術が使われていますか？",
            answer: "SarawakSenseは、DjangoバックエンドとReactフロントエンドで構成されています。空気データはAQICNから取得され、水データはシミュレーションされています。OOPとRESTful APIの原則に従っています。"
          },
          {
            question: "なぜ水のデータは空気より少ないのですか？",
            answer: "リアルタイムの水データがなかったため、優先順位は空気の品質に置かれています。水データはコンセプトとして表示されています。"
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "お問い合わせ",
        line: "LINE",
        email: "メール",
        specialThanks: "特別な感謝",
        credit: "サポートしてくれたすべての方々に感謝します！"
      }
    }    
  },

  ko: {
    translation: {

      // Header
      main: "홈",
      aboutus: "소개",
      faqtitle: "자주 묻는 질문",
    
      // Home
      home: {
        title: "환경 모니터링 플랫폼",
        subtitle: "사라왁의 환경 품질 상태",
        availableLocations: "이용 가능한 지역",
        availableStations: "이용 가능한 측정소",
        airQualityIndex: "대기질 지수 대시보드",
        waterQualityIndex: "수질 지수 대시보드",
        aqi: "AQI",
        wqi: "WQI",
        aqiDashboard: "대기 대시보드",
        wqiDashboard: "수질 대시보드",
        time: "시간",
        status: "상태",
        temperature: "온도",
        humidity: "습도",
        pressure: "기압",
        locations: "지역",
        stations: "측정소",
        implication: "영향",
        healthAdvice: "건강 조언",
        goBack: "돌아가기",
    
        implications: {
          GOOD: "공기가 매우 깨끗하고 안전합니다. 모두에게 안전합니다.",
          MODERATE: "공기 품질이 보통 수준입니다. 민감한 사람들에게는 가벼운 영향을 줄 수 있습니다.",
          RISKY: "민감한 사람들에게 영향을 줄 수 있습니다. 야외 활동을 줄이세요.",
          UNHEALTHY: "모든 사람에게 건강에 해롭습니다. 실내에 머무르는 것이 좋습니다.",
          TOXIC: "심각한 건강 위험이 있습니다. 외출을 피하세요.",
          HAZARDOUS: "긴급 상황입니다! 공기가 매우 위험합니다."
        },
    
        advice: {
          GOOD: "안심하고 숨을 쉬세요! 공기가 안전합니다.",
          MODERATE: "대부분의 사람들에게는 안전하지만, 천식 환자는 주의하세요.",
          RISKY: "야외 활동을 줄이고 마스크를 착용하세요.",
          UNHEALTHY: "실내에 머무르고 창문을 닫으세요.",
          TOXIC: "외출을 피하고 공기 청정기를 사용하세요.",
          HAZARDOUS: "즉시 안전한 장소로 대피하세요. 안내에 따르세요."
        },
    
        wqiImplications: {
          CLEAN: "물이 깨끗하며 다양한 용도로 사용 가능합니다.",
          "SLIGHTLY POLLUTED": "약간 오염되어 있으며 정수하지 않고는 마시면 안 됩니다.",
          CONTAMINATED: "심각하게 오염되어 있으며 사용하기에 적합하지 않습니다."
        },
    
        wqiAdvice: {
          CLEAN: "음용 및 활동에 안전합니다.",
          "SLIGHTLY POLLUTED": "직접 마시는 것은 피하고 제한적으로 사용하세요.",
          CONTAMINATED: "접촉을 피하고 사용하지 마세요."
        }
      },
    
      // About Us
      about: {
        title: "소개",
        sarawak: "사라왁",
        sense: "센스",
    
        paragraph1: "SarawakSense는 대기 및 수질을 실시간으로 모니터링하고, 깨끗하고 시각적인 인터페이스로 정보를 제공하는 웹 애플리케이션입니다. 이 프로젝트는 대학의 객체 지향 프로그래밍(OOP) 과제의 일환으로 기술과 사회적 책임을 결합하여 개발되었습니다.",
    
        paragraph2: "우리 팀 Chill Guys는 실제 문제 해결을 위해 기술을 사용하는 열정적인 학생들로 구성되어 있습니다. SarawakSense를 통해 환경 인식을 높이고 사라왁 주민들에게 신뢰할 수 있는 데이터를 제공하는 것이 목표입니다.",
    
        whoWeAre: "우리 팀",
        paragraph3: "Chill Guys는 SarawakSense라는 실시간 환경 모니터링 웹앱을 개발한 대학생 팀입니다. 각 팀원은 사용자에게 유용한 경험을 제공하기 위해 자신의 역할을 다했습니다. 팀원은 다음과 같습니다:",
    
        aleef_role: "백엔드 개발자 🛠",
        aleef_description: "Django를 사용하여 서버 로직, 데이터베이스 처리, 통합을 담당했습니다.",
    
        azariena_role: "프론트엔드 개발자 🎨",
        azariena_description: "깔끔하고 반응형이며 접근 가능한 UI 디자인을 맡았습니다.",
    
        nurzafirah_role: "미드엔드 개발자 🔌",
        nurzafirah_description: "프론트엔드와 백엔드를 연결하고 API 통신 및 앱 로직을 구현했습니다.",
    
        ourMission: "우리의 사명",
        missionParagraph: "부분적으로 수집된 공기 및 수질 데이터를 실시간으로 단순하고 직관적인 웹 인터페이스를 통해 제공하여 환경 인식을 높이는 것입니다.",
        ourVision: "우리의 비전",
        visionParagraph: "정확한 환경 데이터를 통해 스마트하고 지속 가능한 사라왁을 구축하는 데 기여하는 것입니다."
      },
    
      // FAQ
      faq: {
        title: "자주 묻는 질문",
        notWhatYoureLookingFor: "찾으시는 내용이 없으신가요?",
        feedback: "이 프로젝트는 대학 과제이지만, 피드백을 환영합니다! 다음 링크를 통해 연락해 주세요: ",
        feedbackLink: "여기에서 연락하기",
    
        questions: [
          {
            question: "SarawakSense는 무엇인가요?",
            answer: "SarawakSense는 사라왁 지역의 대기 및 수질을 모니터링하기 위해 학생들이 개발한 웹 앱입니다. 사용하기 쉬운 인터페이스를 통해 환경 인식을 높이는 것을 목표로 합니다."
          },
          {
            question: "데이터는 어디에서 가져오나요?",
            answer: "대기질 데이터는 신뢰할 수 있는 실시간 API인 AQICN에서 가져오며, 수질 데이터는 현재 데모 목적으로 모의된 데이터입니다."
          },
          {
            question: "데이터는 얼마나 자주 업데이트되나요?",
            answer: "대기 및 수질 데이터 모두 15분마다 자동으로 갱신됩니다."
          },
          {
            question: "AQICN이란? 믿을 수 있나요?",
            answer: "AQICN(Air Quality Index Network)은 100개 이상의 국가의 공식 관측소로부터 데이터를 수집하며, 신뢰할 수 있는 출처로 간주됩니다."
          },
          {
            question: "AQI는 무엇인가요?",
            answer: "AQI는 공기의 청정도 또는 오염도를 수치로 나타내며, 건강에 미치는 영향을 평가하기 위한 지수입니다. 0(좋음)부터 300+(위험)까지의 범위가 있습니다."
          },
          {
            question: "수질 데이터가 모의 데이터라면 어떻게 표시되나요?",
            answer: "수질 데이터는 WQI 표준 범위에 따라 시뮬레이션된 값으로, 학습 및 프레젠테이션 목적으로만 사용됩니다."
          },
          {
            question: "이 앱은 누구를 위한 것인가요?",
            answer: "SarawakSense는 학생, 교육자, 가정, 연구자, 지역 당국 등 누구나 사용할 수 있으며, 학습 및 환경 결정을 지원합니다."
          },
          {
            question: "SarawakSense는 어떤 기술을 사용하나요?",
            answer: "SarawakSense는 Django 백엔드와 React 프론트엔드로 구성되어 있으며, 공기 데이터는 AQICN에서 가져오고 수질 데이터는 시뮬레이션된 것입니다. OOP 및 RESTful API 원칙에 기반하여 개발되었습니다."
          },
          {
            question: "왜 수질 데이터는 대기질보다 적은가요?",
            answer: "실시간 수질 데이터가 제한되어 있었기 때문에 대기 품질에 우선순위를 두었습니다. 수질 데이터는 개념 증명을 위한 것입니다."
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "문의하기",
        line: "라인",
        email: "이메일",
        specialThanks: "특별 감사",
        credit: "응원해주신 모든 분들께 감사합니다!"
      }
    }    
  },

  th: {
    translation: {

      // Header
      main: "หน้าแรก",
      aboutus: "เกี่ยวกับเรา",
      faqtitle: "คำถามที่พบบ่อย",
    
      // Home
      home: {
        title: "แพลตฟอร์มตรวจสอบสิ่งแวดล้อม",
        subtitle: "สถานะคุณภาพสิ่งแวดล้อมในซาราวัก",
        availableLocations: "พื้นที่ที่สามารถดูได้",
        availableStations: "สถานีที่สามารถดูได้",
        airQualityIndex: "แดชบอร์ดดัชนีคุณภาพอากาศ",
        waterQualityIndex: "แดชบอร์ดดัชนีคุณภาพน้ำ",
        aqi: "AQI",
        wqi: "WQI",
        aqiDashboard: "แดชบอร์ดอากาศ",
        wqiDashboard: "แดชบอร์ดน้ำ",
        time: "เวลา",
        status: "สถานะ",
        temperature: "อุณหภูมิ",
        humidity: "ความชื้น",
        pressure: "ความกดอากาศ",
        locations: "พื้นที่",
        stations: "สถานี",
        implication: "ผลกระทบ",
        healthAdvice: "คำแนะนำด้านสุขภาพ",
        goBack: "ย้อนกลับ",
    
        implications: {
          GOOD: "อากาศสะอาดและปลอดภัยมาก เหมาะกับทุกคน",
          MODERATE: "อากาศอยู่ในระดับปานกลาง อาจมีผลต่อผู้ที่มีความไวต่ออากาศ",
          RISKY: "อาจส่งผลต่อผู้ที่มีโรคประจำตัว ลดกิจกรรมกลางแจ้งลง",
          UNHEALTHY: "ไม่ดีต่อสุขภาพ ควรอยู่ในอาคาร",
          TOXIC: "มีความเสี่ยงต่อสุขภาพสูง หลีกเลี่ยงการออกไปข้างนอก",
          HAZARDOUS: "เป็นอันตรายร้ายแรงต่อสุขภาพ หลีกเลี่ยงทุกการสัมผัส"
        },
    
        advice: {
          GOOD: "หายใจได้เต็มปอด! อากาศปลอดภัยดี",
          MODERATE: "คนทั่วไปยังโอเค แต่อย่าลืมระวังหากเป็นโรคหืด",
          RISKY: "ลดกิจกรรมกลางแจ้ง และควรใส่หน้ากาก",
          UNHEALTHY: "อยู่ในบ้านและปิดหน้าต่างไว้",
          TOXIC: "อย่าออกจากบ้าน และใช้เครื่องฟอกอากาศถ้ามี",
          HAZARDOUS: "หาที่ปลอดภัยทันที และปฏิบัติตามคำแนะนำ"
        },
    
        wqiImplications: {
          CLEAN: "น้ำสะอาด เหมาะสมกับการใช้งานหลากหลาย",
          "SLIGHTLY POLLUTED": "น้ำมีการปนเปื้อนเล็กน้อย ไม่ควรดื่มโดยตรง",
          CONTAMINATED: "น้ำปนเปื้อนอย่างรุนแรง ไม่เหมาะกับการใช้งาน"
        },
    
        wqiAdvice: {
          CLEAN: "สามารถดื่มหรือใช้งานได้อย่างปลอดภัย",
          "SLIGHTLY POLLUTED": "ควรหลีกเลี่ยงการดื่มโดยตรง และใช้อย่างจำกัด",
          CONTAMINATED: "ไม่ควรใช้น้ำนี้เลย หลีกเลี่ยงการสัมผัส"
        }
      },
    
      // About Us
      about: {
        title: "เกี่ยวกับเรา",
        sarawak: "ซาราวัก",
        sense: "เซนส์",
    
        paragraph1: "SarawakSense เป็นเว็บแอปที่ตรวจสอบคุณภาพอากาศและน้ำแบบเรียลไทม์ พร้อมแสดงผลในรูปแบบที่เข้าใจง่ายและชัดเจน โครงการนี้เป็นส่วนหนึ่งของการเรียนวิชา OOP (Object-Oriented Programming) ในมหาวิทยาลัยที่ผสมผสานความรู้ทางเทคนิคกับความรับผิดชอบต่อสังคม",
    
        paragraph2: "ทีม Chill Guys เป็นกลุ่มนักศึกษาที่มีใจรักในการนำเทคโนโลยีมาแก้ไขปัญหาจริง เป้าหมายของเราคือการเพิ่มความตระหนักด้านสิ่งแวดล้อม และมอบข้อมูลที่เชื่อถือได้ให้แก่ชุมชนในซาราวักผ่าน SarawakSense",
    
        whoWeAre: "ทีมของเรา",
        paragraph3: "Chill Guys เป็นกลุ่มนักศึกษาที่พัฒนาเว็บแอป SarawakSense สำหรับตรวจสอบสิ่งแวดล้อมแบบเรียลไทม์ สมาชิกในทีมแต่ละคนมีบทบาทเฉพาะในการทำให้แพลตฟอร์มนี้เป็นมิตรต่อผู้ใช้ ทีมประกอบด้วย:",
    
        aleef_role: "นักพัฒนา Backend 🛠",
        aleef_description: "ดูแลการทำงานของฝั่งเซิร์ฟเวอร์ การจัดการฐานข้อมูล และการเชื่อมโยงระบบโดยใช้ Django",
    
        azariena_role: "นักพัฒนา Frontend 🎨",
        azariena_description: "ออกแบบ UI ที่สะอาด ตอบสนองได้ดี และเข้าถึงได้ง่าย",
    
        nurzafirah_role: "นักพัฒนา Mid-End 🔌",
        nurzafirah_description: "ทำหน้าที่เชื่อมระหว่าง frontend กับ backend รวมถึงการเรียกใช้ API และการทำงานของแอป",
    
        ourMission: "พันธกิจของเรา",
        missionParagraph: "แสดงข้อมูลคุณภาพอากาศและน้ำแบบเรียลไทม์ ผ่านเว็บอินเทอร์เฟซที่เข้าใจง่าย เพื่อสร้างความตระหนักด้านสิ่งแวดล้อม",
        ourVision: "วิสัยทัศน์ของเรา",
        visionParagraph: "มุ่งมั่นในการสร้างซาราวักที่ยั่งยืนและชาญฉลาด ผ่านการเข้าถึงข้อมูลสิ่งแวดล้อมที่แม่นยำ"
      },
    
      // FAQ
      faq: {
        title: "คำถามที่พบบ่อย",
        notWhatYoureLookingFor: "ไม่พบสิ่งที่คุณกำลังมองหา?",
        feedback: "แม้ว่าโครงการนี้เป็นส่วนหนึ่งของงานในมหาวิทยาลัย แต่เรายินดีรับข้อเสนอแนะ! ติดต่อเราผ่านลิงก์นี้: ",
        feedbackLink: "ติดต่อเราที่นี่",
    
        questions: [
          {
            question: "SarawakSense คืออะไร?",
            answer: "SarawakSense เป็นเว็บแอปที่นักศึกษาพัฒนาขึ้นเพื่อแสดงข้อมูลคุณภาพอากาศและน้ำในพื้นที่ซาราวัก โดยมุ่งเน้นการใช้งานที่ง่ายและการสร้างความตระหนักต่อสิ่งแวดล้อม"
          },
          {
            question: "ข้อมูลมาจากที่ไหน?",
            answer: "ข้อมูลคุณภาพอากาศมาจาก API แบบเรียลไทม์ของ AQICN ส่วนข้อมูลคุณภาพน้ำเป็นข้อมูลจำลองเพื่อแสดงตัวอย่าง"
          },
          {
            question: "ข้อมูลอัปเดตบ่อยแค่ไหน?",
            answer: "ทั้งข้อมูลอากาศและน้ำจะอัปเดตทุก ๆ 15 นาทีโดยอัตโนมัติ"
          },
          {
            question: "AQICN คืออะไร? เชื่อถือได้หรือไม่?",
            answer: "AQICN (Air Quality Index Network) เป็นเครือข่ายที่ดึงข้อมูลจากสถานีวัดทั่วโลกในกว่า 100 ประเทศ และถือว่าเชื่อถือได้"
          },
          {
            question: "AQI คืออะไร?",
            answer: "AQI คือดัชนีที่ใช้วัดคุณภาพอากาศว่าอยู่ในระดับใดต่อสุขภาพ โดยมีช่วงตั้งแต่ 0 (ดีมาก) ไปจนถึงมากกว่า 300 (อันตราย)"
          },
          {
            question: "ข้อมูลคุณภาพน้ำเป็นข้อมูลจำลอง หมายถึงอะไร?",
            answer: "ข้อมูลน้ำเป็นค่าที่สร้างขึ้นโดยอิงจากมาตรฐาน WQI เพื่อใช้ในการทดลองและการเรียนรู้"
          },
          {
            question: "ใครสามารถใช้แอปนี้ได้?",
            answer: "SarawakSense เหมาะกับทุกคน เช่น นักเรียน ครู ครอบครัว นักวิจัย หรือหน่วยงานในพื้นที่ที่ต้องการเข้าถึงข้อมูลด้านสิ่งแวดล้อม"
          },
          {
            question: "แอปนี้ใช้เทคโนโลยีอะไร?",
            answer: "SarawakSense ใช้ Django สำหรับ backend และ React สำหรับ frontend ข้อมูลอากาศมาจาก AQICN ขณะที่ข้อมูลน้ำถูกจำลองขึ้น และพัฒนาโดยใช้หลักการ OOP และ REST API"
          },
          {
            question: "ทำไมข้อมูลน้ำจึงมีน้อยกว่าข้อมูลอากาศ?",
            answer: "เนื่องจากเราไม่สามารถเข้าถึงข้อมูลน้ำแบบเรียลไทม์ได้ จึงเน้นที่คุณภาพอากาศก่อน ส่วนข้อมูลน้ำจึงใช้เพื่อแสดงแนวคิด"
          }
        ]
      },
    
      // Footer
      footer: {
        contactUs: "ติดต่อเรา",
        line: "ไลน์",
        email: "อีเมล",
        specialThanks: "ขอขอบคุณเป็นพิเศษ",
        credit: "ขอบคุณทุกคนที่สนับสนุนเรา!"
      }
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