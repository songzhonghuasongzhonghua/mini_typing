
import { twMerge } from 'tailwind-merge';

const cn = (...args:any[]) => {
  return twMerge(...args);
};

export default cn;