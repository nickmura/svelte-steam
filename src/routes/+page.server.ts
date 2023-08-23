
export const load = async ({ cookies }) => {
    try {
        if (cookies.get('client')) {
            let user = cookies.get('client')
            return { user }
        }
    } catch (error) {
        console.error(error);
    }
}