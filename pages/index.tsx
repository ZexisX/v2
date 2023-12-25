// pages/index.tsx
import React, { useEffect } from "react";
import anime from "animejs";
import Image from 'next/image';

// Sample Button Component
const Button: React.FC<{ className: string; variant: string; size: string; link: string; children: React.ReactNode }> = ({ className, variant, size, link, children }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
</a>
  );
};

// Moved outside the component
const animateElements = () => {
  // Animation for elements with class "animated-element"
  const elements = document.querySelectorAll('.animated-element');

  anime({
    targets: elements,
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    duration: 800,
    delay: (el, i) => i * 200,
  });

  // Button animation
  const buttons = document.querySelectorAll('.button');

  // Declare these functions before using them
  const handleMouseEnter: EventListenerOrEventListenerObject = (event) => {
    const button = event.currentTarget as HTMLAnchorElement;
    anime({
      targets: button,
      translateY: -5,
      easing: 'easeOutQuad',
      duration: 300,
    });
  };

  const handleMouseLeave: EventListenerOrEventListenerObject = (event) => {
    const button = event.currentTarget as HTMLAnchorElement;
    anime({
      targets: button,
      translateY: 0,
      easing: 'easeOutQuad',
      duration: 300,
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
  });
};

const Home: React.FC = () => {
  useEffect(() => {
    animateElements();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className={`bg-gradient-to-r from-[#202F3F] via-black to-[#102F2F] text-white min-h-screen flex flex-col justify-center items-center`}>
      <header className="text-center">
        <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-2 text-center gradient-text">
  <span className="word">Hey </span>
  <span className="cc">&#x1F44B; </span>
  <span className="word">I&apos;m </span>
  <span className="word">Aedotris</span>
</h1>
        </div>
        <div className="bg-blue-200 rounded-md px-6 py-2 inline-block my-4 animated-element">
          <h2 className="text-4xl font-bold text-blue-800">a developer</h2>
        </div>
        <div className="text-xl mb-8 animated-element gray-text">
          <p>In the quiet realm of a coder&lsquo;s life,</p>
          <p>the symphony of keystrokes orchestrates</p>
          <p>a world of innovation and endless possibilities.</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* GitHub Button */}
<Button
  className="button bg-gray-200 text-gray-700 animated-element p-2 rounded-lg"
  variant="outline"
  size="default"
  link="https://github.com/levinhkhangzz"
>
  <span className="flex items-center">
    <Image
      width={24}
      height={24}
      src="https://img.icons8.com/3d-fluency/188/github.png"
      alt="GitHub Icon"
      className="w-4 h-4 mr-2"
    />
    <span>GitHub</span>
  </span>
</Button>

{/* Telegram Button */}
<Button
  className="button bg-gray-200 text-gray-700 animated-element p-2 rounded-lg"
  variant="outline"
  size="default"
  link="https://t.me/A3d0tr1sX"
>
  <span className="flex items-center">
    <Image
      width={24}
      height={24}
      src="https://img.icons8.com/3d-fluency/24/telegram.png"
      alt="Telegram Icon"
      className="w-4 h-4 mr-2"
    />
    <span>Telegram</span>
  </span>
</Button>

{/* Email Button */}
<Button
  className="button bg-gray-200 text-gray-700 animated-element p-2 rounded-lg"
  variant="outline"
  size="default"
  link="mailto:levinhkhang631@gmail.com"
>
  <span className="flex items-center">
    <Image
      width={24}
      height={24}
      src="https://img.icons8.com/3d-fluency/94/email.png"
      alt="Email Icon"
      className="w-4 h-4 mr-2"
    />
    <span>Email</span>
  </span>
</Button>

{/* Discord Button */}
<Button
  className="button bg-gray-200 text-gray-700 animated-element p-2 rounded-lg"
  variant="outline"
  size="default"
  link="https://discord.com"
>
  <span className="flex items-center">
    <Image
      width={24}
      height={24}
      src="https://img.icons8.com/3d-fluency/94/discord-logo.png"
      alt="Discord Icon"
      className="w-4 h-4 mr-2"
    />
    <span>Discord</span>
  </span>
</Button>

        </div>
      </header>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-start justify-start">
          <span className="w-3 h-3 bg-blue-600 rounded-full m-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
