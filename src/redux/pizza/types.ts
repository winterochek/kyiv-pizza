export type Pizza = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
   rating: number;
   [key: string]: string | number | number[];
};

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'completed',
   ERROR = 'error',
}

export type SearchPizzaParams = {
   sortBy: string;
   order: string;
   category: string;
};

export interface PizzaSliceState {
   items: Pizza[];
   status: Status;
   count: number | null;
}
