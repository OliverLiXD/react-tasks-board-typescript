import { DRAG_ITEM, DRAG_LIST, DRAG_ITEM_ACROSS_LIST } from "./constants";

export function dragItemAction(data: any) {
  return {
    type: DRAG_ITEM,
    data
  }
}

export function dragListAction(data: any) {
  return {
    type: DRAG_LIST,
    data
  }
}

export function dragItemAcrossListAction(data: any) {
  return {
    type: DRAG_ITEM_ACROSS_LIST,
    data
  }
}