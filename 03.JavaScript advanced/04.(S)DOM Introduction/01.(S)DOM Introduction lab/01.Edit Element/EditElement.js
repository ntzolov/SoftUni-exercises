function editElement(tag, before, after) {
    let pattern = new RegExp(before, 'g')
    tag.textContent = tag.textContent.replace(pattern, after)
}