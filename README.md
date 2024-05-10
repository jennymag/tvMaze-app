This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To see upcoming show component favorite ex. this title:
Deep Love Love Again


## Questions
1. How do we build and run it? See instructions above
2. What tools did you use? I used next.js, react.js, typescript and tailwind
3. Why did you use them? It's what i'm used to and feel comfortable with, as well as listed in the description of this case
4. Did you intentionally leave stuff out? In that case, what and why?
Yes, mostly due to time. I wanted to put my main focus on architechure and writing good code as well as functionality.

1. Searches is done my api call, and i did not create a dynamic route for searches that makes it possible to use "go back button" to see your search again, as well as the fact that you cant link your search.
This was something I didnt think about at first, and when I realised it I didnt have time to fix it. I would definitly add this functionality if I continued working with the app
2. Styling - due to time and the description of the case I did not put much time into styling. First thing I would fix is my "card" components that is not acting responsive due to shrinking when only 1-2 cards is viewed. 
3. UX - if i had the time i would do some research to see how other websites visualize favorite-ing items, to make sure its not confusing, since it plays an important part.
4. Locales - I did save this for last to make sure I had time for the other steps. I would create two dynamic routes and filter the correct data for each in the api with the query param for US or UK content
5. In the last minute I also realized there is a bug with routing. Sometimes (seems when localstorage already have saved objects and you restart the app) the search query for the API ends up in the URL. This
makes it impossible to search and localstorage needs to be cleaned and the application updated. Then it should work. Of course i would as well keep debug this issue and see if there is anything wrong with
how i set up my dynamic route or my searchBar component


