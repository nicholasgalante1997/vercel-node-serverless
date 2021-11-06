import { VercelRequest, VercelResponse } from '@vercel/node';
import { v4 } from 'uuid';

export default (request: VercelRequest, response: VercelResponse) => {
  console.log(`[info]::[${new Date().toISOString}]:: request id:${v4()}`)
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  response.send('<em style="color:red;font-size:1rem;">powered by vercel</em>')
};