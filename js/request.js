
        function getQuery() {

            //---------------------- Get Data -------------------------//
/*            if(document.cookie != 0){


                console.log(document.cookie);


            }else{*/
            $.ajax({
                url: 'https://api.myanimelist.net/v2/anime/season/2023/winter?sort=anime_num_list_users&limit=500&fields=start_date,synopsis,num_list_users,mean,genres,num_episodes,average_episode_duration,status,source,studios',
                method: 'GET',
                dataType: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-MAL-CLIENT-ID", "6bdc9c2feb5484aa3a0fce8d64b1bd91");

                }
            }).done(function (data) {

            fetchCards(filterData(data, seasonWinter));
/*            strJson = JSON.stringify(filterData(data, seasonWinter))
            document.cookie = "json=" + strJson;
            console.log(document.cookie);*/

        });
        }
    //}