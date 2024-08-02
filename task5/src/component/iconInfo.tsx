
import  { ReactElement } from "react";

interface IconInfoProps {
  icon: ReactElement;
  text: string;
}

const IconInfo = ({ icon, text }: IconInfoProps) => {
  return (
    <div className="flex items-center">
      {icon}
      <p className="ml-2">{text}</p>
    </div>
  );
};
export default IconInfo;
