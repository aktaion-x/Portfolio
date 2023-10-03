export function generateColors(color1: string, color2: string, steps: number) {
  // Parse the input colors
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);

  // Calculate the step size for each color channel (R, G, B)
  const stepSize = [];
  for (let i = 0; i < 3; i++) {
    stepSize[i] = (c2[i] - c1[i]) / (steps - 1);
  }

  // Generate the intermediate colors
  const intermediateColors = [];
  for (let i = 0; i < steps; i++) {
    const interpolatedColor = [];
    for (let j = 0; j < 3; j++) {
      interpolatedColor[j] = Math.round(c1[j] + stepSize[j] * i);
    }
    intermediateColors.push(rgbToHex(interpolatedColor));
  }

  return intermediateColors;
}

// Helper function to parse a color string into an array of RGB values
function parseColor(color: string) {
  const hex = color.replace(/^#/, ""); // Remove the "#" if present
  const bigint = parseInt(hex, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Helper function to convert an RGB array to a hex color string
function rgbToHex(rgb: Array<string | number>) {
  return (
    "#" +
    rgb
      .map(value => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}