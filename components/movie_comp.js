import PropTypes from "prop-types";

const Movie_Comp = ({ medium_cover_image, title, summary, genres }) => {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  );
};

Movie_Comp.propTypes = {
  coverImg: PropTypes.string.isRequired, // 문자열을 가지고 이건 필수다
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export { Movie_Comp };
