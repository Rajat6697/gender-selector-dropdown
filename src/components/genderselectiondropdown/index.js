import React from 'react'
import { genders } from '../../assets/js/genders'
import { Dropdown } from 'rsuite'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './genderselectiondropdown.css';

let allowedGenders = ['male', 'female']


const GenderSelectionDropdown = ({style, className, title, onChangeHandlerProp}) => {

    const [gender, setGender] = React.useState('');

    const handleChangeGender = (event) => {
        let currentSelectedValue = event.target.value;

        if(allowedGenders.includes(currentSelectedValue.toLowerCase())){
            setGender(event.target.value); 
        if(typeof onChangeHandlerProp === "function"){
            onChangeHandlerProp(event)
        }
        }
        else {
            window.alert("There are only two genders, you know what they are. Select again.")
        }


    };
  
  return (
    <FormControl className={className}>
    <InputLabel id="demo-simple-select-label">{title ?? "Select Gender"}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={gender}
      label="Gender"
      onChange={handleChangeGender}
      sx={{height : "3rem", width : "10rem"}}
    >
        {
            genders.map((gender, indexOfGender)=> (
                <MenuItem key={indexOfGender} value={gender}>{gender}</MenuItem>
            ))
        }
    
    </Select>
  </FormControl>
  )
}

export default GenderSelectionDropdown