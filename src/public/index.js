//Handle alerts
const boxAlert = document.querySelector(".main__alerts");

setTimeout(function () {
  boxAlert.classList.toggle("hidden-block");
}, 2000);

//Handle delete user
const btnDelete = document.querySelectorAll(".item--delete-user");
const formDelete = document.querySelector(".form-delete");
const inputIdDelete = document.querySelector(".form-delete>input");

btnDelete.forEach(function (item, index) {
  item.onclick = function () {
    const id = item.getAttribute("data-id");
    inputIdDelete.value = id;
    formDelete.action = `/${id}?_method=DELETE`;
    formDelete.submit();
  };
});
