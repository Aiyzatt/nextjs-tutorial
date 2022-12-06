import React from 'react';

const Resources = ({resources}) => {
  return (
    <>
      <ul>
        {resources.map((res) => {
          return <li key={res.id}>{res.title}</li>
        })}
      </ul>
    </>
  );
}

export default Resources;