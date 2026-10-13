// Image URLs were read from https://www.pazomaracing.com (homepage) on 2026-10-13.
// Status: URL seen on merchant page (URL_SYNTAX_VALID), not runtime-fetched here.
// Categories with no image found on the homepage have image: null (rendered as a text tile).
const CDN = "https://www.pazomaracing.com/cdn/shop/files/";
export const CATEGORIES = [
  { id: "motorcycle-exhausts", name: "Exhaust systems", description: "Full 2-into-1 systems and slip-on mufflers for Harley Softail, Touring and Dyna models.",
    image: { src: CDN + "2-into-1_Full_Complete_Exhaust_System_Stainless_Steel_Muffler_For_Harley_Softail_Low_Rider_S_ST_EI_Diablo_Street_Bob_Standard_2018-2024.jpg?v=1788530438", alt: "2-into-1 stainless steel exhaust system for Harley Softail" } },
  { id: "handlebars-controls", name: "Handlebars and controls", description: "Club-style bars and CNC hand controls. Check year and model fitment on each listing.",
    image: { src: CDN + "ClubStyleMotoBarsStainlessPerformanceMid-Rise1DiaHandlebarForHarleyRoadGlideStreetGlideUltraSTCVOFLTRX2023.5-2025_5_300x.jpg?v=1751303835", alt: "Club style stainless mid-rise handlebar for Harley Road Glide and Street Glide" } },
  { id: "led-lighting-signals", name: "LED lighting and signals", description: "LED headlights, auxiliary light brackets and daytime running light kits.",
    image: { src: CDN + "534SlimLineLEDHeadlightKitforHarleySoftailM8LowRiderSTFXLRSTwAdapterBracket_9_300x.jpg?v=1749325027", alt: "5 3/4 inch slim line LED headlight kit for Harley Softail" } },
  { id: "engine-guards-sliders", name: "Engine guards and sliders", description: "Highway crash bars, engine guards and saddlebag guards for Softail and Touring.",
    image: { src: CDN + "HarleySoftailLowRiderFXBBSFXLRSSTFXSTFXRSTHighwayEngineGuardCrashBarFrameSliderWSkidPlateChassisProtectionCover18UP_1_300x.jpg?v=1695821568", alt: "Highway engine guard crash bar with skid plate for Harley Softail" } },
  { id: "seats-saddlebags", name: "Seats and saddlebags", description: "Comfort seats, passenger pads and luggage options.",
    image: { src: CDN + "HarleyM8SoftailLowRiderSTSSportGlideFLSBFXLRFXLRSFXLRST11718-2024LSStep2-UpGelPadSeatComforttypeWidenedPassengerSeat_1_300x.jpg?v=1729685563", alt: "Gel pad 2-up seat for Harley Softail Low Rider" } },
  { id: "windshields-fairings", name: "Windshields and fairings", description: "Front fairings and headlight masks, including light-bracket kits.",
    image: { src: CDN + "Harley_T-Sport_Front_Fairing_wBaja_Designs_LP6_LED_Light_Bracket_Mount_Kit.jpg?v=1764761798", alt: "T-Sport front fairing with LED light bracket kit for Harley Softail" } },
  { id: "custom-mirrors", name: "Custom mirrors", description: "Replacement and custom mirrors. Browse the collection for current options.", image: null },
  { id: "footpegs-pedals", name: "Footpegs and pedals", description: "Foot controls and pegs. Browse the collection for current options.", image: null },
];
export const HERO = {
  image: { src: "https://cdn.shopify.com/s/files/1/0020/8302/9103/files/Pazoma_Racing_Aftermarket_Motorcycle_Parts_Custom_Accessories_2.jpg?v=1790070047", alt: "Pazoma Racing aftermarket motorcycle parts and accessories", width: 900, height: 400 },
};
export const FAQ = [
  ["Is this the official Pazoma Racing store?", "No. PrimeGearLab is an independent affiliate publisher. Purchases are completed on pazomaracing.com."],
  ["Does using these links cost more?", "No. We may earn a commission from qualifying purchases at no extra cost to you."],
  ["How do I know a part fits my bike?", "Each part lists the models and years it was made for. Confirm fitment on the merchant's product page before you order."],
  ["What about shipping, returns and warranty?", "Those terms are set by the merchant and can change. Read them on pazomaracing.com before checkout."],
];
