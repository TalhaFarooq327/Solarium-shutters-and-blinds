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

import { Users, Sparkles, Hammer, ShieldCheck, Award, Star } from "lucide-react";

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
  {
    id: "full-height",
    slug: "full-height-shutters",
    name: "Full Height Shutters",
    category: "Plantation Shutters",
    img: sFull,
    gallery: [sFull, g1, g4, g3],
    tagline: "The timeless, full-coverage plantation shutter offering unmatched privacy, light control, and thermal elegance.",
    desc: "A single expanse of louvres across the whole window — the timeless, unified look.",
    overview: `Full Height shutters are our most popular and versatile style. Covering the entirety of the window reveal in one seamless, tailored frame, they create an architectural focal point that elevates both traditional period homes and crisp contemporary interiors.

Each panel is handcrafted from sustainably sourced hardwood or high-density waterproof polymer, mortise-and-tenon jointed for generational durability. With the optional inclusion of a mid-rail or hidden split mechanism, you gain independent control of the upper and lower louvre banks — allowing daylight to flood into your living space while keeping lower sightlines completely private from the street.`,
    idealFor: [
      "Living rooms & master bedrooms",
      "Street-facing ground floor windows",
      "Victorian & Edwardian sash windows",
      "Tall, expansive modern glazing"
    ],
    materials: [
      "Solid Paulownia Hardwood (Ultra-lightweight & richly grained)",
      "Premium Basswood (Dense, silky smooth furniture-grade timber)",
      "Waterproof ABS Co-Polymer (100% moisture-proof for wet rooms & kitchens)"
    ],
    customizations: {
      louvreSizes: ["63mm (Classic heritage scale)", "76mm (Most popular contemporary balance)", "89mm (Modern open vista)", "114mm (Architectural grand scale)"],
      tiltMechanisms: ["Clearview Hidden Rear Tilt (Minimalist)", "Central Traditional Wood Rod (Period charm)", "Offset Side Rod"],
      finishes: ["28 Silk Satin Paint Finishes", "16 Natural Grain Wood Stains", "Custom Farrow & Ball & Little Greene color match"],
      hingeOptions: ["Antique Brass", "Brushed Bronze", "Polished Chrome", "Satin Nickel", "Pure White", "Matte Charcoal"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & 10-Year Finish" },
      { label: "Installation", value: "Expert In-House Certified Joiners" },
      { label: "Thermal Efficiency", value: "Reduces window heat loss by up to 58%" },
      { label: "Acoustic Buffer", value: "Noticeable reduction in external street noise" },
      { label: "Lead Time", value: "6 - 8 Weeks Handcrafted to Order" },
      { label: "Measure Service", value: "100% Free In-Home Survey & Laser Measurement" }
    ],
    keyBenefits: [
      { title: "Complete Privacy & Light Balance", desc: "Angle louvres with a touch of a finger to block street views while basking your room in gentle daylight." },
      { title: "Insulation & Energy Savings", desc: "Creates an insulating air pocket against single or double glazed windows, locking in winter warmth." },
      { title: "Custom Split Louvre Control", desc: "Open the top slats for sky views while keeping the lower slats closed for complete privacy." },
      { title: "Tailored to the Millimetre", desc: "Custom mitred frames crafted to fit even non-square, heritage window reveals seamlessly." }
    ],
    faqs: [
      { q: "Can I open the entire shutter panel like a door?", a: "Yes. All panels are hinged and can swing open fully when you want unobstructed access to clean your windows or let fresh air in." },
      { q: "What is a mid-rail and do I need one?", a: "A mid-rail is a horizontal divider bar that allows you to tilt the top and bottom louvres independently. It also adds structural strength to taller windows." },
      { q: "Are full-height shutters easy to clean?", a: "Extremely easy. Unlike fabric curtains that harbor dust mites, shutters simply require a light wipe with a microfiber cloth or feather duster." }
    ]
  },
  {
    id: "cafe-style",
    slug: "cafe-style-shutters",
    name: "Café Style Shutters",
    category: "Plantation Shutters",
    img: sCafe,
    gallery: [sCafe, g2, sFull, g1],
    tagline: "Half-height panels providing street-level privacy while letting daylight flood into the room above.",
    desc: "Half-height panels that guard privacy while letting daylight pour in above.",
    overview: `Inspired by traditional Parisian cafés and Continental townhouses, Café Style shutters cover only the lower portion of your window reveal — typically up to the mid-transom or sash meeting rail.

This creates the ultimate balance of privacy and natural illumination: passing pedestrians cannot see into your ground-floor rooms, while the top half of your window remains open to receive unobstructed blue sky, natural sunlight, and outdoor views. They are especially charming when paired with drapery or sheer dressings.`,
    idealFor: [
      "Ground floor living rooms & dining areas",
      "Urban townhouses & Victorian terraces",
      "Kitchen sinks and breakfast nooks",
      "Rooms that require maximum natural light without sacrificing privacy"
    ],
    materials: [
      "Solid Paulownia Hardwood",
      "Premium Basswood",
      "Moisture-Resistant Polymer"
    ],
    customizations: {
      louvreSizes: ["63mm (Classic)", "76mm (Most Popular)", "89mm (Modern Open)"],
      tiltMechanisms: ["Clearview Hidden Tilt", "Central Heritage Rod"],
      finishes: ["28 Silk Paint Shades", "16 Wood Stains", "Custom Color Match"],
      hingeOptions: ["Brushed Brass", "Antique Bronze", "Polished Chrome", "Satin White"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & 10-Year Finish" },
      { label: "Installation", value: "Professional In-House Master Fitters" },
      { label: "Height Options", value: "Custom built to exact window sash or transom line" },
      { label: "Lead Time", value: "6 - 8 Weeks Handcrafted to Order" },
      { label: "Measure Service", value: "Free In-Home Laser Measurement" }
    ],
    keyBenefits: [
      { title: "Maximum Daylight Inflow", desc: "The top half remains open for boundless natural light all day long." },
      { title: "Street-Level Privacy Shield", desc: "Guards your personal space from passersby in roadside and urban homes." },
      { title: "Charming Continental Look", desc: "A chic, understated aesthetic that complements both heritage and modern interiors." },
      { title: "Cost-Effective Bespoke Choice", desc: "Requires less material than full height while providing targeted privacy." }
    ],
    faqs: [
      { q: "How high up the window should café shutters go?", a: "We usually align the top of the café shutter frame with your window's existing horizontal glazing bar or mid-transom for a harmonious architectural finish." },
      { q: "Can I combine café shutters with curtains?", a: "Absolutely. Café shutters pair beautifully with floor-length curtains or roman blinds for evening coziness." }
    ]
  },
  {
    id: "tier-on-tier",
    slug: "tier-on-tier-shutters",
    name: "Tier-on-Tier Shutters",
    category: "Plantation Shutters",
    img: sTier,
    gallery: [sTier, g3, sFull, g2],
    tagline: "Independent upper and lower panels for the most versatile light, view, and privacy control possible.",
    desc: "Independent upper and lower panels for complete, precise control of light.",
    overview: `Tier-on-Tier shutters offer the ultimate in architectural flexibility. Comprising two independent tiers of shutter panels — one stacked directly above the other within a single reveal — you can open, fold back, or tilt each tier completely independently.

Fold the top panels wide open to flood your room with sunshine, while keeping the lower panels closed and louvres angled for privacy. Alternatively, open all four panels for full window exposure, or close everything for superior insulation and shade.`,
    idealFor: [
      "Tall Victorian & Edwardian sash windows",
      "Bedrooms overlooking streets or neighbors",
      "Home offices needing glare-free light",
      "Properties wanting the flexibility of both café style and full height"
    ],
    materials: [
      "Lightweight Solid Paulownia (Reduces hinge load for multi-panel setups)",
      "Premium Furniture-Grade Basswood"
    ],
    customizations: {
      louvreSizes: ["63mm", "76mm", "89mm"],
      tiltMechanisms: ["Clearview Hidden Tilt", "Central Wood Tilt Rod"],
      finishes: ["28 Silk Paint Tones", "16 Timber Stains", "Bespoke Color Match"],
      hingeOptions: ["Polished Chrome", "Brushed Brass", "Antique Bronze", "White", "Black"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & 10-Year Finish" },
      { label: "Installation", value: "Precision Master Joinery Installation" },
      { label: "Split Configuration", value: "Custom tier split aligned to window transoms" },
      { label: "Thermal Rating", value: "Superior insulating barrier against draughts" },
      { label: "Lead Time", value: "6 - 8 Weeks" }
    ],
    keyBenefits: [
      { title: "Ultimate Versatility", desc: "Fold open top panels, close bottom panels, or angle louvres independently." },
      { title: "Seamless Architectural Fit", desc: "Tier split is calibrated to your sash meeting rails for perfect symmetry." },
      { title: "Full Shading & Blackout Options", desc: "Enjoy complete darkness when desired, or total light flooding when open." },
      { title: "Elevated Period Kerb Appeal", desc: "Enhances the exterior facade of your home with timeless British elegance." }
    ],
    faqs: [
      { q: "Is Tier-on-Tier suitable for all window sizes?", a: "Tier-on-tier works best on taller windows (over 1.4m high) where both tiers have balanced proportions." },
      { q: "Can the top panels fold back 180 degrees?", a: "Yes, depending on your window recess depth and surrounding wall clearance, panels can fold flat against the wall." }
    ]
  },
  {
    id: "bay-window",
    slug: "bay-window-shutters",
    name: "Bay Window Shutters",
    category: "Plantation Shutters",
    img: sBay,
    gallery: [sBay, g1, g3, sFull],
    tagline: "Custom angled, mitred, and hinged to follow every facet of your bay window with tailored precision.",
    desc: "Perfectly angled to your bay, mitred and hinged for a seamless finish.",
    overview: `Bay windows are one of the most stunning features of British homes, but dressing them with heavy curtains often obscures their beautiful geometry and consumes valuable floor space.

Our Bay Window Shutters are custom-engineered for 3-facet, 5-facet, splay, and 90-degree box bays. Using custom corner posts and precision-mitred timber framing, our shutters hug the exact contours of each individual bay angle. They reclaim your room's footprint, accentuate natural light from every angle, and dramatically upgrade interior aesthetics.`,
    idealFor: [
      "Victorian & Edwardian splay bays",
      "1930s curved and multi-facet bay windows",
      "Modern box & square bay configurations",
      "Living rooms with bay seating or radiators beneath"
    ],
    materials: [
      "Solid Paulownia Hardwood",
      "Premium Basswood",
      "Waterproof ABS Polymer"
    ],
    customizations: {
      bayTypes: ["Splay Bay (Angled)", "Box Bay (90° Corners)", "Curved Multi-Facet Bay"],
      louvreSizes: ["63mm", "76mm", "89mm", "114mm"],
      tiltMechanisms: ["Clearview Hidden Rear Tilt", "Central Heritage Rod"],
      finishes: ["28 Satin Paint Finishes", "16 Wood Stains", "Designer Color Matching"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & 10-Year Finish" },
      { label: "Angle Posts", value: "Custom CNC-machined corner posts to match exact angles" },
      { label: "Space Saving", value: "Reclaims 100% of bay floor & sill space versus curtains" },
      { label: "Lead Time", value: "6 - 8 Weeks Handcrafted" }
    ],
    keyBenefits: [
      { title: "Reclaims Bay Floor Space", desc: "No bulky curtains bunching up in corners — keeps your bay sill clean and spacious." },
      { title: "Custom Bay Corner Posts", desc: "Bespoke angled joinery posts ensure airtight alignment between adjoining frames." },
      { title: "Multi-Directional Sunlight", desc: "Direct sunlight across morning, afternoon, and evening angles effortlessly." },
      { title: "Thermal Insulation for Cold Bays", desc: "Bays are notoriously draughty; our solid timber shutters seal out chills effectively." }
    ],
    faqs: [
      { q: "My bay window has uneven angles. Can you still fit shutters?", a: "Yes. Our surveyors use digital laser measurement tools to record every individual angle and bevel, custom-machining each corner post to fit your exact bay." },
      { q: "Can I still put plants or ornaments on my bay windowsill?", a: "Yes! Because shutters sit neatly within the window reveals, your entire windowsill remains clear and usable." }
    ]
  },
  {
    id: "french-door",
    slug: "french-door-shutters",
    name: "French Door Shutters",
    category: "Plantation Shutters",
    img: sFrench,
    gallery: [sFrench, g4, sBay, sTracked],
    tagline: "Sculpted timber frames that attach directly to the door, operating smoothly without obstructing handles.",
    desc: "Slim, sculpted frames that move with the door and stay flawlessly aligned.",
    overview: `French Door shutters are custom-crafted to attach directly to patio and French garden doors. Featuring engineered cut-outs for door handles, multi-point locking keys, and lever hardware, they move as one with the doors as you step in and out of your garden.

No flapping blinds or tangled cords when a summer breeze blows. Our French door shutters provide robust security, privacy from garden sightlines, and effortless elegance whether doors are closed or swung wide open.`,
    idealFor: [
      "French garden doors & patio doors",
      "Balcony access doors in bedrooms and living rooms",
      "High-traffic garden entrances",
      "Doors where standard blinds flap or get caught in doorframes"
    ],
    materials: [
      "Solid Paulownia Hardwood (Lightweight, durable)",
      "High-Impact ABS Co-Polymer"
    ],
    customizations: {
      handleCutouts: ["Custom curved handle recess", "Square lever surround", "Keyhole access"],
      louvreSizes: ["63mm", "76mm", "89mm"],
      tiltMechanisms: ["Clearview Hidden Tilt", "Central Wood Rod"],
      finishes: ["28 Satin Paint Finishes", "16 Wood Stains", "Color Matching"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & 10-Year Finish" },
      { label: "Hardware Fit", value: "Custom handle cut-outs tailored to your hardware" },
      { label: "Operation", value: "Swings seamlessly with the door" },
      { label: "Lead Time", value: "6 - 8 Weeks" }
    ],
    keyBenefits: [
      { title: "Integrated Door Movement", desc: "Panels are secured to the door so you can open and close the door in one natural motion." },
      { title: "Precision Handle Cut-Outs", desc: "Meticulously crafted recesses ensure handles and locks turn freely with zero obstruction." },
      { title: "Wind & Breeze Stability", desc: "Never bangs against the frame in garden draughts like loose fabric or venetians." },
      { title: "Garden Privacy & Sun Shade", desc: "Shields your interior furnishings from harsh UV bleaching while maintaining garden views." }
    ],
    faqs: [
      { q: "Will the shutters interfere with my door handles?", a: "No. We measure the exact projection of your handles and construct custom cut-out frame sections that allow smooth operation." }
    ]
  },
  {
    id: "tracked",
    slug: "tracked-shutters",
    name: "Tracked Shutters",
    category: "Plantation Shutters",
    img: sTracked,
    gallery: [sTracked, g4, sFrench, g1],
    tagline: "Smooth-gliding shutter panels on an unobtrusive concealed track for large bi-fold doors and wide glass expanses.",
    desc: "Ideal for wide openings and patio doors — glide smoothly on a hidden track.",
    overview: `For modern bi-folding doors, expansive sliding glass panels, and open-plan room dividers, Tracked Shutters are the ultimate architectural dressing.

Suspended from a precision-engineered aluminium top track, panels glide effortlessly along the opening. Choose between a By-Pass track (where panels slide smoothly behind each other) or a By-Fold track (where panels fold neatly concertina-style against the wall). They effortlessly manage light and privacy over spans of up to 7 metres without sagging or ground resistance.`,
    idealFor: [
      "Bi-fold patio doors & modern sliding glass walls",
      "Wide picture windows and terrace glass",
      "Open-plan living room dividers & wardrobe screens",
      "Expansive glazing requiring clean architectural lines"
    ],
    materials: [
      "Ultra-Lightweight Solid Paulownia Hardwood",
      "High-Grade Aluminium Top Track with Ball-Bearing Rollers"
    ],
    customizations: {
      trackingStyles: ["By-Fold (Concertina folding to one or both sides)", "By-Pass (Smooth sliding behind adjacent panels)"],
      louvreSizes: ["76mm", "89mm", "114mm"],
      tiltMechanisms: ["Clearview Hidden Tilt", "Central Rod"],
      finishes: ["28 Satin Paint Finishes", "16 Wood Stains", "Custom Color Matching"]
    },
    specifications: [
      { label: "Warranty", value: "Lifetime Mechanism & Track Guarantee" },
      { label: "Track System", value: "Heavy-duty extruded aluminium with silent nylon rollers" },
      { label: "Max Width", value: "Up to 7.2 metres continuous span" },
      { label: "Lead Time", value: "6 - 8 Weeks" }
    ],
    keyBenefits: [
      { title: "Effortless Gliding Action", desc: "Whisper-quiet ball-bearing rollers glide wide expanses of timber with finger-light touch." },
      { title: "By-Fold or By-Pass Configurations", desc: "Fold panels out of the way or slide them smoothly in parallel tracks." },
      { title: "Perfect for Bi-Fold Glass", desc: "Dresses modern glass extensions without bulky curtains or tangled blind cords." },
      { title: "Architectural Room Divider", desc: "Can also be used as elegant sliding partitions between open-plan living zones." }
    ],
    faqs: [
      { q: "Is a bottom track required on the floor?", a: "In most installations, a recessed low-profile bottom guide is used to maintain stability, which can be sunk flush with wooden flooring or tiles." },
      { q: "Can I fold all panels to one side?", a: "Yes, you can configure the panels to stack all to the left, all to the right, or split evenly to both sides." }
    ]
  }
];

export const blinds = [
  {
    id: "roller-blinds",
    slug: "roller-blinds",
    name: "Roller Blinds",
    category: "Luxury Blinds",
    img: bRoller,
    gallery: [bRoller, g2, g4, bRoman],
    tagline: "Clean, minimalist aesthetics crafted in luxury textured fabrics, thermal blackouts, and motorized options.",
    desc: "Clean, minimal lines in luxury fabrics.",
    overview: `Our bespoke Roller Blinds bring modern sophistication and refined simplicity to every room. Engineered with precision aluminium barrels and smooth-glide mechanisms, they roll up into a neat, compact profile that leaves your window views completely open.

Choose from hundreds of curated fabrics — including semi-translucent voiles for softened daylight, rich woven textures for warmth, and 100% blackout backings for deep, restful sleep in bedrooms. Available with child-safe chain operation or whisper-quiet smart motorization with remote and smart home integration.`,
    idealFor: [
      "Bedrooms needing 100% blackout",
      "Bathrooms & kitchens with moisture-resistant fabrics",
      "Modern apartments and clean-lined contemporary rooms",
      "Office spaces needing anti-glare screen protection"
    ],
    materials: [
      "Luxury Woven Textured Linens",
      "100% Thermal Blackout Multi-Layer Fabrics",
      "Anti-Microbial & Wipeable Moisture-Resistant PVC",
      "Screen Voiles with 1%, 3%, 5% Openness"
    ],
    customizations: {
      controlOptions: ["Somfy® Smart Motorized (App, Alexa, Remote)", "Child-Safe Precision Metal Bead Chain", "Spring Cordless Touch Lift"],
      cassetteOptions: ["Fabric-Matched Curved Cassette", "Sleek Brushed Aluminium Fascia", "Open Roll with Finished Bottom Bar"],
      bottomBars: ["Sewn-in Concealed Pocket", "Exposed Anodised Chrome / Brass / Matte Black Bar"],
      fabricStyles: ["Over 200 designer plain, textured, and patterned fabrics"]
    },
    specifications: [
      { label: "Warranty", value: "5-Year Comprehensive Warranty" },
      { label: "Motorization", value: "Rechargeable Lithium-Ion Motors (6+ months per charge)" },
      { label: "Child Safety", value: "100% Compliant with BS EN 13120 Safety Standards" },
      { label: "Lead Time", value: "2 - 3 Weeks Handcrafted" }
    ],
    keyBenefits: [
      { title: "Ultra-Compact Footprint", desc: "Rolls up discreetly to let maximum natural daylight fill your space." },
      { title: "Complete Thermal Blackout", desc: "Multi-layered blackout coatings prevent early morning sunrise wakeups." },
      { title: "Smart Motorization Ready", desc: "Control blinds via smartphone, voice assistant, or set automated sunrise schedules." },
      { title: "Wipe-Clean Durability", desc: "Resistant to moisture and stains, ideal for bathrooms and culinary zones." }
    ],
    faqs: [
      { q: "Can roller blinds be motorized without hardwiring?", a: "Yes. Our rechargeable lithium battery motors require zero electrical work and last up to 6–9 months on a single USB-C charge." },
      { q: "Are roller blinds effective at keeping bedrooms dark?", a: "Yes! When fitted inside or outside the recess with our premium blackout fabrics, they block virtually all incoming light." }
    ]
  },
  {
    id: "roman-blinds",
    slug: "roman-blinds",
    name: "Roman Blinds",
    category: "Luxury Blinds",
    img: bRoman,
    gallery: [bRoman, g1, g3, bRoller],
    tagline: "Sumptuous soft folds and tailored drapery fabrics that create warmth, depth, and timeless opulence.",
    desc: "Soft folds and tailored elegance.",
    overview: `Handcrafted with the meticulous care of fine soft furnishings, our bespoke Roman Blinds introduce lavish texture and cozy sophistication to your windows. When raised, they gather in neat, tailored horizontal pleats that form an elegant fabric valance; when lowered, they lie flat to showcase rich fabric patterns and textures.

Every Roman blind is custom made in our workshop with hand-stitched edges, premium interlining for plush body, and your choice of blackout or thermal insulation lining.`,
    idealFor: [
      "Living rooms, dining rooms & cozy snugs",
      "Master suites and guest bedrooms",
      "Bay windows paired with dressed curtains",
      "Interiors seeking fabric warmth and opulent texture"
    ],
    materials: [
      "Pure Natural Linens & Textured Cottons",
      "Sumptuous Velvets & Chenilles",
      "Tailored Wool Blends & Damasks",
      "Bonded Thermal Fleece & High-Density Blackout Interlinings"
    ],
    customizations: {
      foldStyles: ["Classic Waterfall Folds", "Flat Stack Tailored Pleats", "Soft Relaxed Hobbled Folds"],
      liningTypes: ["Standard Sateen Lining", "Thermal Insulating Lining", "Total Blackout Interlining"],
      controls: ["Continuous Chrome / Brass Metal Chain", "Rechargeable Motorized System with Remote"]
    },
    specifications: [
      { label: "Warranty", value: "5-Year Guarantee" },
      { label: "Craftsmanship", value: "Hand-finished borders with invisible stitch lines" },
      { label: "Thermal Rating", value: "High thermal retention with padded interlining" },
      { label: "Lead Time", value: "2 - 3 Weeks" }
    ],
    keyBenefits: [
      { title: "Drapery Luxury in a Blind", desc: "Brings the rich tactile texture of designer curtains into a streamlined window blind." },
      { title: "Plush Thermal Interlining", desc: "Thick bonded fleece interlining traps warmth and prevents window draughts." },
      { title: "Hand-Stitched Finish", desc: "No visible stitch lines across the front face for a flawless showroom appearance." },
      { title: "Versatile Layering", desc: "Looks stunning on its own or layered beneath dress curtains for added depth." }
    ],
    faqs: [
      { q: "How do Roman blinds stack when pulled up?", a: "The horizontal rods gently gather the fabric into crisp, overlapping pleats that sit neatly at the top of the window frame." }
    ]
  },
  {
    id: "vertical-blinds",
    slug: "vertical-blinds",
    name: "Vertical Blinds",
    category: "Luxury Blinds",
    img: bVertical,
    gallery: [bVertical, g4, bRoller, bVenetian],
    tagline: "Contemporary vertical louvres providing expansive light filtering and rotation for wide patio windows.",
    desc: "Sleek control for wide windows.",
    overview: `Modernized for today’s homes, our vertical blinds combine expansive window coverage with refined, minimalist styling. Featuring 180-degree rotating fabric louvres suspended from a slim aluminium headrail, they give you complete direction control over sunlight and glare throughout the day.

Gone are the noisy, fragile chains of the past: our vertical blinds feature modern chainless sealed bottom weights and wand-controlled safety operations in chic woven, blackout, and textured textiles.`,
    idealFor: [
      "Floor-to-ceiling windows and sliding patio doors",
      "Curved and sloping conservatory glazing",
      "Home offices and study spaces",
      "Wide commercial and modern residential glass"
    ],
    materials: [
      "Woven Textured Crepes & Linens",
      "Blackout Thermal Fabrics",
      "Flame Retardant & Easy-Wipe PVC for High-Traffic Areas"
    ],
    customizations: {
      vaneWidths: ["89mm (Slim contemporary louvre)", "127mm (Wide open louvre)"],
      drawOptions: ["Split Draw (Parts in the center)", "Left Stack", "Right Stack"],
      bottomWeights: ["Chainless Sewn-in Sealed Weights (No loose bottom chains)", "Classic Linked Chain"],
      headrailFinishes: ["Anodised Silver", "Pure White", "Sleek Matte Black", "Champagne Gold"]
    },
    specifications: [
      { label: "Warranty", value: "5-Year Guarantee" },
      { label: "Operation", value: "Monocommand Child-Safe Single Wand or Cord System" },
      { label: "Rotation", value: "Smooth 180° bidirectional louvre tilt" },
      { label: "Lead Time", value: "2 - 3 Weeks" }
    ],
    keyBenefits: [
      { title: "Directional Glare Shielding", desc: "Rotate louvres to follow the sun's trajectory, deflecting direct glare from monitors and TVs." },
      { title: "Chainless Sealed Bottom Weights", desc: "No tangled bottom chains — completely child and pet friendly with silent movement." },
      { title: "Covers Vast Window Spans", desc: "Cost-effectively dresses very wide glass patio doors and conservatory walls." },
      { title: "Easy Draw Access", desc: "Glide the slats to one side in a second when walking in and out of patio doors." }
    ],
    faqs: [
      { q: "Do these vertical blinds have messy bottom chains?", a: "No! We use modern chainless sealed weights welded directly inside the fabric hem, creating a clean look that pets cannot tangle." }
    ]
  },
  {
    id: "venetian-blinds",
    slug: "venetian-blinds",
    name: "Venetian Blinds",
    category: "Luxury Blinds",
    img: bVenetian,
    gallery: [bVenetian, g1, bRoman, sFull],
    tagline: "Warm natural hardwood, faux wood, and brushed metallic slats for refined horizontal light control.",
    desc: "Warm timber and refined metals.",
    overview: `Venetian blinds offer classic linear elegance and tactile craftsmanship. With adjustable horizontal slats, you can fine-tune incoming daylight, cast beautiful shadow lines across your floor, and protect your privacy with a quick turn of the control.

Crafted from solid kiln-dried Basswood for genuine timber warmth, lightweight architectural aluminium for minimalist sleekness, or composite faux wood for high-humidity bathrooms and kitchens. Enhance your blinds with luxury herringbone fabric tapes for a bespoke, tailored finish.`,
    idealFor: [
      "Home offices and studies",
      "Bathrooms and utility rooms (Faux wood option)",
      "Living rooms & bedrooms",
      "Kitchens and bay windows"
    ],
    materials: [
      "Kiln-Dried Solid Basswood (Rich natural grain)",
      "High-Density Moisture-Proof Faux Wood",
      "Architectural Grade Anodised Aluminium"
    ],
    customizations: {
      slatSizes: ["25mm (Delicate heritage)", "35mm (Classic mid-scale)", "50mm (Most popular shutter-look scale)"],
      tapeOptions: ["Decorative Woven Herringbone Cloth Tapes (25mm & 38mm)", "Standard Matching Color Cords"],
      finishes: ["Over 40 painted satin colors, natural wood stains, and metallic brushes"]
    },
    specifications: [
      { label: "Warranty", value: "5-Year Guarantee" },
      { label: "Child Safety", value: "Fully compliant cord cleats and breakaways" },
      { label: "Valance", value: "Includes matching timber valance fascia to conceal headrail" },
      { label: "Lead Time", value: "2 - 3 Weeks" }
    ],
    keyBenefits: [
      { title: "Precise Horizontal Tilt", desc: "Angle slats up or down to bounce light onto ceilings while blocking views from outside." },
      { title: "Bespoke Fabric Tape Trims", desc: "Add luxurious cotton herringbone tapes to match your interior color scheme." },
      { title: "Moisture-Proof Options", desc: "Our faux-wood range withstands steamy bathrooms and kitchen sinks without warping." },
      { title: "Matching Timber Valance", desc: "Every wooden blind comes with a matching decorative valance covering the metal mechanism." }
    ],
    faqs: [
      { q: "What is the difference between real wood and faux wood?", a: "Real Basswood is lighter and showcases authentic natural timber grain. Faux wood is crafted from composite polymer, making it 100% waterproof and wipeable for bathrooms." }
    ]
  }
];

export const allProducts = [...shutters, ...blinds];

export function getProductBySlug(slug) {
  if (!slug) return null;
  return allProducts.find(p => p.slug === slug || p.id === slug) || null;
}

export const trust = [
  { icon: Users,       stat: "500+",     label: "Happy Customers" },
  { icon: Sparkles,    stat: "Premium",  label: "Materials" },
  { icon: Hammer,      stat: "Expert",   label: "Installation" },
  { icon: ShieldCheck, stat: "Fully",    label: "Insured" },
  { icon: Award,       stat: "10+ Yrs",  label: "Experience" },
  { icon: Star,        stat: "5-Star",   label: "Rated" },
];

export const steps = [
  { n: "01", title: "Request a Quote",          text: "Tell us about your windows and the look you're after." },
  { n: "02", title: "Free Home Measure",        text: "A specialist visits, measures every reveal and advises on style." },
  { n: "03", title: "Custom Build",             text: "Your shutters are handcrafted from premium hardwood or ABS." },
  { n: "04", title: "Professional Installation",text: "Our fitters install with meticulous care — no fuss, no mess." },
];

export const businessInfo = {
  name: "Solarium Shutters & Blinds",
  address: "4 Broadhalgh Road, Rochdale, England",
  phone: "+44 (745) 123-45-67",
  email: "hello@solariumshutters.co.uk",
  openingHours: [
    { days: "Mon – Fri", hours: "08:00 AM – 04:00 PM" },
    { days: "Sat – Sun", hours: "08:00 AM – 12:00 PM" }
  ]
};

export const reviews = [
  { name: "Amelia Whitaker", location: "Bamford, Rochdale", quote: "Absolutely stunning. The team measured, made and fitted our bay window shutters flawlessly. It has transformed the whole room." },
  { name: "James Callahan",  location: "Norden, Rochdale",  quote: "From the first visit to the final install, everything was calm, considered and precise. Truly craftsman quality." },
  { name: "Priya Desai",     location: "Rochdale",          quote: "No pressure, no upsell — just honest advice and beautiful shutters. Six windows done and every one is perfect." },
];

export const faqs = [
  { q: "How do bespoke plantation shutters and blinds compare?", a: "Plantation shutters are permanently hinged architectural fixtures adding property value and superior insulation. Blinds offer lightweight, versatile fabric styling with fast turnaround." },
  { q: "How long does installation take?",              a: "Most homes are installed in a single day. Larger properties or bay windows may take up to two, and we protect every surface as we work." },
  { q: "Do you measure and install yourselves?",        a: "Yes. We never sub-contract. The specialist who measures your windows works with the same fitters throughout the project." },
  { q: "What warranty do you provide?",                 a: "All plantation shutters come with a lifetime guarantee on the mechanism and a 10-year finish warranty. Blinds are covered for 5 years." },
  { q: "Which styles suit period homes?",               a: "Full-height, café style, and bay window shutters in our solid hardwood range are the most popular choices for Victorian and Edwardian properties." },
];

export const areas = [
  "Rochdale", "Bamford", "Norden", "Broadhalgh", "Castleton",
  "Milnrow", "Littleborough", "Wardle", "Heywood", "Middleton",
  "Shaw", "Greater Manchester",
];
