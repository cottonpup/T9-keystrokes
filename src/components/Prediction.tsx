import { phoneMaker } from '../T9Utils';

interface Props {
  enteredDigits: string;
  parsedLetters: string;
  setParsedLetters: React.Dispatch<React.SetStateAction<string>>;
  setEnteredDigits: React.Dispatch<React.SetStateAction<string>>;
}

export function Prediction(props: Props) {
  let predictiveTextMap = phoneMaker(props.enteredDigits);
  if (predictiveTextMap.length === 0 && props.enteredDigits.length > 0)
    predictiveTextMap = [props.enteredDigits];
  return (
    <section className="absolute bottom-[18rem] w-[80%]">
      <div className="flex px-4 py-4 overflow-x-auto gap-2">
        <>
          {predictiveTextMap.map((text, i) => (
            <div
              className="badge badge-outline"
              key={i}
              onClick={() => {
                props.setParsedLetters(`${props.parsedLetters} ${text}`);
                props.setEnteredDigits('');
              }}
            >
              {text}
            </div>
          ))}
          {props.enteredDigits && (
            <div
              className="badge badge-outline"
              onClick={() => {
                props.setEnteredDigits(props.enteredDigits.slice(0, -1));
              }}
            >
              <i className="fa-solid fa-delete-left"></i>
            </div>
          )}
        </>
      </div>
    </section>
  );
}
