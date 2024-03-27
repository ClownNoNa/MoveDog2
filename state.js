import Player from "./player.js";

export const states ={
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
    FALLING_LEFT: 8,
    FALING_RIGHT: 9
}
class State{
    constructor(state){
        this.state = state;
    }
}

export class StandingLeft extends State{
    constructor(Player){
        super('STANDING LEFT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 1;
        this.Player.speed = 0;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.RUNNING_LEFT);
        else if (input === 'PRESS right') this.Player.setState(states.RUNNING_RIGHT);
        else if (input === 'PRESS down') this.Player.setState(states.SITTING_LEFT);
        else if (input === 'PRESS up') this.Player.setState(states.JUMPING_LEFT);
    }
}
export class StandingRight extends State{
    constructor(Player){
        super('STANDING RIGHT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 0;
        this.Player.speed = 0;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.RUNNING_LEFT);
        else if (input === 'PRESS right') this.Player.setState(states.RUNNING_RIGHT);
        else if (input === 'PRESS down') this.Player.setState(states.SITTING_RIGHT);
        else if (input === 'PRESS up') this.Player.setState(states.JUMPING_RIGHT);
    }
}
export class SittingLeft extends State{
    constructor(Player){
        super('SITTING LEFT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 9;
        this.Player.maxFrame = 4;
    }
    handleInput(input){
        if (input === 'PRESS right') this.Player.setState(states.SITTING_RIGHT);
        
        else if(input === 'RELEASE down') this.Player.setState(states.STANDING_LEFT);
    }
}
export class SittingRight extends State{
    constructor(Player){
        super('SITTING RIGHT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 8;
        this.Player.maxFrame = 4;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.SITTING_LEFT);
        
        else if(input === 'RELEASE down') this.Player.setState(states.STANDING_RIGHT);
    }
}
export class RunningLeft extends State{
    constructor(Player){
        super('RUNNING LEFT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 7;
        this.Player.speed = -this.Player.maxSpeed;
        this.Player.maxFrame = 8;
    }
    handleInput(input){
        if (input === 'PRESS right') this.Player.setState(states.RUNNING_RIGHT);
        else if(input === 'PRESS down') this.Player.setState(states.SITTING_LEFT);
        else if(input === 'RELEASE left') this.Player.setState(states.STANDING_LEFT);
    }
}
export class RunningRight extends State{
    constructor(Player){
        super('RUNNING RIGHT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 6;
        this.Player.speed = this.Player.maxSpeed;
        this.Player.maxFrame = 8;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.RUNNING_LEFT);
        else if(input === 'PRESS down') this.Player.setState(states.SITTING_RIGHT);
        else if(input === 'RELEASE right') this.Player.setState(states.STANDING_RIGHT);
    }
}
export class JumpingLeft extends State{
    constructor(Player){
        super('JUMPING LEFT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 3;
        if (this.Player.onGround()) this.Player.vy -= 20;
        this.Player.speed = - this.Player.maxSpeed*0.5;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS right') this.Player.setState(states.JUMPING_RIGHT);
        else if (this.Player.onGround()) this.Player.setState(states.STANDING_LEFT);
        else if (this.Player.vy > this.Player.weight) this.Player.setState(states.FALLING_LEFT);
    }
}
export class JumpingRight extends State{
    constructor(Player){
        super('JUMPING RIGHT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 2;
        if (this.Player.onGround()) this.Player.vy -= 20;
        this.Player.speed = this.Player.maxSpeed*0.5;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.JUMPING_LEFT);
        else if (this.Player.onGround()) this.Player.setState(states.STANDING_RIGHT);
        else if (this.Player.vy > this.Player.weight) this.Player.setState(states.FALING_RIGHT);
    }
}
export class FallingLeft extends State{
    constructor(Player){
        super('FALLING LEFT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 5;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS right') this.Player.setState(states.FALING_RIGHT);
        else if (this.Player.onGround()) this.Player.setState(states.STANDING_LEFT);
    }
}
export class FallingRight extends State{
    constructor(Player){
        super('FALLING RIGHT');
        this.Player = Player;
    }
    enter(){
        this.Player.frameY = 4;
        this.Player.maxFrame = 6;
    }
    handleInput(input){
        if (input === 'PRESS left') this.Player.setState(states.FALLING_LEFT);
        else if (this.Player.onGround()) this.Player.setState(states.STANDING_RIGHT);
    }
}