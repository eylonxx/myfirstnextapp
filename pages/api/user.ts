import { user } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../lib/prisma/users';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        let users: user[] = await getUsers();
        res.status(200).json(users);
      } catch (error) {
        console.log(error);
      }
      break;
    case 'POST':
      break;
    default:
      break;
  }
};

export default handler;
