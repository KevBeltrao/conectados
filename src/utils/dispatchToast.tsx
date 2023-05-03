import { toast } from 'react-toastify';

import Toast from '../components/Toast';

interface InfoI {
  title: string;
  description: string;
}

export const dispatchToast = {
  success: (info: InfoI) => {
    const { title, description } = info;

    toast(<Toast type="success" title={title} description={description} />, {
      style: {
        background: '#DAECD5',
      },
    });
  },
  error: (info: InfoI) => {
    const { title, description } = info;

    toast(<Toast type="error" title={title} description={description} />, {
      style: {
        background: '#DC3545',
      },
    });
  },
};
