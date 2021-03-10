interface WrapperProps {
  condition: any;
  wrapper?: any;
  children?: any;
}

const Wrapper = ({ condition, wrapper, children }: WrapperProps) => {
  return condition ? wrapper(children) : children;
};

export default Wrapper;
