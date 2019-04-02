import React from 'react';
import PostsTable from '../PostsTable';
import NotFoundPage from '../NotFound';

const resourceMap = {
  posts: PostsTable,
  default: () => <div>default</div>,
};


export default props => {
  const { location, ...rest } = props;
  const { pathname } = location;
  const Component =  resourceMap[(pathname && pathname.split('/')[2]) || 'default'] ;
  return (
    <div className="ResourcePage">
      {Component ? <Component {...rest}/> : <NotFoundPage location={location}/>}
    </div>
  );
}