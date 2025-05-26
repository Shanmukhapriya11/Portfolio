// pages/index.js
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef } from "react";
import {FaBrain, FaComments, FaBook, FaCogs, FaSearch, FaTools, FaCode, FaRobot, FaCloud, FaGithub,FaDatabase, FaLaptopCode, FaLanguage, FaTrophy
} from "react-icons/fa";
import { HiOutlineBriefcase, HiOutlineBadgeCheck } from "react-icons/hi";
import { BsJournalCode } from "react-icons/bs";
import ChatBotToggle from "../components/ChatBotToggle";
export default function Home() {
  const waveRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (waveRef.current) {
        waveRef.current.play();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const iconHover = {
    scale: 1.3,
    rotate: 15,
    color: "#FFD700",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <>
      <Head>
  <title>P Shanmukhapriya Sravani – AI/ML Engineer Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of P Shanmukhapriya Sravani – AI/ML Engineer, NLP Enthusiast, and problem solver. Discover projects, skills, and more." />
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</Head>


      <main className="bg-gradient-to-b from-purple-100 via-white to-purple-200 text-purple-900 px-4 sm:px-6 py-10 font-sans min-h-screen flex flex-col items-center mb-16 sm:mb-16 w-full">

        <AnimatePresence>
          
          <motion.div
            key="intro-section"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="max-w-4xl w-full"
          >
            <header className="text-center w-full px-4">
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-normal sm:tracking-wide break-words drop-shadow-lg"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    P SHANMUKHAPRIYA SRAVANI
  </motion.h1>

  <motion.p
    className="mt-3 text-base sm:text-lg md:text-xl tracking-wide font-semibold text-purple-700"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, delay: 0.6 }}
  >
    Hyderabad, India |{" "}
    <a
      href="mailto:pshanmukhapriyasravani@gmail.com"
      className="underline hover:text-purple-700 transition"
    >
      pshanmukhapriyasravani@gmail.com
    </a>
  </motion.p>

  <motion.p
    className="mt-3 text-base sm:text-lg md:text-xl tracking-wide font-semibold text-purple-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/pshanmukhapriyasravani"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-700 underline hover:text-purple-700 transition"
    >
      P Shanmukhapriya Sravani
    </a>
  </motion.p>
</header>


            <section className="relative flex flex-col items-center text-center px-6 md:w-full py-10 bg-purple-200 rounded-lg shadow-lg overflow-hidden">
              {/* Background Lottie with parallax effect */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
              >
                <lottie-player
                  src="/lottie/girl_working.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{
                    width: "110%",
                    height: "110%",
                    marginLeft: "-5%",
                    marginTop: "-5%",
                  }}
                ></lottie-player>
              </div>

              {/* Overlay for crispness */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-700 opacity-20 pointer-events-none" />

              {/* Foreground Content */}
              <motion.div
                className="relative z-10 max-w-3xl text-left"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-purple-900 tracking-wide">
                  AI/ML ENGINEER | CREATIVE NLP ENTHUSIAST | VISIONARY LEARNER
                </h2>
                <p className="mt-5 text-justify text-purple-900 font-semibold text-lg leading-relaxed tracking-wide">
                  Passionate, visionary, and fiercely focused — I’m a Computer Science graduate with a strong
                  foundation in AI/ML, driven by the desire to build ethical, real-world solutions. Whether it’s
                  developing intelligent systems for education, healthcare, or the environment, I dive deep into
                  problem-solving with intensity, empathy, and clarity.
                </p>
                <p className="mt-3 text-justify text-purple-900 font-semibold text-lg leading-relaxed tracking-wide">
                  I blend technical precision with storytelling, making my solutions functional and meaningful. As a
                  fast learner and purpose-driven engineer, I’m actively seeking roles where I can grow with
                  integrity, contribute with heart, and solve with impact.
                </p>

                {/* Skill icons with subtle hover magic */}
                <div className="mt-6 flex flex-wrap gap-5 text-purple-900 justify-center">
                  {[FaBrain, FaComments, FaBook, FaCogs, FaSearch, FaTools, FaCode, FaRobot, FaCloud, FaGithub, FaDatabase, FaLaptopCode].map(
                    (Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="text-4xl cursor-pointer "
                        whileHover={{iconHover, scale: 1.1, color: "purple-900", filter: "drop-shadow(0 0 6px purple-600)"}}
                        
                        whileTap={{ scale: 0.9 }}
                        title={Icon.name}
                      >
                        <Icon />
                      </motion.div>
                    )
                  )}
                </div>

                <div className="mt-8 flex justify-center gap-6">
                  <motion.a
                    href="/P_Shanmukhapriya_Sravani_2025_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-purple-900 text-purple-400 font-bold rounded-full shadow-lg hover:bg-purple-100 hover:shadow-xl transition-transform"
                    initial={{ boxShadow: "0 0 10px purple-400" }}
                    animate={{
                      boxShadow: [
                        "0 0 10px purple-400",
                        "0 0 20px purple-400",
                        "0 0 10px purple-400",
                      ],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    Download Resume
                  </motion.a>
                  <motion.a
                    href="mailto:pshanmukhapriyasravani@gmail.com"
                    className="px-8 py-3 border-2 border-purple-900 text-purple-900 font-semibold rounded-full hover:bg-purple-400 hover:text-purple-900 transition"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "purple-400",
                      color: "purple-100",
                    }}
                  >
                    Let's Connect
                  </motion.a>
                </div>
              </motion.div>
            </section>
            <section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2 ">
    <FaTools className="w-8 h-8" /> Technical Skills
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
    {[
      {
        title: "Programming Languages",
        icon: <FaCode className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Proficient in Python and Java for building scalable software and AI-driven solutions.",
      },
      {
        title: "ML Frameworks",
        icon: <FaRobot className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Hands-on with TensorFlow, scikit-learn, Keras, NLP workflows, and LLM-based models.",
      },
      {
        title: "Cloud Platforms",
        icon: <FaCloud className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Experience deploying and training models using Google Cloud Platform.",
      },
      {
        title: "Version Control",
        icon: <FaGithub className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Skilled in Git and GitHub for collaborative version control and project tracking.",
      },
      {
        title: "Web & UI Tools",
        icon: <FaLaptopCode className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Experienced in HTML, CSS, and Streamlit for dashboards and web-based interfaces.",
      },
      {
        title: "Design & Presentation",
        icon: <FaTools className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        description: "Adept in Canva and PowerPoint for crafting clear, visually engaging presentations.",
      },
    ].map((skill, idx) => (
      <div
        key={idx}
        className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gradient-to-b from-purple-100 via-white to-purple-200 flex flex-col items-center justify-center p-6 text-center group"
        aria-label={`${skill.title} skill card`}
      >
        <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center">
          {skill.icon}
          <p className="text-lg font-semibold text-purple-900 mt-3">{skill.title}</p>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 via-white to-purple-200 px-4">
          <p className="text-sm font-semibold text-purple-900">{skill.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2">
    <FaCogs className="w-8 h-8" /> Additional Skills
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        title: "Problem Solving",
        icon: <FaBrain className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/brain-1.gif",
        description: "I break down complex problems into logical steps and find efficient, scalable solutions.",
      },
      {
        title: "Communication & Teamwork",
        icon: <FaComments className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/communication.gif",
        description: "I actively listen, articulate ideas clearly, and collaborate effectively in diverse teams.",
      },
      {
        title: "AI/ML Passion",
        icon: <FaBook className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/ai_learning.gif",
        description: "I continually explore new AI/ML techniques and apply them in real-world projects.",
      },
      {
        title: "Process Improvement",
        icon: <FaCogs className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/process-improvement.gif",
        description: "I optimize workflows and systems to enhance efficiency and consistency.",
      },
      {
        title: "Root Cause Analysis",
        icon: <FaSearch className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/root-cause.gif",
        description: "I investigate issues deeply to identify the underlying cause, not just the symptoms.",
      },
      {
        title: "Failure Analysis",
        icon: <FaTools className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/Failure-Analysis.gif",
        description: "I analyze failures systematically to prevent future occurrences and improve resilience.",
      },
      {
        title: "Process Development",
        icon: <FaCogs className="text-purple-900 w-16 h-16 md:w-20 md:h-20" />,
        gif: "/gifs/process-development.gif",
        description: "I design and implement robust processes tailored to business and technical needs.",
      },
    ].map((skill, idx) => (
      <div
        key={idx}
        className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gradient-to-b from-purple-100 via-white to-purple-200 flex flex-col items-center justify-center p-6 text-center group"
        aria-label={`${skill.title} skill card`}
      >
        <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center">
          {skill.icon}
          <p className="text-lg font-semibold text-purple-900 mt-3">{skill.title}</p>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 via-white to-purple-200 px-4">
          <img
            src={skill.gif}
            alt={`${skill.title} animation`}
            className="w-full h-32 object-cover rounded-md mb-3"
            loading="lazy"
          />
          <p className="text-sm font-semibold text-purple-900">{skill.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="mt-16">
<h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2"><HiOutlineBriefcase className="w-8 h-8" />Professional Experience</h2>
    <div className="bg-gradient-to-br from-violet-300 to-white hover:from-violet-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-violet-900 mb-2">AI/ML Project Intern — NIT Raipur</h3>
      <p className="text-violet-900 text-lg mb-1"><strong>Duration:</strong> May 2024 – June 2024</p>
      <p className="text-violet-900 mb-2"><strong>Project:</strong> <em>SmartLoanChain</em> — a deep learning-based credit score recommender system integrated with blockchain technology.</p>

      <ul className="list-disc list-inside text-violet-900 space-y-1 text-lg">
        <li>Objective: Enhance transparency and efficiency in lending operations by eliminating reliance on traditional credit rating agencies.</li>
        <li>Designed and implemented a <strong>Transformer model</strong> to analyze financial data and predict credit scores.</li>
        <li>Achieved <strong>86.4% accuracy</strong> in credit score predictions after evaluation.</li>
        <li><strong>Technologies Used:</strong> Deep Learning, Blockchain, Python, Transformer Model.</li>
      </ul>
    </div>

</section>
<section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2"><BsJournalCode className="w-8 h-8" />Academic Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Wildlife Identification & Tracking Platform */}
    <div className="relative w-full h-64 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-b from-purple-100 via-white to-purple-200 group p-6 text-center transition-all duration-300 hover:shadow-xl">
      <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">Wildlife Identification & Tracking</h3>
        <p className="text-purple-700 font-medium text-sm">Hover for details</p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center bg-gradient-to-b from-purple-100 via-white to-purple-200 px-4 py-6 text-left">
        <p className="text-purple-900 text-sm font-semibold mb-2">
          A web platform that facilitates wildlife species identification and encourages community-driven conservation efforts.
        </p>
        <p className="text-purple-700 text-sm mb-1"><strong>Tech Stack:</strong> HTML, CSS, Java (backend), CNNs</p>
        <p className="text-purple-700 text-sm mb-2">
          <strong>Impact:</strong> Promotes biodiversity awareness and public participation in wildlife conservation.
        </p>
        <a href="https://github.com/yourusername/wildlife-identification" target="_blank" className="text-purple-600 underline text-sm font-semibold hover:text-purple-900 transition-colors">
          View on GitHub
        </a>
      </div>
    </div>

    {/* Automated Malaria Detection */}
    <div className="relative w-full h-64 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-b from-purple-100 via-white to-purple-200 group p-6 text-center transition-all duration-300 hover:shadow-xl">
      <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">Automated Malaria Detection</h3>
        <p className="text-purple-700 font-medium text-sm">Hover for details</p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center bg-gradient-to-b from-purple-100 via-white to-purple-200 px-4 py-6 text-left">
        <p className="text-purple-900 text-sm font-semibold mb-2">
          Uses CNNs to detect malaria parasites in blood smear images, enabling prompt diagnosis and treatment.
        </p>
        <p className="text-purple-700 text-sm mb-1"><strong>Tech Stack:</strong> CNNs, TensorFlow/Keras, OpenCV</p>
        <p className="text-purple-700 text-sm mb-2">
          <strong>Impact:</strong> Improves healthcare access and reduces mortality in malaria-affected regions.
        </p>
        <a href="https://github.com/yourusername/malaria-detection" target="_blank" className="text-purple-600 underline text-sm font-semibold hover:text-purple-900 transition-colors">
          View on GitHub
        </a>
      </div>
    </div>

    {/* AI-Based Career Counseling System */}
    <div className="relative w-full h-64 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-b from-purple-100 via-white to-purple-200 group p-6 text-center transition-all duration-300 hover:shadow-xl">
      <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">AI-Based Career Counseling</h3>
        <p className="text-purple-700 font-medium text-sm">Hover for details</p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center bg-gradient-to-b from-purple-100 via-white to-purple-200 px-4 py-6 text-left">
        <p className="text-purple-900 text-sm font-semibold mb-2">
          AI-driven platform offering gamified aptitude tests and ML-based career path recommendations for secondary students.
        </p>
        <p className="text-purple-700 text-sm mb-1"><strong>Tech Stack:</strong> Random Forest, Google Translate API, Chatbot (NLP)</p>
        <p className="text-purple-700 text-sm mb-2">
          <strong>Impact:</strong> Empowers students in remote areas with data-driven, multilingual career guidance.
        </p>
        <a href="https://github.com/yourusername/ai-career-counseling" target="_blank" className="text-purple-600 underline text-sm font-semibold hover:text-yellow-900 transition-colors">
          View on GitHub
        </a>
      </div>
    </div>

  </div>
</section>
<section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2"><HiOutlineBadgeCheck className="w-8 h-8" />Certifications</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* COURSERA */}
    <div className="relative group
      bg-gradient-to-br from-amber-100 to-white hover:from-amber-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300
     h-56 flex items-center justify-center text-center">
      <div className="transition-opacity duration-300 group-hover:opacity-0 leading-relaxed">
        <p className="text-amber-800 text-lg">
          <strong>COURSERA Project Network</strong><br />
          COVID-19 Data Analysis Using Python
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-100 to-white hover:from-amber-200 p-6">
        <a
          href="https://www.coursera.org/account/accomplishments/verify/TRX1718W2UH3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-1 rounded text-sm font-semibold shadow"
        >
          View Certificate
        </a>
      </div>
    </div>

    {/* INFOSYS SPRINGBOARD */}
    <div className="relative group
      bg-gradient-to-br from-rose-100 to-white hover:from-rose-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300
     h-56 flex items-center justify-center text-center">
      <div className="transition-opacity duration-300 group-hover:opacity-0 leading-relaxed">
        <p className="text-rose-800 text-lg">
          <strong>INFOSYS SPRINGBOARD</strong><br />
          Database and SQL<br />
          Java Programming
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-rose-100 to-white hover:from-rose-200 p-6">
        <a
          href="/certificates/Database_SQL.pdf"
          download
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded text-sm font-semibold shadow"
        >
          Download SQL Certificate
        </a>
        <a
          href="/certificates/Java_Fundamentals_Infosys_Springboard.pdf"
          download
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded text-sm font-semibold shadow"
        >
          Download Java Certificate
        </a>
      </div>
    </div>

    {/* GREAT LEARNING */}
    <div className="relative group
      bg-gradient-to-br from-green-100 to-white hover:from-green-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300
      h-56 flex items-center justify-center text-center">
      <div className="transition-opacity duration-300 group-hover:opacity-0 leading-relaxed">
        <p className="text-lime-800 text-lg">
          <strong>GREAT LEARNING</strong><br />
          Basics of Machine Learning<br />
          Data Visualization using Tableau<br />
          Python for Machine Learning<br />
          Python for Beginners<br />
          Front-end Development (HTML)
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-gradient-to-br from-lime-100 to-white hover:from-lime-200 p-6">
        <a href="/certificates/Basics_of_machine_learning.pdf" download className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow font-medium">
          ML Certificate
        </a>
        <a href="/certificates/Data_Visualization_Using_Tableau.pdf" download className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow font-medium">
          Tableau Certificate
        </a>
        <a href="/certificates/Python_for_machine_learning.pdf" download className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow font-medium">
          Python ML
        </a>
        <a href="/certificates/Python_fundamentals_for_beginners.pdf" download className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow font-medium">
          Python Beginners
        </a>
        <a href="/certificates/Front_end_development-HTML.pdf" download className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow font-medium">
          HTML Dev
        </a>
      </div>
    </div>

    {/* IHUB Simplilearn */}
    <div className="relative group
      bg-gradient-to-br from-sky-100 to-white hover:from-sky-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300
       h-56 flex items-center justify-center text-center">
      <div className="transition-opacity duration-300 group-hover:opacity-0 leading-relaxed">
        <p className="text-lg text-sky-800">
          <strong>IHUB DivyaSampark by IIT Roorkee via Simplilearn</strong><br />
          Professional Certificate in Generative AI & Machine Learning
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-100 to-white hover:from-sky-200 p-6 ">
        <a
          href="/certificates/IHUB-AIML Program_certificate.pdf"
          download
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-1 rounded text-sm font-semibold shadow"
        >
          View Certificate
        </a>
      </div>
    </div>

  </div>
</section>
<section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2"><FaLanguage className="w-8 h-8"/>Languages Known</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* English */}
    <div className="bg-gradient-to-br from-sky-100 to-white hover:from-sky-200 p-6 rounded-2xl shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-800 mb-2">English</h3>
      <p className="text-gray-700 mb-3 text-sm">Professional</p>
      <div className="flex justify-center text-yellow-400 text-3xl">★★★★☆</div>
    </div>

    {/* Hindi */}
    <div className="bg-gradient-to-br from-rose-100 to-white hover:from-rose-200 p-6 rounded-2xl shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-rose-800 mb-2">Hindi</h3>
      <p className="text-gray-700 mb-3 text-sm">Professional</p>
      <div className="flex justify-center text-yellow-400 text-3xl">★★★★☆</div>
    </div>

    {/* Telugu */}
    <div className="bg-gradient-to-br from-amber-100 to-white hover:from-amber-200 p-6 rounded-2xl shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-amber-800 mb-2">Telugu</h3>
      <p className="text-gray-700 mb-3 text-sm">Native</p>
      <div className="flex justify-center text-yellow-400 text-3xl">★★★★★</div>
    </div>

    {/* Korean */}
    <div className="bg-gradient-to-br from-violet-300 to-white hover:from-violet-400 p-6 rounded-2xl shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-violet-900 mb-2">Korean</h3>
      <p className="text-gray-700 mb-3 text-sm">Beginner</p>
      <div className="flex justify-center text-yellow-400 text-3xl">★★☆☆☆</div>
    </div>

    {/* Mandarin */}
    <div className="bg-gradient-to-br from-green-100 to-white hover:from-green-200 p-6 rounded-2xl shadow-md text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-lime-800 mb-2">Mandarin</h3>
      <p className="text-gray-700 mb-3 text-sm">Beginner</p>
      <div className="flex justify-center text-yellow-400 text-3xl">★★☆☆☆</div>
    </div>
  </div>
</section>

<section className="mt-16">
  <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center gap-2"><FaTrophy className="w-8 h-8"/>Achievements & Extra Curricular</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-gradient-to-br from-sky-100 to-white hover:from-sky-200 p-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-2">Hackathon Star</h3>
      <p className="text-sky-700 text-lg mb-2">
        Recognized for significant contributions in university hackathons, showcasing problem-solving and innovation.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-br from-rose-100 to-white hover:from-rose-200 p-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-rose-700 mb-2">MSME 3.0 Challenge</h3>
      <p className="text-rose-700 text-lg mb-2">
        Participated in the MSME 3.0 Women Innovators Challenge, contributing to women-led innovation in India.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-br from-amber-100 to-white hover:from-amber-200 p-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-amber-700 mb-2">Tech Hack#3</h3>
      <p className="text-amber-700 text-lg mb-2">
        Built an ML-based Air Quality Index predictor website with 85% accuracy; highly appreciated by judges.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-gradient-to-br from-violet-300 to-white hover:from-violet-400 p-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-violet-900 mb-2">Carnatic Vocalist</h3>
      <p className="text-violet-900 text-lg mb-2">
        Diploma in Carnatic Music Vocal from Potti Sri Ramulu Telugu University; aspiring to pursue a Master’s degree.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-gradient-to-br from-green-100 to-white hover:from-green-200 p-6 rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-lime-700 mb-2">Creative & Curious</h3>
      <p className="text-green-700 text-lg mb-2">
        Enjoys story-writing and passionately self-learns new spoken languages like Korean and Mandarin.
      </p>
    </div>
  </div>
</section>
<div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50">
  <ChatBotToggle />
</div>

<em><footer className="mt-16 text-center text-lg text-purple-900 border-t pt-4 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4">
  <span>&copy; {new Date().getFullYear()} P Shanmukhapriya Sravani. All rights reserved.</span>
  <span className="text-purple-900 text-lg">|</span>
  <span className="text-purple-900 text-lg">v2.3.2</span>
</footer></em>

</motion.div>
</AnimatePresence>


</main>
</>
);
}
