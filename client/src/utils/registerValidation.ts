export function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

export function validateRegistrationForm(name: string, email: string, password: string) {
  const errors: Record<string, string> = {};

  if (!name.trim()) errors.name = "Name is required";
  if (!validateEmail(email)) errors.email = "Invalid email address";
  if (password.length < 3) errors.password = "Password must be at least 3 characters";

  return errors;
}
