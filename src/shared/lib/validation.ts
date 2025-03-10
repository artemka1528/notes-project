interface ValidationErrors {
    email?: string;
    password?: string;
    confirm_password?: string;
}

export const validateForm = (
    form: { email: string; password: string; confirm_password?: string; title?: string; content?:string }): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!form.email.trim()) {
        errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Введите корректный email';
    } else if (form.email.length > 255) {
        errors.email = 'Email не должен превышать 255 символов';
    }

    if (!form.password.trim()) {
        errors.password = 'Пароль обязателен';
    } else if (form.password.length < 4) {
        errors.password = 'Пароль должен содержать минимум 4 символов';
    } else if (form.password.length > 12) {
        errors.password = 'Пароль не должен превышать 12 символов';
    }

    if (form.title && !form.title.trim()) {
        errors.password = 'Заголовок не может быть пустым';
    } else if (form.password.length > 64) {
        errors.password = 'Заголовок не может быть длиннее 64 символов';
    }

    if (form.content && !form.content.trim()) {
        errors.password = 'Содержимое не может быть пустым';
    } else if (form.password.length > 255) {
        errors.password = 'Содержимое не может быть длиннее 255 символов';
    }

    if (form.confirm_password && !form.confirm_password.trim()) {
        errors.confirm_password = 'Пароль обязателен';
    } else if (form.confirm_password && !form.confirm_password?.trim()) {
        errors.confirm_password = 'Повторите пароль';
    } else if (form.confirm_password !== form.confirm_password) {
        errors.confirm_password = 'Пароли не совпадают';
    }

    return errors;
};
