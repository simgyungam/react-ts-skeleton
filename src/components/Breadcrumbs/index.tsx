import React from 'react';
import {
  Link,
  Typography,
  Breadcrumbs,
} from '@material-ui/core';

type Props = {
  navs: Array<{ path: string; name: string }>;
}

export const BreadcrumbsComponent: React.FC<Props> = props => {
  const { navs = [] } = props;
  const total = navs.length;
  const activeNav = total > 2 ? navs[total - 1] : navs[0];
  const links = navs.slice(0, total - 1);

  return (
    <section className="panel breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        {links.map(link => (
          <Link color="inherit" href={link.path} key={link.path}>
            {link.name}
          </Link>
        ))}
        <Typography color="textPrimary">{activeNav && activeNav.name}</Typography>
      </Breadcrumbs>
    </section>
  );
}

export default BreadcrumbsComponent;
