import { useForm } from 'react-hook-form';

export const Form = ({ id, onSubmit, children, options, role = 'search' }) => {
  const methods = useForm({ ...options });

  return (
    <form id={id} style={{ width: '100%' }} role={role} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};
