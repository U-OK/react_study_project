import React, { useState } from "react";
import { Title, Dishes } from "../";

import { TextField, Button, Avatar, InputLabel } from "@material-ui/core";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import "./editPlaces.scss";

const EditPlaces = () => {
  const ref = React.createRef();

  const click = () => console.log("click");
  const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");

  return (
    <div className="edit">
      <Title />

      <div className="edit__row">
        <InputLabel id="name">Название</InputLabel>
        <TextField
          ref={ref}
          onClick={click}
          id="name"
          name="name"
          label="Введите название"
          variant="outlined"
        />
      </div>

      <div className="edit__row">
        <Avatar />
        <Button onClick={() => ref.current.click()}>
          Добавить/изменить фотографию
        </Button>
      </div>

      <div className="edit__row">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            label="Время открытия"
            variant="outlined"
            autoOk={true}
            ampm={false}
            views={["hours"]}
            value={selectedDate}
            onChange={handleDateChange}
          />
          <TimePicker
            label="Время закрытия"
            variant="outlined"
            autoOk={true}
            ampm={false}
            views={["hours"]}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className="edit__row">
        <TextField ref={ref} onClick={click} label="Адрес" variant="outlined" />
      </div>

      <div className="edit__row">
        <Dishes />
      </div>

      <div className="edit__row">
        <Button>Сохранить</Button>
        <Button>Удалить заведение</Button>
      </div>
    </div>
  );
};

export default EditPlaces;
