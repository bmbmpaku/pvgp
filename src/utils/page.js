// import Image from "next/image";
// import { redirect } from "next/dist/server/api-utils";
// import React from "react";
// import { useState } from "react";
// import { Pool } from "pg";

// export default function Home(req,res) {[params]
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (req.method !== "POST") {
//       return res.status(405).json({ error: `Method ${req.method} not allowed` });
//     }

//     const { username, password } = req.body;

//     try {
//       const data = "SELECT * FROM users WHERE username = $1";
//       const values = [username];

//       const result = await pool.query(query, values);

//       if (result.rows.length === 0) {
//         return res.status(401).json({ error: "Invalid username or password." });
//       }

//       const user = result.rows[0];
//       const isPasswordValid = await bcrypt.compare(password, user.password);

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: "Invalid username or password." });
//       }

//       return res.status(200).json({
//         message: "Login successful!",
//         user: { id: user.id, username: user.username, email: user.email },
//       });
//     }catch (error) {
//       console.error("Error during login:", error);
//       return res.status(500).json({ error: "An error occurred. Please try again." });
//     }
//   }
//     redirect("/voices");

//   };
// return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <div>
//               <label>Username:</label>
//               <input
//                 type="text"
//                 value={formData.username}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value })
//                 }
//                 required
//               />
//             </div>
//           )}
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               required
//             />
//           </div>
//           <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
//         </form>

//         <br />
//         <button onClick={() => setIsSignUp(!isSignUp)}>
//           Switch to {isSignUp ? "Login" : "Sign Up"}
//         </button>
//       </main>
//     </div>
//   );
// }
