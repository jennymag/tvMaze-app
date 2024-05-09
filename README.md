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


## Questions
1. How do we build and run it? See instructions above
2. What tools did you use? I used next.js, react.js, typescript and tailwind
3. Why did you use them? It's what i'm used to and feel comfortable with, as well as listed in the description of this case
4. Did you intentionally leave stuff out? In that case, what and why?
Yes, mostly due to time. I wanted to put my main focus on architechure and writing good code as well as functionality.

1. Searches is done my api call, and i did not create a dynamic route for searches that makes it possible to use "go back button" to see your search again, as well as the face that you cant link your search.
This was something I did not think about at first, and when I realised it I didnt have time to fix it. I would definitly add this functionality if I continued working with the app
2. Styling - due to time and the description of the case I did not put much time into styling. First thing I would fix is my "card" components that is not acting responsive due to shrinking when only 1-2 cards is viewed. 
3. UX - if i had the time i would do some research to see how other websites visualize favorite-ing items, to make sure its not confusing, since it plays an important part.
4. Locales - I did save this for last to make sure I had time for the other steps. I thought this would not take to much time if i used country key in every fetch, but this was not possible for the part of the API i used.
If i had more time, my thought was that I would create two new routes for each country and then filter out data in my components based on its key "country" in the object from the api, to display the correct data. (If I couldnt find a way to filter in in the api call)

