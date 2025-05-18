
interface User {
  id: number;
  username: string;
  email: string;
  isAdmin?: boolean;
}
function getAdmins(users: User[]): User[] {
  return users.filter(user => user.isAdmin);
}

const users: User[] = [
  { id: 1, username: "giorgi", email: "giorgi@example.com", isAdmin: true },
  { id: 2, username: "nino", email: "nino@example.com" },
  { id: 3, username: "luka", email: "luka@example.com", isAdmin: true },
];

const adminUsers = getAdmins(users);
console.log("Admins:", adminUsers);



function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}


const firstString = getFirstItem(["apple", "banana", "cherry"]);
const firstNumber = getFirstItem([100, 200, 300]);
const firstAdmin = getFirstItem(adminUsers);

console.log("First string:", firstString);
console.log("First number:", firstNumber);
console.log("First admin:", firstAdmin);


type ApiResponse = {
  status: "success";
  data: {
    id: number;
    name: string;
  };
};


function extractName(response: ApiResponse): string {
  return response.data.name;
}

const mockResponse: ApiResponse = {
  status: "success",
  data: {
    id: 5,
    name: "Test Product",
  },
};

console.log("Extracted name:", extractName(mockResponse));


enum Role {
  Guest,
  User,
  Admin,
}

function getWelcomeMessage(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "Welcome Admin";
    case Role.User:
      return "Welcome User";
    case Role.Guest:
      return "Guest access only";
    default:
      return "Unknown role";
  }
}

console.log(getWelcomeMessage(Role.Guest));
console.log(getWelcomeMessage(Role.Admin)); 



interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
}


const tempProduct: Partial<Product> = {
  title: "Draft Title",
};


const shortProductInfo: Pick<Product, "title" | "price"> = {
  title: "Headphones",
  price: 299,
};


const productNoDesc: Omit<Product, "description"> = {
  id: "prod-1",
  title: "Monitor",
  price: 499,
};

console.log("Temp Product:", tempProduct);
console.log("Short Info:", shortProductInfo);
console.log("Without Description:", productNoDesc);
