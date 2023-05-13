async function lockedProfile() {
  const response = await fetch(
    'http://localhost:3030/jsonstore/advanced/profiles'
  );
  const data = await response.json();

  console.log(data);
}
