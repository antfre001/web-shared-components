import { cx, __DEV__ } from "@sk-web-gui/utils";
import { useEffect, useState } from "react";
import * as React from "react";
import { useZebraTableClass } from "./styles";
import { Pagination } from "@sk-web-gui/pagination";

export interface ZebraTableHeader {
  element: JSX.Element;
  isColumnSortable: boolean;
  isShown: boolean;
  screenReaderOnly?: boolean;
}
export interface ZebraTableColumn {
  element: JSX.Element;
  isShown: boolean;
}

export interface IZebraTableProps {
  headers: ZebraTableHeader[];
  rows: ZebraTableColumn[][];
  tableSortable?: boolean;
  sortHandler?: (idx: number, sortMode: boolean) => void;
  sortAscending?: boolean;
  pageSize?: number;
  page?: number;
  pages?: number;
  captionTitle?: string;
  captionBody?: string;
  summary?: string;
}

export type ZebraTableProps = IZebraTableProps &
  React.HTMLAttributes<HTMLTableElement>;

export const ZebraTable = React.forwardRef<HTMLTableElement, ZebraTableProps>(
  (props, ref) => {
    const {
      headers,
      rows,
      tableSortable = true,
      sortHandler = () => {},
      sortAscending = true,
      pageSize = 5,
      page = 1,
      pages = 1,
      captionTitle,
      captionBody,
      summary,
      ...rest
    } = props;

    const zebraTableClasses = useZebraTableClass();

    const [managedRows, setManagedRows] = useState(rows);
    const [sortModeAscending, setSortModeAscending] = useState(sortAscending);
    const [sortIndex, setSortIndex] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(page);
    const [currentPages, setPages] = useState<number>(pages);
    const internalSortHandler = (idx: number) => {
      setSortModeAscending(sortIndex === idx ? !sortModeAscending : sortAscending);
      setSortIndex(idx);
    };

    useEffect(() => {
      sortHandler(sortIndex, sortModeAscending);
    }, [sortIndex, sortModeAscending, sortHandler]);

    useEffect(() => {
      setCurrentPage(page);
    }, [page]);

    useEffect(() => {
      setPages(Math.ceil(rows.length / pageSize))
      let startIndex = (currentPage * pageSize) - pageSize;
      setManagedRows(rows.slice(startIndex, startIndex + pageSize));
    }, [pageSize, currentPage, rows, sortIndex, sortModeAscending]);
  
    return (
      <>
        {managedRows.length > 0 && (
          <table
            className={zebraTableClasses}
            aria-label={`${rows.length} rader på ${currentPages} sidor`}
            tabIndex={0}
            summary={summary ?? summary}
          >
            {captionTitle && 
              <caption className="sr-only">
                {captionTitle}
                
                {captionBody &&
                  <>
                    <br />
                    <span>
                      {captionBody}
                    </span>
                  </>
                }
              </caption>
            }
            
            <thead className="zebratable-thead">
              <tr className={cx(`zebratable-thead-tr`)}>
                {headers.map((h, idx) => {
                  return h.isShown ? (
                    <th
                      scope="col"
                      key={`header${idx}`}
                      aria-sort={`${sortIndex == idx ? (sortModeAscending ? "ascending" : "descending") : 'none'}`}
                      data-iscolumnsortable={h.isColumnSortable}
                      className="zebratable-thead-th"
                    >
                      
                      {h.isColumnSortable ? (
                        <>
                          <span className="sr-only" aria-label={h.element.props.children}>
                            {h.element.props.children}
                          </span>
                          <button
                            className="zebratable-sortbutton"
                            aria-label={`Sortera efter ${
                              h.element.props.children
                            } i ${
                              sortModeAscending ? "stigande" : "fallande"
                            } ordning`}
                            onClick={(e) => {
                              tableSortable &&
                                h.isColumnSortable &&
                                internalSortHandler(idx);
                            }}
                          >
                            {h.element}
                            <div className="zebratable-sortbutton-icon">
                              {tableSortable &&
                                h.isColumnSortable &&
                                (idx === sortIndex ? (
                                  <span
                                    data-sortmodeascending={sortModeAscending}
                                    className="zebratable-sortbutton-icon-sort material-icons-outlined"
                                  >
                                    chevron_right
                                  </span>
                                ) : (
                                  <span className="zebratable-sortbutton-icon-more material-icons-outlined">
                                    unfold_more
                                  </span>
                              ))}

                            </div>
                            
                          </button>
                        </>
                      ) : 
                        <span
                        className={cx(`${h.screenReaderOnly ? `sr-only` : ``}`)}
                      >{h.element.props.children}</span>
                      }
                    </th>
                  ) : null;
                })}
              </tr>
            </thead>
            <tbody className="zebratable-tbody">
              {managedRows.map((cols, idx) => (
                <tr key={`row${idx}`} className="zebratable-tbody-tr">
                  {cols.map((col, idx) =>
                    col.isShown ? (
                      <td key={`col${idx}`} className="zebratable-tbody-td">
                        {col.element}
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {pages > 1 && (
          <div className="zebratable-paginationwrapper">
            <Pagination pages={currentPages} activePage={currentPage} changePage={(page: number) => setCurrentPage(page)} />
          </div>
        )}
      </>
    );
  }
);

if (__DEV__) {
  ZebraTable.displayName = "ZebraTable";
}
