/* eslint-disable react/prop-types */
import {
  TypeBox,
  TypeContainer,
  TypeInput,
  TypeLabel,
  TypeMark,
  TypeText,
} from './InputStyles';
import { useCalculator } from '../../contexts/AppContext';

/**
 * A component that renders a checkbox with a label for selecting
 * the type of mortgage. If the checkbox is checked, it will change
 * the type of mortgage in the state to the value of the name prop.
 * If the checkbox is unchecked, it will change the type of mortgage
 * in the state to an empty string.
 * @param {string} name The value of the checkbox, which is used to
 * determine the type of mortgage in the state.
 * @param {string} children The label text or components for the checkbox.
 * @returns {ReactElement} A React element containing the checkbox and
 * the label.
 */
function TypeCheckbox({ name, children }) {
  const { type, handleTypeChange } = useCalculator();

  /**
   * Handles the change event for the checkbox. If the checkbox is already
   * checked, it will uncheck it and change the type of mortgage in the state
   * to an empty string. If the checkbox is not checked, it will check it and
   * change the type of mortgage in the state to the value of the name prop.
   */
  function handleChange() {
    // if the checkbox is already checked, uncheck it, and if the type is changed to a different type, change it to the new type
    if (type.length !== 0 && type === name) {
      handleTypeChange('');
    }
    // if the checkbox is not checked, check it
    else {
      handleTypeChange(name);
    }
  }

  return (
    <TypeContainer>
      <TypeInput
        checked={type === name}
        onChange={handleChange}
        type="checkbox"
        name={name}
        id={name}
      />
      <TypeLabel
        tabIndex="0"
        htmlFor={name}
        $isCkecked={type === name}
        onKeyDown={e => e.key === 'Enter' && handleChange()}
      >
        <TypeBox $isCkecked={type === name}>
          <TypeMark $isCkecked={type === name} />
        </TypeBox>
        <TypeText>{children} </TypeText>
      </TypeLabel>
    </TypeContainer>
  );
}

export default TypeCheckbox;
