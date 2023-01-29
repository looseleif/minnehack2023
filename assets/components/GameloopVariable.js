export let gameloopVariable = incrementGameloopVariable();

export const incrementGameloopVariable = () => {
  gameloopVariable = (Math.round(Math.random()*100))%10;
}