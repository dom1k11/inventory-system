export type LoginFormProps = {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  onChange: (field: "email" | "password", value: string) => void;
  onSubmit: () => void;
  onGoToRegister: () => void;
};
