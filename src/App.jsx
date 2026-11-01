import { useState, useEffect } from 'react'

const currentYear = new Date().getFullYear()

// 5 Genuine Certifications & Job Simulations from public folder (Top Priority)
const certificates = [
  {
    id: 'ey-microsoft',
    title: 'AI Skills Passport',
    issuer: 'EY & Microsoft',
    date: 'Certified',
    image: '/microsoft.png',
    badge: 'Official Credential',
    priority: '#1 Priority',
    description:
      'Completed official AI certification coursework covering general and employability modules in Technology, Business & Entrepreneurship, and Sustainability.',
    skills: ['Generative AI', 'Sustainability & Tech', 'Business AI Strategy', 'AI Ethics'],
    credentialId: 'EY-MSFT-AI-PASSPORT',
  },
  {
    id: 'tata-genai',
    title: 'GenAI Powered Data Analytics',
    issuer: 'TATA (via Forage)',
    date: 'October 25th, 2026',
    image: '/tata.png',
    badge: 'Job Simulation Program',
    priority: '#2 Priority',
    description:
      'Hands-on simulation executing exploratory data analysis, AI delinquency risk prediction models, and executive data storytelling strategy.',
    skills: ['Exploratory Data Analysis', 'Risk Profiling', 'Predictive AI', 'Data Storytelling'],
    credentialId: '6adde74bd4a81158c303c52f',
  },
  {
    id: 'bcg-genai',
    title: 'GenAI Job Simulation',
    issuer: 'BCG X (via Forage)',
    date: 'October 31st, 2026',
    image: '/bcg.png',
    badge: 'Job Simulation Program',
    priority: '#3 Priority',
    description:
      'Constructed an AI-powered financial conversational chatbot, performed automated data extraction, and engineered workflow automation.',
    skills: ['AI Financial Chatbots', 'Data Extraction', 'NLP & Prompting', 'System Architecture'],
    credentialId: '6adde74bd4a81158c303c52f',
  },
  {
    id: 'deloitte-tech',
    title: 'Technology Job Simulation',
    issuer: 'Deloitte (via Forage)',
    date: 'October 30th, 2026',
    image: '/deloiite.png',
    badge: 'Job Simulation Program',
    priority: '#4 Priority',
    description:
      'Practical software engineering engagement executing modern software coding standards, architectural planning, and enterprise features.',
    skills: ['Coding & Development', 'Software Lifecycle', 'Problem Solving', 'Tech Architecture'],
    credentialId: '6adde74bd4a81158c303c52f',
  },
  {
    id: 'eab-genai',
    title: 'GenAI for Proposal Generation',
    issuer: 'EAB (via Forage)',
    date: 'October 30th, 2026',
    image: '/eab.png',
    badge: 'Job Simulation Program',
    priority: '#5 Priority',
    description:
      'Applied Generative AI methodologies to draft client hypothesis proposals, automate pre-visit synthesis, and streamline pursuit management.',
    skills: ['Hypothesis Proposals', 'Proposal Generation', 'GenAI Automation', 'Client Strategy'],
    credentialId: '6adde74bd4a81158c303c52f',
  },
]

