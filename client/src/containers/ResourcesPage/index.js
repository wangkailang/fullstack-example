import React from 'react';
import PostsTable from '../PostsTable';

const resourceMap = {
  posts: PostsTable,
  default: () => <div>default</div>,
};


export default props => {
  const { pathname, ...rest } = props;
  const Component =  resourceMap[(pathname && pathname.split('/')[2]) || 'default'] ;
  return (
    <div className="ResourcePage">
      <Component {...rest}/>
    </div>
  );
}