import { Genre } from "./genre";

export interface Movie{
  id:number,
  name:string,
  date:Date
  description:string,
  moviesDirector:string,
  rating:number
  movieGenre:Genre
}
