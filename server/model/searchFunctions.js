const searchData = require("../data")

// class SearchClass {
//     constructor(topic,subtopic,description,place_link){
//         this.topic = topic;
//         this.subtopic = subtopic;
//         this.description = description;
//         this.place_link = place_link; 
//     }



    function findByTopic(topic) {
        try {
            const searchByTopicData = searchData.filter(data => {
                if (data.topic.includes(topic) || data.description.includes(topic)){
                    console.log(data.topic.includes(topic))
                    return data;
                }
                
            })
            return searchByTopicData;
        } catch (err) {
            throw new Error('Sorry,The topic you have been looking for will appear in few days!');
        }
    }


//}


module.exports = {findByTopic};


