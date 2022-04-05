
#  Instructions

You are tasked with creating a very important feature that allows users to educate themselves about undeniable facts.

Your coworker just finished setting up fetching these facts from an api in a previous ticket. See `getServerSideProps` in `pages/index.js`

Your acceptance criteria for this feature is as follows:

 - [ ] When the page loads, the user can see a list of 5 life-altering facts retrieved by the api
 - [ ] There is a button above the list that allows the user to sort the facts by created date in both DESC and ASC order
 - [ ] There is a button next to each fact that allows the user to favorite that fact. Favorited facts should always be shown at the top even if the facts are being sorted in DESC/ASC order.
 - [ ] Because these facts are so important, we must display them with alternating caps. tHiS iS aN eXaMpLe Of AlTeRnAtInG cApS

### Tips

* Don't worry too much about styling. Just add styles to make it look readable and organized but don't feel the need to make it look perfect.
* If you are unfamiliar with SSR (server side rendering) you can look at the [docs](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time) for `getServerSideProps`.
* Feel free to ask us questions at any time!