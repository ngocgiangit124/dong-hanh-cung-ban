import Cookies from 'js-cookie'

export const authFull = () => {
    return {
        'Authorization': `bearer ${JSON.parse(Cookies.get('UserData')).token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
export const authUser = (token) => {
    return {
        'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}