export default function CtaEyebrow() {
  return (
    <span className="cta-eyebrow">
      <svg
        className="cta-radar"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeOpacity=".55"
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeOpacity=".35"
        />
        <g className="cta-radar-sweep">
          <path
            d="M12 12V3a9 9 0 0 1 9 9Z"
            fill="currentColor"
            fillOpacity=".15"
          />
          <path
            d="M12 12V3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <circle
          className="cta-radar-point"
          cx="16"
          cy="8"
          r="1.4"
          fill="currentColor"
        />
      </svg>
      Free strategy conversation
    </span>
  );
}
