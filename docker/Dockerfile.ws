FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN pnpm install

# Copy rest of the code
COPY . .

# Generate prisma client
RUN pnpm run generate:db

# Build typescript -> dist/
RUN pnpm run build:ws

EXPOSE 3001

CMD ["pnpm", "start:ws"]