import Button from "./Button";

type PaginationBarProps = {
  pagination: Pagination;
  actionFunction: (params?: searchParams, endpoint?: string) => void;
};

const PaginationBar = ({ pagination, actionFunction }: PaginationBarProps) => {
  console.log(pagination);
  return (
    <div>
      <p>
        Page {pagination.page} of {pagination.pages}
      </p>
      <p>{pagination.items} items found</p>
      {pagination.urls ? (
        <div className="flex">
          <Button
            text="Next Page"
            actionFunction={() =>
              actionFunction(undefined, pagination.urls.next)
            }
          />
          <Button
            text="Last Page"
            actionFunction={() =>
              actionFunction(undefined, pagination.urls.last)
            }
          />
        </div>
      ) : (
        <p>No results yet</p>
      )}
    </div>
  );
};
export default PaginationBar;
