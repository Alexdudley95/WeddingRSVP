function changeContent(page){
    var contentDiv = document.getElementById('content')

    switch(page){
        case 'first':
            contentDiv.innerHTML=`
              <div class = "container" id="content">
                <h1 class="text-center">Please RSVP Below! </h1>

                <div class="form-horizontal">
                    <label for="firstName">Name:</label>
                    <input style="margin-bottom : 5px;" type="text" class = "form-control" id="firstName" placeholder="Names(s)">
                </div>
            </div>
            `;
            break;
        case 'second':
            contentDiv.innerHTML = `
            <div class = "container ">
                <button class = "btn btn-warning btn-block " type="button">I will be attending</button>
                <button class = "btn btn-warning btn-block" type="button">I will <strong>NOT</strong> be attending</button>
                <button class = "btn btn-warning btn-block" type="button">I will be attending the evening</button>
            </div>

            `
            break;
        case 'third':
            contentDiv.innerHTML=`
            <h2 class="text-center">Food Options</h2>

            <form>
            <div class="container bg-warning">
                <div class="row">
                <div class="col-xs-3">
                    <label for="starter"> Starter </label>
                </div>
                <div class="col-xs-9">
                    <select class="form-select" id="starter">
                    <option>Egg with extra egg</option>
                    <option>Minion Toast</option>
                    </select>
                </div>
                </div>

                <div class="row">
                <div class="col-xs-3">
                    <label for="main">Main</label>
                </div>
                <div class="col-xs-3">
                    <select class="form-select" id="main">
                    <option>Main Egg Dish</option>
                    <option>Another Main Egg Dish</option>
                    </select>
                </div>
                </div>

            </div>
            </form>
            `
            break;
        default:
            contentDiv.innerHTML='<h2>OH NO!</h2>';
    }

}


function chooseEmoji(emoji){

    switch(emoji){
        case 'smile':
        displayEmoji('smile')
        
    }

}

var canvas = document.getElementById('emojiCanvas');
var ctx = canvas.getContext("2d");
ctx.width = 1000;
ctx.height= 1000;
ctx.font = "30px Arial";
var x = 10 , y = 100;

function displayEmoji(emoji){

    draw();
}

function draw(){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fillStyle="rgb(195, 236, 154)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle='rgb(0, 0, 0)';
    ctx.fillText("Hello World!", x , y);
    x += 3;
    requestAnimationFrame(draw)
}

