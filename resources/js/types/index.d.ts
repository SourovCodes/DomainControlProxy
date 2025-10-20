export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    auth: Auth;
    flash: {
        success?: string;
        error?: string;
        info?: string;
        warning?: string;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
