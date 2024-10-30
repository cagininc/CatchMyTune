import { FaApple, FaAndroid, FaWindows, FaGlobe } from "react-icons/fa";

export const features = [
  {
    id: "0",
    caption: "Explore Your Sound",
    title: "Uncover the Secrets of Your Music Instantly",
    text: "With Catch My Tune, analyzing your music's core elements is quick and simple. Dive deep into your track’s tempo, key, and more—all in seconds.",
    button: {
      title: "Watch how it works",
    },
  },
  {
    id: "1",
    caption: "Insight & Clarity",
    title: "Let Catch My Tune Bring Out the Best in Your Sound",
    text: "Catch My Tune uses advanced analysis to reveal hidden details in your music, making your sound clearer, richer, and ready for any platform.",
    button: {
      title: "Learn more",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "Beat Sync Detection",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Crystal Clear Harmonics",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Optimal Dance Loudness",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "Dynamic Groove Balance",
  },
];

export const faq = [
  {
    id: "0",
    question: "How easy is it to set up Catch My Tune?",
    answer:
      "It’s designed to be simple. Upload your audio or enter a Spotify link, and Catch My Tune does the rest!",
  },
  {
    id: "1",
    question: "Can I integrate Catch My Tune with other music tools?",
    answer:
      "Definitely! Catch My Tune works seamlessly with popular DAWs and audio tools, making it easy to incorporate into your workflow.",
  },
  {
    id: "2",
    question: "Do you regularly add new features?",
    answer:
      "Yes! We’re always listening to our users and adding new ways to explore and analyze sound.",
  },
  {
    id: "3",
    question: "Is there a satisfaction guarantee?",
    answer:
      "Absolutely. If Catch My Tune isn’t what you expected, let us know within 30 days for a full refund.",
  },
  {
    id: "4",
    question: "Are there options for studios or teams?",
    answer:
      "Yes, we offer team plans with additional features and support tailored for studios and collaborators.",
  },
  {
    id: "5",
    question: "What if I need more storage?",
    answer:
      "No worries! You can easily add storage or upgrade to a larger plan at any time.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Solo Creator",
    priceMonthly: 10,
    priceYearly: 8,
    caption: "Great for independent artists",
    features: [
      "Access to core analysis tools",
      "5 tracks per month",
      "Email support",
    ],
    icon: "/images/solo-creator.svg",
  },
  {
    id: "1",
    title: "Studio Essentials",
    priceMonthly: 30,
    priceYearly: 25,
    caption: "Ideal for studios and pros",
    features: [
      "Unlimited track analysis",
      "Detailed audio insights",
      "Priority support",
    ],
    icon: "/images/studio-essentials.svg",
  },
  {
    id: "2",
    title: "Collaborative Pro",
    priceMonthly: 70,
    priceYearly: 60,
    caption: "Perfect for teams and collaborations",
    features: [
      "Team sharing and collaboration",
      "Discounts for team members",
      "Premium support and insights",
    ],
    icon: "/images/collaborative-pro.svg",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Alex Thompson",
    role: "Indie Producer",
    avatarUrl: "/images/testimonials/1.png",
    comment:
      "Catch My Tune has changed the way I understand my music. It's like having an audio detective!",
  },
  {
    id: "1",
    name: "Tina Brown",
    role: "Freelance Sound Engineer",
    avatarUrl: "/images/testimonials/2.png",
    comment:
      "It’s a fantastic tool that helps me give my clients better results faster. Can’t work without it now!",
  },
  {
    id: "2",
    name: "Luis Garcia",
    role: "Music Teacher",
    avatarUrl: "/images/testimonials/3.png",
    comment:
      "Catch My Tune helps me show students the science behind music. They love seeing their songs broken down like this!",
  },
  {
    id: "3",
    name: "Emily Zhang",
    role: "Singer-Songwriter",
    avatarUrl: "/images/testimonials/4.png",
    comment:
      "The insights from Catch My Tune have made my tracks so much more polished and professional.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Beats Audio",
    url: "/images/logos/beats.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Harmonics",
    url: "/images/logos/harmonics.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Waveform",
    url: "/images/logos/waveform.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Sound Lab",
    url: "/images/logos/soundlab.svg",
    width: 77,
    height: 48,
  },
];

export const Ios = () => <FaApple size={32} color="#EAEDFF" />;
export const Android = () => <FaAndroid size={32} color="#EAEDFF" />;
export const Windows = () => <FaWindows size={32} color="#EAEDFF" />;
export const Web = () => <FaGlobe size={32} color="#EAEDFF" />;

export const links = [
  {
    id: "0",
    title: "iOS",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "X",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];
