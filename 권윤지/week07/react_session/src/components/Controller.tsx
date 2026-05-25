type ControllerProps = {
  onClickButton: (value: number) => void;
};

const Controller = ({ onClickButton }: ControllerProps) => {
  return (
    <section className="controller">
      <button onClick={() => onClickButton(-1)}>-1</button>
      <button onClick={() => onClickButton(-10)}>-10</button>
      <button onClick={() => onClickButton(-100)}>-100</button>
      <button onClick={() => onClickButton(100)}>+100</button>
      <button onClick={() => onClickButton(10)}>+10</button>
      <button onClick={() => onClickButton(1)}>+1</button>
    </section>
  );
};

export default Controller;