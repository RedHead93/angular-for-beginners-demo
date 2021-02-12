
export interface User {
    id: number,
    name: string,
    age: number,
    gender: string,
    city: string,
    birthday: number,
    bitcoins: number,
    blockUser?: () => void
}