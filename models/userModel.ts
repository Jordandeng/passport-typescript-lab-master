const database: Express.User[] = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
  },
    {
    id: 4,
    name: "Jordan Deng",
    email: "jordan@bcit.ca",
    password: "Jordan123!",
  },
];

let nextId = Math.max(...database.map(u => u.id)) + 1;

const userModel = {

  /* FIX ME (types) 😭 */
  findOne: (email: string) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  /* FIX ME (types) 😭 */
  findById: (id: number) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },

  // function to check if user exists, if not create a new user
  findOrCreate: (id: number, name: string) => {
    const foundUser = database.find(foundUser => foundUser.id === id);
    if (foundUser) return foundUser;

    const newUser = { id: id, name: name };
    database.push(newUser);
    console.log(database);
    return newUser;
  }
};

export { database, userModel };
