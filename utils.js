export function drawStatusText(context, input, player){
    context.font = '20px Times New Roman';
    context.fillText('Last input: ' + input.lastKey, 50, 50);
    context.fillText('Active state: ' + player.currentState.state, 20, 100);
}