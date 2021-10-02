function showTags(args) {

	let tags = "<div>Tags";

	for (let i = 0; i < args.length; i++) {
		tags += `<div contentEditable=False class='tag-div'><span>${args[i]}</span></div>`;
	}

	tags += '</div>';
	//console.log(tags);

	$("#fields > div:last").after(tags)
}
