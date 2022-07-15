function clicked(event) {
    let parent = event.target.parentElement;
    let title = parent.querySelector(".title").innerHTML;
    alert(`You are viewing the ${title}`);
}