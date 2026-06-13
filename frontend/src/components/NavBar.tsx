import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface NavBarProps {
  addFunction: () => void;
  logoutFunction: () => void;
}

const NavBar = ({ addFunction, logoutFunction }: NavBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto min-h-16 md:h-20 px-4 py-3 md:p-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] mb-4 gap-3 sm:gap-0">
      <h1
        onClick={() => navigate("/dashboard")}
        className="font-jetbrains font-extrabold text-2xl md:text-2xl text-black cursor-pointer m-0"
      >
        GoalKeeper
      </h1>
      <div className="flex items-center gap-4">
        <Button onclick={() => addFunction()} text={"Add"} />
        <Button onclick={() => logoutFunction()} text={"Logout"} />
      </div>
    </div>
  );
};

export default NavBar;
