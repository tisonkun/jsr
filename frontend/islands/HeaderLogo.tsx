import { useState } from "preact/hooks";

// Copyright 2024 the JSR authors. All rights reserved. MIT license.
export function HeaderLogo(props: { class?: string }) {
  const [rotateDegrees, setRotateDegrees] = useState<number>(0);
  return (
    <a
      href="/"
      class="outline-none focus-visible:ring-2 ring-cyan-700"
      onMouseEnter={() => setRotateDegrees(rotateDegrees + 180)}
    >
      <span className="sr-only">JSR home</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 638 343"
        fill="none"
        class={`transition-transform duration-[360ms] ease-[cubic-bezier(0.67,-0.33,0.28,1.28)] ${props.class}`}
        aria-hidden="true"
        style={`transform: rotate(${rotateDegrees}deg);`}
      >
        <g fill-rule="evenodd">
          <path
            fill="#083344"
            d="M637.272 49v196h-98v98h-343v-49h-196V98h98V0h343v49h196Z"
          />
          <path
            fill="#F7DF1E"
            d="M100.101 196h47.171V49h49v196H51.102v-98H100.1v49ZM588.272 98v98h-49v-49h-49v147h-49V98h147ZM294.272 98v49h98v147h-147v-49h98v-49h-98V49h147v49h-98Z"
          />
        </g>
      </svg>
    </a>
  );
}
