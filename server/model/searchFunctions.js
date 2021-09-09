const searchData = require("../data")




function findByTopic(value) {
    try {
        const searchByTopicData = searchData.filter(data => {
            return (data.topic.includes(value) || data.country.includes(value) || data.description.includes(value))
            // if (data.country.includes(value)){
            //     //return data.topic.includes(value);
            //     return data;
            // }   
        })
        return searchByTopicData;
    } catch (err) {
        throw new Error('Sorry,The topic you have been looking for will appear in few days!');
    }
} 



//if value.uppercase  = MEXICO then doesnt matter if you type mexico
//changes all data to uppercase so it doesnt matter how we type it
console.log(findByTopic("Mexico"))


module.exports = {findByTopic};


