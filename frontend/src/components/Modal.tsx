import Button from "./Button";
import InputBox from "./InputBox";

interface ModalProps {
  headText: string;
  firstText: string;
  secondText: string;
  inputFirst: string;
  inputSecond: string;
  buttonText: string;
  onclick?: () => void;
  firstRef?: any;
  secondRef?: any;
}

const Modal = ({
  headText,
  firstText,
  secondText,
  inputFirst,
  inputSecond,
  buttonText,
  firstRef,
  secondRef,
  onclick,
}: ModalProps) => {
  return (
    <div className="flex flex-col rounded-md items-center justify-center gap-3 bg-white border-2 border-black w-[90%] max-w-xs py-6 px-4 shadow-[2px_2px_0px_0px_#000000] sm:w-70 sm:h-72 sm:py-0 sm:px-0">
      <h1 className="font-jetbrains font-semibold text-2xl">{headText}</h1>
      <div>
        <h2 className="font-jetbrains font-semibold">{firstText}</h2>
        <InputBox ref={firstRef} placeholder={inputFirst} />
      </div>
      <div>
        <h2 className="font-jetbrains font-semibold">{secondText}</h2>
        <InputBox ref={secondRef} placeholder={inputSecond} />
      </div>
      <Button onclick={onclick} text={buttonText} />
    </div>
  );
};

export default Modal;
