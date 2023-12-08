document.addEventListener("DOMContentLoaded", function () {
    // Film data
    const films = [
        { title: "Earwig and the Witch", director: "Gorō Miyazaki" },
        { title: "The Red Turtle", director: "Michaël Dudok de Wit" },
        { title: "When Marnie Was There ", director: "Hiromasa Yonebayashi" },
        { title: "The Tale of the Princess Kaguya ", director: "Isao Takahata" },
        { title: "The Wind Rises", director: "Hayao Miyazaki" },
        { title: "From Up on Poppy Hill", director: "Gorō Miyazaki" },
        { title: "Arrietty", director: "Hiromasa Yonebayashi" },
        { title: "Ponyo", director: "Hayao Miyazaki" },
        { title: "Tales from Earthsea", director: "Gorō Miyazaki" },
        { title: "Howl's Moving Castle", director: "Hayao Miyazaki" },
        { title: "The Cat Returns ", director: "Hiroyuki Morita" },
        { title: "Spirited Away ", director: "Hayao Miyazaki" },
        { title: "My Neighbors the Yamadas", director: "Isao Takahata" },
        { title: "Princess Mononoke ", director: "Hayao Miyazaki" },
        { title: "Whisper of the Heart ", director: "Yoshifumi Kondō" },
        { title: "Pom Poko", director: "Isao Takahata" },
        { title: "Porco Rosso", director: "Hayao Miyazaki" },
        { title: "Only Yesterday", director: "Isao Takahata" },
        { title: "Kiki's Delivery Service ", director: "Hayao Miyazaki" },
        { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
        { title: "Grave of the Fireflies", director: "Isao Takahata" },
        { title: "Castle in the Sky ", director: "Hayao Miyazaki" }
    ];
    const filmsByElement = document.getElementById("filmsBy");
    films.forEach(film =>{
    const li = document.createElement("li");
    if(film.director=="Hayao Miyazaki"){
    li.textContent =film.title +" " + ":" +" " + film.director;
    li.style.color="red";
    filmsByElement.appendChild(li);} 
    else{ 
    li.textContent =film.title+" " + ":" +" " + film.director;
    filmsByElement.appendChild(li);}})

    
    // Display directors
    const directorsList = ["Michaël Dudok de Wit", "Yoshifumi Kondō", "Gorō Miyazaki", "Hayao Miyazaki", "Hiroyuki Morita", "Isao Takahata", "Hiromasa Yonebayashi"];
    const directorsElement = document.getElementById("directors");
    directorsList.forEach(director => {
        const li = document.createElement("li");
        li.textContent = director;
        directorsElement.appendChild(li);
    });

    // Display films by director
    const directorFilms = films.reduce((acc, film) => {
        if (!acc[film.director]) {
            acc[film.director] = [];
        }
        acc[film.director].push(film.title);
        return acc;
    }, {});

    const directorsFilmsListElement = document.getElementById("directorsfilmsList");
    for (const director in directorFilms) {
        const li = document.createElement("li");
        li.textContent = director;
        const ul = document.createElement("ul");
        directorFilms[director].forEach(title => {
            const filmLi = document.createElement("li");
            filmLi.textContent = title;
            ul.appendChild(filmLi);
        });
        li.appendChild(ul);
        directorsFilmsListElement.appendChild(li);
    }
});