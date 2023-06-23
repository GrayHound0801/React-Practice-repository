import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const TopRated = () => {
	const {
		data: topRatedMovies,
		isLoading,
		isError,
	} = CacheUtils.cacheTopRatedMovie(1);
	console.log(topRatedMovies);

	if (isLoading) {
		return <div>로딩 중...</div>;
	}

	if (isError) {
		return <div>에러가 발생했습니다.</div>;
	}

	if (!topRatedMovies) topRatedMovies = [];
	else {
		const { topRatedMovies } = topRatedMovies.data.data.results;
	}

	return (
		<div>
			<MovieList movies={topRatedMovies} />
		</div>
	);
};
export default TopRated;
