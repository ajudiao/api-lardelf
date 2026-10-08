import "dotenv"
import { PrismaClient } from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg"; // Certifique-se de que tem o pacote 'pg' instalado

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10, 
    connectionTimeoutMillis: 5000
})

const adapter = new PrismaPg(pool);

// 3. Corrigido para PrismaClient
export const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'warn', 'error'],
})
