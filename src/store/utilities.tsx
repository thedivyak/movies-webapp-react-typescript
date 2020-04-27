export const extractMovieSummaries = ({id, title, rating, runtime, genres, directors, writers}: any) => {
    let crew = new Set()
    for (let d of directors) {
        crew.add(d.name)
    }
    for (let w of writers) {
        crew.add(w.name)
    }
    return {movieId: id, title, rating, runtime, genres: genres, crew: Array.from(crew)}
}
