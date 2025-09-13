import { useState, useEffect, useRef } from "react";
import { Brain, Shield, Code, Smartphone, Database, Globe } from "lucide-react";

const PathSection = () => {
  const [activeTab, setActiveTab] = useState("aiml");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paths = {
    aiml: {
      title: "AI/ML Engineer",
      icon: Brain,
      color: "#FFD700",
      description: "Master the algorithms that power the future",
      roadmap: [
        {
          phase: "Foundation",
          skills: ["Python", "Statistics", "Linear Algebra", "Calculus"],
          duration: "3-4 months",
        },
        {
          phase: "Core ML",
          skills: [
            "Scikit-learn",
            "TensorFlow",
            "PyTorch",
            "Data Preprocessing",
          ],
          duration: "4-6 months",
        },
        {
          phase: "Deep Learning",
          skills: ["Neural Networks", "CNNs", "RNNs", "Transformers"],
          duration: "6-8 months",
        },
        {
          phase: "Specialization",
          skills: ["Computer Vision", "NLP", "Reinforcement Learning"],
          duration: "6+ months",
        },
      ],
    },
    cybersec: {
      title: "Cybersecurity Specialist",
      icon: Shield,
      color: "#FF6B6B",
      description: "Defend the digital frontier with elite security skills",
      roadmap: [
        {
          phase: "Fundamentals",
          skills: [
            "Network Security",
            "Linux",
            "Cryptography",
            "Risk Assessment",
          ],
          duration: "3-4 months",
        },
        {
          phase: "Penetration Testing",
          skills: ["Kali Linux", "Metasploit", "Burp Suite", "OWASP"],
          duration: "4-6 months",
        },
        {
          phase: "Advanced Security",
          skills: ["Forensics", "Malware Analysis", "SOC Operations"],
          duration: "6-8 months",
        },
        {
          phase: "Leadership",
          skills: ["Security Architecture", "Compliance", "Team Management"],
          duration: "8+ months",
        },
      ],
    },
    fullstack: {
      title: "Full Stack Developer",
      icon: Code,
      color: "#4ECDC4",
      description: "Build end-to-end solutions that scale",
      roadmap: [
        {
          phase: "Frontend",
          skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
          duration: "3-4 months",
        },
        {
          phase: "Backend",
          skills: ["Node.js", "Python/Django", "APIs", "Databases"],
          duration: "4-6 months",
        },
        {
          phase: "DevOps",
          skills: ["Docker", "AWS/Azure", "CI/CD", "Monitoring"],
          duration: "4-6 months",
        },
        {
          phase: "Architecture",
          skills: ["Microservices", "System Design", "Performance"],
          duration: "6+ months",
        },
      ],
    },
    mobile: {
      title: "Mobile Developer",
      icon: Smartphone,
      color: "#9B59B6",
      description: "Create mobile experiences that millions will use",
      roadmap: [
        {
          phase: "Native Basics",
          skills: ["Swift/Kotlin", "UI/UX Design", "Mobile Patterns"],
          duration: "3-4 months",
        },
        {
          phase: "Cross Platform",
          skills: ["React Native", "Flutter", "Xamarin"],
          duration: "4-5 months",
        },
        {
          phase: "Advanced Features",
          skills: ["Push Notifications", "Offline Storage", "AR/VR"],
          duration: "5-7 months",
        },
        {
          phase: "Optimization",
          skills: ["Performance", "App Store Optimization", "Analytics"],
          duration: "4+ months",
        },
      ],
    },
  };

  const tabs = [
    { id: "aiml", label: "AI/ML", icon: Brain },
    { id: "cybersec", label: "Cybersecurity", icon: Shield },
    { id: "fullstack", label: "Full Stack", icon: Code },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  const currentPath = paths[activeTab as keyof typeof paths];

  return (
    <section
      ref={sectionRef}
      id="paths"
      className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Find Your <span className="text-[#FFD700]">Path</span>
          </h2>
          <p
            className={`text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Every tech legend started with a single step. Choose your journey
            and let us guide you to mastery.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#FFD700] text-[#0A0A0A]"
                  : "bg-[#1A1A1A] text-[#F5F5F5] hover:bg-[#333333] border border-white/10"
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Path Content */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/10 p-8 md:p-12">
            {/* Path Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#FFD700]/10 rounded-xl">
                <currentPath.icon className="text-[#FFD700]" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#F5F5F5]">
                  {currentPath.title}
                </h3>
                <p className="text-[#F5F5F5]/70 text-lg">
                  {currentPath.description}
                </p>
              </div>
            </div>

            {/* Roadmap */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPath.roadmap.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Connection Line */}
                  {index < currentPath.roadmap.length - 1 && (
                    <div className="hidden lg:block absolute top-6 right-0 w-6 h-px bg-[#FFD700]/30 transform translate-x-full"></div>
                  )}

                  <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 h-full">
                    {/* Phase Number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#FFD700] text-[#0A0A0A] rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#F5F5F5]">
                          {phase.phase}
                        </h4>
                        <p className="text-[#FFD700] text-sm">
                          {phase.duration}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      {phase.skills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className="text-[#F5F5F5]/80 text-sm py-1 px-3 bg-[#1A1A1A] rounded-md border border-white/5"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button className="bg-[#FFD700] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
                Start Your {currentPath.title} Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;
