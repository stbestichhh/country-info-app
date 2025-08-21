FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copy package manager files
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install

# Copy source
COPY . .

# Build NestJS
RUN pnpm build

EXPOSE 9180

CMD ["pnpm", "start:dev"]
