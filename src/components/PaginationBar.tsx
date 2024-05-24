const PaginationBar = (pagination: Pagination) => {
  console.log(pagination);
  return (
    <div>
      <p>
        Page {pagination.page} of {pagination.pages}
      </p>
      <p>{pagination.items} items found</p>
      {pagination.urls ? (
        <div className="flex">
          <a href={pagination.urls.last}>Last</a>
          <a href={pagination.urls.next}>Next</a>
        </div>
      ) : (
        <p>No results yet</p>
      )}
    </div>
  );
};
export default PaginationBar;
