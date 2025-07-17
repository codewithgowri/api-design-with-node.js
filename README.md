# Express API Design Project

This project is a Node.js/Express API with authentication, Prisma ORM, and PostgreSQL database integration.

## NPM Packages Used

**Dependencies:**

- `express` — Web framework for Node.js
- `@prisma/client` — Prisma ORM client for database access
- `bcrypt` — Password hashing
- `dotenv` — Loads environment variables from `.env`
- `jsonwebtoken` — For creating and verifying JWT tokens

**Dev Dependencies:**

- `prisma` — Prisma CLI for migrations and generating the client
- `typescript` — TypeScript support
- `ts-node` — Run TypeScript files directly
- `@types/node` — TypeScript types for Node.js

## Setup & Commands

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up your database URL:**

   - Edit the `.env` file and set `DATABASE_URL` to your PostgreSQL connection string.

3. **Prisma setup:**

   - Run migrations and generate the Prisma client:
     ```bash
     npx prisma migrate dev --name init
     npx prisma generate
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — Starts the server with ts-node

## Notes

- The API uses JWT for authentication. Set `JWT_SECRET` in your `.env` file.
- Passwords are hashed using bcrypt before storing in the database.
- Prisma models are defined in `prisma/schema.prisma`.

---

Feel free to explore the code and extend the API!
