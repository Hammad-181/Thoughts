const fontsize = {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value;
    }
}

module.exports = {
    fontsize
}

