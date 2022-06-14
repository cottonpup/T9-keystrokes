interface Props {
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>;
  enteredNumber: string;
  numberValue: string;
  letters?: string;
}

export function Key(props: Props) {
  return (
    <kbd
      className="kbd active:translate-y-1 hover:bg-orange-100 select-none"
      onClick={() => props.setEnteredNumber(props.enteredNumber + props.numberValue)}
    >
      {props.letters && <span className="text-xs">{props.letters}</span>}
      {props.numberValue}
    </kbd>
  );
}
