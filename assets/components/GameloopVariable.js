export let gameloopVariable = 0;

export const incrementGameloopVariable = () => {
  gameloopVariable = (Math.floor(Math.random()*100))%10;
}