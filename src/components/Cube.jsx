import React from 'react';

const Cube = ({ status }) => (<td role="cube" className={status}/>)

export default React.memo(Cube)