export const TeleSned = () => {
    const Send = async (message) => {
        const webhookUrl = 'https://hooks.slack.com/services/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';

        const payload = {
            text: message, // محتوى الرسالة
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // نوع البيانات المرسلة
                },
                body: JSON.stringify(payload), // تحويل البيانات إلى JSON
            });

            if (!response.ok) {
                // إذا حدث خطأ HTTP
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
            }

            console.log('Message sent successfully:', await response.text());
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    };

    return {
        Send,
    };
};

export default TeleSned;
