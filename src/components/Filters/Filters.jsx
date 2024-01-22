import { CustomSelectStyled } from "./CustomSelect.styled";
import {
  Button,
  DivWraper,
  InputFrom,
  InputTo,
  InputWrap,
  SelectStyled,
  SelectStyledPrice,
} from "./Filters.styled";
import brands from "../../assets/makes.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertsList } from "../../redux/advertsCatalog/selectors";
import { setFilters } from "../../redux/advertsCatalog/slice";

export const Filters = () => {
  const adverts = useSelector(selectAdvertsList);

  const [selectedOptionBrand, setSelectedOptionBrand] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);

  const dispatch = useDispatch();

  const options = brands.map((e) => {
    const newOptions = { value: e, label: e };
    return newOptions;
  });

  const optionsPrice = [
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];
  const handleChangeBrand = (selectedOptionBrand) => {
    setSelectedOptionBrand(selectedOptionBrand);
  };
  const handleChangePrice = (selectedOptionPrice) => {
    setSelectedOptionPrice(selectedOptionPrice);
  };
  const handleSearch = () => {
    const isAdsFilterd = adverts.filter(
      (e) => e.make === selectedOptionBrand.value
    );

    dispatch(setFilters(isAdsFilterd));
  };

  return (
    <>
      <DivWraper>
        <SelectStyled
          options={options}
          value={selectedOptionBrand}
          styles={CustomSelectStyled}
          onChange={handleChangeBrand}
          placeholder="Enter the text"
        />
        <SelectStyledPrice
          options={optionsPrice}
          value={selectedOptionPrice}
          styles={CustomSelectStyled}
          onChange={handleChangePrice}
          placeholder="To $"
        />
        <InputWrap>
          <InputFrom type="text" placeholder="From" />
          <InputTo type="text" placeholder="To" />
        </InputWrap>
        <Button onClick={handleSearch}>Search</Button>
      </DivWraper>
    </>
  );
};