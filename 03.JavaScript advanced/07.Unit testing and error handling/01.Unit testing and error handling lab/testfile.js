let a = 5;
let b = 5;

try {
  a + b;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log('ReferenceError');
  }
}
