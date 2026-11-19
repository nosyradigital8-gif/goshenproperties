import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goshenproperties.example"),
  title: "Goshen Properties | Real Estate & Property Solutions in Ghana",
  description: "Discover modern homes, prime land opportunities and property solutions with Goshen Properties. Contact our team to discuss your property needs.",
  keywords: ["real estate company in Ghana", "properties for sale in Ghana", "homes in Ghana", "land for sale in Ghana", "property solutions Ghana", "modern homes Ghana"],
  openGraph: { title: "Goshen Properties | Real Estate & Property Solutions in Ghana", description: "Your trusted partner in real estate and property solutions.", type: "website", images: ["/images/properties/hero-modern-home.jpg"] },
  icons: { icon: "/images/branding/goshen-favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context":"https://schema.org", "@type":"RealEstateAgent", name:"Goshen Properties", description:"Your Trusted Partner in Real Estate & Property Solutions.", telephone:"+233209601579", email:"goshencompanylimited1@gmail.com", areaServed:"Ghana" };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
