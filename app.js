const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    console.log(JSON.stringify(res));
    makeImages(res.data)
    form.elements.query.value = '';
})
const content = document.querySelector('#rw')
const makeImages = (shows) => {
    document.body.classList.add("bg-gradient");
    for (let result of shows) {
        // if (window.innerWidth >= 932 && shows.data.indexOf(result) === shows.data.length - 1) continue;
        if (result.show.image) {
            const divi = document.createElement('DIV');
            divi.className = "col-lg-4 col-md-6 col-sm-12";
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            divi.append(img);
            content.append(divi);
        }
    }
    const show = document.querySelectorAll('img')
    for (let result of show) {
        result.setAttribute("class", "rounded mx-auto")
    }
}