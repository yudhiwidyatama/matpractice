﻿/* Generated by SharpKit 5 v5.3.3 */
var Exercise = function(code, num) {
    this.inner = null;
    this.sequencer = null;
    this.level = code;
    this.sheet = num;
    if (code == "2A") {
        this.inner = Level2A.createInner(num);
        this.sequencer = new Sequencer((num - 1) % 10);
    }
    if (code == "A") {
        this.inner = LevelA.createInner(num, num % 10);
        this.sequencer = new Sequencer((num - 1) % 10);
    }
};
Exercise.prototype.getQuestion = function(idx) {
    return this.sequencer.getQuestion(idx, this.inner);
};
Exercise.prototype.questionString = function(question) {
    return question.anum + " " + question.operation + " " + question.bnum + " = ";
};
Exercise.prototype.questionAnswer = function(question) {
    return eval(question.anum + " " + question.operation + " " + question.bnum );
};

function main(a) {
    var x = new Exercise("A", 10);
    x.getQuestion(1);
};
var LevelA = function() {
};
LevelA.createInner = function(levelNum, seed) {
    if (levelNum <= 10) {
        return new AddWithMax(10, seed);
    }
    if (levelNum <= 20 && levelNum > 10) {
        return new AddWithMax(12, seed);
    }
    if (levelNum <= 30 && levelNum > 20) {
        return new AddWithMax(15, seed);
    }
    if (levelNum <= 40 && levelNum > 30) {
        return new AddWithMax(18, seed);
    }
    if (levelNum <= 50 && levelNum > 40) {
        return new AddWithMax(20, seed);
    }
    return new AddWithMax(28, seed);
};
var Level2A = function() {
};
Level2A.createInner = function(levelNum) {
    if (levelNum <= 20 && levelNum > 10) {
        return new AdditionX(4, 12);
    }
    if (levelNum <= 30 && levelNum > 20) {
        return new AdditionX(4, 16);
    }
    if (levelNum <= 40 && levelNum > 30) {
        return new AdditionX(5, 12);
    }
    if (levelNum <= 50 && levelNum > 40) {
        return new AdditionX(5, 15);
    }
    return new AdditionX(4, 12);
};
var Sequencer = function(seed) {
    this.start = 0;
    this.stride = 0;
    if (seed == 0) {
        this.start = 0;
        this.stride = 1;
    }
    if (seed == 1) {
        this.start = 0;
        this.stride = 7;
    }
    if (seed == 2) {
        this.start = 1;
        this.stride = 2;
    }
    if (seed == 3) {
        this.start = 8;
        this.stride = 71;
    }
    if (seed == 4) {
        this.start = 55;
        this.stride = 7;
    }
    if (seed == 5) {
        this.start = 10;
        this.stride = 13;
    }
    if (seed == 6) {
        this.start = 1;
        this.stride = 13;
    }
    if (seed == 7) {
        this.start = 5;
        this.stride = 2;
    }
    if (seed == 8) {
        this.start = 5;
        this.stride = 9;
    }
    if (seed == 9) {
        this.start = 4;
        this.stride = 7;
    }
    if (seed >= 10) {
        this.start = Math.random() * 10;
        this.stride = Math.random() * 9;
    }
};
Sequencer.prototype.getSequence = function(idx, exercise) {
    var v = idx * this.stride + this.start;
    var max = exercise.questions();
    return v % max;
};
Sequencer.prototype.getQuestion = function(idx, exercise) {
    return exercise.question(this.getSequence(idx, exercise));
};
var AdditionX = function(xx) {
    this.x = 0;
    this.maxX = 0;
    this.off = 0;
    AdditionX.call(this, xx, 12);
};
var AdditionX = function(xx, max) {
    this.x = 0;
    this.maxX = 0;
    this.off = 0;
    this.x = xx;
    this.maxX = max;
    this.off = max - 12;
};
AdditionX.prototype.questions = function() {
    return this.maxX;
};
AdditionX.prototype.question = function(idx) {
    var firstNum = this.off + idx;
    var secNum = this.x;
    return { "anum": firstNum, "operation": "+", "bnum": secNum };
};
var MyRandom = function(seed) {
    this.seed = seed;
}
MyRandom.prototype.next = function(maxValplus1) {
    
}
var AddWithMax = function(max, seed) {
    this.x = 0;
    this.useSeed = "S" + (seed * 100 + 14);
    this.off = 0;
    this.maxX = max;
    this.r = new Math.seedrandom(this.useSeed );
};
AddWithMax.prototype.questions = function() {
    return 12;
};
AddWithMax.prototype.question = function(idx) {
    var firstNum;
    var secNum;
    if (idx == 0) {
        this.r = new Math.seedrandom(this.useSeed);
    }
    firstNum = idx + 1;
    if (firstNum >= (this.maxX))
        firstNum = ((firstNum - 1) % ((this.maxX) - 1)) + 1;
    secNum = 1 + this.r() * ((this.maxX) - firstNum - 1);
    secNum = Math.floor(secNum);
    return { "anum": firstNum, "operation": "+", "bnum": secNum };
};
var SubtractionX = function(xx) {
    this.x = 0;
    this.maxX = 0;
    SubtractionX.call(this, xx, 12);
};
var SubtractionX = function(xx, max) {
    this.x = 0;
    this.maxX = 0;
    this.x = xx;
    this.maxX = max;
};
SubtractionX.prototype.questions = function() {
    return this.maxX;
};
SubtractionX.prototype.question = function(idx) {
    var firstNum = idx + this.x;
    var secNum = this.x;
    return { "anum": firstNum, "operation": "-", "bnum": secNum };
};
