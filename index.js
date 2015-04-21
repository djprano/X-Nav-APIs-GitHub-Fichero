
function getToken(){
	console.log('test');
	token = $('#token').val();
	github = new Github ({
		token: token,
		auth: "oauth"
	});

	$("#repoform").show('fast');
};

function showRepoInfo(error,repo){
	var repodata = $("#repodata");
	if(error){
		repodata.html("<p>Error " + error.error + "</p>");
	}else{
		repodata.html("<p>Repository data:</p>"+
			"<li>Name: "+ repo.full_name+"</li>"+
			"<li>Description: "+repo.description+"</li>"+
			"<li>Created at: "+repo.created_at+"</li>");
	}

};

function getRepo(){
	var user = $("#user").val();
	var reponame = $("#repo").val();
    var repo = github.getRepo(user, reponame);
    repo.show(showRepoInfo);
};

$(document).ready(function(){
	$('div#form button').click(getToken);
	$('#getRepoData').click(getRepo);
});