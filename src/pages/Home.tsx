import Cards from '../Components/Cards';
import Search from '../Components/Search';

const handleSearch = (query: string) => {
  console.log('Search query:', query);
};

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Cards />
      <Search onSearch={handleSearch} />
    </>
  );
}

export default Home;
