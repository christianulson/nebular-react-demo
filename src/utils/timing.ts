export function Timing(time: number) {
  if (time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${InitZero(minutes)}${minutes}:${InitZero(seconds)}${seconds}`;
  }

  return '00:00';
}

function InitZero(time: number): string {
  return time < 10 ? '0' : '';
}
