import Link from 'next/link';
import type { AppProps } from 'next/app';

import React, { ReactElement } from 'react';
import { getUsers } from '../../lib/prisma/users';
import { user } from '@prisma/client';

const UsersComponent = async (): Promise<JSX.Element> => {
  const res = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
  });
  const users = await res.json();

  return (
    <section className="fixed h-full w-1/4 bg-slate-800">
      <div className="center py-4">
        <h2 className="mb-4 pb-3 text-xl bg-slate-800">UsersComponent</h2>
        <ul className="flex flex-col text-sm list-none gap-1 list-inside bg-slate-800">
          {users?.map((user: any) => (
            <li key={user.id} className="text-base">
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UsersComponent;
