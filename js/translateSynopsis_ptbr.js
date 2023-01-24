//Verificar o codigo por correções e melhorias (resolver bug no botão de voltar ao texto original que repete o texto traduzido, ou alguma forma boa de remover o originalText do html sem sobrecarregar o navegador)


function transl(id){

  synopsisTag = $('#' + id +' .synopsisText');
  
  if (synopsisTag.attr("lang") == "en"){
    var sourceText = synopsisTag.text();

	  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&ie=UTF-8&oe=UTF-8&sl=en&tl=pt&dt=t&q=" + encodeURI(sourceText);
	  
	  $.ajax({
	    url: url,
	    method: 'GET',
	    dataType: 'json'
	}).done(function (data) {
	
	translatedContent = "";
	
	data[0].forEach(element => {
	 
	   translatedContent = translatedContent + element[0];
	
	  });

	  $('#' + id +'>button').text('Texto Original');
    synopsisTag.text(translatedContent);
    synopsisTag.attr('lang', 'pt-BR');
    if ($('#' + id +'>.originalText').length == 0){
    synopsisTag.after("<p class='originalText' hidden>"+sourceText+"</p>");
    }
    

	});
} else if( synopsisTag.attr("lang") == "pt-BR"){
  $('#' + id +'>button').text('Traduzir Sinopse');
  originalText = $('#' + id +'>.originalText').text();
  synopsisTag.text(originalText);
  synopsisTag.attr('lang', 'en');

}

}