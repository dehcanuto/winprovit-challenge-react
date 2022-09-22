export interface UserPropTypes {
    id: number
    email: string
    name: string
    phone: string
    username: string
    website: string
    address: string
    company: string
    posts?: PostPropTypes[]
}

export interface PostPropTypes {
    body: string
    id: number
    title: string
    userId?: number
}