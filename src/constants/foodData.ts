const foodData = [
    {
      id: 1,
      title: "Delicious Pasta",
      description: "A classic Italian pasta dish with rich tomato sauce and fresh basil.",
      imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      chef: {
        name: "Chef John",
        avatar: "https://source.unsplash.com/50x50/?chef",
        rating: 4.8,
      },
      ingredients: [
        { id: 1, name: "Pasta", quantity: "200g", image: require("@/assets/images/chapati.svg") },
        { id: 2, name: "Tomato Sauce", quantity: "100ml", image: require("@/assets/images/sauce.svg") },
        { id: 3, name: "Basil", quantity: "5 leaves", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 2,
      title: "Spicy Pizza",
      description: "A hot and cheesy pizza topped with spicy jalapeños and pepperoni.",
      imageUrl: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg",
      chef: {
        name: "Chef Emma",
        avatar: "https://source.unsplash.com/50x50/?cook",
        rating: 4.6,
      },
      ingredients: [
        { id: 4, name: "Dough", quantity: "1 base", image: require("@/assets/images/chapati.svg") },
        { id: 5, name: "Cheese", quantity: "100g", image: require("@/assets/images/oil.svg") },
        { id: 6, name: "Pepperoni", quantity: "50g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 3,
      title: "Tasty Burger",
      description: "A juicy grilled burger with fresh lettuce and tomato.",
      imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      chef: {
        name: "Chef Alex",
        avatar: "https://source.unsplash.com/50x50/?chef,portrait",
        rating: 4.7,
      },
      ingredients: [
        { id: 7, name: "Bun", quantity: "1 piece", image: require("@/assets/images/chapati.svg") },
        { id: 8, name: "Beef Patty", quantity: "150g", image: require("@/assets/images/oil.svg") },
        { id: 9, name: "Lettuce", quantity: "1 leaf", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 4,
      title: "Butter Chicken",
      description: "A creamy, flavorful chicken dish cooked in a rich tomato and butter gravy.",
      imageUrl: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      chef: {
        name: "Chef Raj",
        avatar: "https://source.unsplash.com/50x50/?chef,india",
        rating: 4.9,
      },
      ingredients: [
        { id: 10, name: "Chicken", quantity: "200g", image: require("@/assets/images/oil.svg") },
        { id: 11, name: "Butter", quantity: "50g", image: require("@/assets/images/sauce.svg") },
        { id: 12, name: "Tomato", quantity: "2", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 5,
      title: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in spicy yogurt-based mixture.",
      imageUrl: "https://images.pexels.com/photos/5946961/pexels-photo-5946961.jpeg",
      chef: {
        name: "Chef Meera",
        avatar: "https://source.unsplash.com/50x50/?chef,portrait",
        rating: 4.8,
      },
      ingredients: [
        { id: 13, name: "Paneer", quantity: "150g", image: require("@/assets/images/chapati.svg") },
        { id: 14, name: "Yogurt", quantity: "100g", image: require("@/assets/images/sauce.svg") },
        { id: 15, name: "Spices", quantity: "5g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 6,
      title: "Biryani",
      description: "A fragrant, spiced rice dish with marinated chicken and saffron.",
      imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      chef: {
        name: "Chef Arjun",
        avatar: "https://source.unsplash.com/50x50/?chef,india",
        rating: 5.0,
      },
      ingredients: [
        { id: 16, name: "Basmati Rice", quantity: "250g", image: require("@/assets/images/chapati.svg") },
        { id: 17, name: "Chicken", quantity: "200g", image: require("@/assets/images/oil.svg") },
        { id: 18, name: "Spices", quantity: "10g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 7,
      title: "Masala Dosa",
      description: "A crispy South Indian crepe filled with spiced potato filling.",
      imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      chef: {
        name: "Chef Priya",
        avatar: "https://source.unsplash.com/50x50/?chef,portrait",
        rating: 4.7,
      },
      ingredients: [
        { id: 19, name: "Rice Flour", quantity: "200g", image: require("@/assets/images/chapati.svg") },
        { id: 20, name: "Potato", quantity: "2", image: require("@/assets/images/oil.svg") },
        { id: 21, name: "Spices", quantity: "5g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 8,
      title: "Chole Bhature",
      description: "Spicy chickpea curry served with deep-fried bread.",
      imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      chef: {
        name: "Chef Ravi",
        avatar: "https://source.unsplash.com/50x50/?chef,india",
        rating: 4.8,
      },
      ingredients: [
        { id: 22, name: "Chickpeas", quantity: "200g", image: require("@/assets/images/chapati.svg") },
        { id: 23, name: "Flour", quantity: "150g", image: require("@/assets/images/oil.svg") },
        { id: 24, name: "Spices", quantity: "10g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 9,
      title: "Rogan Josh",
      description: "Aromatic lamb curry from Kashmir with rich, spicy gravy.",
      imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      chef: {
        name: "Chef Ali",
        avatar: "https://source.unsplash.com/50x50/?chef,portrait",
        rating: 4.9,
      },
      ingredients: [
        { id: 25, name: "Lamb", quantity: "300g", image: require("@/assets/images/oil.svg") },
        { id: 26, name: "Yogurt", quantity: "100g", image: require("@/assets/images/sauce.svg") },
        { id: 27, name: "Spices", quantity: "15g", image: require("@/assets/images/garlic.svg") },
      ],
    },
    {
      id: 10,
      title: "Dhokla",
      description: "A soft and spongy Gujarati snack made from fermented rice and chickpea batter.",
      imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      chef: {
        name: "Chef Anjali",
        avatar: "https://source.unsplash.com/50x50/?chef,portrait",
        rating: 4.6,
      },
      ingredients: [
        { id: 28, name: "Rice Flour", quantity: "150g", image: require("@/assets/images/chapati.svg") },
        { id: 29, name: "Chickpea Flour", quantity: "100g", image: require("@/assets/images/oil.svg") },
        { id: 30, name: "Spices", quantity: "5g", image: require("@/assets/images/garlic.svg") },
      ],
    },
  ];
  export default foodData;