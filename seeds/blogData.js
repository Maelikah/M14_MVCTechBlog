const { Blog } = require('../models');

// creating blog data
const blogData = [
    {
        title: "Understanding the CIA Triad: Confidentiality, Integrity, and Availability",
        content: "The CIA triad forms the basis of security systems, focusing on the crucial aspects of information protection. Confidentiality ensures that information is accessible only to authorized individuals. Integrity safeguards the accuracy and consistency of data, preventing unauthorized modifications. Availability guarantees that information is accessible to authorized users when needed. ",
        user_id: "1"
    },
    {
        title: "IT Risk Management in a nutshell: Safeguarding Your Digital Assets",
        content: "IT risk management encompasses the identification, assessment, and prioritization of potential risks that could impact an organization's IT infrastructure, systems, and data. By proactively identifying vulnerabilities and implementing appropriate controls, businesses can minimize the likelihood and impact of adverse events. The first step in IT risk management is conducting a comprehensive risk assessment. Once risks are identified, organizations can employ various strategies to manage and mitigate them. These strategies include implementing robust security measures, such as firewalls, intrusion detection systems, and encryption protocols, to protect against external threats.",
        user_id: "2"
    },
    {
        title: "Embracing the Power of AI: Revolutionizing the Future of Tech",
        content: "Artificial Intelligence (AI) has emerged as a groundbreaking technology, reshaping industries and transforming the way we live and work. Its potential to revolutionize the future of technology is unparalleled, offering exciting possibilities and unprecedented advancements. From voice assistants like Siri and Alexa to autonomous vehicles and smart homes, AI has found its way into various aspects of our daily lives. This transformative technology leverages machine learning algorithms and data analytics to mimic human intelligence and perform tasks with incredible precision and efficiency. One remarkable application of AI is in the field of healthcare. Medical professionals are now using AI-powered systems to detect diseases, analyze medical images, and predict patient outcomes.",
        user_id: "3"
    },

]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;