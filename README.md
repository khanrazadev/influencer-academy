# Influencer Academy

Introducing Influencer Academy, a web application built on Next.js, tailored to empower influencers on their educational journey. This project leverages the capabilities of Next.js, Prisma ORM, MySQL, and TypeScript to provide a robust and feature-rich platform.

## Key Features:

- **Browse & Filter Courses**: Easily browse and refine courses to find what suits you best.
- **Secure Purchases**: Buy courses securely using Stripe.
- **Track Progress**: Monitor your course progress and mark chapters as completed or pending.
- **Student & Teacher Modes**: Seamlessly switch between student and teacher modes for different functionalities.
- **Content Creation**: Create new courses and chapters effortlessly.
- **Intuitive Design**: Rearrange chapters with drag and drop, upload multimedia content with ease using UploadThing.
- **Video Integration**: Utilize Mux for seamless video processing and playback.
- **Enhanced Descriptions**: Craft engaging chapter descriptions using a rich text editor.
- **Secure Authentication**: Login securely using Clerk.
- **Reliable Data Management**: Utilize Prisma for efficient data management with MySQL database hosted on Planetscale.

## Prerequisites

**Node version 18.x.x**

**Cloning the repository**

```bash
https://github.com/razakhan05/influencer-academy.git
```
## Install packages

```bash
npm i
```
## Setup .env file

```bash
  STRIPE_WEBHOOK_SECRET = 
  NEXT_PUBLIC_APP_URL = http://localhost:3000
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
  
  NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /
  UPLOADTHING_SECRET = 
  UPLOADTHING_APP_ID = 
  DATABASE_URL=''
  MUX_TOKEN_ID = 
  MUX_TOKEN_SECRET = 
  STRIPE_API_KEY =
  NEXT_PUBLIC_TEACHER_ID =
```
**Setup Prisma**

Add MongoDB Database (I used Atlas)

```bash
npx prisma generate
npx prisma db push

```
**Additional Important Command**

```bash
node scripts/seed.ts

```
**Start The App**

```bash
npm run dev

```

### Admin Access

**Only admin can create courses and chapters**

so,to access admin functionalities and create courses, use the following credentials:

- **Email**: admin@test.com
- **Password**: 123456

### Normal User Access

For testing course purchasing as a normal user, please use the following dummy card number:

- **Card Number**: 4000 0035 6000 0008
