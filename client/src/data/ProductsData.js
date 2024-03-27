import chestcough from "../assets/hero/chest-cough.jpg";
import beuty1 from '../assets/Beuty_and_skin/1.jpg';
import beuty2 from '../assets/Beuty_and_skin/B1.jpg';
import beuty3 from '../assets/Beuty_and_skin/B2.jpg';
import beuty4 from '../assets/Beuty_and_skin/B3.jpeg';
import beuty5 from '../assets/Beuty_and_skin/B4.jpeg';
import beuty6 from '../assets/Beuty_and_skin/B5.jpeg';
import beuty7 from '../assets/Beuty_and_skin/B6.jpg';



const medicineData = [
  {
    category: "Beauty And Skin",
    id: 0,
    categoryData: [
      {
        id: 0,
        name: "Medicine 1",
        image: beuty1,
        description: "Celine  madawa",
      },
      {
        id: 1,
        name: "Medicine 1",
        image: beuty2,
        description: "Celine  madawa",
      },
      {
        id: 2,
        name: "Medicine 1",
        image: beuty3,
        description: "Celine  madawa",
      },
      {
        id: 4,
        name: "Medicine 1",
        image: beuty4,
        description: "Celine  madawa",
      },
      {
        id: 4,
        name: "Medicine 1",
        image: beuty5,
        description: "Celine  madawa",
      },
      {
        id: 5,
        name: "Medicine 1",
        image: beuty6,
        description: "Celine  madawa",
      },
      {
        id: 6,
        name: "Medicine 1",
        image: beuty7,
        description: "Celine  madawa",
      },
      {
        id: 7,
        name: "Medicine 1",
        image: beuty1,
        description: "Celine  madawa",
      },
      {
        id: 8,
        name: "Medicine 1",
        image: beuty1,
        description: "Celine  madawa",
      },
    ],
  },
  {
    category:"Vitamins And Supplements",
    id: 1,
    categoryData:[
      {
        id:0,
        name: "Medicine 2",
    image:
      "data:image/jpeg;base64,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",
    description: "Celine madawa",}]
    
    
  },
  {
    category:"Snacks And Drinks",
  

    id: 2,
    categoryData: [
      {
        name: "Medicine 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX64dUXwnzgQ7YQwXl9QT2E17iHMJvhQmdwg&usqp=CAU",
    description: "Celine madawa",

      }
    ]
    
  },
  {
    category:"Medical Devices",
    id: 3,
    categoryData:[
      {
        id: 0,
      name: "Medicine 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX64dUXwnzgQ7YQwXl9QT2E17iHMJvhQmdwg&usqp=CAU",
    description: "Celine madawa",
      }  
    ]
     },
  
{
  category: "Personal Care",
  id: 4,
  categoryData: [
    {
      id: 0,
      name: "Medicine 1",
      image: chestcough,
      description: "Celine  madawa",
    },
  ],
},
{
  category: "Medical Conditions",
  id: 5,
  categoryData: [
    {
      id: 0,
      name: "Medicine 1",
      image: chestcough,
      description: "Celine  madawa",
    },
  ],
},

  
  // Add more medicine data as needed
];

export default medicineData;
