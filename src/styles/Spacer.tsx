import React from 'react';
// ---- another way to set height and width without using margin ---- //
type Props =
  | { height: number; width?: never }
  | { height?: never; width: number };

  const Spacer: React.FC<Props> = ({height, width}) => {
    return <div style={{height, width}}/>
  }

  export default Spacer;
