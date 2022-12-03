const start = performance.now();
for (let i = 1; i < 10_000_000_000; i++) {};
const stop = performance.now();
const totalInSeconds = (stop - start) / 1000;

console.log(`Count from %cONE %cto %cTEN BILLION %cfor: ${totalInSeconds.toFixed(2)} \
seconds.`, "color: green", "color: reset", "color: orange", "color: reset");


// My laptop ~25sec.
// My PC ~11sec.