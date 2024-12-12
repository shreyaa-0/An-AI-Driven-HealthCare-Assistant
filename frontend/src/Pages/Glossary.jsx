import { Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Glossary.css';

const terms = [
  {
    term: 'Common Cold',
    definition: 'A viral infection of the upper respiratory tract.',
    details: 'Cause: Caused by rhinoviruses or other viruses. Symptoms: Runny nose, sore throat, cough, congestion, mild fever. Cure: Rest, fluids, over-the-counter medications for symptoms relief.'
  },
  {
    term: 'Flu (Influenza)',
    definition: 'An infectious disease caused by influenza viruses.',
    details: 'Cause: Influenza viruses. Symptoms: Fever, chills, cough, sore throat, muscle aches, fatigue. Cure: Rest, fluids, antiviral medications if started early.'
  },
  {
    term: 'Allergic Rhinitis',
    definition: 'An allergic reaction causing inflammation of the nasal passages.',
    details: 'Cause: Allergens like pollen, dust mites, or pet dander. Symptoms: Sneezing, itching, runny or blocked nose, itchy eyes. Cure: Antihistamines, nasal corticosteroids, avoiding allergens.'
  },
  {
    term: 'Asthma',
    definition: 'A chronic condition that inflames and narrows the airways.',
    details: 'Cause: Allergens, respiratory infections, exercise, smoke. Symptoms: Wheezing, shortness of breath, chest tightness, coughing. Cure: Inhaled corticosteroids, bronchodilators, avoiding triggers.'
  },
  {
    term: 'Sinusitis',
    definition: 'Inflammation or swelling of the sinuses.',
    details: 'Cause: Viral, bacterial, or fungal infections. Symptoms: Nasal congestion, facial pain, headache, thick nasal discharge. Cure: Nasal decongestants, saline nasal irrigation, antibiotics if bacterial.'
  },
  {
    term: 'Pneumonia',
    definition: 'An infection that inflames the air sacs in one or both lungs.',
    details: 'Cause: Bacterial, viral, or fungal infections. Symptoms: Cough, fever, chest pain, difficulty breathing. Cure: Antibiotics for bacterial pneumonia, antiviral medications for viral pneumonia.'
  },
  {
    term: 'Bronchitis',
    definition: 'Inflammation of the bronchial tubes.',
    details: 'Cause: Viral or bacterial infections, smoking. Symptoms: Cough, mucus production, shortness of breath, wheezing. Cure: Rest, fluids, bronchodilators, antibiotics if bacterial.'
  },
  {
    term: 'Eczema',
    definition: 'A condition that makes the skin red, inflamed, and itchy.',
    details: 'Cause: Genetic factors, irritants, allergens. Symptoms: Red, itchy rash, dry patches. Cure: Moisturizers, corticosteroid creams, avoiding triggers.'
  },
  {
    term: 'Psoriasis',
    definition: 'A skin condition causing red, scaly patches.',
    details: 'Cause: Autoimmune condition. Symptoms: Thick, red patches of skin covered with silvery scales. Cure: Topical treatments, phototherapy, systemic medications.'
  },
  {
    term: 'Hay Fever',
    definition: 'Allergic rhinitis caused by pollen.',
    details: 'Cause: Pollen from trees, grasses, or weeds. Symptoms: Sneezing, itchy eyes, runny nose, congestion. Cure: Antihistamines, nasal sprays, avoiding outdoor activities during high pollen seasons.'
  },
  {
    term: 'Gastroenteritis',
    definition: 'Inflammation of the stomach and intestines.',
    details: 'Cause: Viral or bacterial infections, contaminated food or water. Symptoms: Diarrhea, vomiting, stomach cramps, fever. Cure: Rehydration, rest, antibiotics if bacterial.'
  },
  {
    term: 'Diabetes Mellitus',
    definition: 'A group of diseases that affect how the body uses blood sugar (glucose).',
    details: 'Cause: Genetic factors, obesity, sedentary lifestyle. Symptoms: Excessive thirst, frequent urination, fatigue, blurred vision. Cure: Insulin therapy, oral medications, lifestyle changes.'
  },
  {
    term: 'Hypertension',
    definition: 'High blood pressure that can lead to severe health complications.',
    details: 'Cause: Genetics, poor diet, lack of exercise, obesity. Symptoms: Often asymptomatic, but can cause headaches, shortness of breath. Cure: Lifestyle changes, antihypertensive medications.'
  },
  {
    term: 'Coronary Artery Disease',
    definition: 'Damage or disease in the heart’s major blood vessels.',
    details: 'Cause: Build-up of plaque in the coronary arteries. Symptoms: Chest pain, shortness of breath, fatigue. Cure: Lifestyle changes, medications, surgical interventions like angioplasty.'
  },
  {
    term: 'Stroke',
    definition: 'A sudden disruption in the blood supply to the brain.',
    details: 'Cause: Blockage or rupture of a blood vessel in the brain. Symptoms: Sudden numbness, confusion, trouble speaking, severe headache. Cure: Immediate medical attention, thrombolytics, rehabilitation.'
  },
  {
    term: 'Heart Failure',
    definition: 'A condition where the heart cannot pump enough blood to meet the body’s needs.',
    details: 'Cause: Coronary artery disease, high blood pressure. Symptoms: Shortness of breath, swelling in legs, fatigue. Cure: Medications, lifestyle changes, sometimes surgery.'
  },
  {
    term: 'Peptic Ulcer',
    definition: 'Sores that develop on the lining of the stomach, small intestine, or esophagus.',
    details: 'Cause: Infection with H. pylori bacteria, long-term use of NSAIDs. Symptoms: Burning stomach pain, bloating, nausea. Cure: Antibiotics, acid-reducing medications, avoiding irritants.'
  },
  {
    term: 'Inflammatory Bowel Disease (IBD)',
    definition: 'Chronic inflammation of the digestive tract, including Crohn’s disease and ulcerative colitis.',
    details: 'Cause: Autoimmune response, genetic factors. Symptoms: Abdominal pain, diarrhea, weight loss. Cure: Medications, dietary changes, surgery in severe cases.'
  },
  {
    term: 'Celiac Disease',
    definition: 'An autoimmune disorder where ingestion of gluten damages the small intestine.',
    details: 'Cause: Gluten (a protein found in wheat, barley, and rye). Symptoms: Diarrhea, abdominal pain, bloating. Cure: Strict gluten-free diet.'
  },
  {
    term: 'Hepatitis',
    definition: 'Inflammation of the liver, often caused by viral infections.',
    details: 'Cause: Hepatitis viruses (A, B, C, D, E). Symptoms: Jaundice, fatigue, abdominal pain. Cure: Antiviral medications, lifestyle changes, vaccination for hepatitis A and B.'
  },
  {
    term: 'Tuberculosis (TB)',
    definition: 'A bacterial infection that primarily affects the lungs.',
    details: 'Cause: Mycobacterium tuberculosis bacteria. Symptoms: Persistent cough, weight loss, fever. Cure: Long-term antibiotic therapy.'
  },
  {
    term: 'Chronic Obstructive Pulmonary Disease (COPD)',
    definition: 'A group of lung diseases that block airflow and make breathing difficult.',
    details: 'Cause: Long-term exposure to irritating gases or particulate matter. Symptoms: Chronic cough, shortness of breath, wheezing. Cure: Smoking cessation, medications, oxygen therapy.'
  },
  {
    term: 'Rheumatoid Arthritis',
    definition: 'An autoimmune disorder that primarily affects joints.',
    details: 'Cause: Autoimmune response targeting joints. Symptoms: Joint pain, stiffness, swelling. Cure: Medications, physical therapy, lifestyle changes.'
  },
  {
    term: 'Lupus',
    definition: 'An autoimmune disease where the body’s immune system attacks its own tissues.',
    details: 'Cause: Autoimmune response. Symptoms: Fatigue, joint pain, skin rashes. Cure: Medications, lifestyle modifications, managing symptoms.'
  },
  {
    term: 'Multiple Sclerosis',
    definition: 'A disease where the immune system attacks the protective sheath (myelin) covering nerve fibers.',
    details: 'Cause: Autoimmune response. Symptoms: Numbness, muscle weakness, difficulty with coordination. Cure: Disease-modifying therapies, symptomatic treatment.'
  },
  {
    term: 'Parkinson’s Disease',
    definition: 'A progressive neurological disorder affecting movement.',
    details: 'Cause: Degeneration of dopamine-producing neurons in the brain. Symptoms: Tremors, rigidity, bradykinesia. Cure: Medications, physical therapy, sometimes surgery.'
  },
  {
    term: 'Alzheimer’s Disease',
    definition: 'A progressive disease that destroys memory and other important mental functions.',
    details: 'Cause: Accumulation of amyloid plaques and tau tangles in the brain. Symptoms: Memory loss, confusion, difficulty with daily tasks. Cure: No cure, but medications can manage symptoms.'
  },
  {
    term: 'Gout',
    definition: 'A form of arthritis characterized by sudden and severe pain, redness, and tenderness in joints.',
    details: 'Cause: Build-up of uric acid crystals in the joints. Symptoms: Severe pain, swelling, redness. Cure: Medications to reduce uric acid levels, lifestyle changes.'
  },
  {
    term: 'Hives',
    definition: 'An allergic reaction that causes itchy, raised welts on the skin.',
    details: 'Cause: Allergens, medications, infections. Symptoms: Itchy, raised welts, swelling. Cure: Antihistamines, avoiding triggers.'
  },
  {
    term: 'Anaphylaxis',
    definition: 'A severe, potentially life-threatening allergic reaction.',
    details: 'Cause: Allergens like foods, insect stings. Symptoms: Swelling, difficulty breathing, drop in blood pressure. Cure: Immediate administration of epinephrine, emergency medical treatment.'
  },
  {
    term: 'Contact Dermatitis',
    definition: 'A skin reaction resulting from contact with an irritant or allergen.',
    details: 'Cause: Exposure to irritants like chemicals or allergens. Symptoms: Red, itchy rash, blisters. Cure: Avoiding irritants, topical corticosteroids.'
  },
  {
    term: 'Ringworm',
    definition: 'A fungal infection that causes a ring-shaped rash on the skin.',
    details: 'Cause: Fungal infection (dermatophytes). Symptoms: Ring-shaped rash, itching. Cure: Antifungal medications.'
  },
  {
    term: 'Shingles',
    definition: 'A viral infection causing a painful rash, usually on one side of the body.',
    details: 'Cause: Reactivation of varicella-zoster virus (chickenpox). Symptoms: Painful rash, itching, fever. Cure: Antiviral medications, pain relief.'
  },
  {
    term: 'Impetigo',
    definition: 'A highly contagious bacterial skin infection.',
    details: 'Cause: Staphylococcus aureus or Streptococcus bacteria. Symptoms: Sores or blisters that burst and form a yellow-brown crust. Cure: Antibiotic ointments or oral antibiotics.'
  },
  {
    term: 'Cellulitis',
    definition: 'A bacterial infection of the skin and underlying tissues.',
    details: 'Cause: Bacteria entering through broken skin. Symptoms: Redness, swelling, pain. Cure: Antibiotics, elevation of the affected area.'
  },
  {
    term: 'Mononucleosis',
    definition: 'A viral infection commonly caused by Epstein-Barr virus.',
    details: 'Cause: Epstein-Barr virus. Symptoms: Fever, sore throat, swollen lymph nodes, fatigue. Cure: Rest, hydration, pain relievers.'
  },
  {
    term: 'Chlamydia',
    definition: 'A sexually transmitted infection caused by the bacterium Chlamydia trachomatis.',
    details: 'Cause: Chlamydia trachomatis. Symptoms: Often asymptomatic; can cause discharge, pain during urination. Cure: Antibiotics.'
  },
  {
    term: 'Gonorrhea',
    definition: 'A sexually transmitted infection caused by the bacterium Neisseria gonorrhoeae.',
    details: 'Cause: Neisseria gonorrhoeae. Symptoms: Discharge, pain during urination, sore throat. Cure: Antibiotics.'
  },
  {
    term: 'Syphilis',
    definition: 'A sexually transmitted infection caused by the bacterium Treponema pallidum.',
    details: 'Cause: Treponema pallidum. Symptoms: Sores, rash, flu-like symptoms. Cure: Antibiotics.'
  },
  {
    term: 'Hepatitis B',
    definition: 'A viral infection that attacks the liver and can cause chronic liver disease.',
    details: 'Cause: Hepatitis B virus. Symptoms: Jaundice, fatigue, abdominal pain. Cure: Antiviral medications, vaccination for prevention.'
  },
  {
    term: 'Hepatitis C',
    definition: 'A viral infection that can lead to chronic liver disease.',
    details: 'Cause: Hepatitis C virus. Symptoms: Often asymptomatic; can cause fatigue, jaundice. Cure: Antiviral medications.'
  },
  {
    term: 'Human Papillomavirus (HPV)',
    definition: 'A group of related viruses that can cause genital warts and cervical cancer.',
    details: 'Cause: HPV infection. Symptoms: Genital warts, abnormal Pap test results. Cure: Vaccination for prevention, treatment for warts and lesions.'
  }
];

const Glossary = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="glossary-container">
      <Typography variant="h4" className="glossary-title">
        Glossary of Terms
      </Typography><br />
      <Divider className="divider" />
      {terms.map((term, index) => (
        <div key={index} className="glossary-term">
          <Typography variant="h6" className="term-title" onClick={() => handleToggle(index)}>
            {term.term}
          </Typography>
          {expanded === index && (
            <div className="term-details">
              <Typography variant="body1">
                <strong>Definition:</strong> {term.definition}
              </Typography>
              <Typography variant="body2">
                <strong>Details:</strong> {term.details}
              </Typography>
            </div>
          )}
          <Button onClick={() => handleToggle(index)} className="read-more-button">
            {expanded === index ? 'Read Less' : 'Read More'}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Glossary;
