NextJs App for my homelab directory running in a dockerContainer on a pi in the cluster

<img width="1217" alt="image" src="https://user-images.githubusercontent.com/50798875/208245685-c7cb5ce2-d991-450d-86bf-2e81c5162d12.png">


## build/run in container: 
`docker build -t 39305HomePage . `

`docker run --name 39305HomePage -d -p 0.0.0.0:80:3000 39305HomePage`


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Editing

First, run the development server:

```bash
npm run dev

```
