import { ReactElement } from "react";

interface BaseProps {
  text: string;
}

interface IconProps {
  icon: ReactElement;
  iconPosition: "before" | "after";
}

type CtaButtonProps = BaseProps & (IconProps | {});

const CtaButton: React.FC<CtaButtonProps> = (props) => {
  const { text } = props;
  const isIconProps = (props: CtaButtonProps): props is BaseProps & IconProps =>
    "icon" in props && "iconPosition" in props;

  return (
    <button className="flex">
      {isIconProps(props) && props.iconPosition === "before" && props.icon}
      {text}
      {isIconProps(props) && props.iconPosition === "after" && props.icon}
    </button>
  );
};
export default CtaButton;
