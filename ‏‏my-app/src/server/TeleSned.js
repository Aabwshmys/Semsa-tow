export const TeleSned = () => {
    const Send = async (message) => {
        const webhookUrl = 'https://hooks.slack.com/services/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';

        const payload = JSON.stringify({
            text: message,
        });

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: payload,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
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
