interface GoalCardProps {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onToggle: (id: string, isCompleted: boolean) => void;
}

import ToggleButton from "./ToggleButton";
import Button from "./Button";

const GoalCard = ({
  _id,
  title,
  description,
  isCompleted,
  onDelete,
  onUpdate,
  onToggle,
}: GoalCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mx-auto p-4 md:pl-4 md:pr-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-4 hover:shadow-[1px_1px_0px_0px_#000000] gap-4 min-h-20">
      <div className="flex items-start sm:items-center min-w-0 flex-1">
        <ToggleButton
          isCompleted={isCompleted}
          onclick={() => onToggle(_id, !isCompleted)}
        />
        <div className="pl-3 sm:pl-4 md:pl-6 min-w-0 flex-1">
          <h2 className="font-bold font-jetbrains text-base md:text-lg wrap-break-word whitespace-normal">{title}</h2>
          <p className="font-jetbrains text-sm text-gray-600 wrap-break-word whitespace-normal mt-1">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 self-end sm:self-auto shrink-0">
        <Button text={"Update"} onclick={() => onUpdate(_id)}></Button>
        <Button text={"Delete"} onclick={() => onDelete(_id)}></Button>
      </div>
    </div>
  );
};

export default GoalCard;
