import React from "react";
//import * as Styled from "./Pagination.styles";
import { Pagination as PaginationParams } from "models";

export const Pagination = ({ count, pages, next, prev }: PaginationParams) => {
  return (
    <>
      <nav aria-label="...">
        <ul>
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">
              2 <span>(current)</span>
            </a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
