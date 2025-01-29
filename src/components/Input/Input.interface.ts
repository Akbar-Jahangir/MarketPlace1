export interface InputProps {
    type:string
    placeholder?:string
    customStyle?:string
    value?:string 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}        