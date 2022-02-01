// Next API routes are nice because they don't increase client-side bundle size (they are server-side!)
import type { NextApiRequest, NextApiResponse } from 'next';
import data from './counts';

export default function handler(
  req: NextApiRequest<Data>,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}
