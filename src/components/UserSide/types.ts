interface AddressGeoPropTypes {
    lat: string
    lng: string
}

interface UserAddressPropTypes {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: AddressGeoPropTypes
}

interface UserCompanyPropTypes {
    bs: string
    catchPhrase: string
    name: string
}

export interface UserPropTypes {
    id: number
    email: string
    name: string
    phone: string
    username: string
    website: string
    address: UserAddressPropTypes
    company: UserCompanyPropTypes
}

export interface PostPropTypes {
    body: string
    id: number
    title: string
    userId: number
}