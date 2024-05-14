/* 
There are many kinds of links to the video:

https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

https://www.youtube.com/watch?v=UN8oLGBNXpE

http://www.youtube.com/watch?v=UN8oLGBNXpE

https://youtu.be/UN8oLGBNXpE
If we insert the first link in the iframe, it works, but another do not work.

Task:
Please write a function that converts the string in the correct format for the iframe.
*/

const makeYoutubeLink = url => {
  const params = new URL(url).searchParams;
  let v = (params.get("v") || params.get("i")) ?? url.split("/").pop();
  return "https://www.youtube.com/embed/" + v;
};

console.log(makeYoutubeLink("https://www.youtube.com/embed/L3JxAuUyjzY"));
console.log(makeYoutubeLink("https://www.youtube.com/watch?v=L3JxAuUyjzY"));
console.log(makeYoutubeLink("https://youtu.be/L3JxAuUyjzY"));
