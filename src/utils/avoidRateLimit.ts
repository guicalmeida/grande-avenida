export function avoidRateLimit(delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
