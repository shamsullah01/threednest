'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import dynamic from "next/dynamic";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Database,
  Globe,
  Server,
  ChevronRight,
  Cpu,
  Layers,
  Zap,
  Terminal,
  Cloud,
  Shield,
  Wifi,
  Box,
  Hexagon,
  Triangle
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const calculateTransform = (depth: number) => {
    if (!isMounted) return 'translateX(0px) translateY(0px)'
    const x = (mousePosition.x - window.innerWidth / 2) / depth
    const y = (mousePosition.y - window.innerHeight / 2) / depth
    return `translateX(${x}px) translateY(${y}px)`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden perspective-container">
      {/* 3D Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="grid-3d" />
      </div>

      {/* 3D Parallax Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="parallax-3d-layer">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl" />
        </div>
        <div className="parallax-3d-layer">
          <div className="absolute top-40 right-40 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl" />
          <div className="absolute bottom-40 left-30 w-36 h-36 bg-pink-500/20 rounded-full blur-xl" />
        </div>
        <div className="parallax-3d-layer">
          <div className="absolute top-60 left-60 w-28 h-28 bg-green-500/20 rounded-full blur-xl" />
          <div className="absolute bottom-60 right-60 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl" />
        </div>
      </div>

      {/* Full-Stack Development Background Animations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Code Flow Lines */}
        <div className="code-flow-3d top-10 left-20" style={{ animationDelay: '0s' }} />
        <div className="code-flow-3d top-40 right-32" style={{ animationDelay: '2s' }} />
        <div className="code-flow-3d top-60 left-60" style={{ animationDelay: '4s' }} />
        <div className="code-flow-3d top-80 right-48" style={{ animationDelay: '6s' }} />
        <div className="code-flow-3d top-20 left-40" style={{ animationDelay: '1s' }} />
        <div className="code-flow-3d top-70 right-20" style={{ animationDelay: '3s' }} />
        
        {/* Data Streams */}
        <div className="data-stream-3d top-32 left-16" style={{ animationDelay: '0s' }} />
        <div className="data-stream-3d top-64 right-24" style={{ animationDelay: '3s' }} />
        <div className="data-stream-3d top-48 left-48" style={{ animationDelay: '1.5s' }} />
        <div className="data-stream-3d top-80 right-56" style={{ animationDelay: '4.5s' }} />
        
        {/* Server Elements */}
        <div className="server-pulse-3d top-24 left-32" />
        <div className="server-pulse-3d top-56 right-40" style={{ animationDelay: '2s' }} />
        <div className="server-pulse-3d top-72 left-64" style={{ animationDelay: '4s' }} />
        
        {/* Database Elements */}
        <div className="database-rotate-3d top-36 right-36" />
        <div className="database-rotate-3d top-68 left-28" style={{ animationDelay: '6s' }} />
        <div className="database-rotate-3d top-52 right-64" style={{ animationDelay: '3s' }} />
        
        {/* API Request Elements */}
        <div className="api-request-3d top-28 left-56" />
        <div className="api-request-3d top-60 right-32" style={{ animationDelay: '2.5s' }} />
        <div className="api-request-3d top-44 left-20" style={{ animationDelay: '5s' }} />
        
        {/* Tech Stack Floating Elements */}
        <div className="tech-stack-float-3d top-16 right-16">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">JS</div>
        </div>
        <div className="tech-stack-float-3d top-48 left-24" style={{ animationDelay: '3s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">REACT</div>
        </div>
        <div className="tech-stack-float-3d top-72 right-48" style={{ animationDelay: '6s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">NODE</div>
        </div>
        <div className="tech-stack-float-3d top-32 left-72" style={{ animationDelay: '4.5s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">DB</div>
        </div>
        
        {/* Workflow Pipelines */}
        <div className="workflow-pipeline-3d top-52 left-40" />
        <div className="workflow-pipeline-3d top-24 right-64" style={{ animationDelay: '5s' }} />
        <div className="workflow-pipeline-3d top-76 left-16" style={{ animationDelay: '2.5s' }} />
        
        {/* Deployment Rockets */}
        <div className="deployment-rocket-3d left-20" style={{ animationDelay: '0s' }} />
        <div className="deployment-rocket-3d right-32" style={{ animationDelay: '4s' }} />
        <div className="deployment-rocket-3d left-56" style={{ animationDelay: '8s' }} />
        
        {/* Git Branches */}
        <div className="git-branch-3d top-40 left-48">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M10,30 L30,30 L30,10 L50,10 M30,30 L50,50 L70,50" stroke="#10b981" strokeWidth="2" fill="none" />
            <circle cx="10" cy="30" r="3" fill="#10b981" />
            <circle cx="30" cy="30" r="3" fill="#10b981" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <circle cx="50" cy="10" r="3" fill="#10b981" />
            <circle cx="50" cy="50" r="3" fill="#10b981" />
            <circle cx="70" cy="50" r="3" fill="#10b981" />
          </svg>
        </div>
        <div className="git-branch-3d top-64 right-40" style={{ animationDelay: '6s' }}>
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M10,30 L30,30 L30,10 L50,10 M30,30 L50,50 L70,50" stroke="#10b981" strokeWidth="2" fill="none" />
            <circle cx="10" cy="30" r="3" fill="#10b981" />
            <circle cx="30" cy="30" r="3" fill="#10b981" />
            <circle cx="30" cy="10" r="3" fill="#10b981" />
            <circle cx="50" cy="10" r="3" fill="#10b981" />
            <circle cx="50" cy="50" r="3" fill="#10b981" />
            <circle cx="70" cy="50" r="3" fill="#10b981" />
          </svg>
        </div>
        
        {/* Cloud Sync Elements */}
        <div className="cloud-sync-3d top-20 right-20" />
        <div className="cloud-sync-3d top-56 left-36" style={{ animationDelay: '7s' }} />
        <div className="cloud-sync-3d top-72 right-56" style={{ animationDelay: '3.5s' }} />
        
        {/* Terminal Cursors */}
        <div className="terminal-cursor-3d top-48 left-32" />
        <div className="terminal-cursor-3d top-64 right-48" style={{ animationDelay: '0.5s' }} />
        <div className="terminal-cursor-3d top-32 left-64" style={{ animationDelay: '1s' }} />
      </div>

      {/* 3D Rotating Cubes */}
      <div className="fixed inset-0 pointer-events-none perspective-container">
        <div className="absolute top-32 left-16 cube-3d">
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
        </div>
        <div className="absolute top-64 right-24 cube-3d" style={{ animationDelay: '3s' }}>
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
        </div>
        <div className="absolute bottom-40 left-32 cube-3d" style={{ animationDelay: '6s' }}>
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
          <div className="cube-face" />
        </div>
      </div>

      {/* 3D Spheres */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-48 right-48 sphere-3d" />
        <div className="absolute bottom-32 left-64 sphere-3d" style={{ animationDelay: '5s' }} />
        <div className="absolute top-80 left-48 sphere-3d" style={{ animationDelay: '10s' }} />
      </div>

      {/* Floating 3D Tech Icons */}
      <div className="fixed inset-0 pointer-events-none perspective-container">
        <div className="absolute top-32 left-16 rotate-3d" style={{ transform: calculateTransform(50) }}>
          <Cpu className="w-8 h-8 text-blue-400/40 hero-3d-element" />
        </div>
        <div className="absolute top-64 right-24 rotate-3d" style={{ transform: calculateTransform(40), animationDelay: '5s' }}>
          <Terminal className="w-6 h-6 text-green-400/40 hero-3d-element" />
        </div>
        <div className="absolute bottom-40 left-32 rotate-3d" style={{ transform: calculateTransform(60), animationDelay: '3s' }}>
          <Cloud className="w-10 h-10 text-purple-400/40 hero-3d-element" />
        </div>
        <div className="absolute top-80 right-40 rotate-3d" style={{ transform: calculateTransform(45), animationDelay: '7s' }}>
          <Shield className="w-7 h-7 text-pink-400/40 hero-3d-element" />
        </div>
        <div className="absolute bottom-60 right-20 rotate-3d" style={{ transform: calculateTransform(55), animationDelay: '2s' }}>
          <Wifi className="w-9 h-9 text-cyan-400/40 hero-3d-element" />
        </div>
        <div className="absolute top-48 left-48 rotate-3d" style={{ transform: calculateTransform(35), animationDelay: '6s' }}>
          <Layers className="w-8 h-8 text-yellow-400/40 hero-3d-element" />
        </div>
        <div className="absolute bottom-32 left-64 rotate-3d" style={{ transform: calculateTransform(65), animationDelay: '4s' }}>
          <Box className="w-6 h-6 text-red-400/40 hero-3d-element" />
        </div>
        <div className="absolute top-72 right-32 rotate-3d" style={{ transform: calculateTransform(42), animationDelay: '8s' }}>
          <Hexagon className="w-7 h-7 text-indigo-400/40 hero-3d-element" />
        </div>
        <div className="absolute bottom-48 right-48 rotate-3d" style={{ transform: calculateTransform(58), animationDelay: '1s' }}>
          <Triangle className="w-8 h-8 text-orange-400/40 hero-3d-element" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 glitch-3d">
              Shams Ullah Baig
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">Skills</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">Experience</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">Projects</a>
              <a href="#education" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">Education</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 relative perspective-container">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-8 relative hero-3d-element">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark-tech-glow morph-3d" />
              <div className="absolute inset-4 bg-slate-900/80 backdrop-blur-md rounded-lg flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 glitch-3d">
                  SB
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent to-white/10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-3d text-wave-3d">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Shams Ullah Baig
              </span>
            </h1>
            <div className="text-2xl text-slate-300 mb-6 pulse-3d wave-3d">
              Full Stack Developer
            </div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              CS graduate passionate about full stack development. Seeking a role to build scalable web apps and solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 tech-glow hover:scale-110 transform transition-all duration-300 pulse-3d">
                <Zap className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:scale-110 transform transition-all duration-300 glitch-3d" asChild>
                <a href="www.linkedin.com/in/shams-ullah-baig-8312a018b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border border-white/10 flip-3d interactive-3d">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="text-sm text-slate-300">Islamabad, Pakistan</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-md border border-white/10 flip-3d interactive-3d">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <p className="text-sm text-slate-300">shamsullahbaig999@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-md border border-white/10 flip-3d interactive-3d">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <p className="text-sm text-slate-300">+92 317 9292371</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Technical Arsenal
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-md border border-blue-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <Code className="w-10 h-10 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-blue-300">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">HTML5</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">CSS3</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">JavaScript</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-md border border-green-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <Server className="w-10 h-10 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-green-300">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Node.js</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Express.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-md border border-purple-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <Database className="w-10 h-10 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-purple-300">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">MongoDB</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-md border border-orange-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <Globe className="w-10 h-10 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl text-orange-300">Tools & APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">RESTful APIs</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Git</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">GitHub</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Netlify</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Heroku</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Professional Journey
            </span>
          </h2>

          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-900/20 to-transparent backdrop-blur-md border border-blue-500/30 card-3d flip-3d interactive-3d transition-3d">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-blue-300">Front-End Intern</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1 text-slate-400">
                      <Building className="w-4 h-4" />
                      AKRSP, Gilgit
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4" />
                    Dec 2024 – May 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-blue-400 flex-shrink-0" />
                    Developed responsive user interfaces using HTML5, CSS3, and React.js for AKRSP initiatives.
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-blue-400 flex-shrink-0" />
                    Ensured cross-browser compatibility through collaborative testing and debugging efforts.
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-blue-400 flex-shrink-0" />
                    Optimized front-end performance to enhance user experience and application efficiency.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-900/20 to-transparent backdrop-blur-md border border-green-500/30 card-3d flip-3d interactive-3d transition-3d">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-green-300">Web Developer</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1 text-slate-400">
                      <Building className="w-4 h-4" />
                       Uexel 
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4" />
                    June 2025 – Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
                    Built dynamic websites using React and Nest.js with payment gateway integration.
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
                    Deployed websites on Amazon Cloud, ensuring high availability and performance.
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
                    Enhanced development skills through mentor guidance and collaborative teamwork.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-600">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-md border border-purple-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-300 group-hover:scale-105 transition-transform">Personal Portfolio</CardTitle>
                <CardDescription className="text-slate-400">Professional portfolio website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Built a modern, responsive portfolio website using React.js to showcase skills, projects, and professional experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">React.js</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">CSS3</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Netlify</Badge>
                </div>
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:scale-110 transform transition-all duration-300" size="sm" asChild>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-md border border-cyan-500/30 card-3d group flip-3d interactive-3d transition-3d">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-300 group-hover:scale-105 transition-transform">Task Management App</CardTitle>
                <CardDescription className="text-slate-400">Full-stack task management application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Developed a comprehensive task management application with CRUD operations, user authentication, and data persistence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">MongoDB</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Node.js</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Heroku</Badge>
                </div>
                <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:scale-110 transform transition-all duration-300" size="sm" asChild>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Educational Background
            </span>
          </h2>

          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-yellow-900/20 to-transparent backdrop-blur-md border border-yellow-500/30 card-3d">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-yellow-300 flex items-center gap-3">
                      <GraduationCap className="w-6 h-6" />
                      B.S. Computer Science
                    </CardTitle>
                    <CardDescription className="text-slate-400">SZABIST University, Islamabad</CardDescription>
                  </div>
                  <div className="text-sm text-slate-400">
                    Sep 2021 – May 2025
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-r from-orange-900/20 to-transparent backdrop-blur-md border border-orange-500/30 card-3d">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-orange-300">HSSC: Pre-Engineering</CardTitle>
                    <CardDescription className="text-slate-400">Aga Khan Higher Secondary School, Gilgit</CardDescription>
                  </div>
                  <div className="text-sm text-slate-400">
                    Jun 2017 – Jun 2019
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              Certifications
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Introduction to HTML, CSS & JavaScript – Coursera",
              "Introduction to Back-End Development – Coursera",
              "Introduction to Front-End Development – Coursera",
              "Foundations of Cybersecurity – Coursera",
              "Web Development with HTML, CSS, JavaScript – Coursera",
              "The Full Stack – Coursera"
            ].map((cert, index) => (
              <Card key={index} className="bg-gradient-to-r from-green-900/10 to-transparent backdrop-blur-md border border-green-500/20 card-3d hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-3d">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Connect With Me
            </span>
          </h2>

          <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/10 backdrop-blur-md border border-pink-500/30 text-center card-3d">
            <CardContent className="pt-8">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 tech-glow hover:scale-105 transform transition-all" asChild>
                  <a href="mailto:shamsullahbaig999@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:scale-105 transform transition-all" asChild>
                  <a href="https://linkedin.com/in/shams-ullah-baig" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button variant="outline" className="border-pink-500/50 text-pink-300 hover:bg-pink-500/10 hover:scale-105 transform transition-all" asChild>
                  <a href="tel:+923179292371">
                    <Phone className="w-4 h-4" />
                    Call Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Shams Ullah Baig. using React.js & Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}