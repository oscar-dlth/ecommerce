export interface AuthService {
    sign(email: string, name: string): { token: string, duration: string };
    login( userName: string, password: string):{ token: string, duration: string }
}