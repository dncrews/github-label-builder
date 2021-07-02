import * as assert from 'assert'

enum COLOR {
  RED = '#DC3545',
  BLUE = '#007BFF',
  GREEN = '#28A745',
}

type STYLE = 'BAD' | 'GOOD' | 'INFO'

const colorMapV2 = new Map<STYLE, COLOR>([
  ['GOOD', COLOR.GREEN],
  ['INFO', COLOR.BLUE],
  ['BAD', COLOR.RED],
])

const iconMap = new Map<STYLE, string>([
  ['GOOD', '✔'],
  ['BAD', '✖'],
  ['INFO', 'i']
])

const styleMap = new Map<string, STYLE>([
  ['b', 'BAD'],
  ['bad', 'BAD'],
  ['block', 'BAD'],
  ['blocking', 'BAD'],

  ['o', 'INFO'],
  ['opt', 'INFO'],
  ['optional', 'INFO'],

  ['good', 'GOOD'],
  ['ok', 'GOOD'],
  ['p', 'GOOD'],
  ['pass', 'GOOD'],
  ['passing', 'GOOD'],
])

const CHAR_WIDTH = 12
const HEIGHT = 40
const ICON_WIDTH = 50
const ICON_X = ICON_WIDTH / 2
const MIN_WIDTH = 100
const PADDING = 25

const FONT_SIZE = HEIGHT / 2
const TEXT_Y = FONT_SIZE + 7

const getStyle = (status: string): STYLE => {
  const lower = status.toLowerCase()
  const style = styleMap.get(lower)

  assert(!!style, `status "${status}" not found`)

  return style
}

const getMeasurements = (content: string) => {
  const textWidthRatio = Math.max(content.length * CHAR_WIDTH, MIN_WIDTH)
  const textWidthWithPaddingRatio = textWidthRatio + PADDING
  const outerWidth = textWidthWithPaddingRatio + ICON_WIDTH
  const textX = (outerWidth / 2) + (PADDING / 2)

  return {
    outerWidth,
    textX,
  }
}

const BIG_TO_SMALL_RATIO = 25/40

const resize = (num: number): number => {
  return num * BIG_TO_SMALL_RATIO
}

interface Input {
  status: string
  content: string
  isBig: boolean
}

export const svg = ({ status, content, isBig }: Input): string=> {
  assert(!!status, 'style is required')
  assert(!!content, 'text is required')

  const style = getStyle(status)
  const label = content.toUpperCase()
  const fillColor = colorMapV2.get(style)
  const iconText = iconMap.get(style)

  const { outerWidth, textX } = getMeasurements(content)

  const displayHeight = isBig ? HEIGHT : resize(HEIGHT)
  const displayWidth = isBig ? outerWidth : resize(outerWidth)

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${displayWidth}px" height="${displayHeight}px" viewBox="0 0 ${outerWidth} ${HEIGHT}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <style type="text/css">@import url(http://fonts.googleapis.com/css?family=Fira+Mono);</style>
      <style>
        text {
          font-family: Fira Mono;
        }
        #button {
          fill: ${fillColor};
        }
        #text-container {
          fill: #FFFFFF;
          height: 100%;
        }
        #icon-circle {
          fill: #FFFFFF;
        }
        #icon {
          fill: ${fillColor};
        }
      </style>
    </defs>
    <title>${style}: ${label}</title>
    <desc>Created by hand, as one does.</desc>
    <g stroke="none" stroke-width="1" fill="none">
      <g>
        <g id="label">
          <rect id="button" x="0" y="0" width="100%" height="100%" rx="8"></rect>
          <g id="text-container" transform="translate(0, ${TEXT_Y})" font-size="${FONT_SIZE}">
            <text id="icon-circle" text-anchor="middle" x="${ICON_X}" y="-2">⬤</text>
            <text id="icon" text-anchor="middle" x="${ICON_X}">${iconText}</text>
            <text id="primary-text" text-anchor="middle" x="${textX}">${label}</text>
          </g>
        </g>
      </g>
    </g>
  </svg>
  `
}
