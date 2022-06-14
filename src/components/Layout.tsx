import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  return (
    <div className="max-w-[36rem] p-[0_1rem] m-[3rem_auto_6rem] justify-center flex items-center">
      {props.children}
    </div>
  );
}
