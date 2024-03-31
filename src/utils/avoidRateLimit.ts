export function avoidRateLimit(delay = 2000) {
  if (!(process.env.IS_BUILD === "true")) {
    return new Promise((resolve) => {
      resolve("");
    });
  }
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
