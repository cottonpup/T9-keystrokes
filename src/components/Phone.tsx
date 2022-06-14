import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Phone(props: Props) {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">{props.children}</div>
      </div>
    </div>
  );
}
