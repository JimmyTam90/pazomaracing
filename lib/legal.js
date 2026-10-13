import { SITE } from "./site-config";
const E = SITE.contactEmail;
export const LEGAL = {
  privacy: { title: "Privacy policy", body: [
    "This site is operated by PrimeGearLab as an independent affiliate publisher.",
    "We do not collect information through forms. If Google Analytics 4 or Meta Pixel are enabled on this deployment, they set cookies and send page-view and link-click events (such as which category button you selected) to those providers. Your browser settings can block them.",
    "When you click a button you leave this site for pazomaracing.com, which has its own privacy policy and handles your order and payment.",
    `Questions about this policy: ${E}.`] },
  terms: { title: "Terms of use", body: [
    "This page is general information, not professional advice. Product details, availability and prices are controlled by the merchant and may change.",
    "Always confirm fitment and installation requirements with the merchant before buying.",
    "We are not responsible for merchant products, orders, shipping, returns or warranties.",
    `Contact: ${E}.`] },
  "affiliate-disclosure": { title: "Affiliate disclosure", body: [
    "PrimeGearLab is an independent product guide. We may earn a commission when you purchase through qualifying links on this page, at no additional cost to you.",
    "PrimeGearLab is not Pazoma Racing, and is not an official store, dealer or partner of the merchant unless stated otherwise.",
    "Every button that leads to pazomaracing.com is an affiliate link and opens in a new tab."] },
  contact: { title: "Contact", body: [`Email: ${E}`, "For orders, shipping or returns, contact the merchant directly through pazomaracing.com."] },
};
