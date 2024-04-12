import { PropsWithChildren } from 'react';

function LinkWrapper({ children }: PropsWithChildren) {
  return (
    <div
      onMouseEnter={() => {
        console.log('Hello');
      }}
      onMouseLeave={() => {
        console.log('goodbye');
      }}
    >
      {children}
    </div>
  );
}

export default LinkWrapper;
