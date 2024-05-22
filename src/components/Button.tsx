import { ReactElement } from "react";

interface BaseProps {
  text: string;
  ctaFunction?: () => void;
}

interface IconProps {
  icon: ReactElement;
  iconPosition: "before" | "after";
}

type CtaButtonProps = BaseProps & (IconProps | {});

const CtaButton: React.FC<CtaButtonProps> = (props) => {
  const { text } = props;
  const { ctaFunction } = props;
  const isIconProps = (props: CtaButtonProps): props is BaseProps & IconProps =>
    "icon" in props && "iconPosition" in props;

  return (
    <button
      className="flex my-16 text-3xl text font-bold items-center border-red-600 border-2 p-3 rounded-lg"
      onClick={ctaFunction}>
      {isIconProps(props) && props.iconPosition === "before" && props.icon}
      {text}
      {isIconProps(props) && props.iconPosition === "after" && props.icon}
    </button>
  );
};
export default CtaButton;
