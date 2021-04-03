const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const authors  = [
  {
    fullName: 'Leo Tolstoy',
    birthdate: '1828.9.9',
  },
  {
    fullName: 'Gustave Flaubert',
    birthdate: '1821.12.12'
  },
  {
    fullName: 'F. Scott Fitzgerald',
    birthdate: '1896.9.24'
  },
  {
    fullName: 'Vladimir Nabokov',
    birthdate: '1899.4.28'
  },
  {
    fullName: 'George Eliot',
    birthdate: '1819.10.22'
  },
  {
    fullName: 'Mark Twain',
    birthdate:  '1835.11.30'
  },
  {
    fullName: 'Anton Chekhov',
    birthdate: '1860.1.29'
  },
  {
    fullName: 'Marcel Proust',
    birthdate: '1871.7.10'
  },
  {
    fullName: 'William Shakespeare',
    birthdate: '1564.3.26'
  },
]

const publishers = [
  {
    name: "Eksmo",
    foundationYear: 2012,
    site: "https://eksmo.ru/"    
  },
  {
    name: "Piter",
    foundationYear: 1991,
    site: "https://www.piter.com/"
  }
]

const books = [{
  name: "Anna Karenina",
  price: 650,
  quantity: 890,
  author: authors[0],
  publisher: publishers[0]
},{
  name:"War and Peace",
  price: 740,
  quantity: 1000,
  author: authors[0],
  publisher:publishers[0],
}, {
  name: "Madam Bovary",
  price: 857,
  quantity:1300,
  author: authors[1],
  publisher: publishers[1]
}, {
  name: "The Great Gatsby",
  price: 1250,
  quantity: 370,
  author: authors[2],
  publisher: publishers[0]
},
{
  name: "Lolita",
  price: 250,
  quantity: 770,
  author: authors[3],
  publisher: publishers[0]
},
{
  name: "Middlemarch",
  price: 2250,
  quantity: 170,
  author: authors[4],
  publisher: publishers[1]
},
{
  name: "The Adventures of Huckleberry Finn",
  price: 560,
  quantity: 630,
  author: authors[5],
  publisher: publishers[1]
},
{
  name: "The Stories of Anton Chekhov",
  price: 250,
  quantity: 70,
  author: authors[6],
  publisher: publishers[0]
},
{
  name: "In Search of Lost Time",
  price: 450,
  quantity: 870,
  author: authors[7],
  publisher: publishers[1]
},
{
  name: "Hamlet",
  price: 560,
  quantity: 530,
  author: authors[8],
  publisher: publishers[0]
},

];

async function deleteAll(){
  await prisma.book.deleteMany();
  await prisma.publisher.deleteMany();
  await prisma.author.deleteMany();
}

async function addBooks() {
  const countOfBooks = await prisma.book.count();
  if (countOfBooks) return
  for (const book of books) { 
    await prisma.book.create({  
      data: {
        name: book.name,
        price: book.price,
        quantity: book.quantity,
        author: {
          connectOrCreate: {
            where: { fullName: book.author.fullName  },
            create: book.author
          }
        },
        publisher: {
          connectOrCreate: {
            where: { name: book.publisher.name },
            create: book.publisher
          }
        }
      }})
  }
}

async function main() {
  await deleteAll()
  await addBooks();

  prisma.$disconnect();
}

main()
