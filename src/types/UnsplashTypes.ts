export type UnsplashResultType = {
    id:string,
    urls: {
        full: string,
        raw: string,
        regular: string,
        small: string,
        thumb: string,
    },
    user: {
        first_name: string,
        id: string,
        instagram_username: string,
        username: string,
        name: string,
        profile_image: {
            large: string,
            medium: string,
            small: string,
        }
    }
}