import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import Input from "../Input";
import { ReactComponent as Arrow } from "@assets/icons/arrow-down.svg";
import { Option } from "@interfaces/SelectTypes";

interface Props {
  options: Omit<Option, "key">[];
  value: Option["value"];
  onChange: (value: Option["value"]) => void;
  placeholder?: string;
}

const Select: React.FC<Props> = ({
  options = [],
  value,
  onChange,
  placeholder,
}) => {
  const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<Omit<Option, "key">>({
    value: -1,
    label: "",
  });
  const [filteredOptions, filterOptions] = useState<Omit<Option, "key">[]>(
    options
  );

  useEffect(() => {
    const current = options.find((option) => option.value === value);

    setSelected(
      current || {
        value: -1,
        label: "",
      }
    );
    setInputValue(current?.label || "");
  }, [value, options]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setInputValue(value);

    filterOptions(
      value === ""
        ? options
        : options.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
          )
    );
  };

  const onOptionSelect = (option: Omit<Option, "key">): void => {
    onChange && onChange(option.value);
    setOptionsVisibility(false);
  };

  return (
    <Wrapper>
      <InputHolder onClick={() => setOptionsVisibility(true)}>
        <Input
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
        />

        <ArrowIcon
          up={optionsVisibility}
          onClick={(e) => {
            e.stopPropagation();
            setOptionsVisibility(!optionsVisibility);
          }}
        >
          <Arrow />
        </ArrowIcon>
      </InputHolder>

      {optionsVisibility && (
        <OptionsContainer>
          {filteredOptions.map((option) => (
            <OptionItem
              key={option.value}
              value={option.value}
              selected={option.value === selected?.value}
              onClick={() => onOptionSelect(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsContainer>
      )}
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
`;

const InputHolder = styled.div`
  position: relative;
  cursor: pointer;
`;

const ArrowIcon = styled.div<{ up: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(${({ up }) => (up ? "180deg" : 0)});
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 10;
  width: 100%;
  max-height: 192px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 8px
    ${({ theme }) => transparentize(0.85, theme.colors.black)};
  border-radius: 8px;
  padding: 6px 0;
`;

const OptionItem = styled.div<Omit<Option, "label">>`
  color: ${({ theme }) => theme.colors.dark};
  padding: 10px 16px;
  font-size: 14px;
  background-color: ${({ theme, selected }) =>
    transparentize(selected ? 0 : 1, theme.colors.lightGrey)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, selected }) =>
      transparentize(selected ? 0 : 0.5, theme.colors.lightGrey)};
  }
`;
