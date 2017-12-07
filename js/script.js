  var linkFeedback = document.querySelector(".feedback");
  var linkMap = document.querySelector(".map");

  var popupFeedback = document.querySelector(".modal-feedback");
  var popupMap = document.querySelector(".modal-map");
  var closeFeedback = popupFeedback.querySelector(".modal-close");
  var closeMap = popupMap.querySelector(".modal-close");

  var form = popupFeedback.querySelector("form");
  var login = popupFeedback.querySelector("#user-name");
  var email = popupFeedback.querySelector("#user-email");
  var message = popupFeedback.querySelector("#user-message");

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
    login.focus();
  });

  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });

  closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupFeedback.classList.remove("modal-error");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      popupFeedback.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-show")) {
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-error");
      } else if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      }
    }
  });
