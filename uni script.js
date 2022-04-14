let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");

function renderAdded() {
  let songs = songsContainer.querySelectorAll(".song");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
  }
}

function addSong() {
  songsContainer.innerHTML += `
		<div class="song">
		  <h4 class="song__artist">Кино</h4>
		  <p class="song__title">Дерево</p>
		  <button class="song__like"></button>
		</div>
  `;
}

addButton.addEventListener("click", addSong);
