import * as THREE from "three";

/**
 * Calculates 3D world position of a planet along its tilted orbital path
 * @param {number} radius - Orbit radius
 * @param {number} angle - Current orbital angle in radians
 * @param {Array<number>} rotation - Orbit inclination Euler angles [rx, ry, rz]
 * @param {Array<number>} sunPosition - Sun center position [x, y, z]
 * @param {number} scale - Global scene scale factor
 * @param {THREE.Vector3} targetVector - Vector3 instance to mutate (avoids per-frame allocations)
 */
export function calculateOrbitalWorldPosition(
  radius,
  angle,
  rotation,
  sunPosition = [2.0, 0, 0],
  scale = 1,
  targetVector,
  eulerObj
) {
  const vec = targetVector || new THREE.Vector3();

  // 1. Unrotated 2D orbital position
  vec.set(
    radius * Math.cos(angle),
    0,
    radius * Math.sin(angle)
  );

  // 2. Apply 3D orbit inclination rotation
  const [rx, ry, rz] = rotation || [0, 0, 0];
  const euler = eulerObj || new THREE.Euler(rx, ry, rz, "XYZ");
  vec.applyEuler(euler);

  // 3. Apply Sun position offset and scale factor
  vec.x = sunPosition[0] + vec.x * scale;
  vec.y = sunPosition[1] + vec.y * scale;
  vec.z = sunPosition[2] + vec.z * scale;

  return vec;
}
