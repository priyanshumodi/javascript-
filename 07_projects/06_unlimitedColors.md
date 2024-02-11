# Projects 6 

## Unlimited Colors

### HTML File

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

### JavaScript File

```
const hash = "0123456789ABCDEF"

let isStart;
document.querySelector('#start').addEventListener('click',function(e){
  if(!isStart)
  {
    console.log("start");

    const startColor = function() {
      let colr = "#";
      for(let i=0;i<6;i++)
      {
        colr += hash[parseInt(Math.random()*20)%16];
      }
      console.log(colr);
      document.body.style.backgroundColor = colr;
    }
    isStart = setInterval(startColor,1000);
  }
  
})

document.querySelector('#stop').addEventListener('click',function(e){
  if(isStart)
  {
    console.log("stop");
    clearInterval(isStart);
    isStart = null
  }
})
```