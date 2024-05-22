import { ReactElement } from "react";

interface BaseProps {
  text: string;
  actionFunction?: (searchTerm: string) => void;
}

interface IconProps {
  icon: ReactElement;
  iconPosition: "before" | "after";
}

type CtaButtonProps = BaseProps & (IconProps | {});

const Button: React.FC<CtaButtonProps> = (props) => {
  const { text } = props;
  const { actionFunction } = props;
  const isIconProps = (props: CtaButtonProps): props is BaseProps & IconProps =>
    "icon" in props && "iconPosition" in props;

  return (
    <button
      className="flex text-3xl text font-bold items-center border-red-600 border-2 p-3 rounded-lg"
      onClick={actionFunction}>
      {isIconProps(props) && props.iconPosition === "before" && props.icon}
      {text}
      {isIconProps(props) && props.iconPosition === "after" && props.icon}
    </button>
  );
};
export default Button;
