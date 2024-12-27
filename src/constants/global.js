export const API_KEY = process.env.REACT_APP_API_KEY;

export const VIDEO_LIST_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;

export const SEARCH_SUGGESTON_API = `http://suggestqueries.google.com/complete/search?client=firefox&q=`;

export const SEARCH_LIST_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

export const commentsData = [
  {
    name: "John",
    comment: "Hey, how is everyone doing today?",
    replies: [
      {
        name: "Sarah",
        comment: "I'm doing great! How about you?",
        replies: [
          {
            name: "John",
            comment: "I'm good, thanks for asking!",
            replies: [],
          },
        ],
      },
      {
        name: "Michael",
        comment: "All good here too!",
        replies: [],
      },
    ],
  },
  {
    name: "Linda",
    comment: "What's everyone's plans for the weekend?",
    replies: [
      {
        name: "George",
        comment: "I’m going to visit family.",
        replies: [
          {
            name: "Linda",
            comment: "That sounds lovely!",
            replies: [],
          },
          {
            name: "Sarah",
            comment: "I might just stay in and relax.",
            replies: [],
          },
        ],
      },
      {
        name: "Anna",
        comment: "I'm going on a short trip with friends.",
        replies: [],
      },
    ],
  },
  {
    name: "Tom",
    comment: "Anyone watched the latest episode of that show?",
    replies: [
      {
        name: "Mike",
        comment: "Yes! It was amazing! The twist at the end!",
        replies: [
          {
            name: "Tom",
            comment: "I know, right?! Didn't expect that!",
            replies: [],
          },
        ],
      },
      {
        name: "Rachel",
        comment: "I haven't watched it yet, no spoilers please!",
        replies: [
          {
            name: "Tom",
            comment: "I won't spoil it, promise!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "David",
    comment: "Anyone interested in playing a game tonight?",
    replies: [
      {
        name: "Emma",
        comment: "Sure, I'm down for a game!",
        replies: [
          {
            name: "David",
            comment: "Awesome! What game do you want to play?",
            replies: [],
          },
          {
            name: "Mike",
            comment: "I’m in too! Let’s decide the game together.",
            replies: [],
          },
        ],
      },
      {
        name: "Linda",
        comment: "I'm busy tonight, maybe next time!",
        replies: [],
      },
    ],
  },
  {
    name: "James",
    comment: "Can anyone recommend a good book to read?",
    replies: [
      {
        name: "Sophia",
        comment: "I just finished 'The Silent Patient' and loved it!",
        replies: [],
      },
      {
        name: "David",
        comment: "How about 'Atomic Habits'? It's great for personal growth.",
        replies: [],
      },
      {
        name: "Tom",
        comment:
          "If you're into fantasy, 'The Name of the Wind' is an excellent read.",
        replies: [
          {
            name: "James",
            comment: "I like fantasy! I'll check it out.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Claire",
    comment: "Does anyone know a good place to eat around here?",
    replies: [
      {
        name: "Rachel",
        comment: "There's a great sushi place nearby, it's called 'Sushiro'.",
        replies: [],
      },
      {
        name: "Sarah",
        comment:
          "I love the Italian restaurant down the street, it's called 'La Dolce Vita'.",
        replies: [
          {
            name: "Claire",
            comment: "That sounds amazing, I'll check it out!",
            replies: [],
          },
        ],
      },
    ],
  },
];
