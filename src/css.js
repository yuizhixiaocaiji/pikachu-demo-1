const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::before, .skin *::after {
    box-sizing: border-box;
}

.skin {
    background: #ffe600;
    position: relative;
    min-height: 50vh;
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    position: relative;
    width: 0;
    height: 0;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(10deg);
    }
    66% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 8px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    background: #ffe600;
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-right: none;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-left: none;
    transform: rotate(15deg) translateX(53px);
}

.mouth .down {
    height: 180px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    background: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
}

.face.left {
    transform: translateX(-180px);
    border-radius: 50%;
    background: #ff0000;
}

.face.right {
    transform: translateX(180px);
    border-radius: 50%;
    background: #ff0000;
}
`

export default string