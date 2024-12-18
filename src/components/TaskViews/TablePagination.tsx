interface TablePaginationProps {
  table: any;
}

const TablePagination = ({ table }: TablePaginationProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <button
        className="px-2 py-1 text-sm font-medium bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Prev
      </button>

      <div className="flex items-center space-x-2">
        {(() => {
          const pageCount = table.getPageCount();
          const currentPage = table.getState().pagination.pageIndex + 1;
          const windowSize = 5;

          let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
          let endPage = Math.min(pageCount, startPage + windowSize - 1);

          if (endPage - startPage + 1 < windowSize) {
            startPage = Math.max(1, endPage - windowSize + 1);
          }

          const pages = [];

          if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push("...");
          }

          for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
          }

          if (endPage < pageCount) {
            if (endPage < pageCount - 1) pages.push("...");
            pages.push(pageCount);
          }

          return pages.map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-white border hover:bg-gray-50"
              }`}
              onClick={() => {
                if (page !== "..." && typeof page === "number") {
                  table.setPageIndex(page - 1);
                }
              }}
            >
              {page}
            </button>
          ));
        })()}
      </div>

      <button
        className="px-2 py-1 text-sm font-medium bg-white border rounded-md hover:bg-gray-50 disabled:opacity-50"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;
