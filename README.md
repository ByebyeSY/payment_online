# 🎉 Payment Online

This project shows you the basics workflow to integrate an Online Payment

## Tech Stack

**Required:** Node v18, Docker, Docker compose

**Monorepo:** Lerna

**Client:** NextJs, Axios, Tailwind

**Server:** NestJS

**SGBD:** PostgreSql

**Tools:** PgAdmin

## Clone project

Execute this command in terminal

```bash
git clone https://github.com/ByebyeSY/payment_online.git
```

Go to the project

```bash
cd payment_online
```

## Installation

First, you need to copy paste `.env.example` and rename it to `.env`
Then you can update this environment depends on you configuration.

Here, we use yarn for package management.

It's a monorepo project, it means you have to go to the project folder to install its dependencies.

**_ihm :_**

Go to the ihm folder:

```bash
cd packages/ihm
```

Then install :

```bash
yarn install
```

**_api :_**

Go to the api folder:

```bash
cd packages/api
```

Then install :

```bash
yarn install
```

## Run locally

First, you need to be on project root.

This project has a Docker compose which allows you to have a container for a SGBD PostgreSQL and PgAdmin

To lanch it you have to execute:

```bash
docker-compose up
```

if you don't want to see docker logs, you can add the option `-d`

```bash
docker-compose up -d
```

To lanch `ihm` you need to execute:

```bash
yarn ihm:dev
```

To lanch `api` you need to execute:

```bash
yarn api:dev
```
