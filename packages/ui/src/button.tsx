import * as React from "react";
import { Text, TouchableOpacity, Platform } from "react-native";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export  const CommonButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  const isWeb = Platform.OS === "web";
  console.log(isWeb);

const ButtonComponent = isWeb ? "button" : TouchableOpacity;
  const TextComponent = isWeb ? "span" : Text;

  if (isWeb) {
    console.log("Web mode");
  }

  return (
    <ButtonComponent
      className={`${isWeb ? "bg-blue-900 text-white px-4 py-2 rounded" : "bg-blue-700 px-4 py-2 rounded-lg m-4"} flex items-center justify-center`}
      onClick={onClick}
    >
      <TextComponent
        className={`${isWeb ? "text-base font-bold" : "text-lg font-bold "}`}
      >
        {children}
      </TextComponent>
    </ButtonComponent>
  );
};
