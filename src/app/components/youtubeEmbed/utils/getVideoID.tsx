export default (src: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = src.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};
