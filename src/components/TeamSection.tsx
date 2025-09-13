import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, Globe, Filter } from "lucide-react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
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

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      year: "Senior",
      specialization: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1706641931728-e4f638619352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHRlY2glMjBzdHVkZW50fGVufDF8fHx8MTc1NzY3OTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Leading Ciphers with a vision to make it the premier tech club on campus. Passionate about AI and its applications in solving real-world problems.",
      achievements: ["ICPC Regional Finalist", "Google Summer of Code '23"],
      social: {
        github: "alexchen",
        linkedin: "alex-chen-cs",
        twitter: "alexchen_dev",
      },
      category: "leadership",
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      role: "Vice President",
      department: "Software Engineering",
      year: "Junior",
      specialization: "Cybersecurity",
      image:
        "https://images.unsplash.com/photo-1638452033979-14fba9e17fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzU3NzU3MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Cybersecurity enthusiast with experience in penetration testing and digital forensics. Organizing security workshops and CTF competitions.",
      achievements: ["DEF CON CTF Top 10", "Microsoft Security Fellowship"],
      social: {
        github: "sarahsec",
        linkedin: "sarah-rodriguez-security",
        website: "sarahsec.dev",
      },
      category: "leadership",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Technical Lead",
      department: "Computer Science",
      year: "Senior",
      specialization: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1633092229537-5d491c2b414d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NzU3MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Leading the development of Ciphers' web platform.",
      achievements: [
        "AWS Certified Solutions Architect",
        "Hackathon Winner x3",
      ],
      social: {
        github: "marcusdev",
        linkedin: "marcus-johnson-dev",
        twitter: "marcusbuilds",
      },
      category: "development",
    },
    {
      id: 4,
      name: "Emily Zhang",
      role: "Events Coordinator",
      department: "Information Systems",
      year: "Sophomore",
      specialization: "Data Science",
      image:
        "https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzY3OTQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Data science enthusiast organizing workshops and industry connections. Building bridges between academia and industry.",
      achievements: ["Kaggle Expert", "Data Science Competition Winner"],
      social: {
        github: "emilydata",
        linkedin: "emily-zhang-data",
        website: "emilyzhang.io",
      },
      category: "events",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Research Coordinator",
      department: "Computer Science",
      year: "Graduate",
      specialization: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1591062182630-2cae7655ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHN0dWRlbnRzJTIwZ3JvdXB8ZW58MXx8fHwxNzU3NzU3MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "PhD candidate in Machine Learning, coordinating research opportunities and academic partnerships for club members.",
      achievements: ["NIPS Paper Publication", "Research Excellence Award"],
      social: {
        github: "davidresearch",
        linkedin: "david-kim-research",
        website: "davidkim.ai",
      },
      category: "research",
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Community Manager",
      department: "Software Engineering",
      year: "Junior",
      specialization: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1732210038531-9cefab37885a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2dyYW1tZXIlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU3NzU3MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Mobile app developer passionate about creating inclusive tech communities and mentoring underrepresented students.",
      achievements: ["Apple WWDC Scholar", "Diversity in Tech Award"],
      social: {
        github: "priyamobile",
        linkedin: "priya-patel-mobile",
        twitter: "priya_codes",
      },
      category: "community",
    },
  ];

  const filters = [
    { id: "all", label: "All Team", count: teamMembers.length },
    {
      id: "leadership",
      label: "Leadership",
      count: teamMembers.filter((m) => m.category === "leadership").length,
    },
    {
      id: "development",
      label: "Development",
      count: teamMembers.filter((m) => m.category === "development").length,
    },
    {
      id: "events",
      label: "Events",
      count: teamMembers.filter((m) => m.category === "events").length,
    },
    {
      id: "research",
      label: "Research",
      count: teamMembers.filter((m) => m.category === "research").length,
    },
    {
      id: "community",
      label: "Community",
      count: teamMembers.filter((m) => m.category === "community").length,
    },
  ];

  const filteredMembers =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]"
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
            Meet the <span className="text-[#FFD700]">Team</span>
          </h2>
          <p
            className={`text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            The brilliant minds behind Ciphers. Each member brings unique
            expertise and passion to our tech community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Filter className="text-[#FFD700]" size={20} />
            <span className="text-[#F5F5F5] font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-[#FFD700] text-[#0A0A0A]"
                  : "bg-[#1A1A1A] text-[#F5F5F5] hover:bg-[#333333] border border-white/10"
              }`}
            >
              {filter.label}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-[#0A0A0A]/20 text-[#0A0A0A]"
                    : "bg-[#FFD700]/20 text-[#FFD700]"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group bg-[#1A1A1A] rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {member.social.github && (
                    <a
                      href={`https://github.com/${member.social.github}`}
                      className="p-2 bg-[#F5F5F5]/10 backdrop-blur-sm rounded-full hover:bg-[#FFD700]/20 transition-colors duration-300"
                    >
                      <Github className="text-[#F5F5F5]" size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      className="p-2 bg-[#F5F5F5]/10 backdrop-blur-sm rounded-full hover:bg-[#FFD700]/20 transition-colors duration-300"
                    >
                      <Linkedin className="text-[#F5F5F5]" size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={`https://twitter.com/${member.social.twitter}`}
                      className="p-2 bg-[#F5F5F5]/10 backdrop-blur-sm rounded-full hover:bg-[#FFD700]/20 transition-colors duration-300"
                    >
                      <Twitter className="text-[#F5F5F5]" size={18} />
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={`https://${member.social.website}`}
                      className="p-2 bg-[#F5F5F5]/10 backdrop-blur-sm rounded-full hover:bg-[#FFD700]/20 transition-colors duration-300"
                    >
                      <Globe className="text-[#F5F5F5]" size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                {/* Name and Role */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#FFD700] font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#F5F5F5]/70">
                    <span>{member.department}</span>
                    <span>•</span>
                    <span>{member.year}</span>
                    <span>•</span>
                    <span>{member.specialization}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#F5F5F5]/80 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-[#FFD700] text-sm font-medium">
                    Notable Achievements:
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="text-[#F5F5F5]/70 text-xs py-1 px-3 bg-[#0A0A0A] rounded-md border border-white/10"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div
            className={`bg-[#1A1A1A] p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-[#F5F5F5]/80 mb-6">
              We're always looking for passionate individuals who want to make a
              difference in the tech community.
            </p>
            <button className="bg-[#FFD700] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
              Apply to Join Ciphers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
