export type People = {
    id: number;
	firstName: string;
	lastName: string;
}
export type QueryResponse = {
    rows: People[];
    rowCount: number;
}

export type CustomError = {
    type: string;
    message: string;
    stack: Error;
  };

export type createPeople = Omit<People, "id">