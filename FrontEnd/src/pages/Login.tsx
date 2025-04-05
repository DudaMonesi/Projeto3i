import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Exibe um alert com as informações inseridas
    alert(`Email: ${data.email}\nSenha: ${data.password}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Login</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'O email é obrigatório' })}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email.message}</p>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register('password', { 
              required: 'A senha é obrigatória', 
              minLength: { value: 8, message: 'A senha deve ter no mínimo 8 caracteres' } 
            })}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password.message}</p>}
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;