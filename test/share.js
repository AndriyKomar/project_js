var rating =  localStorage.getItem("your_res");
var result = rating*7;

var YaShare = Ya.share2('socialknopki', {
    theme: {
        services: 'vkontakte,facebook,odnoklassniki,twitter',
        counter: true,
        lang: 'en', 
    },
    content: {
        url: 'https://BestIQTestEVER.com',
        title: 'IQTest',
        description: 'I have scored '+ result + ' points at IQ test. If you want to know your IQ level than click on link.'  
    }
});