import PaginationButtons from '../components/PaginationButtons';

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%]">
      <p className="text-gray-600 text-md mb-5">
        {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>
      {results.items.map((res) => {
        return (
          <div key={res.link} className="max-w-xl mb-8 text-gray-600">
            <div className="group ">
              <a href={res.lnk}>
                <h2 className="truncate text-lg text-blue-800  font-medium group-hover:underline hover:cursor-pointer">
                  {res.title}
                </h2>
              </a>
              <a href={res.link} className="text-sm">
                {res.formattedUrl}
              </a>
            </div>
            <p className="line-clamp-2 text-sm ">{res.snippet}</p>
          </div>
        );
      })}
      <PaginationButtons />
    </div>
  );
}
export default SearchResults;
