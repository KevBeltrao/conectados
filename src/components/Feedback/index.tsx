import {
  useCallback,
  useContext,
  useMemo,
  type Dispatch,
  type FC,
  type SetStateAction,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizContext } from '../../globalStorage/QuizProvider';
import getQuizStatus from '../../utils/getQuizStatus';

import Feedback from './Feedback';
import success from './assets/success.svg';
import tryAgain from './assets/tryagain.svg';

interface WrapperTypes {
  type: 'success' | 'failure';
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Wrapper: FC<WrapperTypes> = ({ type, isVisible, setIsVisible }) => {
  const navigate = useNavigate();
  const { quizState } = useContext(QuizContext);

  const points = useMemo(() => {
    const { points } = getQuizStatus(quizState);
    return points;
  }, [quizState]);

  const handleButtonClick = useCallback((): void => {
    if (type === 'failure') {
      setIsVisible(false);
      return;
    }

    navigate('/');
  }, [isVisible]);

  const { title, content, image, buttonText } = useMemo(
    () =>
      type === 'success'
        ? {
            title: 'Muito bom!',
            content: 'Você ganhou 100 pontos por acertar a questão',
            image: success,
            buttonText: 'Próximo',
          }
        : {
            title: 'Você está quase lá!',
            content:
              'Tente novamente encontrar a resposta correta. Temos certeza que você consegue!',
            image: tryAgain,
            buttonText: 'Tentar novamente',
          },
    [type],
  );

  return (
    <Feedback
      title={title}
      content={content}
      handleButtonClick={handleButtonClick}
      image={image}
      buttonText={buttonText}
      isVisible={isVisible}
      points={points}
      type={type}
    />
  );
};

export default Wrapper;
