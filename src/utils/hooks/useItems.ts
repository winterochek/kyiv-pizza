import { useSelector } from "react-redux";
import { useIndexes, usePagination } from ".";
import { selectPizzaData } from "../../redux/pizza/selectors";
import { useMemo } from "react";
import { UseItemsReturnType } from "./types";

const useItems = ():UseItemsReturnType => {
    const { items,status } = useSelector(selectPizzaData);
    const [currentPage] = usePagination();
    const [startIndex, endIndex] = useIndexes(currentPage);
    const displayItems = useMemo(() => {
       return items.slice(startIndex, endIndex);
    }, [items, startIndex, endIndex]);
 
    return [displayItems,status ];
 };

 export default useItems