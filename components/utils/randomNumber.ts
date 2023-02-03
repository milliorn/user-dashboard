// https://gist.github.com/ischenkodv/3958676
export function randomNumber(min: number, max: number): number {
  return (Math.random() * max) | min;
}
