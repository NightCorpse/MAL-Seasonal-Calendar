function filterData(data, season){
filteredData = data['data'].filter(function (obj) {


    return season.some(function (items) {
        return obj.node.start_date.includes(year + "-" + items);
    });

});

return filteredData;
}