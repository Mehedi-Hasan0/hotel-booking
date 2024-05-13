# Hotel.com

A hotel booking web application. [Live Website](https://hotel-booking-eta-brown.vercel.app/)

## Project Structure

```
.
├── public                       # public folder for assets
├── src                          # Source files
│   └── app                      # App directory
|        └── (auth)              # Auth directory (Register & Sign in)
|        └── hotels              # Single hotel page
|        └── globals.css         # Css file
|        └── layout.tsx          # Root layout
|        └── page.tsx            # Root page
|   └── components               # All components
|   └── constent                 # Content file
|   └── context                  # Global state
|   └── data                     # Dummy data
|   └── hooks                    # Custom hooks
|   └── lib                      # Lib file
|   └── types                    # Types
└── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
├── README.md
```

## Installation

Install hotel.com modules with npm

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_BACKEND_API=https://raw.githubusercontent.com/Mehedi-Hasan0/hotel-booking/main/src/data/hotel-data.json`

## Tech Stack

**Client:** React, Next Js, Typescript, Context, TailwindCSS, Shadcn ui
