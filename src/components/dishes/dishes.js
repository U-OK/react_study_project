import React from "react";

import {
  Chip,
  Select,
  MenuItem,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

import "./dishes.scss";

const names = ["Блюдо 1", "Блюдо 2", "Блюдо 3"];

const Dishes = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <>
      <InputLabel id="dishes">Блюда</InputLabel>
      <Select
        className="dishes"
        labelId="dishes"
        id="dishes"
        variant="outlined"
        multiple
        value={personName}
        placeholder="Выберите блюда..."
        onChange={handleChange}
        input={<Input id="dishes" />}
        renderValue={(selected) => (
          <div className="chips">
            {selected.map((value) => (
              <Chip key={value} label={value} className="chips__item" />
            ))}
          </div>
        )}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Button>Добавить блюдо</Button>
    </>
  );
};

export default Dishes;
