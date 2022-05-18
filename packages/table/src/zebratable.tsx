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
  pageSize?: number;
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
      pageSize = 5,
      captionTitle,
      captionBody,
      summary,
      ...rest
    } = props;

    const zebraTableClasses = useZebraTableClass();

    const [managedRows, setManagedRows] = useState(rows);
    const [sortModeAscending, setSortModeAscending] = useState(true);
    const [sortIndex, setSortIndex] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginationPage, setPaginationPage] = useState<number>(1);
    const internalSortHandler = (idx: number) => {
      setSortModeAscending(sortIndex === idx ? !sortModeAscending : true);
      setSortIndex(idx);
    };

    const pages = Math.ceil(rows.length / pageSize);

    useEffect(() => {
      sortHandler(sortIndex, sortModeAscending);
    }, [sortIndex, sortModeAscending, sortHandler]);

    useEffect(() => {
      setCurrentPage(1);
      setPaginationPage(1);
    }, [rows]);

    useEffect(() => {
      setCurrentPage(paginationPage);
    }, [paginationPage]);

    useEffect(() => {
      const startIndex = (currentPage - 1) * pageSize;
      setManagedRows(rows.slice(startIndex, startIndex + pageSize));
    }, [currentPage, rows, pageSize, sortIndex, sortModeAscending]);

    return (
      <>
        {managedRows.length > 0 && (
          <table
            className={zebraTableClasses}
            aria-label={`${rows.length} rader på ${pages} sidor`}
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
                      aria-sort={`${sortIndex == idx ? (sortModeAscending ? "descending" : "ascending") : 'none'}`}
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
                              sortModeAscending ? "fallande" : "stigande"
                            } ordning`}
                            onClick={(e) => {
                              tableSortable &&
                                h.isColumnSortable &&
                                internalSortHandler(idx);
                            }}
                          >
                            {h.element}
                            {tableSortable &&
                              h.isColumnSortable &&
                              (idx === sortIndex ? (
                                <span
                                  data-sortmodeascending={sortModeAscending}
                                  className="zebratable-icon-sort material-icons-outlined"
                                >
                                  chevron_right
                                </span>
                              ) : (
                                <span className="zebratable-icon-more material-icons-outlined">
                                  unfold_more
                                </span>
                              ))}
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
            <Pagination pages={pages} activePage={currentPage} changePage={(page: number) => setCurrentPage(page)} />
          </div>
        )}
      </>
    );
  }
);

if (__DEV__) {
  ZebraTable.displayName = "ZebraTable";
}
