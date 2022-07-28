import { useForm } from 'react-hook-form';

export const Form = ({ onSubmit, children, role, options }) => {
  const methods = useForm({ ...options });

  return (
    <form style={{ width: '100%' }} role="search" onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};
