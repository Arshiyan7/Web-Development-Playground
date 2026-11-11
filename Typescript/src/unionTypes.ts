type Role = "admin" | "editor" | "viewer";

interface Member {
  name: string;
  role: Role;
  age: number | null;
}

const m1: Member = { name: "Ali", role: "admin", age: null };
const m2: Member = { name: "Sara", role: "owner", age: 30 };
const m3: Member = { name: "Zed", role: "viewer" };
const m4: Member = { name: "Noor", role: "editor", age: "25" };

function greet(m: Member) {
  if (m.age === null) return "age unknown";
  return m.age + 1;          
}

console.log(greet(m2))