import React, { Dispatch, SetStateAction, useEffect} from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './style';
export type MenuItemType = {
    name: string
}
export type MenuItemDataProps = {
    value:string,
    setValue: Dispatch<SetStateAction<string>>,
    items: MenuItemType[],
}
const selectSx = {
    bgcolor:'white',
    marginRight:'10%',
    borderRadius:'20px',
}
function SelectOption({value,setValue,items}:MenuItemDataProps) {
    useEffect(()=> {
        setValue(items[0].name);
    },[])
    const change = (e:SelectChangeEvent) => {
        setValue(e.target.value);
    }
    return(
        <Select value={value} className="menuItems" onChange={change}>
            {
                items.map((data:MenuItemType) => (
                    <MenuItem key={data.name} value={data.name} >{data.name}</MenuItem>
                ))
            }
        </Select>
    );
}

export default SelectOption;