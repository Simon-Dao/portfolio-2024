import React, { ReactNode, MouseEventHandler } from "react";
import Magnetic from "./magnetic";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function GenericButton({ children, onClick, className }: Props) {
  return (
    <Magnetic>
      <button
        onClick={onClick}
        style={{ padding: "30px", borderWidth: "1px" }}
        className={
          className
            ? className
            : "mr-3 flex justify-center items-center border-solid border-2 border-gray-500 rounded-full cursor-pointer w-20 h-20"
        }
      >
        <Magnetic>
          <div>{children}</div>
        </Magnetic>
      </button>
    </Magnetic>
  );
}

export default GenericButton;