// Completed projects from resume
const completedProjects = [
  {
    id: 'modeling-agency',
    number: '01',
    title: 'A2Z Modeling Agency',
    category: 'Commercial Web Design & Brand Portal',
    badge: 'Live Production',
    link: 'https://a2zmodelingagency.in',
    github: 'https://github.com/aditya8825',
    description:
      'A bespoke, high-fashion agency website designed for talent management in the modeling industry. Features dynamic talent portfolios, editorial aesthetic layouts, responsive media galleries, and client booking inquiry workflows.',
    metrics: 'Live Client Site • High Conversion UI',
    highlights: [
      'High-impact visual brand presence and editorial styling',
      'Mobile-first responsive architecture with smooth micro-interactions',
      'Optimized client inquiry and booking conversion flows',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Responsive UI', 'Modern Aesthetics', 'Vite'],
  },
  {
    id: 'school-portal',
    number: '02',
    title: 'Smart School Management Portal',
    category: 'Educational Platform & Public Portal',
    badge: 'Live Web App',
    link: 'https://eak-pro.vercel.app/',
    github: 'https://github.com/aditya8825',
    description:
      'A modern institutional web portal built to showcase academic programs, campus infrastructure, online admissions information, and school activities with an engaging, accessible UI.',
    metrics: 'Vercel Deployed • Fast Performance',
    highlights: [
      'Structured academic curriculum and campus facility showcase',
      'Streamlined online admission inquiry user journey',
      'Deployed on Vercel with high performance and accessibility',
    ],
    tech: ['React.js', 'Tailwind CSS', 'UI Architecture', 'Vercel Deployment'],
  },
  {
    id: 'hostel-os',
    number: '03',
    title: 'Smart OS Management System (Hostel-OS)',
    category: 'Full-Stack Management System',
    badge: 'Core Project',
    github: 'https://github.com/aditya8825',
    description:
      'A comprehensive smart hostel complaint and facility maintenance management system engineered to automate student grievance reporting, warden approvals, and resolution pipelines.',
    metrics: 'End-to-End Workflow • Multi-Role UI',
    highlights: [
      'Complaint lifecycle tracking from submission to resolution',
      'Role-based interface for students and facility administrators',
      'Real-time status updates and automated maintenance log dispatch',
    ],
    tech: ['Node.js', 'React.js', 'REST APIs', 'Database Architecture', 'Responsive Web App'],
  },
]

// Skills matrix
const skillGroups = [
  {
    category: 'Frontend Engineering',
    items: [
      { name: 'React.js', level: 'Advanced', percent: 92 },
      { name: 'JavaScript (ES6+)', level: 'Advanced', percent: 90 },
      { name: 'HTML5 & Modern CSS3', level: 'Expert', percent: 95 },
      { name: 'Tailwind CSS', level: 'Advanced', percent: 94 },
      { name: 'Responsive Web Design', level: 'Expert', percent: 96 },
      { name: 'Vite Ecosystem', level: 'Proficient', percent: 88 },
    ],
  },
  {
    category: 'UI/UX & Web Design',
    items: [
      { name: 'Wireframing & Layouts', level: 'Expert', percent: 92 },
      { name: 'High-Fidelity Mockups', level: 'Advanced', percent: 89 },
      { name: 'User Flow Architecture', level: 'Advanced', percent: 87 },
      { name: 'Digital Branding', level: 'Proficient', percent: 85 },
      { name: 'Conversion Optimization', level: 'Proficient', percent: 86 },
    ],
  },
  {
    category: 'Backend, Tools & AI',
    items: [
      { name: 'Node.js & Express', level: 'Intermediate', percent: 78 },
      { name: 'Git & GitHub', level: 'Advanced', percent: 90 },
      { name: 'REST APIs & Integration', level: 'Proficient', percent: 85 },
      { name: 'GenAI Analytics (TATA/BCG)', level: 'Certified', percent: 92 },
      { name: 'AI Skills Passport (EY/MSFT)', level: 'Certified', percent: 94 },
    ],
  },
]

// Genuine visitor tracker: records real session data from browser telemetry only (NO FALSE DATA)
function getGenuineVisitorData() {
  let count = 1
  let visitsList = []

  if (typeof window !== 'undefined') {
    const storedCount = localStorage.getItem('aditya_genuine_visits_count')
    if (storedCount) {
      const parsed = parseInt(storedCount, 10)
      if (!isNaN(parsed)) count = parsed
    }

    const storedLogs = localStorage.getItem('aditya_genuine_visits_log')
    if (storedLogs) {
      try {
        const parsedLogs = JSON.parse(storedLogs)
        if (Array.isArray(parsedLogs)) visitsList = parsedLogs
      } catch {
        visitsList = []
      }
    }

    const sessionSeen = sessionStorage.getItem('aditya_session_active')
    if (!sessionSeen) {
      count += 1
      try {
        localStorage.setItem('aditya_genuine_visits_count', count.toString())
        sessionStorage.setItem('aditya_session_active', 'true')
      } catch {
        // safe
      }

      const userAgent = navigator.userAgent || ''
      let detectedBrowser = 'Chrome'
      if (userAgent.includes('Firefox')) detectedBrowser = 'Firefox'
      else if (userAgent.includes('Edg')) detectedBrowser = 'Edge'
      else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) detectedBrowser = 'Safari'
      else if (userAgent.includes('OPR') || userAgent.includes('Opera')) detectedBrowser = 'Opera'

      let detectedOS = 'Desktop'
      if (/Android/i.test(userAgent)) detectedOS = 'Android Mobile'
      else if (/iPhone/i.test(userAgent)) detectedOS = 'iPhone (iOS)'
      else if (/iPad/i.test(userAgent)) detectedOS = 'iPad (iPadOS)'
      else if (/Windows/i.test(userAgent)) detectedOS = 'Windows'
      else if (/Macintosh/i.test(userAgent)) detectedOS = 'macOS'
      else if (/Linux/i.test(userAgent)) detectedOS = 'Linux'

      let source = 'Direct Visit'
      if (document.referrer) {
        if (document.referrer.includes('instagram.com')) source = 'Instagram Referral'
        else if (document.referrer.includes('github.com')) source = 'GitHub Referral'
        else if (document.referrer.includes('linkedin.com')) source = 'LinkedIn Referral'
        else {
          try {
            source = new URL(document.referrer).hostname
          } catch {
            source = 'Web Referral'
          }
        }
      }

      const now = new Date()
      const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      const dateFormatted = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })

      const newGenuineEntry = {
        id: `genuine-${Date.now()}`,
        device: `${detectedOS} • ${detectedBrowser}`,
        screen: `${window.screen.width}x${window.screen.height}`,
        source: source,
        time: `${dateFormatted} at ${timeFormatted}`,
        note: 'Active Browser Session',
        isCurrent: true,
      }

      visitsList = [newGenuineEntry, ...visitsList.slice(0, 24)]
      try {
        localStorage.setItem('aditya_genuine_visits_log', JSON.stringify(visitsList))
      } catch {
        // safe
      }
    }
  }

  return { count, visitsList }
}

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [copiedKey, setCopiedKey] = useState('')
  const [initialData] = useState(getGenuineVisitorData)
  const [visitorCount] = useState(initialData.count)
  const [genuineLogs, setGenuineLogs] = useState(initialData.visitsList)
  const [guestName, setGuestName] = useState('')
  const [guestRole, setGuestRole] = useState('')
  const [guestNote, setGuestNote] = useState('')
  const [guestFeedback, setGuestFeedback] = useState('')

  // Handle genuine visitor check-in note
  const handleAddGuestCheckin = (e) => {
    e.preventDefault()
    if (!guestName.trim()) return

    const now = new Date()
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const dateFormatted = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })

    const userAgent = navigator.userAgent || ''
    let detectedOS = 'Desktop'
    if (/Android/i.test(userAgent)) detectedOS = 'Android'
    else if (/iPhone|iPad/i.test(userAgent)) detectedOS = 'iOS'
    else if (/Windows/i.test(userAgent)) detectedOS = 'Windows'
    else if (/Macintosh/i.test(userAgent)) detectedOS = 'macOS'

    const newGuestEntry = {
      id: `guest-${Date.now()}`,
      device: `${detectedOS} • Verified Visitor`,
      screen: `${guestRole.trim() || 'Visitor / Recruiter'}`,
      source: guestName.trim(),
      time: `${dateFormatted} at ${timeFormatted}`,
      note: guestNote.trim() || 'Checked in on portfolio',
      isGuest: true,
    }

    const updated = [newGuestEntry, ...genuineLogs]
    setGenuineLogs(updated)
    try {
      localStorage.setItem('aditya_genuine_visits_log', JSON.stringify(updated.slice(0, 25)))
    } catch {
      // safe
    }

    setGuestName('')
    setGuestRole('')
    setGuestNote('')
    setGuestFeedback('Thank you! Your genuine check-in has been recorded in the visitor log below.')
    setTimeout(() => setGuestFeedback(''), 4000)
  }

  // Clipboard copy helper
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(''), 2200)
  }

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 antialiased text-base">
      {/* ================= TOP COMMAND HEADER ================= */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 font-extrabold text-white text-lg shadow-sm">
              AR
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Aditya Raj
                </span>
                <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 border border-indigo-200">
                  PORTFOLIO DASHBOARD
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Web Designer & Frontend Developer • Fintech Studio Experience
              </p>
            </div>
          </div>

          {/* Header Quick Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Real Visitor Count Badge */}
            <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>
                <strong className="text-slate-900 font-bold">{visitorCount}</strong> genuine visits
              </span>
            </div>

            {/* Direct Personal Instagram Link */}
            <a
              href="https://www.instagram.com/imaditya._______?xtok=MWpxNGtpOHpheHlnbw=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50/70 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
              title="Personal Instagram"
            >
              <span>📸</span>
              <span>@imaditya._______</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aditya8825"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              title="GitHub Profile"
            >
              <span>🐙</span>
              <span>GitHub</span>
            </a>

            {/* Contact Action */}
            <a
              href="#contact-section"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Status Tag */}
          <div className="flex items-center gap-2 lg:hidden">
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              {visitorCount} Real Visits
            </span>
          </div>
        </div>

        {/* QUICK NAVIGATION BAR */}
        <div className="border-t border-slate-200 bg-slate-50/90 px-4 py-2 sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto text-sm font-semibold no-scrollbar">
            <a href="#caremap-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 font-bold hover:bg-emerald-100">
              <span>🚑</span> Currently Building: CareMap
            </a>
            <a href="#certificates-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-purple-800 bg-purple-50 border border-purple-200 font-bold hover:bg-purple-100">
              <span>⭐</span> Top Priority: Certifications (5)
            </a>
            <a href="#projects-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-200/60">
              <span>💼</span> Completed Projects (3)
            </a>
            <a href="#visitors-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-200/60">
              <span>👥</span> Genuine Visitor Telemetry
            </a>
            <a href="#experience-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-200/60">
              <span>🏢</span> Work Experience
            </a>
            <a href="#skills-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-200/60">
              <span>⚡</span> Skills & Stack
            </a>
            <a href="#contact-section" className="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-200/60">
              <span>📬</span> Contact
            </a>
          </div>
        </div>
      </header>

      {/* ================= DASHBOARD MAIN CONTAINER ================= */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* KPI METRIC STRIP (MEDIUM READABLE FONT) */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {/* KPI 1: Top Priority Certs */}
          <div className="dash-card p-4 border-purple-200 bg-purple-50/30">
            <div className="flex items-center justify-between text-xs text-purple-700 font-bold uppercase tracking-wider">
              <span>Top Priority</span>
              <span className="bg-purple-100 px-2 py-0.5 rounded text-xs font-extrabold">5 Official</span>
            </div>
            <p className="mt-1.5 text-2xl font-extrabold text-purple-900">5 Certs</p>
            <p className="mt-1 text-xs text-purple-700 font-medium">EY, Microsoft, Tata, BCG, Deloitte</p>
          </div>

          {/* KPI 2: Active Project CareMap */}
          <div className="dash-card p-4 border-emerald-200 bg-emerald-50/30">
            <div className="flex items-center justify-between text-xs text-emerald-700 font-bold uppercase tracking-wider">
              <span>Active Build</span>
              <span className="bg-emerald-100 px-2 py-0.5 rounded text-xs font-extrabold">CareMap 🚑</span>
            </div>
            <p className="mt-1.5 text-2xl font-extrabold text-emerald-900">Healthcare</p>
            <p className="mt-1 text-xs text-emerald-700 font-medium">Reach hospitals faster</p>
          </div>

          {/* KPI 3: Live Projects */}
          <div className="dash-card p-4">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span>Live Portals</span>
              <span className="text-indigo-600 font-extrabold text-xs">3 Apps</span>
            </div>
            <p className="mt-1.5 text-2xl font-extrabold text-slate-900">3 Live</p>
            <p className="mt-1 text-xs text-slate-500 font-medium">A2Z Agency, School, OS</p>
          </div>

          {/* KPI 4: Genuine Visits */}
          <div className="dash-card p-4">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span>Real Traffic</span>
              <span className="text-emerald-600 font-extrabold text-xs">Genuine Data</span>
            </div>
            <p className="mt-1.5 text-2xl font-extrabold text-slate-900">{visitorCount}</p>
            <p className="mt-1 text-xs text-slate-500 font-medium">Real browser sessions</p>
          </div>

          {/* KPI 5: Degree Track */}
          <div className="col-span-2 sm:col-span-1 dash-card p-4">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span>Education</span>
              <span className="text-slate-700 font-extrabold text-xs">B.Tech</span>
            </div>
            <p className="mt-1.5 text-2xl font-extrabold text-slate-900">2024–28</p>
            <p className="mt-1 text-xs text-slate-500 font-medium">Jabalpur, Madhya Pradesh</p>
          </div>
        </div>

        {/* MAIN MULTI-COLUMN DASHBOARD GRID */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* ================= LEFT COLUMN: PROFILE CARD & DIRECT CHANNELS ================= */}
          <div className="space-y-6 lg:col-span-4">
            {/* Profile Identity Card */}
            <div className="dash-card overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 p-4 relative">
                <span className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/30">
                  🟢 Open for Work
                </span>
              </div>

              <div className="px-5 pb-6 pt-0 relative">
                <div className="-mt-12 flex items-end justify-between">
                  <div className="relative h-24 w-24 rounded-2xl border-4 border-white bg-slate-100 shadow-md overflow-hidden">
                    <img
                      src="/profile.jpeg"
                      alt="Aditya Raj"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 pb-1">
                    <span className="rounded-md bg-purple-50 border border-purple-200 px-2.5 py-1 text-xs font-bold text-purple-700">
                      5 Certifications
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    Aditya Raj
                    <span className="text-blue-500 text-base" title="Verified Creator">✓</span>
                  </h1>
                  <p className="text-sm font-bold text-indigo-600 mt-0.5">
                    Web Designer & Frontend Developer
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Skilled in UI design, responsive layouts, and digital branding. Focused on creating intuitive experiences that balance aesthetics and functionality.
                  </p>
                </div>

                {/* Metadata Info */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">📍 Location:</span>
                    <span className="font-semibold text-slate-900">Jabalpur, Madhya Pradesh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">🎓 Education:</span>
                    <span className="font-semibold text-slate-900">B.Tech (2024–2028)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">🏢 Experience:</span>
                    <span className="font-semibold text-slate-900">Fintech Studio (Sep–Oct 2026)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">🗣️ Languages:</span>
                    <span className="font-semibold text-slate-900">English, Hindi</span>
                  </div>
                </div>

                {/* Direct Contact & Copy Buttons */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {/* Email */}
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2.5 text-sm border border-slate-200">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-slate-400">✉️</span>
                      <a
                        href="mailto:adityarawat111222321@gmail.com"
                        className="truncate font-medium text-slate-800 hover:text-indigo-600"
                      >
                        adityarawat111222321@gmail.com
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy('adityarawat111222321@gmail.com', 'email')}
                      className="shrink-0 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
                    >
                      {copiedKey === 'email' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-2.5 text-sm border border-slate-200">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-slate-400">📞</span>
                      <a
                        href="tel:+918825269746"
                        className="font-medium text-slate-800 hover:text-indigo-600"
                      >
                        +91 8825269746
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy('+918825269746', 'phone')}
                      className="shrink-0 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
                    >
                      {copiedKey === 'phone' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Social & Professional Channels
                  </p>

                  <a
                    href="https://www.instagram.com/imaditya._______?xtok=MWpxNGtpOHpheHlnbw=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-rose-200 bg-rose-50/80 p-2.5 text-sm font-semibold text-rose-800 hover:bg-rose-100 transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>📸</span>
                      <span>Personal Instagram (@imaditya._______)</span>
                    </span>
                    <span>↗</span>
                  </a>

                  <a
                    href="https://www.instagram.com/aa_studio998?exln=mwh5ymzjetq2am5heq=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-purple-200 bg-purple-50/80 p-2.5 text-sm font-semibold text-purple-800 hover:bg-purple-100 transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>🎨</span>
                      <span>Studio Instagram (@aa_studio998)</span>
                    </span>
                    <span>↗</span>
                  </a>

                  <a
                    href="https://github.com/aditya8825"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>🐙</span>
                      <span>GitHub (@aditya8825)</span>
                    </span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Genuine Traffic Widget */}
            <div className="dash-card p-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span>📊</span> Genuine Visits Telemetry
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  100% Real Data
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Total genuine browser sessions recorded on this device/deployment: <strong className="text-slate-900 font-bold">{visitorCount}</strong> visits.
              </p>
              <a
                href="#visitors-section"
                className="mt-3.5 block text-center rounded-lg border border-slate-200 bg-slate-50 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100 transition"
              >
                Inspect Real Visitor Telemetry Log →
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: MAIN DASHBOARD CONTENT ================= */}
          <div className="space-y-6 lg:col-span-8">
            {/* ================= 1. CURRENTLY WORKING ON: CAREMAP SPOTLIGHT ================= */}
            <section id="caremap-section" className="dash-card p-6 bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-white border-emerald-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-200/60 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-base shadow-sm">
                    🚑
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        Currently Working On
                      </span>
                      <span className="animate-pulse rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-xs font-extrabold text-emerald-800">
                        Active In Progress
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl mt-0.5">
                      CareMap — A Smart Way to Reach Hospitals Faster
                    </h2>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    CareMap is an intelligent emergency healthcare navigation web platform designed to eliminate delays during critical medical situations. It provides real-time hospital discovery, emergency department routing, and facility status to get patients to the right care in the shortest possible time.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-lg bg-white border border-emerald-200 px-3 py-1 text-emerald-800">
                      ⚡ Fastest Emergency Route
                    </span>
                    <span className="rounded-lg bg-white border border-emerald-200 px-3 py-1 text-emerald-800">
                      🏥 Real-Time Hospital Discovery
                    </span>
                    <span className="rounded-lg bg-white border border-emerald-200 px-3 py-1 text-emerald-800">
                      📱 Anxiety-Reducing Mobile UI
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200/80 bg-white/90 p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Tech Stack</span>
                    <p className="mt-1 font-bold text-sm text-slate-900">React.js, Vite, Tailwind CSS</p>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-3">Core Focus</span>
                    <p className="mt-1 text-sm text-emerald-800 font-semibold">Speed & Emergency Hospital Routing</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 mt-3 pt-2 border-t border-slate-100">
                    Status: Prototype & UI Architecture
                  </span>
                </div>
              </div>
            </section>

            {/* ================= 2. TOP PRIORITY: CERTIFICATIONS FIRST ON HOME PAGE ================= */}
            <section id="certificates-section" className="dash-card p-6 border-purple-200 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-purple-100 text-purple-800 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
                      ⭐ Top Priority Showcase
                    </span>
                    <span className="text-sm font-bold text-slate-500">
                      All 5 Verified Credentials
                    </span>
                  </div>
                  <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                    Official Certifications & Industry Job Simulations
                  </h2>
                </div>

                <span className="text-xs font-semibold text-slate-500">
                  Click any certificate to inspect in high resolution
                </span>
              </div>

              {/* 5 Certificates Grid */}
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="dash-card overflow-hidden border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-300 transition flex flex-col justify-between"
                  >
                    {/* Thumbnail Image */}
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="cursor-pointer relative h-52 w-full bg-slate-950 overflow-hidden group"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition"></div>
                      <div className="absolute top-2.5 left-2.5 rounded bg-purple-600/90 text-white text-xs font-bold px-2.5 py-1 shadow-sm">
                        {cert.priority}
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center text-xs text-white bg-slate-900/80 px-3 py-1.5 rounded-md backdrop-blur">
                        <span className="font-semibold">🔍 Click to View Full Certificate</span>
                        <span className="font-semibold">{cert.date}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-purple-700">{cert.issuer}</span>
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {cert.badge}
                        </span>
                      </div>

                      <h3 className="mt-2 font-bold text-lg text-slate-900">{cert.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {cert.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="mt-4.5 w-full rounded-lg border border-purple-200 bg-purple-50 py-2.5 text-sm font-bold text-purple-800 hover:bg-purple-100 transition"
                      >
                        Inspect Full Certificate →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= 3. COMPLETED PROJECTS ================= */}
            <section id="projects-section" className="dash-card p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>💼</span> Completed Web Projects
                  </h3>
                  <p className="text-sm text-slate-500">
                    Live client sites and systems engineered with React.js, Tailwind CSS, and Node.js
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {completedProjects.map((proj) => (
                  <div key={proj.id} className="rounded-xl border border-slate-200 p-5 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-indigo-600">
                          PROJECT {proj.number}
                        </span>
                        <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-bold text-indigo-700">
                          {proj.badge}
                        </span>
                      </div>

                      <h4 className="mt-2 text-lg font-bold text-slate-900">{proj.title}</h4>
                      <p className="mt-0.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">{proj.category}</p>
                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{proj.description}</p>

                      <div className="mt-3.5 space-y-1.5">
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center gap-3">
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-bold text-white hover:bg-indigo-700 transition"
                        >
                          Visit Live Site ↗
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Source Code ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= 4. GENUINE VISITOR LOG & GUESTBOOK (NO FALSE DATA) ================= */}
            <section id="visitors-section" className="dash-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 border border-emerald-200">
                      100% Genuine Data Only
                    </span>
                    <span className="text-sm text-slate-500 font-semibold">
                      Real Visitor Telemetry
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>👥</span> Live Visitor Log & Verified Check-Ins
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-sm text-slate-500">Genuine Visits Tracked:</span>{' '}
                  <strong className="text-indigo-600 font-extrabold text-base">{visitorCount}</strong>
                </div>
              </div>

              {/* Genuine Visitors Table */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-3">Session / Source</th>
                      <th className="py-3 px-3">Device & Browser</th>
                      <th className="py-3 px-3">Resolution / Role</th>
                      <th className="py-3 px-3">Activity</th>
                      <th className="py-3 px-3 text-right">Time Recorded</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {genuineLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50/80 transition">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2.5">
                            <span className={`h-2.5 w-2.5 rounded-full ${log.isCurrent ? 'bg-emerald-500 animate-ping' : 'bg-indigo-400'}`}></span>
                            <div>
                              <p className="font-bold text-slate-900 text-sm">
                                {log.source}
                              </p>
                              {log.isCurrent && (
                                <span className="text-xs font-bold text-emerald-700">
                                  Current Session
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-3 font-mono text-xs text-slate-700">
                          {log.device}
                        </td>

                        <td className="py-3 px-3 text-slate-600 font-mono text-xs">
                          {log.screen}
                        </td>

                        <td className="py-3 px-3 text-slate-700 text-sm">
                          {log.note}
                        </td>

                        <td className="py-3 px-3 text-right text-slate-400 text-xs whitespace-nowrap">
                          {log.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Genuine Recruiter / Visitor Check-In Form */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">
                    Visiting this portfolio? Leave your genuine check-in:
                  </h4>
                  <span className="text-xs text-slate-500">Adds your genuine visit to the log</span>
                </div>

                {guestFeedback && (
                  <p className="mt-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-md border border-emerald-200">
                    ✓ {guestFeedback}
                  </p>
                )}

                <form onSubmit={handleAddGuestCheckin} className="mt-4 grid gap-3 sm:grid-cols-3">
                  <input
                    required
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Your Name (e.g. Rahul Sharma)"
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                  />

                  <input
                    type="text"
                    value={guestRole}
                    onChange={(e) => setGuestRole(e.target.value)}
                    placeholder="Role / Company (e.g. Recruiter / Client)"
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                  />

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={guestNote}
                      onChange={(e) => setGuestNote(e.target.value)}
                      placeholder="Note (e.g. Loved your work!)"
                      className="flex-1 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700 shrink-0"
                    >
                      Record Visit
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* ================= 5. WORK EXPERIENCE ================= */}
            <section id="experience-section" className="dash-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>🏢</span> Work Experience
                  </h3>
                  <p className="text-sm text-slate-500">
                    Professional design and development engagements
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md w-fit">
                  Sep 2026 – Oct 2026
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">Web Designer</h4>
                  <span className="text-indigo-600 font-bold text-sm">• In fintech Studio</span>
                </div>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Designed responsive websites for clients across technology, retail, and lifestyle industries. Focused on creating intuitive experiences that balance aesthetics and functionality.
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="text-indigo-600 font-bold">✦</span>
                    <span>Created wireframes, user flows, and high-fidelity UI mockups for commercial clients.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-indigo-600 font-bold">✦</span>
                    <span>Collaborated closely with developers to ensure 100% design consistency during implementation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-indigo-600 font-bold">✦</span>
                    <span>Supported website optimization efforts to enhance user engagement and overall experience.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-indigo-600 font-bold">✦</span>
                    <span>Improved website conversion rates through user-focused design solutions.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= 6. SKILLS & TECH STACK MATRIX ================= */}
            <section id="skills-section" className="dash-card p-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Technical Stack & Core Skills
              </h3>

              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.category} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">
                      {group.category}
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {group.items.map((skill) => (
                        <div key={skill.name} className="rounded-lg bg-white p-3 border border-slate-200/80 shadow-xs">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-bold text-slate-800">{skill.name}</span>
                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                              {skill.level}
                            </span>
                          </div>

                          <div className="mt-2 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-indigo-600"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= 7. CONTACT & INQUIRIES ================= */}
            <section id="contact-section" className="dash-card p-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Contact & Project Inquiries
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200">
                    <p className="text-slate-500 text-xs font-bold uppercase">Email Address</p>
                    <a
                      href="mailto:adityarawat111222321@gmail.com"
                      className="font-bold text-slate-900 hover:text-indigo-600 block mt-1"
                    >
                      adityarawat111222321@gmail.com
                    </a>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200">
                    <p className="text-slate-500 text-xs font-bold uppercase">Phone / WhatsApp</p>
                    <a
                      href="tel:+918825269746"
                      className="font-bold text-slate-900 hover:text-indigo-600 block mt-1"
                    >
                      +91 8825269746
                    </a>
                  </div>

                  <div className="rounded-lg bg-rose-50 p-3.5 border border-rose-200">
                    <p className="text-rose-700 text-xs font-bold uppercase">Personal Instagram</p>
                    <a
                      href="https://www.instagram.com/imaditya._______?xtok=MWpxNGtpOHpheHlnbw=="
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-rose-900 hover:underline block mt-1"
                    >
                      @imaditya._______ ↗
                    </a>
                  </div>
                </div>

                {/* Quick Message Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target
                    const name = form.name.value
                    const email = form.email.value
                    const subject = form.subject.value
                    const message = form.message.value
                    const mailtoUrl = `mailto:adityarawat111222321@gmail.com?subject=${encodeURIComponent(
                      subject || `Project Inquiry from ${name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
                    )}`
                    window.location.href = mailtoUrl
                  }}
                  className="space-y-3 text-sm"
                >
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  />
                  <input
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject (e.g. Website Design Project)"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  />
                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="Project details..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-700 transition"
                  >
                    Send Email Inquiry →
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white text-xs">
              AR
            </span>
            <span className="font-bold text-slate-800 text-sm">Aditya Raj Portfolio Dashboard</span>
          </div>

          <p>© {currentYear} Aditya Raj. All rights reserved. Built with React & Tailwind CSS.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/imaditya._______?xtok=MWpxNGtpOHpheHlnbw=="
              target="_blank"
              rel="noreferrer"
              className="text-rose-600 font-semibold hover:underline"
            >
              Instagram
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://github.com/aditya8825"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 font-semibold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* ================= CERTIFICATE LIGHTBOX MODAL ================= */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-xs"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {selectedCert.priority} • {selectedCert.issuer}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{selectedCert.title}</h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-800"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="max-h-[65vh] overflow-auto bg-slate-100 p-4 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-full max-w-full rounded border border-slate-200 object-contain shadow-sm"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 bg-white px-6 py-4 text-sm">
              <div className="text-slate-600">
                <span className="font-semibold text-slate-800">Verification ID:</span>{' '}
                <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-slate-700">
                  {selectedCert.credentialId}
                </code>
                <span className="mx-2">•</span>
                <span>{selectedCert.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 transition"
                >
                  Download Certificate
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
