import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Left stem */}
      <rect x="0" y="0" width="26" height="100" fill="#d85b1b" />
      
      {/* Top bar */}
      <rect x="26" y="0" width="74" height="26" fill="#d85b1b" />
      
      {/* Middle bar */}
      <rect x="26" y="42" width="54" height="26" fill="#d85b1b" />
      
      {/* Building outlines */}
      {/* Baseline */}
      <line x1="26" y1="99" x2="100" y2="99" stroke="#d85b1b" strokeWidth="2" />
      
      {/* Building 1 (Left) */}
      <rect x="66" y="70" width="8" height="29" fill="none" stroke="#d85b1b" strokeWidth="2" />
      
      {/* Building 2 (Middle, tallest) */}
      <rect x="76" y="55" width="10" height="44" fill="none" stroke="#d85b1b" strokeWidth="2" />
      
      {/* Building 3 (Right) */}
      <rect x="88" y="78" width="8" height="21" fill="none" stroke="#d85b1b" strokeWidth="2" />
      
      {/* Additional vertical lines to simulate windows/structure */}
      <line x1="70" y1="70" x2="70" y2="99" stroke="#d85b1b" strokeWidth="1" />
      <line x1="81" y1="55" x2="81" y2="99" stroke="#d85b1b" strokeWidth="1" />
    </svg>
  );
}
