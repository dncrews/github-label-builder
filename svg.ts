import * as assert from 'assert';

const RED = '#DC3545'
const BLUE = '#007BFF'
const GREEN = '#28A745'

const colorMap = new Map<string, string>([
  ['b', RED],
  ['block', RED],
  ['blocking', RED],
  ['bad', RED],
  ['o', BLUE],
  ['optional', BLUE],
  ['ok', BLUE],
  ['p', GREEN],
  ['pass', GREEN],
  ['good', GREEN],
])

const getFill = (style: string): string | void => {
  const value = colorMap.get(style)
  return value && value.toLowerCase()
}

const BIG_TO_SMALL_RATIO = 25/40;
// const

interface Input {
  style: string;
  text: string;
  isBig: boolean;
  isWide: boolean;
}

export const svg = ({ style, text, isBig }: Input): string=> {
  assert(!!style, 'style is required');
  assert(!!text, 'text is required');

  const getSize = (num: number): number => {
    const ratio = isBig ? 1 : BIG_TO_SMALL_RATIO;

    return num * ratio;
  }

  const fill = getFill(style);
  assert(!!fill, `Unrecognized style ${style}`);

  const width = getSize(200);
  const height = getSize(40);

  const innerWidth = 200;

  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="${width}px" height="${height}px" viewBox="0 0 ${innerWidth} 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>${style} ${text}</title>
    <desc>Created by hand, as one does.</desc>
    <g stroke="none" stroke-width="1" fill="none">
      <g>
        <g id="button" fill="${fill}">
          <rect id="Rectangle-1" x="0" y="0" width="200" height="40" rx="8"></rect>
        </g>
        <g id="text" transform="translate(0, 9)" fill="#FFFFFF" font-size="20" font-family="Lucida Grande, sans-serif" font-weight="normal">
          <text id="Fast-Follow" text-anchor="middle">
            <tspan x="${innerWidth / 2}" y="19">${text.toUpperCase()}</tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
  `;
}
