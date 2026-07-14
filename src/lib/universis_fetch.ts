// Get the token from environment variables
import { PUBLIC_UNIVERSIS_API_TOKEN } from '$env/static/public';

export async function universisFetch(endpoint: string) : Promise<any> {

    // Clear endpoint from leading slashes
    endpoint = endpoint.replace(/^\/+/, '');

    // Construct the full URL
    const url = "https://universis-api.it.auth.gr/api/" + endpoint;

    // console.log(PUBLIC_UNIVERSIS_API_TOKEN);
    const token = PUBLIC_UNIVERSIS_API_TOKEN
        .trim()
        .replace(/[^\x00-\xFF]/g, '');

    // Perform the fetch request with the token in the Authorization header
    const result = await fetch(encodeURI(url), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '${token}'//`${PUBLIC_UNIVERSIS_API_TOKEN}`
        }
    }).then(r => r.json());
    return result;
}