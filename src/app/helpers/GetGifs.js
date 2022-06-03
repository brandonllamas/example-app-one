export const getGifs = async(valorBusqueda, limit = 5) => {
    var url = `https://api.giphy.com/v1/gifs/search?api_key=9qvvZ3CZOydnJ9r1qQB4lhd4FRrI1AMg&q=${valorBusqueda}&limit=${limit}`;
    if (valorBusqueda === "topGif") {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=9qvvZ3CZOydnJ9r1qQB4lhd4FRrI1AMg&limit=${limit}`;
    }
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
        return {
            id: id,
            title: title,
            url: images.downsized.url,
        };
    });

    return gifs;
};