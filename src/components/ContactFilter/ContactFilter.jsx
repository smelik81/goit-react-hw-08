import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";
import { setNameFilter, setNumberFilter } from "../../redux/filters/slice";
import css from "./ContactFilter.module.css";

const ContactFilter = () => {
  const dispatch = useDispatch();
  const nameValueId = useId();
  const numberValueId = useId();

  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleInputNameChange = (event) => {
    dispatch(setNameFilter(event.target.value));
  };
  const handleInputNumberChange = (event) => {
    dispatch(setNumberFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <label htmlFor={nameValueId} className={css.label}>
          Find contacts by name
        </label>
        <input
          id={nameValueId}
          type="text"
          className={css.input}
          value={name}
          onChange={handleInputNameChange}
        />
      </div>
      <div className={css.wrapper}>
        <label htmlFor={numberValueId} className={css.label}>
          Find contacts by number
        </label>
        <input
          id={numberValueId}
          type="text"
          className={css.input}
          value={number}
          onChange={handleInputNumberChange}
        />
      </div>
    </div>
  );
};

export default ContactFilter;
