'use strict';
import Pong from './pong.js';
import BallPong from './ball.js';

const escenario = document.querySelector('.escenario');
const pong1 = new Pong('pong', escenario, 1, 87, 83);
const pong2 = new Pong('pong', escenario, 2, 38, 40);
const ball = new BallPong(escenario, pong1, pong2);
