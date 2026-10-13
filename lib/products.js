// Single catalog manifest used by cards, CTAs and analytics labels.
// Image URLs: observed on pazomaracing.com on 2026-10-13 (not runtime-fetched here).
// destinationStatus lives in lib/affiliate-links.js (DESTINATION_STATUS).
const CDN = "https://www.pazomaracing.com/cdn/shop/files/";
export const CATEGORIES = [
  { id: "motorcycle-exhausts", name: "Exhaust systems", ctaLabel: "Explore Exhaust Systems",
    description: "Full 2-into-1 systems and slip-on mufflers listed for Harley Softail, Touring and Dyna models.",
    image: { src: CDN + "2-into-1_Full_Complete_Exhaust_System_Stainless_Steel_Muffler_For_Harley_Softail_Low_Rider_S_ST_EI_Diablo_Street_Bob_Standard_2018-2024.jpg?v=1788530438", alt: "2-into-1 stainless steel exhaust system for Harley Softail", imageStatus: "OBSERVED" } },
  { id: "handlebars-controls", name: "Handlebars and controls", ctaLabel: "Browse Handlebars & Controls",
    description: "Club-style bars and CNC hand controls. Match year, model and bar diameter on each listing.",
    image: { src: CDN + "ClubStyleMotoBarsStainlessPerformanceMid-Rise1DiaHandlebarForHarleyRoadGlideStreetGlideUltraSTCVOFLTRX2023.5-2025_5_300x.jpg?v=1751303835", alt: "Club style stainless mid-rise handlebar for Harley Road Glide and Street Glide", imageStatus: "OBSERVED" } },
  { id: "led-lighting-signals", name: "LED lighting and signals", ctaLabel: "Browse LED Lighting",
    description: "LED headlights, auxiliary light brackets and daytime running light kits.",
    image: { src: CDN + "534SlimLineLEDHeadlightKitforHarleySoftailM8LowRiderSTFXLRSTwAdapterBracket_9_300x.jpg?v=1749325027", alt: "5 3/4 inch slim line LED headlight kit for Harley Softail", imageStatus: "OBSERVED" } },
  { id: "engine-guards-sliders", name: "Engine guards and sliders", ctaLabel: "View Crash Bars & Sliders",
    description: "Highway crash bars, engine guards and saddlebag guards for Softail and Touring.",
    image: { src: CDN + "HarleySoftailLowRiderFXBBSFXLRSSTFXSTFXRSTHighwayEngineGuardCrashBarFrameSliderWSkidPlateChassisProtectionCover18UP_1_300x.jpg?v=1695821568", alt: "Highway engine guard crash bar with skid plate for Harley Softail", imageStatus: "OBSERVED" } },
  { id: "seats-saddlebags", name: "Seats and saddlebags", ctaLabel: "Explore Seats & Saddlebags",
    description: "Comfort seats, passenger pads and luggage options.",
    image: { src: CDN + "HarleyM8SoftailLowRiderSTSSportGlideFLSBFXLRFXLRSFXLRST11718-2024LSStep2-UpGelPadSeatComforttypeWidenedPassengerSeat_1_300x.jpg?v=1729685563", alt: "Gel pad 2-up seat for Harley Softail Low Rider", imageStatus: "OBSERVED" } },
  { id: "windshields-fairings", name: "Windshields and fairings", ctaLabel: "Explore Windshields & Fairings",
    description: "Front fairings and headlight masks, including light-bracket kits.",
    image: { src: CDN + "Harley_T-Sport_Front_Fairing_wBaja_Designs_LP6_LED_Light_Bracket_Mount_Kit.jpg?v=1764761798", alt: "T-Sport front fairing with LED light bracket kit for Harley Softail", imageStatus: "OBSERVED" } },
  { id: "custom-mirrors", name: "Custom mirrors", ctaLabel: "Browse Custom Mirrors",
    description: "Replacement and custom mirrors, including CNC and fairing-mount styles listed by the merchant.",
    image: { src: "https://cdn.shopify.com/s/files/1/0020/8302/9103/collections/mirror.jpg?v=1562996315", alt: "Pazoma Racing mirrors collection banner", imageStatus: "OBSERVED" } },
  { id: "footpegs-pedals", name: "Footpegs and pedals", ctaLabel: "Browse Footpegs & Pedals",
    description: "Foot controls and pegs. Open the merchant collection for current options.", image: null },
];
export const HERO = {
  image: { src: "https://cdn.shopify.com/s/files/1/0020/8302/9103/files/Pazoma_Racing_Aftermarket_Motorcycle_Parts_Custom_Accessories_2.jpg?v=1790070047", alt: "Pazoma Racing aftermarket motorcycle parts and accessories", width: 900, height: 400 },
};
export const FITMENT = [
  "Make, model, year and trim: match them exactly to the listing.",
  "What is included: mounting hardware, brackets, wiring and instructions.",
  "Installation needs: cutting, drilling, wiring, tuning or special tools.",
  "Specs: material, finish, dimensions, connector or mounting style.",
  "Variant: confirm the color or option shown matches the one you select.",
  "Final price: taxes, shipping and any fees at checkout.",
];
export const STEPS = [
  "Pick a part type below.",
  "Open the merchant listing on Pazoma Racing.",
  "Check fitment, included parts, price, shipping and return terms.",
  "Complete any purchase on the merchant's website.",
];
export const FAQ = [
  ["Is this the official Pazoma Racing store?", "No. PrimeGearLab is an independent product guide. Orders are placed on pazomaracing.com."],
  ["Does using these links cost more?", "No. We may earn a commission from qualifying purchases at no additional cost to you."],
  ["How do I know a part fits my bike?", "Each listing names the models and years it was made for. Confirm it on the merchant's product page before you order. We can't confirm fitment for you."],
  ["Is installation easy?", "It depends on the part. Read the listing and the manufacturer's instructions. Some parts may need drilling, wiring or tuning."],
  ["Are these parts legal on public roads?", "Exhaust, lighting and other modifications can be restricted by local noise, emissions and safety rules. Check the rules where you ride."],
  ["What about shipping, returns and warranty?", "The merchant sets those terms and may change them. Read them on pazomaracing.com before checkout."],
];
