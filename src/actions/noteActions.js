import { ADD_NOTE, DELETE_NOTE } from "../types";

let noteID = 0;

export function addnote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
}

export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}
