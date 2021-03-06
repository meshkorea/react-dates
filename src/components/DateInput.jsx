import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import throttle from 'lodash/throttle';
import isTouchDevice from 'is-touch-device';

import openDirectionShape from '../shapes/OpenDirectionShape';
import { OPEN_DOWN, OPEN_UP } from '../../constants';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string, // also used as label
  displayValue: PropTypes.string,
  inputValue: PropTypes.string,
  screenReaderMessage: PropTypes.string,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  openDirection: openDirectionShape,
  showCaret: PropTypes.bool,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDownShiftTab: PropTypes.func,
  onKeyDownTab: PropTypes.func,

  onKeyDownArrowDown: PropTypes.func,
  onKeyDownQuestionMark: PropTypes.func,

  // accessibility
  isFocused: PropTypes.bool, // describes actual DOM focus
});

const defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  inputValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: OPEN_DOWN,
  showCaret: false,

  onChange() {},
  onFocus() {},
  onKeyDownShiftTab() {},
  onKeyDownTab() {},

  onKeyDownArrowDown() {},
  onKeyDownQuestionMark() {},

  // accessibility
  isFocused: false,
};

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateString: '',
      isTouchDevice: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }

  componentDidMount() {
    this.setState({ isTouchDevice: isTouchDevice() });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.displayValue && nextProps.displayValue) {
      this.setState({
        dateString: '',
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { focused, isFocused } = this.props;
    if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

    if (focused && isFocused) {
      this.inputRef.focus();
    } else {
      this.inputRef.blur();
    }
  }

  onChange(e) {
    const { onChange, onKeyDownQuestionMark } = this.props;
    const dateString = e.target.value;

    // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
    // special case the `?` key so that it always triggers the appropriate callback, instead of
    // modifying the input value
    if (dateString[dateString.length - 1] === '?') {
      onKeyDownQuestionMark(e);
    } else {
      const escaped = dateString.replace(/\D/g, '');
      const formattedString = [
        escaped.substr(0, 4),
        escaped.substr(4, 2),
        escaped.substr(6, 2),
      ]
        .filter(x => x)
        .join('-');
      this.setState({ dateString: formattedString });
      onChange(formattedString);
    }
  }

  onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
    }

    throttle(this.handleOnKeydown, 300);
  }

  onDoubleClick() {
    window.getSelection().collapseToEnd();
  }

  setInputRef(ref) {
    this.inputRef = ref;
  }

  handleOnKeydown(e) {
    e.stopPropagation();

    const {
      onKeyDownShiftTab,
      onKeyDownTab,
      onKeyDownArrowDown,
      onKeyDownQuestionMark,
    } = this.props;

    const { key } = e;
    if (key === 'Tab') {
      if (e.shiftKey) {
        onKeyDownShiftTab(e);
      } else {
        onKeyDownTab(e);
      }
    } else if (key === 'ArrowDown') {
      onKeyDownArrowDown(e);
    } else if (key === '?') {
      e.preventDefault();
      onKeyDownQuestionMark(e);
    }
  }

  render() {
    const {
      dateString,
      isTouchDevice: isTouch,
    } = this.state;
    const {
      id,
      placeholder,
      displayValue,
      inputValue,
      screenReaderMessage,
      focused,
      showCaret,
      onFocus,
      disabled,
      required,
      readOnly,
      openDirection,
      styles,
    } = this.props;

    const displayText = displayValue || inputValue || dateString || placeholder || '';
    const value = inputValue || displayValue || dateString || '';
    const screenReaderMessageId = `DateInput__screen-reader-message-${id}`;

    const withCaret = showCaret && focused;

    return (
      <div
        {...css(
          styles.DateInput,
          withCaret && styles.DateInput__withCaret,
          disabled && styles.DateInput__disabled,
          withCaret && openDirection === OPEN_DOWN && styles.DateInput__openDown,
          withCaret && openDirection === OPEN_UP && styles.DateInput__openUp,
        )}
      >
        <input
          {...css(
            styles.DateInput_input,
            readOnly && styles.DateInput_input__readOnly,
          )}
          aria-label={placeholder}
          type="text"
          id={id}
          name={id}
          ref={this.setInputRef}
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onDoubleClick={this.onDoubleClick}
          onFocus={onFocus}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
          readOnly={typeof readOnly === 'boolean' ? readOnly : isTouch}
          required={required}
          aria-describedby={screenReaderMessage && screenReaderMessageId}
        />

        {screenReaderMessage && (
          <p {...css(styles.DateInput_screenReaderMessage)} id={screenReaderMessageId}>
            {screenReaderMessage}
          </p>
        )}

        <div
          {...css(
            styles.DateInput_displayText,
            !!value && styles.DateInput_displayText__hasInput,
            focused && styles.DateInput_displayText__focused,
            disabled && styles.DateInput_displayText__disabled,
          )}
        >
          {displayText}
        </div>
      </div>
    );
  }
}

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default withStyles(({ reactDates: { color, sizing, spacing, font, zIndex } }) => {
  const inputHeight =
    parseInt(font.input.lineHeight, 10) +
    (2 * spacing.inputPadding) +
    (2 * spacing.displayTextPaddingVertical);

  return {
    DateInput: {
      fontWeight: 200,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.placeholderText,
      margin: 0,
      padding: spacing.inputPadding,

      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle',
    },

    DateInput__withCaret: {
      ':before': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        bottom: 'auto',
        border: `${sizing.tooltipArrowWidth / 2}px solid transparent`,
        left: 22,
        zIndex: zIndex + 2,
      },

      ':after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        bottom: 'auto',
        border: `${sizing.tooltipArrowWidth / 2}px solid transparent`,
        left: 22,
        zIndex: zIndex + 2,

      },
    },

    DateInput__openUp: {
      ':before': {
        borderBottom: 0,
        top: inputHeight - spacing.inputMarginBottom,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
      },

      ':after': {
        borderBottom: 0,
        top: inputHeight - spacing.inputMarginBottom - 1,
        borderTopColor: color.background,
      },
    },

    DateInput__openDown: {
      ':before': {
        borderTop: 0,
        top: spacing.inputMarginBottom - (sizing.tooltipArrowWidth / 2),
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
      },

      ':after': {
        borderTop: 0,
        top: spacing.inputMarginBottom - (sizing.tooltipArrowWidth / 2) + 1,
        borderBottomColor: color.background,
      },
    },

    DateInput__disabled: {
      background: color.disabled,
    },

    DateInput_input: {
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      border: 0,
      height: '100%',
      width: '100%',
    },

    DateInput_input__readOnly: {
      userSelect: 'none',
    },

    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1,
    },

    DateInput_displayText: {
      padding: `${spacing.displayTextPaddingVertical}px ${spacing.displayTextPaddingHorizontal}px`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },

    DateInput_displayText__hasInput: {
      color: color.text,
    },

    DateInput_displayText__focused: {
      background: color.backgroundFocused,
      borderColor: color.backgroundFocused,
      borderRadius: 3,
      color: color.textFocused,
    },

    DateInput_displayText__disabled: {
      fontStyle: 'italic',
    },
  };
})(DateInput);
