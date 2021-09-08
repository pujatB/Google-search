const searchData = require("../data")

class SearchClasss {
    constructor(topic,subtopic,description,place_link){
        this.topic = topic;
        this.subtopic = subtopic;
        this.description = description;
        this.place_link = place_link; 
    }



    static findByTopic(subtopic) {
        try {
            const searchByTopicData = searchData.filter(data => {
                return (data.topic.includes(topic) || data.subtopic.includes(topic) || data.description.includes(topic));
            })
            const search = new SearchClass(searchByTopicData);
            return search;
        } catch (err) {
            throw new Error('Sorry,The topic you have been looking for will appear in few days!');
        }
    }


}


module.exports = searchClass;


