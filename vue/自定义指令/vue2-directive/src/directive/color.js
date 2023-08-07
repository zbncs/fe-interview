const color = {
  bind(el, binding) {
    console.log(1111, binding);
    el.style.color = binding.value;
  }
}

export default color
