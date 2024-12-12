import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import './KnowledgeBase.css';

const articles = [
  {
    title: 'Understanding AI in Health',
    summary: 'Learn about how artificial intelligence is transforming healthcare with advanced algorithms and data analysis.',
    content: 'Artificial Intelligence (AI) in healthcare uses algorithms and machine learning to analyze complex medical data. AI technologies assist in diagnosing diseases, personalizing treatment plans, and predicting patient outcomes. For example, AI can analyze medical images more accurately than human radiologists, and predictive models can foresee potential health issues based on a patient’s medical history.'
  },
  {
    title: 'How AI Improves Patient Care',
    summary: 'Explore the benefits of AI-driven tools in enhancing patient care and treatment efficiency.',
    content: 'AI improves patient care by providing real-time data analysis and actionable insights. AI-driven tools can monitor patient vitals continuously, predict potential complications, and suggest optimal treatment plans. Additionally, AI can enhance patient engagement through personalized communication and education, leading to better adherence to treatment regimens.'
  },
  {
    title: 'Data Privacy and Security in AI',
    summary: 'Understand the measures taken to protect patient data and ensure privacy in AI applications.',
    content: 'Data privacy and security are paramount in AI healthcare applications. Robust encryption methods, secure data storage solutions, and strict access controls are implemented to safeguard patient information. Compliance with regulations such as HIPAA (Health Insurance Portability and Accountability Act) ensures that patient data is protected against unauthorized access and breaches.'
  },
  // Add the additional 25 questions below
  {
    title: 'What is Telemedicine and how does it work?',
    summary: 'Telemedicine allows patients to consult with healthcare providers remotely using digital communication tools.',
    content: 'Telemedicine improves access to care, especially in remote areas. It enables patients to receive medical consultations through video conferencing, messaging, and online portals, reducing the need for in-person visits.'
  },
  {
    title: 'How does AI help in diagnosing diseases?',
    summary: 'AI uses machine learning algorithms to analyze medical data and assist in diagnosing diseases.',
    content: 'AI-driven systems can analyze large datasets, identify patterns, and provide diagnostic recommendations. For instance, AI can assist in detecting cancerous cells in radiology images or predicting disease outbreaks.'
  },
  {
    title: 'What are the benefits of Electronic Health Records (EHR)?',
    summary: 'EHRs are digital versions of patients’ medical records that improve healthcare efficiency.',
    content: 'Electronic Health Records (EHR) provide easy access to patient data, improve coordination among healthcare providers, and reduce medical errors. They also enhance patient care by allowing real-time updates and comprehensive tracking of medical history.'
  },
  {
    title: 'How is AI used in personalized medicine?',
    summary: 'AI helps tailor treatment plans based on an individual’s genetic makeup and medical history.',
    content: 'Personalized medicine leverages AI to analyze genetic data and predict how patients will respond to specific treatments. This approach enables more effective and targeted therapies, particularly in oncology and chronic disease management.'
  },
  {
    title: 'What is the role of AI in drug discovery?',
    summary: 'AI accelerates drug discovery by analyzing biological data and predicting potential drug candidates.',
    content: 'AI can rapidly screen millions of compounds, model biological interactions, and predict the effectiveness of new drugs. This accelerates the development of new treatments and reduces the cost and time associated with traditional drug discovery methods.'
  },
  {
    title: 'How does AI assist in surgery?',
    summary: 'AI enhances surgical precision through robotic systems and real-time data analysis.',
    content: 'Robotic surgical systems powered by AI provide greater precision, flexibility, and control in complex procedures. AI also analyzes data during surgery to provide real-time insights, reducing the risk of complications and improving patient outcomes.'
  },
  {
    title: 'What is the impact of AI on mental health care?',
    summary: 'AI is being used to detect and treat mental health conditions through digital therapies and predictive analytics.',
    content: 'AI-driven tools can analyze speech patterns, social media activity, and physiological data to identify signs of mental health issues. These tools can also deliver cognitive behavioral therapy (CBT) through apps, making mental health care more accessible.'
  },
  {
    title: 'How is AI improving patient monitoring?',
    summary: 'AI enhances patient monitoring through wearable devices and remote sensors.',
    content: 'Wearable devices equipped with AI can continuously monitor vital signs, detect abnormalities, and alert healthcare providers in real-time. This enables proactive management of chronic conditions and timely interventions in emergencies.'
  },
  {
    title: 'What are the ethical concerns surrounding AI in healthcare?',
    summary: 'AI in healthcare raises ethical concerns such as data privacy, bias, and the potential for over-reliance on technology.',
    content: 'Ensuring that AI systems are transparent, fair, and secure is crucial. Ethical guidelines are needed to address issues like data ownership, the potential for biased algorithms, and the impact of AI on the doctor-patient relationship.'
  },
  {
    title: 'What is Precision Medicine?',
    summary: 'Precision Medicine tailors medical treatment to the individual characteristics of each patient.',
    content: 'This approach considers a patient’s genetics, environment, and lifestyle to develop personalized treatment plans. Precision medicine is particularly effective in treating cancers and rare genetic disorders.'
  },
  {
    title: 'How does AI enhance medical imaging?',
    summary: 'AI improves the accuracy and efficiency of medical imaging analysis.',
    content: 'AI algorithms can detect anomalies in medical images with high precision, often surpassing human performance. This technology is particularly valuable in radiology, where it helps identify diseases like cancer and neurological disorders early.'
  },
  {
    title: 'What is the role of AI in chronic disease management?',
    summary: 'AI helps manage chronic diseases by providing personalized treatment plans and monitoring patient health.',
    content: 'AI-powered apps and devices track patient data, predict flare-ups, and recommend lifestyle changes. This proactive approach helps manage conditions like diabetes, hypertension, and asthma more effectively.'
  },
  {
    title: 'How is AI being used in public health?',
    summary: 'AI aids public health by predicting disease outbreaks and tracking the spread of infections.',
    content: 'AI analyzes vast amounts of data from various sources to identify trends and predict disease outbreaks. This information is crucial for public health officials to implement timely interventions and prevent the spread of infectious diseases.'
  },
  {
    title: 'What is the potential of AI in genomics?',
    summary: 'AI accelerates genomic research by analyzing genetic data and identifying patterns.',
    content: 'AI tools can process vast amounts of genetic data quickly, helping researchers identify genetic mutations linked to diseases. This accelerates the development of gene-based therapies and personalized medicine.'
  },
  {
    title: 'How does AI improve healthcare accessibility?',
    summary: 'AI makes healthcare more accessible through remote diagnostics and virtual consultations.',
    content: 'AI-driven platforms enable remote consultations, diagnostics, and monitoring, making healthcare accessible to underserved populations. This technology is particularly beneficial in rural areas with limited access to healthcare services.'
  },
  {
    title: 'What is the role of AI in elderly care?',
    summary: 'AI supports elderly care by monitoring health, providing companionship, and assisting with daily activities.',
    content: 'AI-powered devices and robots can help elderly individuals manage their health, remind them to take medications, and provide companionship. These tools improve the quality of life for the elderly and reduce the burden on caregivers.'
  },
  {
    title: 'How does AI assist in personalized nutrition?',
    summary: 'AI provides personalized nutrition recommendations based on individual health data.',
    content: 'AI analyzes data such as genetics, biomarkers, and dietary habits to provide personalized nutrition advice. This approach helps individuals achieve optimal health by tailoring their diet to their unique needs.'
  },
  {
    title: 'What are AI chatbots and how are they used in healthcare?',
    summary: 'AI chatbots provide instant medical advice and support to patients.',
    content: 'AI chatbots can answer medical questions, provide symptom checkers, and guide patients through treatment options. These virtual assistants are available 24/7, improving patient access to healthcare information and support.'
  },
  {
    title: 'How does AI improve the efficiency of healthcare operations?',
    summary: 'AI streamlines healthcare operations by automating administrative tasks and optimizing resource allocation.',
    content: 'AI can automate tasks such as appointment scheduling, billing, and inventory management. This reduces the administrative burden on healthcare staff and improves operational efficiency, allowing more focus on patient care.'
  },
  {
    title: 'What is the role of AI in rehabilitation?',
    summary: 'AI supports rehabilitation by providing personalized therapy and monitoring progress.',
    content: 'AI-driven rehabilitation tools offer tailored exercises, track patient progress, and adjust therapy plans in real-time. These tools enhance the recovery process and improve patient outcomes in conditions like stroke or injury.'
  },
  {
    title: 'How is AI used in pharmaceutical research?',
    summary: 'AI accelerates pharmaceutical research by predicting drug efficacy and potential side effects.',
    content: 'AI can model the effects of new drugs on the human body, predict potential side effects, and identify the most promising drug candidates. This accelerates the drug development process and reduces the cost of bringing new medications to market.'
  },
  {
    title: 'What is the impact of AI on healthcare costs?',
    summary: 'AI has the potential to reduce healthcare costs by improving efficiency and preventing costly medical errors.',
    content: 'AI-driven tools can optimize resource use, reduce hospital readmissions, and prevent medical errors. These efficiencies can lead to significant cost savings for healthcare providers and patients.'
  },
  {
    title: 'How does AI contribute to preventive healthcare?',
    summary: 'AI plays a crucial role in preventive healthcare by predicting health risks and recommending lifestyle changes.',
    content: 'AI can analyze genetic data, lifestyle factors, and environmental influences to predict an individual’s risk of developing certain conditions. This enables early interventions and personalized recommendations for preventing diseases.'
  },
  {
    title: 'What are the future trends of AI in healthcare?',
    summary: 'Explore the emerging trends and future potential of AI in revolutionizing healthcare.',
    content: 'The future of AI in healthcare includes advancements in personalized medicine, robotics, and remote monitoring. AI will continue to evolve, offering more sophisticated tools for diagnosis, treatment, and patient engagement, ultimately transforming the healthcare landscape.'
  }
];

const KnowledgeBase = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="knowledge-base-container">
      <Typography variant="h4" className="knowledge-base-title">
        Knowledge Base
      </Typography><br />
      <Divider className="divider" />
      {articles.map((article, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={() => handleChange(index)}
          className="knowledge-accordion"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{article.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {article.summary}
              {expanded === index && (
                <div>
                  <Typography variant="body2" className="read-more-content">
                    {article.content}
                  </Typography>
                </div>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default KnowledgeBase;
