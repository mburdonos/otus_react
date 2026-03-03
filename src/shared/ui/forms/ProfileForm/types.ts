// src/components/ProfileForm/types.ts
import type { FormikContextType } from 'formik';

export interface ProfileFormProps {
  className?: string;
  formManager: FormikContextType<{ name: string; about: string }>;
  formElement?: React.RefObject<HTMLFormElement>;
  autoFocusElement?: string;
  disabled?: boolean;
}
