type RowID = number;

// Create an interface RowElement
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };