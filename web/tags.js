function showTags(args) {

	let tags = "<tr><td class='fname'>Tags</td></tr><tr><td>";

	for (let i = 0; i < args.length; i++) {
		tags += `<div contentEditable=False class='tag-div'><span>${args[i]}</span></div>`;
	}

	tags += '</td></tr>';
	//console.log(tags);

	$("#fields > table tr:last").after(tags)
}
