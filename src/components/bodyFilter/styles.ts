import styled from "styled-components";
import checkIcon from "./checkIcon.svg" 

export const FilterWrapper = styled.div`
  max-width: 754px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;
`;

export const SideFilters = styled.div`
    width: 232px;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px 0 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
`;


export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(241, 252, 255, 1);
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => (props.checked ? 'rgba(33, 150, 243, 1)' : 'rgba(154, 187, 206, 1)')};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ checked }) => checked ? `center / 12px 8px no-repeat url(${checkIcon})` : 'none'};
`;

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
  font-size: 13px;
`;
