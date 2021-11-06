import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  response.send('<em style="color:red;font-size:1rem;">powered by vercel</em>')
};