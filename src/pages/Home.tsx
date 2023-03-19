import Cards from '../Components/Cards';
import Search from '../Components/Search';

const handleSearch = (query: string) => {
  console.log('Search query:', query);
};

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Search onSearch={handleSearch} />
      <Cards />
    </>
  );
}

export default Home;
