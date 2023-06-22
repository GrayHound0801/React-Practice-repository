import { useQuery } from "@tanstack/react-query";

const { axiosInstance } = require("apis/core");

const params = {
	language: "ko-KR",
	api_key: process.env.REACT_APP_TOKEN,
	page: 1,
};

const fetchMovies = async () => {
	const { data } = await axiosInstance.get("/movie/top_rated", { params });
	return data.results;
};

const TopRated = () => {
	const { data, isLoading } = useQuery(["movies"], fetchMovies);

	if (isLoading) {
		return <span>로딩중</span>;
	}
	return (
		<div>
			{data &&
				data.map(movie => (
					<div key={movie.id}>
						<h1>{movie.title}</h1>
						<img
							src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
				))}
		</div>
	);
};

export default TopRated;
