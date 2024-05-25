import Button from "./Button";

type PaginationBarProps = {
  pagination: Pagination;
  actionFunction: (params?: searchParams, endpoint?: string) => void;
};

const PaginationBar = ({ pagination, actionFunction }: PaginationBarProps) => {
  return (
    <div>
      {pagination.pages && (<>
        <p>Page {pagination.page} of {pagination.pages} for {pagination.items} items found</p>
      </>)}
      {pagination.urls && (
        <div className="flex">
          {pagination.urls.first && (
            <Button
              text="First Page"
              actionFunction={() =>
                actionFunction(undefined, pagination.urls.first)
              }
            />
          )}
          {pagination.urls.next && (
            <Button
              text="Next Page"
              actionFunction={() =>
                actionFunction(undefined, pagination.urls.next)
              }
            />
          )}
          {pagination.urls.prev && (
            <Button
              text="Previous Page"
              actionFunction={() =>
                actionFunction(undefined, pagination.urls.prev)
              }
            />
          )}
          {pagination.urls.last && (
            <Button
              text="Last Page"
              actionFunction={() =>
                actionFunction(undefined, pagination.urls.last)
              }
            />
          )}
        </div>
      )}
    </div>
  );
};
export default PaginationBar;
