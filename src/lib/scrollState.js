// Normalized scroll progress state container for cinematic camera transitions
// Avoids React state re-renders during high-frequency scroll updates & RAF loops

export const scrollProgressRef = { current: 0 };

export function getScrollProgressRef() {
  return scrollProgressRef;
}
