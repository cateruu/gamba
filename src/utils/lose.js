export const lose = () => {
  const randomNumber = Math.floor(Math.random() * message.length);

  return message[randomNumber];
};

const message = ['Better luck next time!', 'So close!', 'Ayy caramba'];
