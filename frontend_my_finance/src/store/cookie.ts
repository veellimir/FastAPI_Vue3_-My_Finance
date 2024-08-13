export const getAuthToken = (): string | null => {
    const name = "authToken=",
          decodedCookie = decodeURIComponent(document.cookie),
          cookies = decodedCookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
};