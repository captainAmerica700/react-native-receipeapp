const foodData = [
  {
    id: 1,
    title: 'Delicious Pasta',
    description:
      'A classic Italian pasta dish with rich tomato sauce and fresh basil.',
    imageUrl:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    category: 'Pasta & Noodles',
    chef: {
      name: 'Chef John',
      avatar: 'https://source.unsplash.com/50x50/?chef',
      rating: 4.8,
    },
    ingredients: [
      {
        id: 1,
        name: 'Pasta',
        quantity: '200g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 2,
        name: 'Tomato Sauce',
        quantity: '100ml',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 3,
        name: 'Basil',
        quantity: '5 leaves',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 2,
    title: 'Spicy Pizza',
    description:
      'A hot and cheesy pizza topped with spicy jalapeños and pepperoni.',
    imageUrl:
      'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg',
    category: 'Pizza & Noodles',
    chef: {
      name: 'Chef Emma',
      avatar: 'https://source.unsplash.com/50x50/?cook',
      rating: 4.6,
    },
    ingredients: [
      {
        id: 4,
        name: 'Dough',
        quantity: '1 base',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 5,
        name: 'Cheese',
        quantity: '100g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 6,
        name: 'Pepperoni',
        quantity: '50g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 3,
    title: 'Tasty Burger',
    description: 'A juicy grilled burger with fresh lettuce and tomato.',
    imageUrl:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    chef: {
      name: 'Chef Alex',
      avatar: 'https://source.unsplash.com/50x50/?chef,portrait',
      rating: 4.7,
    },
    category: 'Fast Food',
    ingredients: [
      {
        id: 7,
        name: 'Bun',
        quantity: '1 piece',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 8,
        name: 'Beef Patty',
        quantity: '150g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 9,
        name: 'Lettuce',
        quantity: '1 leaf',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 4,
    title: 'Butter Chicken',
    description:
      'A creamy, flavorful chicken dish cooked in a rich tomato and butter gravy.',
    imageUrl:
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    chef: {
      name: 'Chef Raj',
      avatar: 'https://source.unsplash.com/50x50/?chef,india',
      rating: 4.9,
    },
    category: 'Main Courses (Entrees)',
    ingredients: [
      {
        id: 10,
        name: 'Chicken',
        quantity: '200g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 11,
        name: 'Butter',
        quantity: '50g',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 12,
        name: 'Tomato',
        quantity: '2',
        image: require('@/assets/images/garlic.svg'),
      },
      
    ],
  },
  {
    id: 5,
    title: 'Paneer Tikka',
    description:
      'Grilled cottage cheese cubes marinated in spicy yogurt-based mixture.',
    imageUrl:
      'https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D',
    chef: {
      name: 'Chef Meera',
      avatar: 'https://source.unsplash.com/50x50/?chef,portrait',
      rating: 4.8,
    },
    category: 'Main Courses (Entrees)',
    ingredients: [
      {
        id: 13,
        name: 'Paneer',
        quantity: '150g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 14,
        name: 'Yogurt',
        quantity: '100g',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 15,
        name: 'Spices',
        quantity: '5g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 6,
    title: 'Biryani',
    description:
      'A fragrant, spiced rice dish with marinated chicken and saffron.',
    imageUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    chef: {
      name: 'Chef Arjun',
      avatar: 'https://source.unsplash.com/50x50/?chef,india',
      rating: 5.0,
    },
    category: 'Main Courses (Entrees)',
    ingredients: [
      {
        id: 16,
        name: 'Basmati Rice',
        quantity: '250g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 17,
        name: 'Chicken',
        quantity: '200g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 18,
        name: 'Spices',
        quantity: '10g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 7,
    title: 'Masala Dosa',
    description:
      'A crispy South Indian crepe filled with spiced potato filling.',
    imageUrl:
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    chef: {
      name: 'Chef Priya',
      avatar: 'https://source.unsplash.com/50x50/?chef,portrait',
      rating: 4.7,
    },
    category: 'Breakfast',
    ingredients: [
      {
        id: 19,
        name: 'Rice Flour',
        quantity: '200g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 20,
        name: 'Potato',
        quantity: '2',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 21,
        name: 'Spices',
        quantity: '5g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 8,
    title: 'Chole Bhature',
    description: 'Spicy chickpea curry served with deep-fried bread.',
    imageUrl:
      'https://media.istockphoto.com/id/873539518/photo/deep-fried-bread-spicy-chickpeas-curry-and-salad.jpg?s=1024x1024&w=is&k=20&c=09OHCgh8HINbB3Whd8wFaxzg930GEyRQWhizb5P4ET8=',
    chef: {
      name: 'Chef Ravi',
      avatar: 'https://source.unsplash.com/50x50/?chef,india',
      rating: 4.8,
    },
    category: 'Breakfast',
    ingredients: [
      {
        id: 22,
        name: 'Chickpeas',
        quantity: '200g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 23,
        name: 'Flour',
        quantity: '150g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 24,
        name: 'Spices',
        quantity: '10g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 9,
    title: 'Rogan Josh',
    description: 'Aromatic lamb curry from Kashmir with rich, spicy gravy.',
    imageUrl:
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    chef: {
      name: 'Chef Ali',
      avatar: 'https://source.unsplash.com/50x50/?chef,portrait',
      rating: 4.9,
    },
    category: 'Main Courses (Entrees)',
    ingredients: [
      {
        id: 25,
        name: 'Lamb',
        quantity: '300g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 26,
        name: 'Yogurt',
        quantity: '100g',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 27,
        name: 'Spices',
        quantity: '15g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 10,
    title: 'Dhokla',
    description:
      'A soft and spongy Gujarati snack made from fermented rice and chickpea batter.',
    imageUrl:
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    chef: {
      name: 'Chef Anjali',
      avatar: 'https://source.unsplash.com/50x50/?chef,portrait',
      rating: 4.6,
    },
    category: 'Breakfast',
    ingredients: [
      {
        id: 28,
        name: 'Rice Flour',
        quantity: '150g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 29,
        name: 'Chickpea Flour',
        quantity: '100g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 30,
        name: 'Spices',
        quantity: '5g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 11,
    title: 'Caesar Salad',
    description:
      'A fresh and crunchy salad with romaine lettuce, croutons, and Caesar dressing.',
    imageUrl:
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    chef: {
      name: 'Chef Lisa',
      avatar: 'https://source.unsplash.com/50x50/?chef,salad',
      rating: 4.7,
    },
    category: 'Healthy & Low-Calorie',
    ingredients: [
      {
        id: 31,
        name: 'Romaine Lettuce',
        quantity: '150g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 32,
        name: 'Croutons',
        quantity: '50g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 33,
        name: 'Parmesan Cheese',
        quantity: '30g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 12,
    title: 'Grilled Salmon',
    description: 'Perfectly grilled salmon with a hint of lemon and herbs.',
    imageUrl:
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    chef: {
      name: 'Chef Mark',
      avatar: 'https://source.unsplash.com/50x50/?chef,fish',
      rating: 4.8,
    },
    category: 'Main Courses (Entrees)',
    ingredients: [
      {
        id: 34,
        name: 'Salmon Fillet',
        quantity: '200g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 35,
        name: 'Lemon',
        quantity: '1 slice',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 36,
        name: 'Herbs',
        quantity: '5g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 13,
    title: 'Chocolate Cake',
    description: 'A moist and rich chocolate cake topped with ganache.',
    imageUrl:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    chef: {
      name: 'Chef Sophia',
      avatar: 'https://source.unsplash.com/50x50/?chef,dessert',
      rating: 4.9,
    },
    category: 'Desserts',
    ingredients: [
      {
        id: 37,
        name: 'Flour',
        quantity: '250g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 38,
        name: 'Cocoa Powder',
        quantity: '50g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 39,
        name: 'Sugar',
        quantity: '150g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 14,
    title: 'Garlic Butter Shrimp',
    description: 'Juicy shrimp sautéed in a rich garlic butter sauce.',
    imageUrl:
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    chef: {
      name: 'Chef Daniel',
      avatar: 'https://source.unsplash.com/50x50/?chef,seafood',
      rating: 4.9,
    },
    category: 'Appetizers & Snacks',
    ingredients: [
      {
        id: 40,
        name: 'Shrimp',
        quantity: '200g',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 41,
        name: 'Garlic',
        quantity: '3 cloves',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 42,
        name: 'Butter',
        quantity: '50g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 15,
    title: 'French Onion Soup',
    description:
      'A warm and comforting soup with caramelized onions and cheese.',
    imageUrl:
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    chef: {
      name: 'Chef Marie',
      avatar: 'https://source.unsplash.com/50x50/?chef,soup',
      rating: 4.8,
    },
    category: 'Soups',
    ingredients: [
      {
        id: 43,
        name: 'Onions',
        quantity: '3 large',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 44,
        name: 'Beef Broth',
        quantity: '500ml',
        image: require('@/assets/images/sauce.svg'),
      },
      {
        id: 45,
        name: 'Cheese',
        quantity: '100g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 16,
    title: 'Sushi Rolls',
    description:
      'Classic Japanese sushi rolls filled with fresh fish and vegetables.',
    imageUrl:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGklMjByb2xsc3xlbnwwfHwwfHx8MA%3D%3D',
    chef: {
      name: 'Chef Hiroshi',
      avatar: 'https://source.unsplash.com/50x50/?chef,sushi',
      rating: 4.9,
    },
    category: 'Sandwiches & Wraps',
    ingredients: [
      {
        id: 46,
        name: 'Rice',
        quantity: '250g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 47,
        name: 'Nori Seaweed',
        quantity: '5 sheets',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 48,
        name: 'Salmon',
        quantity: '100g',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
  {
    id: 17,
    title: 'Mango Sticky Rice',
    description:
      'A popular Thai dessert made with sweet mangoes and sticky rice.',
    imageUrl:
      'https://images.unsplash.com/photo-1711161988375-da7eff032e45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBzdGlja3klMjByaWNlfGVufDB8fDB8fHww',
    chef: {
      name: 'Chef Ananya',
      avatar: 'https://source.unsplash.com/50x50/?chef,thai',
      rating: 4.7,
    },
    category: 'side dish',
    ingredients: [
      {
        id: 49,
        name: 'Sticky Rice',
        quantity: '200g',
        image: require('@/assets/images/chapati.svg'),
      },
      {
        id: 50,
        name: 'Mango',
        quantity: '1 whole',
        image: require('@/assets/images/oil.svg'),
      },
      {
        id: 51,
        name: 'Coconut Milk',
        quantity: '100ml',
        image: require('@/assets/images/garlic.svg'),
      },
    ],
  },
];
export default foodData;
