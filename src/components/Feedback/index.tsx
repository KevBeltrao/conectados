import { type FC } from 'react';

import Feedback from './Feedback';

interface WrapperTypes {
  title: string;
  content: string;
}

const Wrapper: FC<WrapperTypes> = ({ title, content }) => {
  return <Feedback title={title} content={content} />;
};

export default Wrapper;
