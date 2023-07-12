import { css } from 'lit'

// -- Utilities ---------------------------------------------------------------
export function initializeTheming() {
  const styleTag = document.createElement('style')
  styleTag.dataset.wui = 'theme'
  styleTag.textContent = rootStyles.cssText
  document.head.appendChild(styleTag)
}

export function setColorTheme(theme: string) {
  document.documentElement.setAttribute('data-wui-theme', theme)
}

// -- Presets -----------------------------------------------------------------
export const rootStyles = css`
  :root {
    --wui-font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    --wui-font-size-micro: 10px;
    --wui-font-size-tiny: 12px;
    --wui-font-size-small: 14px;
    --wui-font-size-paragraph: 16px;
    --wui-font-size-large: 20px;

    --wui-font-weight-regular: 500;
    --wui-font-weight-medium: 600;
    --wui-font-weight-bold: 700;

    --wui-letter-spacing-large: -0.8px;
    --wui-letter-spacing-paragraph: -0.64px;
    --wui-letter-spacing-small: -0.56px;
    --wui-letter-spacing-tiny: -0.48px;
    --wui-letter-spacing-micro: -0.2px;

    --wui-color-inherit: inherit;

    --wui-border-radius-5xs: 4px;
    --wui-border-radius-4xs: 6px;
    --wui-border-radius-3xs: 8px;
    --wui-border-radius-xxs: 12px;
    --wui-border-radius-xs: 16px;
    --wui-border-radius-s: 20px;
    --wui-border-radius-m: 28px;
    --wui-border-radius-l: 36px;
    --wui-border-radius-3xl: 80px;

    --wui-icon-box-size-sm: 20px;
    --wui-icon-box-size-md: 24px;
    --wui-icon-box-size-lg: 40px;

    --wui-icon-size-inherit: inherit;
    --wui-icon-size-xxs: 8px;
    --wui-icon-size-xs: 10px;
    --wui-icon-size-sm: 12px;
    --wui-icon-size-md: 14px;
    --wui-icon-size-lg: 18px;

    --wui-wallet-image-size-inherit: inherit;
    --wui-wallet-image-size-sm: 40px;
    --wui-wallet-image-size-md: 56px;
    --wui-wallet-image-size-lg: 80px;

    --wui-spacing-0: 0px;
    --wui-spacing-4xs: 2px;
    --wui-spacing-3xs: 4px;
    --wui-spacing-xxs: 6px;
    --wui-spacing-xs: 8px;
    --wui-spacing-s: 12px;
    --wui-spacing-m: 14px;
    --wui-spacing-l: 16px;
    --wui-spacing-xl: 20px;
    --wui-spacing-xxl: 24px;
    --wui-spacing-3xl: 40px;

    --wui-ease-out-power-4: cubic-bezier(0, 0, 0.22, 1);
    --wui-ease-out-power-3: cubic-bezier(0, 0, 0.31, 1);
    --wui-ease-out-power-2: cubic-bezier(0, 0, 0.55, 1);
    --wui-ease-out-power-1: cubic-bezier(0, 0, 0.75, 1);

    --wui-ease-in-power-4: cubic-bezier(0.92, 0, 1, 1);
    --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
    --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
    --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

    --wui-ease-inout-power-4: cubic-bezier(0.75, 0, 0.25, 1);
    --wui-ease-inout-power-3: cubic-bezier(0.6, 0, 0.4, 1);
    --wui-ease-inout-power-2: cubic-bezier(0.45, 0, 0.55, 1);
    --wui-ease-inout-power-1: cubic-bezier(0.3, 0, 0.7, 1);

    --wui-duration-lg: 200ms;
    --wui-duration-md: 125ms;
    --wui-duration-sm: 75ms;

    --wui-cover: rgba(0, 0, 0, 0.3);

    --wui-box-shadow-blue: rgba(51, 150, 255, 0.16);

    --wui-z-index: 89;

    --wui-box-size-md: 100px;

    --wui-path-network: path(
      'M20.041 1.061a7.915 7.915 0 0 1 7.918 0l16.082 9.29A7.922 7.922 0 0 1 48 17.21v18.578c0 2.83-1.51 5.445-3.959 6.86l-16.082 9.29a7.915 7.915 0 0 1-7.918 0l-16.082-9.29A7.922 7.922 0 0 1 0 35.79V17.211c0-2.83 1.51-5.445 3.959-6.86l16.082-9.29Z'
    );
  }

  [data-wui-theme='dark'] {
    --wui-color-blue-100: #47a1ff;
    --wui-color-blue-090: #59aaff;
    --wui-color-blue-080: #6cb4ff;
    --wui-color-blue-015: rgba(71, 161, 255, 0.15);

    --wui-color-fg-100: #e4e7e7;
    --wui-color-fg-125: #d0d5d5;
    --wui-color-fg-150: #a8b1b1;
    --wui-color-fg-175: #a8b0b0;
    --wui-color-fg-200: #949e9e;
    --wui-color-fg-225: #868f8f;
    --wui-color-fg-250: #788080;
    --wui-color-fg-275: #788181;
    --wui-color-fg-300: #6e7777;

    --wui-color-bg-100: #141414;
    --wui-color-bg-125: #191a1a;
    --wui-color-bg-150: #1e1f1f;
    --wui-color-bg-175: #222525;
    --wui-color-bg-200: #272a2a;
    --wui-color-bg-225: #2c3030;
    --wui-color-bg-250: #313535;
    --wui-color-bg-275: #363b3b;
    --wui-color-bg-300: #3b4040;

    --wui-color-inverse-100: #fff;
    --wui-color-inverse-000: #000;

    --wui-color-success-100: #26d962;
    --wui-color-error-100: #f25a67;

    --wui-color-teal-100: #36e2e2;
    --wui-color-magenta-100: #cb4d8c;
    --wui-color-indigo-100: #516dfb;
    --wui-color-orange-100: #ffa64c;
    --wui-color-purple-100: #906ef7;

    --wui-overlay-002: rgba(255, 255, 255, 0.02);
    --wui-overlay-005: rgba(255, 255, 255, 0.05);
    --wui-overlay-010: rgba(255, 255, 255, 0.1);
    --wui-overlay-015: rgba(255, 255, 255, 0.15);
    --wui-overlay-020: rgba(255, 255, 255, 0.2);
    --wui-overlay-025: rgba(255, 255, 255, 0.25);
    --wui-overlay-030: rgba(255, 255, 255, 0.3);

    --wui-icon-box-bg-error-100: #3c2426;
    --wui-icon-box-bg-blue-100: #20303f;
  }

  [data-wui-theme='light'] {
    --wui-color-blue-100: #3396ff;
    --wui-color-blue-090: #2d7dd2;
    --wui-color-blue-080: #2978cc;
    --wui-color-blue-015: rgba(51, 150, 255, 0.15);

    --wui-color-fg-100: #141414;
    --wui-color-fg-125: #2d3131;
    --wui-color-fg-150: #474d4d;
    --wui-color-fg-175: #636d6d;
    --wui-color-fg-200: #798686;
    --wui-color-fg-225: #828f8f;
    --wui-color-fg-250: #8b9797;
    --wui-color-fg-275: #95a0a0;
    --wui-color-fg-300: #9ea9a9;

    --wui-color-bg-100: #ffffff;
    --wui-color-bg-125: #f5fafa;
    --wui-color-bg-150: #f3f8f8;
    --wui-color-bg-175: #eef4f4;
    --wui-color-bg-200: #eaf1f1;
    --wui-color-bg-225: #e5eded;
    --wui-color-bg-250: #e1e9e9;
    --wui-color-bg-275: #dce7e7;
    --wui-color-bg-300: #d8e3e3;

    --wui-color-inverse-100: #fff;
    --wui-color-inverse-000: #000;

    --wui-color-success-100: #26b562;
    --wui-color-error-100: #f05142;

    --wui-color-teal-100: #2bb6b6;
    --wui-color-magenta-100: #c65380;
    --wui-color-indigo-100: #3d5cf5;
    --wui-color-orange-100: #ea8c2e;
    --wui-color-purple-100: #794cff;

    --wui-overlay-002: rgba(0, 0, 0, 0.02);
    --wui-overlay-005: rgba(0, 0, 0, 0.05);
    --wui-overlay-010: rgba(0, 0, 0, 0.1);
    --wui-overlay-015: rgba(0, 0, 0, 0.15);
    --wui-overlay-020: rgba(0, 0, 0, 0.2);
    --wui-overlay-025: rgba(0, 0, 0, 0.25);
    --wui-overlay-030: rgba(0, 0, 0, 0.3);

    --wui-icon-box-bg-error-100: #f4dfdd;
    --wui-icon-box-bg-blue-100: #d9ecfb;
  }
`

export const resetStyles = css`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
    font-family: var(--wui-font-family);
  }
`

export const elementStyles = css`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-overlay-010);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image {
    filter: grayscale(1);
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-blue-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  a:focus {
    border: 1px solid var(--wui-color-blue-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-overlay-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-4) var(--wui-duration-sm);
      background-color: var(--wui-overlay-010);
    }
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`

export const colorStyles = css`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-blue-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`
