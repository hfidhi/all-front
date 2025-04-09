export interface User {
  id: string;
  email: string;
  roles: string[];
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  pass: string;
}

export interface RegisterCredentials {
  email: string;
  pass: string;
  firstName: string;
  lastName: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface UserRisk {
  id: string;
  riskScore: number;
  metrics: {
    [key: string]: number;
  };
}