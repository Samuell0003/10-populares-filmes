
function getFilmesServer() {
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=cb9eac1686194f2c0a04dbae882d8bb3&language=pt-BR&page=1"
    fetch(filename)
        .then(response => response.json())
        .then(dados => criarElement(dados.results))
        .catch(error => console.log(error));
}

function criarElement(dados) {
    dados.forEach((e, i) => {
        if (i < 10) {
            var div = document.createElement("div");
            var img = new Image();
            img.src = "https://image.tmdb.org/t/p/w500/" + e.poster_path;
            img.alt = e.overview;
            div.setAttribute("class", "config");
            div.setAttribute("id", `${i}`);
            div.addEventListener("mouseover", mostrarDiv);
            div.addEventListener("mouseleave", ocultarDiv);
            div.appendChild(img);
            div.appendChild(div2(e, i));
            document.getElementById("10melhoresFilmes").appendChild(div);
        }
    })
}

function div2(e, i) {
    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-body1");
    title = document.createElement("p");
    point = document.createElement("div");
    point.innerHTML = `
        <div class="info">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-calendar2-date-fill mb-1 me-1" viewBox="0 0 16 16">
                    <path
                        d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                    <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                </svg>
                ${new Date(e.release_date).toLocaleDateString()}
            </p>
        
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-hand-thumbs-up-fill mb-1 me-1" viewBox="0 0 16 16">
                    <path
                        d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
                ${e.vote_average}
            </p>
        </div>`;

    title.innerHTML = e.title;
    point.style.textAlign = "right";
    point.style.margin = "0";
    div2.setAttribute("id", `e${i}`);
    div2.appendChild(title);
    div2.appendChild(point);

    return div2;
}

function mostrarDiv(event) {
    indice = event.currentTarget.id;
    document.getElementById(indice).setAttribute("class", "config evento")
    document.getElementById(`e${indice}`).setAttribute("class", "card-body1 card-body2");
}

function ocultarDiv(event) {
    indice = event.currentTarget.id;
    document.getElementById(indice).setAttribute("class", "config");
    document.getElementById(`e${indice}`).setAttribute("class", "card-body1");
}


