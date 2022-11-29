import PropTypes from "prop-types";
import { buttonsVariant, StyledButton, StyledIcon } from "./Button.styles";

const Button = ({
  ariaLabel,
  variant,
  label,
  Icon,
  color,
  bgColor,
  border,
  borderWidth,
  borderColor,
  disabled,
  handleClick,
  testID,
  t,
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      data-testid={testID}
      variant={variant}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      onClick={handleClick}
      borderWidth={borderWidth}
      border={border}
      borderColor={borderColor}
    >
      {Icon && (
        <StyledIcon variant={variant} color={color} bgColor={bgColor} label={label}>
          <Icon width='1.5rem'/>
        </StyledIcon>
      )}
      {t ? t(label) : label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(buttonsVariant)),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  t: PropTypes.func,
};

export default Button;
