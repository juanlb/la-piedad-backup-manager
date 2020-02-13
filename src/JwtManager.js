import queryString from 'query-string';
import decodeJwt from 'jwt-decode';


function get_id_token() {
    const hash = window.location.hash.replace('/', '');
    const parsedHash = queryString.parse(hash);
    return parsedHash.id_token;
}

export default {
    id_token: () => get_id_token(),
    role: () => {
        try {
            const decodedToken = decodeJwt(get_id_token());
            return (decodedToken['custom:role'])
                ? decodedToken['custom:role']
                : 'user'
        } catch (error) {
            console.log(error.name + ": " + error.message);
            return undefined;
        }
    }
}