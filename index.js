

function errorSendFile(err){
	console.log(err);
}

function getToken(){
	token = $('#token').val();
	github = new Github ({
		token: token,
		auth: "oauth"
	});

	$("#repoform").show('fast');
};

function sendFile(){
	var filename = $('#filename').val();
	var filecontent = $('#fileContent').val();
	repo.write('master', filename, filecontent, 'update', errorSendFile);

}

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
	$('#fileData').show('fast');
};

function getRepo(){
	var user = $("#user").val();
	var reponame = $("#repo").val();
    repo = github.getRepo(user, reponame);
    repo.show(showRepoInfo);
};

$(document).ready(function(){
	$('div#form button').click(getToken);
	$('#getRepoData').click(getRepo);
	$('div#fileData button').click(sendFile);
});