export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  fullName: string;
  phone?: string;
  avatarUrl?: string;
  jobTitle?: string;
  address?: string;
  birthday?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  isLoading: boolean;

  login: (data: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}