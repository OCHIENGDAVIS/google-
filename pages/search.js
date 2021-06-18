import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const startIndex = context.query.start || '0';
  const useDammyData = false;
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  );
  const results = await data.json();
  return {
    props: {
      results: results,
    },
  };
};

export default Search;
