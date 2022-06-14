import { Key } from './Key';

interface Props {
  setEnteredDigits: React.Dispatch<React.SetStateAction<string>>;
  enteredDigits: string;
}

export function Keyboard(props: Props) {
  return (
    <section className="absolute bottom-5">
      <div className="flex justify-center gap-5 my-2 w-full roun">
        <Key
          numberValue="1"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="2"
          letters="ABC"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="3"
          letters="DEF"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
      </div>

      <div className="flex justify-center gap-5 my-2 w-full">
        <Key
          numberValue="4"
          letters="GHI"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="5"
          letters="JKL"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="6"
          letters="MNO"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
      </div>
      <div className="flex justify-center gap-5 my-2 w-full">
        <Key
          numberValue="7"
          letters="PQRS"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="8"
          letters="TUV"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="9"
          letters="WXYZ"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
      </div>
      <div className="flex justify-center gap-5 my-2 w-full">
        <Key
          numberValue="*"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="0"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
        <Key
          numberValue="#"
          setEnteredNumber={props.setEnteredDigits}
          enteredNumber={props.enteredDigits}
        />
      </div>
    </section>
  );
}
