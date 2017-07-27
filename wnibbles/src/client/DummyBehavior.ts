import {ISnakeBehavior} from './ISnakeBehavior';
import {Space} from './Space';
import {Snake} from './Snake';
import {Direction} from './Direction';

export class DummyBehavior implements ISnakeBehavior {
    changeDirection(snake: Snake, space: Space, snakes: Array<Snake>) : Direction {
        // Si no me choco adelante, sigo igual
        let pos = snake.moveNew();
        if(pos.isValidInBounds(space.topX, space.topY)
            && (space.map[pos.x][pos.y] == space.EMPTY)) {
            return snake.direction;                
        }

        //Busco nueva dirección clockwise para no chocarme
        for(let i:number = 1; i <= 4; i++) {
            let dir = Direction[Direction[i]];
            if(snake.isOpositeDirection(dir)) {
                continue;
            }
            pos = snake.moveNewDirection(dir);
            if(!pos.isValidInBounds(space.topX, space.topY)) {
                continue;
            }
            if(space.map[pos.x][pos.y] != space.EMPTY) {
                continue;
            }
            return dir;
        }
        return snake.direction;
    }
}
