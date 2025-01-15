enum Roles {
  USER = 'user',
  ADMIN = 'admin',
}

export const validateEmail = (email: string): string | null => {
  if (!email) {
    return 'Insira um Email.';
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Email inválido. O formato correto é 'usuario@dominio.com'.";
  }

  return null;
};

export const validatePassword = (password: string): string | null => {
  if (password.length < 7) {
    return 'Senha inválida. Deve conter pelo menos 7 caracteres.';
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  if (!passwordRegex.test(password)) {
    return 'Senha inválida. Deve conter pelo menos 1 letra e 1 número.';
  }

  return null;
};

export const validatePhone = (phone: string): string | null => {
  const phoneRegex = /^\d{10,11}$/;
  if (!phoneRegex.test(phone)) {
    return 'O telefone deve conter apenas dígitos e ter 10 ou 11 números.';
  }

  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) {
    return 'Insira um nome.';
  }

  const nameRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;
  if (!nameRegex.test(name)) {
    return 'O nome deve conter pelo menos 2 palavras.';
  }

  return null;
};

export const validateBirthData = (birthData: string): string | null => {
  if (!birthData) {
    return 'Insira uma data de nascimento.';
  }

  const today = new Date();
  const birthDate = new Date(birthData);
  const minDate = new Date('1900-01-01');

  if (isNaN(birthDate.getTime())) {
    return 'Data de nascimento inválida.';
  }

  if (birthDate > today) {
    return 'A data de nascimento não pode ser no futuro.';
  }

  if (birthDate < minDate) {
    return 'A data de nascimento não pode ser anterior a 01/01/1900.';
  }

  return null;
};

export const validateRole = (role: string): string | null => {
  if (!Object.values(Roles).includes(role as Roles)) {
    return 'Selecione um cargo válido.';
  }

  return null;
};

export const validateLoginForm = (
  email: string,
  password: string,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  const emailError = validateEmail(email);
  if (emailError) {
    errors.email = emailError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
};

export const validateRegisterForm = (
  name: string,
  email: string,
  password: string,
  phone: string,
  birthData: string,
  role: string,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  const nameError = validateName(name);
  if (nameError) {
    errors.name = nameError;
  }

  const emailError = validateEmail(email);
  if (emailError) {
    errors.email = emailError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }

  const phoneError = validatePhone(phone);
  if (phoneError) {
    errors.phone = phoneError;
  }

  const birthDataError = validateBirthData(birthData);
  if (birthDataError) {
    errors.birthDate = birthDataError;
  }

  const roleError = validateRole(role);
  if (roleError) {
    errors.role = roleError;
  }

  return errors;
};
