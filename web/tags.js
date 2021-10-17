function showTags(args) {

	let tags = "<div>Tags";

	for (let i = 1; i < args.length; i++) {
		tags += `<div contentEditable=False class='tag-div'><span>${args[i]}</span></div>`;
	}

	tags += '</div>';
	//console.log(tags);

    if(args[0]) {
	    $("#fields > div:last").after(tags);
    } else { // show at top
        $("#fields > div:first").before(tags);
    }
}
