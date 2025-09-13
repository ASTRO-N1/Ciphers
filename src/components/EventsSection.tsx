import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Trophy,
  Code,
  Brain,
  Shield,
} from "lucide-react";

const EventsSection = () => {
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

  const events = [
    {
      id: 1,
      title: "AI/ML Workshop Series",
      type: "Workshop",
      date: "Oct 15-17, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Tech Lab 3A",
      attendees: 45,
      maxAttendees: 50,
      description:
        "Deep dive into neural networks and practical machine learning applications. Build your first AI model.",
      tags: ["AI/ML", "Beginner", "Hands-on"],
      icon: Brain,
      color: "#FFD700",
      featured: true,
    },
    {
      id: 2,
      title: "Cybersecurity CTF Challenge",
      type: "Competition",
      date: "Oct 22, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      attendees: 89,
      maxAttendees: 100,
      description:
        "Test your hacking skills in our annual Capture The Flag competition. Prizes worth $5000.",
      tags: ["Cybersecurity", "Advanced", "Competition"],
      icon: Shield,
      color: "#FF6B6B",
      featured: true,
    },
    {
      id: 3,
      title: "Code & Coffee Meetup",
      type: "Networking",
      date: "Oct 25, 2024",
      time: "7:00 AM - 9:00 AM",
      location: "Campus Café",
      attendees: 23,
      maxAttendees: 30,
      description:
        "Casual networking session with industry professionals and fellow students over coffee.",
      tags: ["Networking", "All Levels", "Casual"],
      icon: Code,
      color: "#4ECDC4",
      featured: false,
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      type: "Pitch Event",
      date: "Nov 1, 2024",
      time: "5:00 PM - 8:00 PM",
      location: "Innovation Hub",
      attendees: 67,
      maxAttendees: 80,
      description:
        "Present your startup ideas to real investors and get feedback from successful entrepreneurs.",
      tags: ["Startups", "Entrepreneurship", "Pitching"],
      icon: Trophy,
      color: "#9B59B6",
      featured: true,
    },
    {
      id: 5,
      title: "Open Source Contribution Day",
      type: "Workshop",
      date: "Nov 8, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab B",
      attendees: 34,
      maxAttendees: 40,
      description:
        "Learn how to contribute to open source projects and make your first meaningful contribution.",
      tags: ["Open Source", "Git", "Collaboration"],
      icon: Code,
      color: "#FF9F43",
      featured: false,
    },
    {
      id: 6,
      title: "Tech Industry Panel",
      type: "Panel",
      date: "Nov 15, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      attendees: 156,
      maxAttendees: 200,
      description:
        "Hear from FAANG engineers about their journey from college to top tech companies.",
      tags: ["Career", "Industry", "Inspiration"],
      icon: Users,
      color: "#6C5CE7",
      featured: true,
    },
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "AI/ML": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Cybersecurity: "bg-red-500/20 text-red-300 border-red-500/30",
      Networking: "bg-green-500/20 text-green-300 border-green-500/30",
      Competition: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Workshop: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Startups: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      Default: "bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30",
    };
    return colors[tag] || colors["Default"];
  };

  const featuredEvents = events.filter((event) => event.featured);
  const regularEvents = events.filter((event) => !event.featured);

  return (
    <section ref={sectionRef} id="events" className="py-20 px-6 bg-[#0A0A0A]">
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
            Upcoming <span className="text-[#FFD700]">Events</span>
          </h2>
          <p
            className={`text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Join exclusive workshops, competitions, and networking events
            designed to accelerate your tech career.
          </p>
        </div>

        {/* Featured Events */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8 flex items-center gap-3">
            <Trophy className="text-[#FFD700]" size={24} />
            Featured Events
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 transform hover:scale-[1.02] group ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FFD700]/10 rounded-xl group-hover:bg-[#FFD700]/20 transition-colors duration-300">
                      <event.icon className="text-[#FFD700]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#F5F5F5] mb-1">
                        {event.title}
                      </h4>
                      <span className="text-[#FFD700] text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#F5F5F5]/80">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#F5F5F5]/80">
                    <Clock size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#F5F5F5]/80">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#F5F5F5]/80">
                    <Users size={16} />
                    <span className="text-sm">
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#F5F5F5]/70 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Attendance Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#F5F5F5]/60 mb-2">
                    <span>Attendance</span>
                    <span>
                      {Math.round((event.attendees / event.maxAttendees) * 100)}
                      % full
                    </span>
                  </div>
                  <div className="w-full bg-[#333333] rounded-full h-2">
                    <div
                      className="bg-[#FFD700] h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${
                          (event.attendees / event.maxAttendees) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full bg-[#FFD700] text-[#0A0A0A] py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Events */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8">All Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-[#1A1A1A] p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 group ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#FFD700]/10 rounded-lg">
                    <event.icon className="text-[#FFD700]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F5F5F5] text-lg">
                      {event.title}
                    </h4>
                    <span className="text-[#FFD700] text-sm">{event.type}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm text-[#F5F5F5]/80">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-[#333333] text-[#F5F5F5] py-2 rounded-lg text-sm font-medium hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300 transform hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
