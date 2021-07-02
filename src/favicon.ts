export const favIconSVG = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <style type="text/css">@import url(http://fonts.googleapis.com/css?family=Fira+Mono);</style>
      <style>
        text {
          font-family: Fira Mono;
        }
        #button {
          fill: #28A745;
        }
        #text-container {
          fill: #FFFFFF;
          height: 100%;
        }
        #icon-circle {
          fill: #FFFFFF;
        }
        #icon {
          fill: #28A745;
        }
      </style>
    </defs>
    <title>Favorites Icon</title>
    <desc>Created by hand, as one does.</desc>
    <g stroke="none" stroke-width="1" fill="none">
      <g>
        <g id="label">
          <rect id="button" x="0" y="0" width="100%" height="100%" rx="15"></rect>
          <g id="text-container" transform="translate(0, 63)" font-size="50">
            <text id="icon-circle" text-anchor="middle" x="50" y="-2">⬤</text>
            <text id="icon" text-anchor="middle" x="50">✔</text>
          </g>
        </g>
      </g>
    </g>
  </svg>
  `
}