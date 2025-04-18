import React, {useState} from "react";
import { ButtonContainer, StyledButton } from "./styles";

export const FilterButtons: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const buttons = ['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ'];

  return (
    <ButtonContainer>
      {buttons.map((text, index) => (
        <StyledButton
          key={index}
          isActive={activeButton === index}
          onClick={() => setActiveButton(index)}
        >
          {text}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};