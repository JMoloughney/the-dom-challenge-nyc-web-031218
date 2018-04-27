const minusButton = document.getElementById('-')
const plusButton = document.getElementById('+')
const pauseButton = document.getElementById('pause')
const heartButton = document.getElementById('<3')
const counter = document.getElementById('counter')
const likes = document.getElementById('likes')
const commentForm = document.getElementById('comment-form')
const commentList = document.getElementById('list')
const userComment = document.getElementById('userComment')
const likesCounter = {}
let cur = parseInt(counter.innerText)
let paused = false

let clockCounter = setInterval(() => {
  if (!paused) {
    counter.innerText = ++cur
  }
}, 1000)

const buttonClicked = function() {
  //if paused {}
  // let fp = pauseButton.innerText = resume

  if (!paused) {
    switch (this.id) {
      case '-':
        counter.innerText = --cur
        break;
      case '+':
        counter.innerText = ++cur
        break;
      case '<3':
        let listItem = document.getElementById(cur)
        if (listItem) {
          likesCounter[cur]++
            listItem.innerText = `${cur} liked ${likesCounter[cur]} time/s`
        } else {
          //add something to our like counter cur:count
          likesCounter[cur] = 1
          let child = document.createElement('li')
          child.setAttribute(`id`, cur)
          child.innerText = `${cur} liked ${likesCounter[cur]} time/s`
          likes.appendChild(child)
        }
        break;
    }
  }

  switch (this.id) {
    case 'pause':
      paused = !paused
      if (paused) {
        pauseButton.innerText = 'resume'
      } else {
        pauseButton.innerText = 'pause'
      }
      break;
  }
}

const formSubmitted = function () {
  event.preventDefault()
  let commentP = document.createElement('p')
  commentP.innerText = userComment.value
  commentList.appendChild(commentP)
}

commentForm.addEventListener('submit', formSubmitted)

minusButton.addEventListener('click', buttonClicked)
plusButton.addEventListener('click', buttonClicked)
pauseButton.addEventListener('click', buttonClicked)
// pauseButton.addEventListener('')
heartButton.addEventListener('click', buttonClicked)
