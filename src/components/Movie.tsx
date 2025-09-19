interface Props {
  title: string;
  poster: string;
}

const Movie: React.FC<Props> = ({ title, poster }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={poster} alt={title} width = "300px"/>
    </div>
  );
};

export default Movie;