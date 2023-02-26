import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
