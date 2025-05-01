import { Smartphone, Wallet } from "lucide-react";

export const events = [
    {
        image: "/assets/event01.png",
        title: "Legends Rise on the Field",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        attendance: "6/8",
        spotsLeft: "2",
        price: "320",
    },
    {
        image: "/assets/event02.png",
        title: "Chasing Glory: Football Showdown",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        attendance: "6/8",
        spotsLeft: "2",
        price: "320",
    },
    {
        image: "/assets/event01.png",
        title: "United We Play, United Win",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        attendance: "6/8",
        spotsLeft: "2",
        price: "320",
    },
    {
        image: "/assets/event02.png",
        title: "Chasing Glory: Football Showdown",
        date: "Thu, Dec 5",
        time: "12.30AM - 12.30PM",
        location: "Bashundhara Sports Complex",
        attendance: "6/8",
        spotsLeft: "2",
        price: "320",
    },
];


export const images = [
    "/assets/imageSlider.png",
    "/assets/imageSlider02.jpg",
    "/assets/imageSlider03.jpg",
    "/assets/imageSlider02.png",
];

export const comments = [
    {
        id: 1,
        avatar: "AM",
        name: "Alex Mercer",
        time: "14 min",
        content: "Looking forward to the game! What's the final player count?",
        isPrimary: true,
        replies: [
            {
                id: 2,
                avatar: "RK",
                name: "Rifat Khan",
                time: "14 min",
                content: "missing few players",
                isPrimary: false,
            },
            {
                id: 3,
                avatar: "RK",
                name: "Rifat Khan",
                time: "14 min",
                content: "got any friends?",
                isPrimary: false,
            },
        ],
    },
    {
        id: 4,
        avatar: "AM",
        name: "Alex Mercer",
        time: "14 min",
        content: "Looking forward to the game! What's the final player count?",
        isPrimary: true,
    },
    {
        id: 5,
        avatar: "AM",
        name: "Alex Mercer",
        time: "14 min",
        content: "Looking forward to the game! What's the final player count?",
        isPrimary: true,
        replies: [
            {
                id: 6,
                avatar: "RK",
                name: "Rifat Khan",
                time: "14 min",
                content: "got any friends?",
                isPrimary: false,
            },
        ],
    },
];

export const eventDetails = {
    gallery: {
        mainImage: "/assets/imageSlider.png",
        secondaryImage: "/assets/imageSlider02.png",
        additionalPhotos: 2,
    },
    header: {
        title: "Road to the Football Finals",
        venue: "Bashundhara Sports Complex",
        datetime: "Mar 14 from 7:30 PM - 9:30 PM",
    },
    tags: [
        { label: "Football", type: "activity", color: "#E6F8F8" },
        { label: "Relay", type: "swimming", color: "#E6F8F8" },
        { label: "Female", type: "gender", color: "#FFE8F0" },
        { label: "Age: Below 25", type: "age", color: "#EFEDFF" },
    ],
    difficulty: {
        level: "beginner",
        value: 1,
    },
    description:
        "Learn about the capital’s first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow’s high-rise buildings.",
    location: {
        name: "NDE Field",
        address:
            "Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois",
    },
    host: {
        name: "Alex Mercer",
        activitiesHosted: 23,
        rating: 4.5,
        image: "/assets/avatar.png",
    },
    booking: {
        spotsLeft: 6,
        price: 320,
        priceNote: "(both)",
    },
};

export const tabs = [
    { id: "info", label: "Info" },
    { id: "player", label: "Player" },
    { id: "comments", label: "Comments" },
];

export const paymentOptions = [
    {
      id: "bkash",
      title: "bKash",
      description:
        "Send the payment now via bKash to confirm your spot instantly.",
      icon: <Smartphone className="text-orange-100" />,
      badge: "/assets/bkash-badge.svg",
    },
    {
      id: "cash",
      title: "Cash",
      description:
        "Pay the event fee directly to the host before the game starts.",
      icon: <Wallet className="text-orange-100" />,
      badge: "/assets/cash-badge.svg",
    },
  ];

 export const players = [
    { name: "Alex Mercer", initials: "AM", isHost: true },
    { name: "Jamir Uddin", initials: "JU", isHost: false },
    { name: "Biplu Ahmed", initials: "BA", isHost: false },
    { name: "Topu Barman", initials: "TB", isHost: false },
    { name: "Rakib Hossain", initials: "RH", isHost: false },
  ];