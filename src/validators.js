export const required = value => value ? undefined : 'Please enter a value. This is a required field. Thanks!';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Please enter a value. This field cannot be empty. Thanks!';
export const isTrimmed = value => value.trim() === value ? undefined : 'Please check your entry. This field cannot start or end with whitespace. Thanks!';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Please change your entry. This field must be at least ${length.min} characters long. Thanks!`;
  }
  if (length.max && value.length > length.max) {
    return `Please change your entry. This field must be at most ${length.max} characters long. Thanks!`;
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Please change your entry. This field does not match your above entered password.  Thanks!';
