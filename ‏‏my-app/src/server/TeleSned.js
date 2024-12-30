import axios from 'axios';

export const TeleSned = () => {
    const Send = async (message) => {
        const payload = {
            text: message, // النص الذي سيتم إرساله
        };

        try {
            await axios.post(
                'https://hooks.slack.com/services/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', // رابط الـ Webhook
                payload, // إرسال النص كـ JSON
                {
                    headers: {
                        'Content-Type': 'application/json', // تعيين نوع المحتوى
                    },
                }
            );
            console.log('Message sent successfully');
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
        }
    };

    return {
        Send,
    };
};

export default TeleSned;
