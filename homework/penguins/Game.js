var yetiPos;
var mounds;

init();

function init() {
    yetiPos = Math.floor(Math.random() * 9);
    mounds = document.querySelectorAll('.penguins');
    playGame();
}

function playGame() {
    mounds.forEach(function(mound, index) {
        mound.addEventListener('click', function() {
            if (index === yetiPos) {
                this.classList.add('yeti');
            } else {
                this.classList.add('penguin');
            }
            this.removeEventListener('click', arguments.callee);
        });
    });
}
