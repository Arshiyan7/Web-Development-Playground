import type { Customer } from "../types/customer";

export const customers: Customer[] = [
  { id: "1", firstName: "Amelia", lastName: "Hart", email: "amelia.hart@northwind.io", plan: "Enterprise", status: "active", joined: "2025-11-04" },
  { id: "2", firstName: "Omar", lastName: "Siddiqui", email: "omar@brightlabs.co", plan: "Pro", status: "active", joined: "2026-01-19" },
  { id: "3", firstName: "Lena", lastName: "Fischer", email: "lena.fischer@kappa.de", plan: "Pro", status: "pending", joined: "2026-03-02" },
  { id: "4", firstName: "Daniel", lastName: "Okafor", email: "d.okafor@stackly.dev", plan: "Free", status: "inactive", joined: "2025-08-27" },
  { id: "5", firstName: "Sofia", lastName: "Marquez", email: "sofia@lumenhq.com", plan: "Enterprise", status: "active", joined: "2025-06-13" },
  { id: "6", firstName: "Hassan", lastName: "Raza", email: "hassan.raza@pixelforge.io", plan: "Pro", status: "active", joined: "2026-05-21" },
  { id: "7", firstName: "Chloe", lastName: "Bennett", email: "chloe.b@orbitapp.co", plan: "Free", status: "pending", joined: "2026-07-08" },
  { id: "8", firstName: "Yuki", lastName: "Tanaka", email: "yuki.tanaka@mizu.jp", plan: "Pro", status: "inactive", joined: "2025-09-30" },
];