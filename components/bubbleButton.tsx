import React from "react";
import TransitionLink from "./transitionLink";
import Magnetic from "./magnetic";

type Props = {
  label: string;
};

function BubbleButton({ label }: Props) {
  return (
    <Magnetic>
      <div
        style={{ right: "40%", width: "200px", height: "200px" }}
        className="bg-tt absolute rounded-full cursor-pointer"
      >
        <Magnetic>
          <div
            style={{ width: "200px", height: "200px" }}
            className="rounded-full flex justify-center items-center font-bold"
          >
            <TransitionLink
              text="text-white"
              hoverAnimation={false}
              href="/contact"
              label={label}
            />
          </div>
        </Magnetic>
      </div>
    </Magnetic>
  );
}

export default BubbleButton;
