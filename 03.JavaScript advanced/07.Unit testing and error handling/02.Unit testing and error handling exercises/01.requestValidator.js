function solve(obj) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const pattern = /[^A-Za-z0-9\.\*]+/gm;
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const message = /[<>\\&'"]/gm;

  if (
    !obj.hasOwnProperty('method') ||
    !methods.includes(obj.method || !obj.method)
  ) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!obj.hasOwnProperty('uri') || pattern.test(obj.uri) || !obj.uri) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (
    !obj.hasOwnProperty('version') ||
    !versions.includes(obj.version || !obj.version)
  ) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (
    !obj.hasOwnProperty('message') ||
    message.test(obj.message || obj.message)
  ) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return obj;
}

console.log(
  solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
  })
);
