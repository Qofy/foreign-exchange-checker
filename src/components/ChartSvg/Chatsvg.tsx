type Props = {}

export default function Chatsvg({}: Props) {
  return (
   <svg className="chart" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="800" y2="50" stroke="#333" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="#333" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="250" x2="800" y2="250" stroke="#333" strokeWidth="1" opacity="0.3" />

                {/* Chart area background */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#C8FF00', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#C8FF00', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>

                {/* Area */}
                <path
                  d="M 0 180 Q 50 100 100 120 T 200 80 T 300 140 T 400 70 T 500 150 T 600 90 T 700 110 T 800 60 L 800 300 L 0 300 Z"
                  fill="url(#chartGradient)"
                />

                {/* Line */}
                <polyline
                  points="0,180 50,100 100,120 150,140 200,80 250,160 300,140 350,170 400,70 450,130 500,150 550,110 600,90 650,120 700,110 750,85 800,60"
                  fill="none"
                  stroke="#C8FF00"
                  strokeWidth="2"
                />

                {/* X-axis labels */}
                <text x="20" y="290" fontSize="12" fill="#666" textAnchor="middle">Apr 14</text>
                <text x="200" y="290" fontSize="12" fill="#666" textAnchor="middle">Apr 21</text>
                <text x="380" y="290" fontSize="12" fill="#666" textAnchor="middle">Apr 28</text>
                <text x="560" y="290" fontSize="12" fill="#666" textAnchor="middle">May 06</text>
                <text x="780" y="290" fontSize="12" fill="#666" textAnchor="middle">May 14</text>
              </svg>
  )
};