import { useEffect, useState } from "react";
import { ArrowRight, Code, Database, Cpu } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);

  const targetText = "CIPHERS";
  const crypticChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}|;:,.<>?";

  useEffect(() => {
    setMounted(true);

    // Start the cryptic animation after a short delay
    const startDelay = setTimeout(() => {
      setIsDecrypting(true);
      let currentIndex = 0;
      let iterationCount = 0;
      const maxIterations = 4; // Number of random iterations per letter

      const crypticAnimation = setInterval(() => {
        setDisplayText((current) => {
          let newText = "";

          for (let i = 0; i < targetText.length; i++) {
            if (i < currentIndex) {
              // Already revealed letters stay revealed
              newText += targetText[i];
            } else if (i === currentIndex) {
              // Currently decrypting letter
              if (iterationCount < maxIterations) {
                newText +=
                  crypticChars[Math.floor(Math.random() * crypticChars.length)];
              } else {
                newText += targetText[i];
              }
            } else {
              // Future letters show as random characters
              newText +=
                crypticChars[Math.floor(Math.random() * crypticChars.length)];
            }
          }

          return newText;
        });

        iterationCount++;

        if (iterationCount > maxIterations) {
          currentIndex++;
          iterationCount = 0;
        }

        if (currentIndex >= targetText.length) {
          clearInterval(crypticAnimation);
          setIsDecrypting(false);
        }
      }, 80); // Animation speed

      return () => clearInterval(crypticAnimation);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  const DataStream = ({ delay = 0 }: { delay?: number }) => (
    <div
      className="absolute animate-dataStream opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    >
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent"></div>
    </div>
  );

  const FloatingIcon = ({
    Icon,
    delay = 0,
    x = 0,
    y = 0,
  }: {
    Icon: any;
    delay?: number;
    x?: number;
    y?: number;
  }) => (
    <div
      className={`absolute text-[#FFD700] opacity-20 animate-pulse-slow`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Data Streams */}
        {Array.from({ length: 8 }, (_, i) => (
          <DataStream key={i} delay={i * 0.5} />
        ))}

        {/* Floating Icons */}
        <FloatingIcon Icon={Code} delay={0} x={10} y={20} />
        <FloatingIcon Icon={Database} delay={1} x={85} y={15} />
        <FloatingIcon Icon={Cpu} delay={2} x={15} y={80} />
        <FloatingIcon Icon={Code} delay={3} x={90} y={75} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#F5F5F5] mb-4 tracking-wider">
            <span
              className={`inline-block text-[#FFD700] font-mono tracking-wider ${
                mounted ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              {displayText || "CIPHERS"}
            </span>
          </h1>
          <div
            className={`h-1 bg-[#FFD700] mx-auto transition-all duration-1000 ${
              mounted ? "w-48 md:w-64" : "w-0"
            }`}
          ></div>
        </div>

        {/* Tagline */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-[#F5F5F5] mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#FFD700]">Decoding the Future.</span> One Line
          at a Time.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() =>
              document
                .querySelector("#mission")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-[#FFD700] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/25 flex items-center gap-3 mx-auto"
          >
            Join The Mission
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center text-[#F5F5F5]/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-[#F5F5F5]/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FFD700] rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
