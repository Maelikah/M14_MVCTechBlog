const { Comment } = require('../models');

// creating comment data
const commentData = [
    {
        user_id: "3",
        blog_id: "1",
        comment: "Wow, this post brilliantly simplifies the concept of the CIA triad! The way it breaks down confidentiality, integrity, and availability into separate focal points is so helpful for understanding the importance of each aspect. I appreciate how it emphasizes the need to address all three standards to strengthen the overall security profile of an organization. The examples provided for each component really drive the point home. This post is a great resource for anyone looking to grasp the fundamentals of information security and how the CIA triad plays a crucial role. Well done!"
    },
    {
        user_id: "2",
        blog_id: "3",
        comment: "Absolutely mind-blowing post! The potential of AI truly knows no bounds, and this article does an excellent job of highlighting the transformative power it holds. From revolutionizing healthcare with early detection and personalized treatments to bolstering cybersecurity measures, AI is reshaping industries across the board. The examples provided vividly illustrate the profound impact AI has on our daily lives. This post encourages us to embrace AI's potential and challenges us to think differently about the future of technology. A captivating read that showcases the immense possibilities AI brings to the table. Fantastic job!"
    },
    {
        user_id: "1",
        blog_id: "2",
        comment: "This post on IT risk management is incredibly informative and comprehensive. It covers all the essential aspects of identifying, assessing, and mitigating risks in today's digital landscape. I particularly appreciate the emphasis on proactive strategies, such as conducting risk assessments and developing incident response plans. The strategies mentioned, such as implementing robust security measures and regular monitoring, are practical and actionable. The post effectively highlights the significance of IT risk management in safeguarding valuable digital assets and ensuring business continuity. A must-read for anyone seeking practical insights on managing and mitigating IT risks effectively."
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;