export default interface ICreateMovie {
  id: number;
  backdropPath?: string;
  genre: string;
  director: string;
  title: string;
  overview: string;
  posterPath?: string;
  year: string;
  voteAverage: number;
  voteCount: number;
}
