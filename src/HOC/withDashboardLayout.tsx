import React from 'react';
import Aside from 'src/components/Aside';
import Sidenav from 'src/components/Navigation/Sidenav';

const withDashboardLayout =
  (Component: any) =>
  ({ ...props }) => {
    return (
      <div className="flex justify-between">
        <Sidenav />
        <main>
          <Component {...props} />
        </main>
        <Aside />
      </div>
    );
  };

export default withDashboardLayout;
