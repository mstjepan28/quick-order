export default {
    authenticated: false,
    userEmail: 'your_email',
    position: 'your_position',
    food_options: ['Appetizer', 'Main course', 'Dessert'],
    drink_options: ['Soda', 'Juice', 'Other', 'Beer', 'Wine', 'Liquors'],
    cards:[
        
    ],
    order:[
        {
            table: '',
            available: true,
            finished: false,
            note: '',
            products: []            
        }
    ],
    call_cards:[
        {
            id: 1,
            checked: true
        },
        {
            id: 2,
            checked: false
        },
        {
            id: 3,
            checked: false
        },
        {
            id: 4,
            checked: false
        },
        {
            id: 5,
            checked: false
        },
        {
            id: 6,
            checked: false
        },
    ],
    order_cards:[
        {
            id: 1,
            note: "adsadsasadadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsadsasadsad",
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
        {
            id: 2,
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
        {
            id: 3,
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
        {
            id: 4,
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
        {
            id: 5,
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
        {
            id: 6,
            order:[
                {
                    id: 1,
                    title: "Jelo#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 1,
                    times_ordered: 1
                },
                {
                    id: 2,
                    title: "Jelo#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 2
                },
                {
                    id: 3,
                    title: "Jelo#3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/food3.jpg",
                    type: "food",
                    category: "appetizer",
                    counter: 2,
                    times_ordered: 3
                },
                {
                    id: 10,
                    title: "Drinks#1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 2,
                    times_ordered: 10
                },
                {
                    id: 11,
                    title: "Drinks#2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    url: "/drinks3.jpg",
                    type: "drinks",
                    category: "soda",
                    counter: 3,
                    times_ordered: 11
                },
            ]
        },
    ]
}