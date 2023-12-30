export interface productRequests {
  productRequests: {
    category: string;
    description: string;
    id: number;
    status: string;
    title: string;
    upvotes: number;
    comments?: {
      content: string;
      id: number;
      user: {
        image: string
        name: string
        username: string
      }
    }[];
  }[];
}

interface currentUser {
  currentUser: {
    image: string;
    name: string;
    username: string;
  };
}

export interface Products {
  productData: currentUser | productRequests
}



// sorting options

export interface SortListItemProps {
  listAction: string;
}






// button


export interface ButtonProps {
  textValue: string
  backgroundValue: string
  linkTo: string
}