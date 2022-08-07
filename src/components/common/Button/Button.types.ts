export interface IButtonProps {
    text: string
    handleClick: (id: string) => Promise<void> | void
    id: string
}