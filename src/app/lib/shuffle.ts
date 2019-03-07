// Shuffle array to make the game look more like a computer
export const shuffle = (arr: any[]) => {
  let i = arr.length;
  if (i === 0) return arr;
  while (--i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    console.log(j);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
