interface Props {
  parsedLetters: string;
}

export function Input(props: Props) {
  return (
    <div className="absolute form-control w-[80%] max-w-xs top-28">
      <label className="label">
        <span className="label-text">Type something! 🐱</span>
      </label>
      <div
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs flex items-center"
      >
        {props.parsedLetters &&
          props.parsedLetters[1].toUpperCase() + props.parsedLetters.slice(2)}
      </div>
    </div>
  );
}
