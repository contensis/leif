export const iconColor = (
  type?: string,
  isHollow?: boolean,
  isDisabled?: boolean
) => {
  let iconColor;
  if (type === 'secondary' && !isHollow && !isDisabled) {
    iconColor = '#77E8C6';
  } else if (type === 'secondary' && isHollow && isDisabled) {
    iconColor = '#f1f1f1';
  } else if (type === 'white' && isDisabled) {
    iconColor = '#f1f1f1';
  } else if (type === 'white') {
    iconColor = '#fff';
  } else if (isDisabled) {
    iconColor = '#fff';
  } else {
    iconColor = '#2B2F51';
  }
  return iconColor;
};
