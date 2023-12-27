import { generateColors } from "./generate-colors";
const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const NUM_POINTS = 2500;

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = (color1: string, color2: string) => {
  return Array.from({ length: NUM_POINTS }, (_, k) => k + 1).map(num => {
    const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
    const randomAngle = Math.random() * Math.PI * 2;
    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = randomFromInterval(-DEPTH, DEPTH);

    const colors = generateColors(color1, color2, 5);
    const color = colors[Math.floor(Math.random() * colors.length)];

    return {
      idx: num,
      position: [x, y, z],
      color
    };
  });
}

export const pointsOuter = (color1: string, color2: string) => {
  return Array.from({ length: NUM_POINTS / 4 }, (_, k) => k + 1).map(num => {
    const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
    const angle = Math.random() * Math.PI * 2;

    const x = Math.cos(angle) * randomRadius;
    const y = Math.sin(angle) * randomRadius;
    const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

    const colors = generateColors(color1, color2, 5);
    const color = colors[Math.floor(Math.random() * colors.length)];

    return {
      idx: num,
      position: [x, y, z],
      color
    };
  });
}
