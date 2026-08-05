import sFull    from "@/assets/shutter-full-height.jpg";
import sCafe    from "@/assets/shutter-cafe.jpg";
import sTier    from "@/assets/shutter-tier.jpg";
import sBay     from "@/assets/shutter-bay.jpg";
import sFrench  from "@/assets/shutter-french.jpg";
import sTracked from "@/assets/shutter-tracked.jpg";
import bRoller  from "@/assets/blind-roller.jpg";
import bRoman   from "@/assets/blind-roman.jpg";
import bVertical  from "@/assets/blind-vertical.jpg";
import bVenetian  from "@/assets/blind-venetian.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

import { Users, Sparkles, Hammer, ShieldCheck, Award } from "lucide-react";

export { g1, g2, g3, g4 };

export const nav = [
  { label: "Home",                href: "#home" },
  { label: "Plantation Shutters", href: "#shutters" },
  { label: "Blinds",              href: "#blinds" },
  { label: "Gallery",             href: "#gallery" },
  { label: "About",               href: "#about" },
  { label: "FAQ",                 href: "#faq" },
  { label: "Contact",             href: "#contact" },
];

export const shutters = [
  { name: "Full Height Shutters",  img: sFull,    desc: "A single expanse of louvres across the whole window — the timeless, unified look." },
  { name: "Café Style Shutters",   img: sCafe,    desc: "Half-height panels that guard privacy while letting daylight pour in above." },
  { name: "Tier-on-Tier Shutters", img: sTier,    desc: "Independent upper and lower panels for complete, precise control of light." },
  { name: "Bay Window Shutters",   img: sBay,     desc: "Perfectly angled to your bay, mitred and hinged for a seamless finish." },
  { name: "French Door Shutters",  img: sFrench,  desc: "Slim, sculpted frames that move with the door and stay flawlessly aligned." },
  { name: "Tracked Shutters",      img: sTracked, desc: "Ideal for wide openings and patio doors — glide smoothly on a hidden track." },
];

export const blinds = [
  { name: "Roller Blinds",   img: bRoller,   desc: "Clean, minimal lines in luxury fabrics." },
  { name: "Roman Blinds",    img: bRoman,    desc: "Soft folds and tailored elegance." },
  { name: "Vertical Blinds", img: bVertical, desc: "Sleek control for wide windows." },
  { name: "Venetian Blinds", img: bVenetian, desc: "Warm timber and refined metals." },
];

export const trust = [
  { icon: Users,       stat: "500+",     label: "Happy Customers" },
  { icon: Sparkles,    stat: "Premium",  label: "Materials" },
  { icon: Hammer,      stat: "Expert",   label: "Installation" },
  { icon: ShieldCheck, stat: "Fully",    label: "Insured" },
  { icon: Award,       stat: "10+ Years",label: "Experience" },
];

export const steps = [
  { n: "01", title: "Request a Quote",          text: "Tell us about your windows and the look you're after." },
  { n: "02", title: "Free Home Measure",        text: "A specialist visits, measures every reveal and advises on style." },
  { n: "03", title: "Custom Build",             text: "Your shutters are handcrafted from premium hardwood or ABS." },
  { n: "04", title: "Professional Installation",text: "Our fitters install with meticulous care — no fuss, no mess." },
];

export const reviews = [
  { name: "Amelia Whitaker", location: "Chelsea, London", quote: "Absolutely stunning. The team measured, made and fitted our bay window shutters flawlessly. It has transformed the whole room." },
  { name: "James Callahan",  location: "Cheshire",        quote: "From the first visit to the final install, everything was calm, considered and precise. Truly craftsman quality." },
  { name: "Priya Desai",     location: "Surrey",          quote: "No pressure, no upsell — just honest advice and beautiful shutters. Six windows done and every one is perfect." },
];

export const faqs = [
  { q: "How much do bespoke plantation shutters cost?", a: "Every project is priced to the millimetre. As a guide, our shutters start from £275 per m². We provide a detailed, no-obligation quote after your free home measure." },
  { q: "How long does installation take?",              a: "Most homes are installed in a single day. Larger properties or bay windows may take up to two, and we protect every surface as we work." },
  { q: "Do you measure and install yourselves?",        a: "Yes. We never sub-contract. The specialist who measures your windows works with the same fitters throughout the project." },
  { q: "What warranty do you provide?",                 a: "All plantation shutters come with a lifetime guarantee on the mechanism and a 10-year finish warranty. Blinds are covered for 5 years." },
  { q: "Which styles suit period homes?",               a: "Full-height and tier-on-tier shutters in a hardwood range are our most popular choices for Victorian and Edwardian properties." },
];

export const areas = [
  "London", "Surrey", "Kent", "Sussex", "Berkshire",
  "Hampshire", "Cheshire", "Manchester", "Buckinghamshire", "Essex",
  "Hertfordshire", "Oxfordshire",
];
