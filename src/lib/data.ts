const funFacts = [
   {
      id: 1,
      text: 'I like <span class="text-white font-medium">winter</span> more than <span class="text-white font-medium">summer</span>',
   },
   {
      id: 2,
      text: 'I often <span class="text-white font-medium">bike</span> with my friends',
   },
   {
      id: 3,
      text: 'I like <span class="text-white font-medium">pizza</span> and <span class="text-white font-medium">pasta</span>',
   },
   {
      id: 4,
      text: 'I was in <span class="text-white font-medium">Egypt</span>, <span class="text-white font-medium">Poland</span> and <span class="text-white font-medium">Turkey</span>',
   },
   {
      id: 5,
      text: 'My favorite movie is <span class="text-white font-medium">The Green Mile</span>',
   },
   {
      id: 6,
      text: 'I am still in <span class="text-white font-medium">school</span>',
   },
   { id: 7, text: 'I don’t have any siblings' },
];



export { funFacts };
export type FunFactType = (typeof funFacts)[number];
