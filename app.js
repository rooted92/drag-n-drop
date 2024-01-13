const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);

}

function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(e) {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';

}

function dragLeave(e) {
    this.className = 'empty';
}

function dragDrop(e) {
    this.className = 'empty';
    this.append(fill);
}