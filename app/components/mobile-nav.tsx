"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["About","#about"],["Properties","#properties"],["Services","#services"],["Contact","#contact"]];
export default function MobileNav(){const [open,setOpen]=useState(false);return <div className="mobile-nav"><button className="menu-button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button>{open&&<div className="mobile-menu">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="mobile-cta" href="https://wa.me/233209601579">Enquire Now <span>↗</span></a></div>}</div>}
