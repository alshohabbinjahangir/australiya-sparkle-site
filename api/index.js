import server from './server-dist/server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const url = new URL(req.url, `${protocol}://${host}`);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: ['GET', 'HEAD'].includes(req.method) ? null : req,
  });

  const response = await server.fetch(request, {}, {});
  res.statusCode = response.status;

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'transfer-encoding') return;
    res.setHeader(key, value);
  });

  if (response.body === null) {
    res.end();
    return;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
