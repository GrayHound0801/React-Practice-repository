function MovieApp() {
  const { status, data } = useQuery('popularMovies', fetchPopularMovies);

  if (status === 'loading') {
    return <div>로딩중</div>;
  }

  console.log({ data });

  return (
    <div>
      {data.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieApp />
    </QueryClientProvider>
  );
}

export default App;
