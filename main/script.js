const input = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.getElementById("imgContainer");
const image = document.getElementById("image");

function fetchData() {
  if (input.value.trim() === "") {
    input.classList.add("shake");
    setTimeout(() => {
      input.classList.remove("shake");
    }, 500);
    return;
  }
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  container.classList.remove("max-h-0");
  container.classList.add("max-h-[200px]");
  image.classList.add(
    "mx-auto",
    "my-[10px]",
    "border-[1px]",
    "border-[#d1d1d1]",
    "border-solid"
  );
}
