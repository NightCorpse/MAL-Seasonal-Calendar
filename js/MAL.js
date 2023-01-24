function getQuery(){

    //---------------------- Config Request -------------------------//

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    //---------------------- Get Data -------------------------//

    $.ajax({
        url: 'https://api.myanimelist.net/v2/anime/season/2023/winter?sort=anime_num_list_users&limit=500&fields=start_date,synopsis,num_list_users,num_scoring_users,genres,num_episodes,average_episode_duration',
        method: 'GET',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-MAL-CLIENT-ID", "6bdc9c2feb5484aa3a0fce8d64b1bd91");
        }
    }).done(function (data) {

        //---------------------- Filter Data -------------------------//

        let year = "2023";
        const seasonWinter = ["01", "02", "03"];


        filteredData = data['data'].filter(function (obj) {


            return seasonWinter.some(function (items) {
                return obj.node.start_date.includes(year + "-" + items);
            });

        });

        //---------------------- Create Elements -------------------------//

        filteredData.forEach(element => {
            var div = document.createElement("div");
            div.setAttribute("class", "animeCard");
            div.setAttribute("id", element.node.id);

            title = document.createElement("h3");
            title.innerHTML = element.node.title;

            img = document.createElement("img");
            img.setAttribute("src", element.node.main_picture['medium']);

            start_date = document.createElement("p");
            start_date.innerHTML = element.node.start_date;
            start_date.setAttribute('data-before', 'Data Inicio: ');

            synopsis = document.createElement("p");
            synopsis.innerHTML = element.node.synopsis;
            synopsis.setAttribute('data-before', 'Sinopse: ');

            num_list_users = document.createElement("p");
            num_list_users.innerHTML = ((element.node.num_list_users).toLocaleString('en')).replace(",", ".");
            num_list_users.setAttribute('data-before', 'Users: ');

            num_scoring_users = document.createElement("p");
            num_scoring_users.innerHTML = ((element.node.num_scoring_users).toLocaleString('en')).replace(",", ".");
            num_scoring_users.setAttribute('data-before', 'Users Score: ');


            i = 0;

            element.node['genres'].forEach(element => {

                if (i == 0) {
                    genres = element.name;
                } else {
                    genres = genres + ", " + element.name;

                }

                i++;

            });

            genresList = document.createElement("p");
            genresList.innerHTML = genres;
            genresList.setAttribute('data-before', 'Genero: ');

            num_episodes = document.createElement("p");
            if (element.node.num_episodes == 0) {
                num_episodes.innerHTML = "N/A";
            } else {
                num_episodes.innerHTML = element.node.num_episodes;
            }
            num_episodes.setAttribute('data-before', 'Nº Episodios: ');

            convertedEpDuration = (element.node.average_episode_duration / 60).toFixed();

            average_episode_duration = document.createElement("p");
            average_episode_duration.innerHTML = convertedEpDuration + ' Min';
            average_episode_duration.setAttribute('data-before', 'Duração por EP: ');

            div.append(title, img, start_date, synopsis, num_list_users, num_scoring_users, genresList, num_episodes, average_episode_duration);
            $( ".content" ).append( div );
        });

    });

}


/*<script>

    var topSearch = new VUE({
            el: '#topSearch',
            data: {
                keyword: ''
            },
            methods:  {   
                getQuery: function() {
                             console.log(this.keyword);
                        }
                     }
             });

</script>*/