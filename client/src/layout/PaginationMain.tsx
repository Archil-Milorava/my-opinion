import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
}

const PaginationMain = ({ totalPages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const navigateToPages = (page: number) => {
    if (page >= 1 && (!totalPages || page <= totalPages)) {
      setSearchParams({ page: String(page) });
    }
  };

  const navigateExactPage = (page: number) => {
    if (page >= 1 && (!totalPages || page <= totalPages)) {
      setSearchParams({ page: String(page) });
    }
  };

  return (
    <div className="py-2">
      <Pagination>
        <PaginationContent>
          {/* previous */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => navigateToPages(currentPage - 1)}
            />
          </PaginationItem>

          {/* //current Page */}
          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          {totalPages > 1 && currentPage !== totalPages && (
            <PaginationItem>
              <PaginationLink
                onClick={() => navigateExactPage(currentPage + 1)}
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* next */}
          <PaginationItem>
            <PaginationNext
              className={`${currentPage === totalPages && "opacity-20"}`}
              onClick={() => navigateToPages(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationMain;
