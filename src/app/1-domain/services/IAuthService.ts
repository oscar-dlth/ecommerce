export interface IAuthService {
    sign(email: string, name: string): { token: string, duration: string };
    login( userName: string, password: string):{ token: string, duration: string }
}