import { CheckIcon } from "lucide-react";

interface toggleButtonProps {
  isCompleted: boolean;
  onclick: () => void;
}

const ToggleButton = (props: toggleButtonProps) => {
  return (
    <div
      onClick={props.onclick}
      className="flex justify-center bg-amber-300 items-center w-11 h-11 sm:w-14 sm:h-14 border-2 rounded-md cursor-pointer shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] shrink-0"
    >
      {props.isCompleted && <CheckIcon className="w-7 h-7 sm:w-10 sm:h-10" />}
    </div>
  );
};

export default ToggleButton;
