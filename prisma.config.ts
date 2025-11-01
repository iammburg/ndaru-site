import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';
import { PrismaD1 } from '@prisma/adapter-d1';

export default defineConfig({
  experimental: {
    adapter: true,
  },
  schema: 'prisma/schema.prisma',
  adapter: async () => {
    return new PrismaD1({
      CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN!,
      CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID!,
      CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID!,
    });
  },
});
