export let gameloopVariable = 0;

export const incrementGameloopVariable = () => {
  gameloopVariable = (Math.round(Math.random()*100))%10;
}