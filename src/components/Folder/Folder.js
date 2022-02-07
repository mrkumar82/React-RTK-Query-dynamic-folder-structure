import React, { useState } from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <div onClick={() => setExpand(!expand)}>{explorer.name}</div>
        {expand &&
          explorer.items.map((folder) => (
            <Folder key={folder.name} explorer={folder} />
          ))}
      </>
    );
  } else {
    return <div className='files'>{explorer.name}</div>;
  }
};

export default Folder;
