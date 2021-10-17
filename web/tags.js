function showTags(args) {

	let tags = "<div>Tags";

	for (let i = 1; i < args.length; i++) {
		tags += `<div contentEditable=False class='tag-div'><span>${args[i]}</span></div>`;
	}

	tags += '</div>';
	//console.log(tags);

    //console.log(args[0]);

    if(args[0] === "True") {
	    $("#fields > div:last").after(tags);
    } else { // show at top
        $("#fields > div:first").before(tags);
    }
}

function oldShowTags(args) {

	let tags = "<tr><td class='fname'>Tags</td></tr><tr><td>";

	for (let i = 1; i < args.length; i++) {
		tags += `<div contentEditable=False class='tag-div'><span>${args[i]}</span></div>`;
	}

	tags += '</td></tr>';
	//console.log(tags);

    if(args[0] === "True") {
	    $("#fields > table tr:last").after(tags)
    } else { // show at top
	    $("#fields > table tr:first").before(tags)
    }
}
