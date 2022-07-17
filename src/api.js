export const fetchWrap = () => fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        return response.json()
    })

