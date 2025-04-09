import { AuthResponse, LoginCredentials, RegisterCredentials, Role, UserRisk } from '../types';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

// Auth API calls
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/users/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/users/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`,
      },
    });
    return handleResponse(response);
  },

  googleAuth: () => {
    window.location.href = `${API_URL}/users/auth/google`;
  },
};

// User API calls
export const userApi = {
  register: async (userData: RegisterCredentials) => {
    const response = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  getUserRisk: async (userId: string): Promise<UserRisk> => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${API_URL}/users/${userId}/risk`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  createRole: async (name: string): Promise<Role> => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${API_URL}/users/role`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
    return handleResponse(response);
  },

  getAllRoles: async (): Promise<Role[]> => {
    const response = await fetch(`${API_URL}/users/role`);
    return handleResponse(response);
  },

  addRoleToUser: async (userId: string, roleName: string) => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${API_URL}/users/role/add-to-user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ id: userId, roleName }),
    });
    return handleResponse(response);
  },
};