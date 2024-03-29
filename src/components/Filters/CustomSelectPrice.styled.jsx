export const CustomSelectStyledPrice = {
  control: (provided, state) => ({
    ...provided,
    height: 48,
    border: "none",
    borderRadius: 14,
    backgroundColor: "#f7f7fbdf",
    stroke: state.isFocused ? "rgba(18, 20, 23, 0.5)" : "initial",

    indicatorsContainer: (provided) => ({
      ...provided,
      position: "relative",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      transition: "transform 0.3s ease",
      transform: "rotate(0deg)",
    }),

    color: "#121417",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.25,
    color: " rgba(18, 20, 23, 0.5)",
    borderRadius: 14,
  }),
  indicatorSeparator: () => ({ display: "none" }),

  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
    visibility: "hidden",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    overflowY: "hidden",
  }),
};
