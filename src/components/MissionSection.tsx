import { useEffect, useRef, useState } from "react";
import { Target, Lightbulb, Users, Trophy } from "lucide-react";

const MissionSection = () => {
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

  const features = [
    {
      icon: Target,
      title: "Precision Engineering",
      description:
        "We focus on building elegant, efficient solutions that solve real-world problems with cutting-edge technology.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "From AI breakthroughs to cybersecurity advances, we're at the forefront of technological innovation.",
    },
    {
      icon: Users,
      title: "Elite Community",
      description:
        "Connect with like-minded individuals who share your passion for excellence in computer science.",
    },
    {
      icon: Trophy,
      title: "Achievement Focused",
      description:
        "We don't just participate—we dominate competitions, hackathons, and industry challenges.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="py-20 px-6 bg-[#0A0A0A] relative"
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
            Our <span className="text-[#FFD700]">Mission</span>
          </h2>
          <div
            className={`h-1 bg-[#FFD700] mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "w-32" : "w-0"
            }`}
          ></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Mission Statement */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-6">
                Empowering Tomorrow's Tech Leaders
              </h3>
              <p className="text-lg text-[#F5F5F5] leading-relaxed mb-6">
                At Ciphers, we believe that exceptional code creates exceptional
                futures. We're not just another computer science club—we're a
                brotherhood of innovators, problem-solvers, and visionaries who
                dare to push the boundaries of what's possible.
              </p>
              <p className="text-lg text-[#F5F5F5]/80 leading-relaxed">
                Our mission is to cultivate an environment where brilliant minds
                converge, collaborate, and create technologies that will shape
                the next decade. From AI and machine learning to cybersecurity
                and blockchain, we're building the future, one algorithm at a
                time.
              </p>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-[#1A1A1A] p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 hover:transform hover:scale-105 group ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#FFD700]/10 rounded-lg group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                      <feature.icon className="text-[#FFD700]" size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#F5F5F5] mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-[#F5F5F5]/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-96 h-96 border border-[#FFD700]/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#FFD700]/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default MissionSection;
