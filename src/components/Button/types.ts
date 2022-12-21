export interface IButton{
    title: string;
    variant?: string;       //->opcional
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyled{
    variant: string;
}