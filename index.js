// const bestFriend = ['Pasa', 'Olga', 'Dana'];
// bestFriend.unshift('Marina');
// bestFriend.push('Tanya');
// bestFriend.splice(3, 0, 'Simona')
// console.log(bestFriend);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number.pop();
// number.shift();
// number.splice(3, 3);
// console.log(number);

// const books = [`The women's heart`, `Wisdom for mothers`, `Breaking Free`];
// books.forEach((item, index) => {
//     console.log(index, item);
// })

// const images = document.querySelectorAll('img');
// images.forEach((item) => {
//     item.addEventListener('click', () => {
//         alert('Hello')
//     })
// })

// const images = document.querySelectorAll('img');
// images.forEach((item) => {
//    item.addEventListener('mouseover', clicked);
// })
// function clicked() {
//     alert('This image was clicked');
// }

// slaides

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', () =>{
        removeFocus();
    item.classList.add('selected');
    
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected')
        })
    }
})