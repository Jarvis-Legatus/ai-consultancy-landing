import * as THREE from 'three';

const parseRgb = (rgb: string): THREE.Color => {
  return new THREE.Color(rgb);
};

const magicCardColorsLight = ["rgb(255, 155, 0)", "rgb(0, 255, 153)"];
const magicCardColorsDark = ["rgb(0, 250, 255)", "rgb(0, 120, 255)"];

export const getThemeColors = (theme: string) => {
    const carColors = theme === 'light' ? magicCardColorsLight : magicCardColorsDark;

    return {
        roadColor: new THREE.Color(0x080808),
        islandColor: new THREE.Color(0x0a0a0a),
        shoulderLines: new THREE.Color(0x131318),
        brokenLines: new THREE.Color(0x131318),
        sticks: new THREE.Color(0xA4E3E6),
        leftCars: carColors.map(parseRgb),
        rightCars: carColors.map(parseRgb),
        background: new THREE.Color(0x000000)
    };
};

export const hyperspeedThemePreset = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'LongRaceDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 5,
  lanesPerRoad: 2,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 70,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],
  colors: getThemeColors(typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'light') : 'light'),
};