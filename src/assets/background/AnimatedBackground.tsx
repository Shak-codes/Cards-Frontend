import * as React from "react";
import "./bg.scss"

// Define the type for the component's props
interface AnimatedBackgroundProps extends React.SVGProps<SVGSVGElement> {
  // Add any additional props here if needed
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="150vw"
    height="250vh"
    viewBox="0 0 150vw 250vh"
    {...props}
  >
    <defs>
      <pattern
        id="suitPattern"
        x={-50}
        y={0}
        width={100}
        height={100}
        patternUnits="userSpaceOnUse"
      >
        {/* Hearts */}
        <text x={10} y={20} fontSize={30} fill="black" className="pip">
          {"\u2665"}
        </text>
        {/* Spades */}
        <text x={60} y={20} fontSize={30} fill="black" className="pip">
          {"\u2660"}
        </text>
        {/* Diamonds */}
        <text x={10} y={80} fontSize={30} fill="black" className="pip">
          {"\u2666"}
        </text>
        {/* Clubs */}
        <text x={60} y={80} fontSize={30} fill="black" className="pip">
          {"\u2663"}
        </text>
      </pattern>
    </defs>
    <g className="animated-rect-group">
      <rect
        width="150vw"
        height="250vh"
        fill="url(#suitPattern)"
        fillOpacity={0.3}
        stroke="black"
        className="animated-rect"
      />
    </g>
  </svg>
);

export default AnimatedBackground;