function fetchCards(filteredData){

filteredData.forEach(element => {
    var div =  document.createElement("div");
    div.setAttribute("class", "animeCard");
    div.setAttribute("id", element.node.id);
    

    divTitle = document.createElement("div");
    divTitle.setAttribute("class", "title");

    title = document.createElement("h2");
    title.innerHTML = element.node.title;


    // COLOCAR A PAGINA ANIME DETAILS NO FUTURO
    aTitle = document.createElement("a");
    aTitle.setAttribute("href", "https://myanimelist.net/anime/" + element.node.id);
    aTitle.append(title);

    divTitle.append(aTitle);
    
    divStart_Date = document.createElement("div");
    divStart_Date.setAttribute("class", "start_date");
    
    const options = {year: 'numeric', month: 'short', day: 'numeric' };
    
    var elementDate = new Date(element.node.start_date);
    convertedDate = (new Date(elementDate.getFullYear(), elementDate.getMonth(),(elementDate.getDate()+1))).toLocaleDateString("en-US", options);

    
    start_date = document.createElement("span");
    start_date.innerHTML = (convertedDate);
    
    animeStatus = document.createElement("span");
    animeStatus.innerHTML = ((element.node.status).charAt(0).toUpperCase() + element.node.status.slice(1)).replaceAll("_", " ");

    if (animeStatus.innerHTML == "Not yet aired"){
        animeStatus.setAttribute('style', 'color: orange;');
    }else if (animeStatus.innerHTML == "Currently airing"){
        animeStatus.setAttribute('style', 'color: green;');
    } else if (animeStatus.innerHTML == "Finished airing"){
        animeStatus.setAttribute('style', 'color: red;');
    }
    
    num_episodes = document.createElement("span");
    if (element.node.num_episodes == 0) {
        num_episodes.innerHTML = "N/A";
    } else if (element.node.num_episodes == 1){
        num_episodes.innerHTML = element.node.num_episodes + " ep";
    } else{
        num_episodes.innerHTML = element.node.num_episodes + " eps";
    }
    
    if (element.node.average_episode_duration == 0){
        convertedEpDuration = "N/A";
    }
    else
    {
        convertedEpDuration = (element.node.average_episode_duration / 60).toFixed() + ' min';
    }
    
    average_episode_duration = document.createElement("span");
    average_episode_duration.innerHTML = convertedEpDuration;
    
    divStart_Date.append(start_date,animeStatus ,num_episodes,",\u00A0", average_episode_duration );

    divGenres = document.createElement("div");
    divGenres.setAttribute("class", "genres");
    
    element.node['genres'].forEach(element => {
        

            genreList = document.createElement("span");
            genreList.innerHTML = element.name;
            divGenres.append(genreList);

    });

    img = document.createElement("img");
    img.setAttribute("src", element.node.main_picture['medium']);

    divWrapper = document.createElement("div");
    divWrapper.setAttribute("class", "wrapper");

    divInfo = document.createElement("div");
    divInfo.setAttribute("class", "info");

<<<<<<< HEAD
=======
    divWrap = document.createElement("div")

>>>>>>> 2e6d17520619535f551001c58843bb05d6a269bc
    synopsis = document.createElement("p");
    synopsis.setAttribute('class', 'synopsisText');
    if (element.node.synopsis == null || element.node.synopsis == "") {
        synopsis.innerHTML = "(No synopsis yet.)";
    } else {
        synopsis.innerHTML = element.node.synopsis;
        synopsis.setAttribute('lang', "en");
<<<<<<< HEAD
=======
        synopsis.setAttribute('onscroll', "scrollBottom("+element.node.id+")");
>>>>>>> 2e6d17520619535f551001c58843bb05d6a269bc

        // TROCAR BUTAUM POR IMAGEM
/*        buttonTranslate = document.createElement("button");
        buttonTranslate.innerHTML = "Traduzir Sinopse";
        buttonTranslate.setAttribute("onclick", "transl(\'"+ element.node.id+"\');");*/
    }

    y = 0;

    if(element.node.studios == null || element.node.studios == ""){
        
        studio = "Unknown"

    }else{

    element.node['studios'].forEach(element => {
        
        if (y == 0) {
            studio = element.name;
            y++;
        } else {
            studio = studio + ", " + element.name;

        }

    });
    } 

    studioList = document.createElement("span");
    studioList.setAttribute("class", "studio");
    studioList.innerHTML = studio;

    if (studio.includes(",")){
    studioList.setAttribute('data-before', 'Studios: ');
    } else {
    studioList.setAttribute('data-before', 'Studio: ');
    }

    source = document.createElement("span");
    source.innerHTML = ((element.node.source).charAt(0).toUpperCase() + element.node.source.slice(1)).replaceAll("_", " ");
    source.setAttribute('data-before', 'Source: ');

<<<<<<< HEAD
    divInfo.append(synopsis, studioList, source);
=======
    divWrap.append(studioList, source);
    divInfo.append(synopsis, divWrap);
>>>>>>> 2e6d17520619535f551001c58843bb05d6a269bc
    divWrapper.append(img ,divInfo);
    
    divScore = document.createElement("div");
    divScore.setAttribute("class", "score");

    score = document.createElement("span");
    if(element.node.mean == null) {
        score.innerHTML = '<i class="fa-regular fa-star mr4"></i> ' + "N/A";
    } else {
        score.innerHTML = "<i class='fa-regular fa-star mr4'></i> " + element.node.mean;
    }

    num_list_users = document.createElement("span");

    if(element.node.num_list_users >= 1000){

        users = Math.round(((element.node.num_list_users).toLocaleString('en')).replaceAll(",","."));
        num_list_users.innerHTML = "<i class='fa-solid fa-user mr4'></i> " + users + "K";
    } else {
        num_list_users.innerHTML = "<i class='fa-solid fa-user mr4'></i> " + element.node.num_list_users;
    }

    //Colocar onclick no botão para criar o evento do calendario e etc.
    button = document.createElement("button");
    button.setAttribute("class", "addList");
    button.innerHTML = "Add to List";

    divScore.append(score, num_list_users, button);

    div.append(divTitle, divStart_Date, divGenres, divWrapper/*, buttonTranslate*/, divScore);
    $( ".content" ).append( div );
    
<<<<<<< HEAD
    if($("#" + element.node.id + " .synopsisText i").length == 0){
=======
    if($("#" + element.node.id + " .info>i").length == 0){
>>>>>>> 2e6d17520619535f551001c58843bb05d6a269bc
    synopsisSize(element.node.id);
    }

    });

}

function synopsisSize(id){

    synopsisText = $('#' + id + ' .synopsisText');

    if (synopsisText.height() >= 180) {

        oversizeArrow = document.createElement("i");
        oversizeArrow.setAttribute('class', 'fa-solid fa-angle-down');
        synopsisText.after(oversizeArrow);
    }



}
<<<<<<< HEAD
=======

function scrollBottom(id) {

    synopsis = $('#' + id + ' .synopsisText');
    arrow = $("#" + id + " .info i");

    if ((synopsis.scrollTop() + synopsis.innerHeight()) >= synopsis[0].scrollHeight) {
        arrow.attr('class', 'fa-solid fa-angle-up');
    } else if (arrow.attr("class") == "fa-solid fa-angle-down"){
    } else {
        arrow.attr('class', 'fa-solid fa-angle-down');
    }


}
>>>>>>> 2e6d17520619535f551001c58843bb05d6a269bc
 