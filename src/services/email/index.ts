import * as emailjs from 'emailjs-com';

interface FormFields {
  email: string;
}

type SendEmailI = (
  data: FormFields,
  successCallback: () => void,
  failCallback: () => void,
) => Promise<void>;

export const sendEmail: SendEmailI = async (
  { email: userEmail },
  successCallback,
  failCallback,
) => {
  try {
    const dataToForm = {
      user_email: userEmail,
      sponsor_name: 'Empresa Eventos',
      event_name: 'Show de Rock',
    };

    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      dataToForm as unknown as Record<string, unknown> | undefined,
      import.meta.env.VITE_EMAIL_PUBLIC_USER_ID,
    );

    successCallback();
  } catch (error: unknown) {
    failCallback();
  }
};
