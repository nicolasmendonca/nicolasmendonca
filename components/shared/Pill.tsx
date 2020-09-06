import React from "react";
import cxs from "classnames";
import { VscChromeClose } from "react-icons/vsc";

interface IPillProps {
  checked: boolean;
  onToggle?: () => void;
}

const noop = () => {};

export const Pill: React.FC<IPillProps> = ({ children, checked, onToggle }) => {
  return (
    <button
      className={cxs("Pill", {
        "Pill--checked": checked,
        "Pill--toggleable": onToggle,
      })}
      style={{
        cursor: onToggle ? "pointer" : "initial",
      }}
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle || noop}
    >
      <span className="Pill__flex-container">
        <span className="Pill__label">{children}</span>
      </span>
    </button>
  );
};

interface IPillWithColorProps extends IPillProps {
  color: string;
}

export const PillWithColor: React.FC<IPillWithColorProps> = ({
  color,
  children,
  ...toggleablePillProps
}) => {
  return (
    <Pill {...toggleablePillProps}>
      <span className="PillWithColor__flex-container">
        <span
          className="PillWithColor__color"
          style={{ backgroundColor: color }}
        />
        <span className="PillWithColor__label">{children}</span>
        <VscChromeClose
          className={cxs("PillWithColor__close-icon", {
            hidden: !toggleablePillProps.onToggle,
          })}
          aria-label="Uncheck"
        />
      </span>
    </Pill>
  );
};
