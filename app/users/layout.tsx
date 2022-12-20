import React from 'react';
import UsersComponent from './users';

const UsersLayout = ({ children }: { children: any }) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        {/* @ts-expect-error react types dont support async components yet */}
        <UsersComponent />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default UsersLayout;
