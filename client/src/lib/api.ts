// Simple API client to replace tRPC
const API_BASE = '/api';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export const api = {
  auth: {
    register: async (data: { email: string; password: string; name: string }): Promise<AuthResponse> => {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      return res.json();
    },
    
    login: async (data: { email: string; password: string }): Promise<AuthResponse> => {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      return res.json();
    },
    
    me: async (): Promise<AuthResponse> => {
      const res = await fetch(`${API_BASE}/auth/me`, {
        credentials: 'include',
      });
      return res.json();
    },
    
    logout: async (): Promise<{ success: boolean }> => {
      const res = await fetch(`${API_BASE}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      return res.json();
    },
  },
};
