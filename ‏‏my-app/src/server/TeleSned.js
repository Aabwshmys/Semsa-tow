import axios from 'axios';

export const TeleSned = () => {
    const Send = async (des) => {
        const text = `مدونة سمسا \n ${des}`;
        try {
            await axios.post(
                'https://hooks.slack.com/services/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',
                { text }, // إرسال النص ضمن كائن
                {
                    headers: {
                        'Content-Type': 'application/json', // تحديد نوع المحتوى
                    },
                }
            );
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return {
        Send,
    };
};

export default TeleSned;
