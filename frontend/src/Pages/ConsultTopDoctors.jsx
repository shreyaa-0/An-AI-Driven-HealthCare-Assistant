// import React, { useState } from 'react';
// import './ConsultTopDoctors.css';
// const doctors = [
//     { name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fd875d03f828e5eed1b10ef356a1d7146.png&w=1920&q=100' },
//     { name: 'Dr. Jane Smith', specialization: 'Neurologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F512611f1e6932474dcd4c243a14bd8ea.png&w=1920&q=100' },
//     { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', experience: '6 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F6a1348b8aa2b0f6103484b9814cfc261.png&w=1920&q=100' },
//     { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F173c37d41f5ff42474952aff3f47a064.png&w=1920&q=100' },
//     { name: 'Dr. Lisa White', specialization: 'Pediatrician', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F1fb2730fb9eecf959e0b2b9ae25d0178.png&w=1920&q=100' },
//     { name: 'Dr. David Wilson', specialization: 'Gastroenterologist', experience: '15 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fdeeda97b96cd31cc57673b9394f5f46b.png&w=1920&q=100' },
//     { name: 'Dr. Mary Clark', specialization: 'Ophthalmologist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fb270a135c27b85cd039fa0bccfc34c03.png&w=1920&q=100' },
//     { name: 'Dr. Robert Lee', specialization: 'Endocrinologist', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Feb5c1e5c0f60e3222c6eb66c393fd226.png&w=1920&q=100' },
//     { name: 'Dr. Patricia Harris', specialization: 'Rheumatologist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F3b75f6991136239ebdf625e416fa864b.png&w=1920&q=100' },
//     { name: 'Dr. James Lewis', specialization: 'Oncologist', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe1b1b9c637b389aa7ea294493b80551b.png&w=1920&q=100' },
//     { name: 'Dr. Barbara Walker', specialization: 'Hematologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbf001a7ba2a0d1b0e678f07b72f7bb00.png&w=1920&q=100' },
//     { name: 'Dr. Charles Hall', specialization: 'Urologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbaba8c48260506093a50984daa957606.png&w=1920&q=100' },
//     { name: 'Dr. Susan Allen', specialization: 'Pulmonologist', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F2ea6e9098d3cab4b15ea3552613d1feb.png&w=1920&q=100' },
//     { name: 'Dr. Daniel Young', specialization: 'Nephrologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F4fdcc51306383bf8328373450b9065c0.png&w=1920&q=100' },
//     { name: 'Dr. Karen King', specialization: 'Surgeon', experience: '16 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe4dd7b90bcbf8fb4aa2004e4c0bcf014.png&w=1920&q=100' },
//     { name: 'Dr. Steven Wright', specialization: 'Psychiatrist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F461e710cebba8724da2cd04aed03cc38.png&w=1920&q=100' },
//     { name: 'Dr. Nancy Scott', specialization: 'Internist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F23f26720f0c3e475f1fa9bb4e1be85f0.png&w=1920&q=100' },
//     { name: 'Dr. George Green', specialization: 'Geriatrician', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F50d3848f93cacb0cb833d3fd5b7c442d.png&w=1920&q=100' },
//     { name: 'Dr. Linda Adams', specialization: 'Family Medicine', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F56e036ee999423ee70f9e0ca44e2c5ba.png&w=1920&q=100' },
//     { name: 'Dr. Richard Baker', specialization: 'Pathologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F913f7fe81083b8a52251f7395821c8c1.png&w=1920&q=100' },
//   ];

// const DoctorCard = ({ doctor, onClick }) => {
//   return (
//     <div className="doctor-card" onClick={() => onClick(doctor)}>
//       <img src={doctor.photo} alt={`${doctor.name}`} />
//       <h2>{doctor.name}</h2>
//       <p>{doctor.specialization}</p>
//       <p>{doctor.experience}</p>
//     </div>
//   );
// };

// const BiographyModal = ({ doctor, onClose }) => {
//   if (!doctor) return null;

//   return (
//     <div className="biography-modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{doctor.name}</h2>
//         <p>{doctor.specialization}</p>
//         <p>{doctor.experience}</p>
//         <p>Biography content goes here...</p>
//       </div>
//     </div>
//   );
// };

// const ConsultTopDoctors = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   const handleCardClick = (doctor) => {
//     setSelectedDoctor(doctor);
//   };

//   const handleCloseModal = () => {
//     setSelectedDoctor(null);
//   };

//   return (
//     <div className="consult-top-doctors">
//       <h1>Consult Top Doctors</h1>
//       <div className="doctors-grid">
//         {doctors.map((doctor, index) => (
//           <DoctorCard key={index} doctor={doctor} onClick={handleCardClick} />
//         ))}
//       </div>
//       <BiographyModal doctor={selectedDoctor} onClose={handleCloseModal} />
//     </div>
//   );
// };

// export default ConsultTopDoctors;




import React, { useState } from 'react';
import logo from '../Components/Assets/Preview.png';
import './ConsultTopDoctors.css';


const doctors = [
    { name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fd875d03f828e5eed1b10ef356a1d7146.png&w=1920&q=100' },
    { name: 'Dr. Jane Smith', specialization: 'Neurologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F512611f1e6932474dcd4c243a14bd8ea.png&w=1920&q=100' },
    { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', experience: '6 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F6a1348b8aa2b0f6103484b9814cfc261.png&w=1920&q=100' },
    { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F173c37d41f5ff42474952aff3f47a064.png&w=1920&q=100' },
    { name: 'Dr. Lisa White', specialization: 'Pediatrician', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F1fb2730fb9eecf959e0b2b9ae25d0178.png&w=1920&q=100' },
    { name: 'Dr. David Wilson', specialization: 'Gastroenterologist', experience: '15 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fdeeda97b96cd31cc57673b9394f5f46b.png&w=1920&q=100' },
    { name: 'Dr. Mary Clark', specialization: 'Ophthalmologist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fb270a135c27b85cd039fa0bccfc34c03.png&w=1920&q=100' },
    { name: 'Dr. Robert Lee', specialization: 'Endocrinologist', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Feb5c1e5c0f60e3222c6eb66c393fd226.png&w=1920&q=100' },
    { name: 'Dr. Patricia Harris', specialization: 'Rheumatologist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F3b75f6991136239ebdf625e416fa864b.png&w=1920&q=100' },
    { name: 'Dr. James Lewis', specialization: 'Oncologist', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe1b1b9c637b389aa7ea294493b80551b.png&w=1920&q=100' },
    { name: 'Dr. Barbara Walker', specialization: 'Hematologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbf001a7ba2a0d1b0e678f07b72f7bb00.png&w=1920&q=100' },
    { name: 'Dr. Charles Hall', specialization: 'Urologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbaba8c48260506093a50984daa957606.png&w=1920&q=100' },
    { name: 'Dr. Susan Allen', specialization: 'Pulmonologist', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F2ea6e9098d3cab4b15ea3552613d1feb.png&w=1920&q=100' },
    { name: 'Dr. Daniel Young', specialization: 'Nephrologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F4fdcc51306383bf8328373450b9065c0.png&w=1920&q=100' },
    { name: 'Dr. Karen King', specialization: 'Surgeon', experience: '16 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe4dd7b90bcbf8fb4aa2004e4c0bcf014.png&w=1920&q=100' },
    { name: 'Dr. Steven Wright', specialization: 'Psychiatrist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F461e710cebba8724da2cd04aed03cc38.png&w=1920&q=100' },
    { name: 'Dr. Nancy Scott', specialization: 'Internist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F23f26720f0c3e475f1fa9bb4e1be85f0.png&w=1920&q=100' },
    { name: 'Dr. George Green', specialization: 'Geriatrician', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F50d3848f93cacb0cb833d3fd5b7c442d.png&w=1920&q=100' },
    { name: 'Dr. Linda Adams', specialization: 'Family Medicine', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F56e036ee999423ee70f9e0ca44e2c5ba.png&w=1920&q=100' },
    { name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fd875d03f828e5eed1b10ef356a1d7146.png&w=1920&q=100' },
    { name: 'Dr. Jane Smith', specialization: 'Neurologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F512611f1e6932474dcd4c243a14bd8ea.png&w=1920&q=100' },
    { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', experience: '6 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F6a1348b8aa2b0f6103484b9814cfc261.png&w=1920&q=100' },
    { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F173c37d41f5ff42474952aff3f47a064.png&w=1920&q=100' },
    { name: 'Dr. Lisa White', specialization: 'Pediatrician', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F1fb2730fb9eecf959e0b2b9ae25d0178.png&w=1920&q=100' },
    { name: 'Dr. David Wilson', specialization: 'Gastroenterologist', experience: '15 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fdeeda97b96cd31cc57673b9394f5f46b.png&w=1920&q=100' },
    { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', experience: '6 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F6a1348b8aa2b0f6103484b9814cfc261.png&w=1920&q=100' },
    { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F173c37d41f5ff42474952aff3f47a064.png&w=1920&q=100' },
    { name: 'Dr. Lisa White', specialization: 'Pediatrician', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F1fb2730fb9eecf959e0b2b9ae25d0178.png&w=1920&q=100' },
    { name: 'Dr. David Wilson', specialization: 'Gastroenterologist', experience: '15 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fdeeda97b96cd31cc57673b9394f5f46b.png&w=1920&q=100' },
    { name: 'Dr. Mary Clark', specialization: 'Ophthalmologist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fb270a135c27b85cd039fa0bccfc34c03.png&w=1920&q=100' },
    { name: 'Dr. Robert Lee', specialization: 'Endocrinologist', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Feb5c1e5c0f60e3222c6eb66c393fd226.png&w=1920&q=100' },
    { name: 'Dr. Patricia Harris', specialization: 'Rheumatologist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F3b75f6991136239ebdf625e416fa864b.png&w=1920&q=100' },
    { name: 'Dr. James Lewis', specialization: 'Oncologist', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe1b1b9c637b389aa7ea294493b80551b.png&w=1920&q=100' },
    { name: 'Dr. Barbara Walker', specialization: 'Hematologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbf001a7ba2a0d1b0e678f07b72f7bb00.png&w=1920&q=100' },
    { name: 'Dr. Charles Hall', specialization: 'Urologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbaba8c48260506093a50984daa957606.png&w=1920&q=100' },
    { name: 'Dr. Susan Allen', specialization: 'Pulmonologist', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F2ea6e9098d3cab4b15ea3552613d1feb.png&w=1920&q=100' },
    { name: 'Dr. Daniel Young', specialization: 'Nephrologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F4fdcc51306383bf8328373450b9065c0.png&w=1920&q=100' },
    { name: 'Dr. Karen King', specialization: 'Surgeon', experience: '16 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe4dd7b90bcbf8fb4aa2004e4c0bcf014.png&w=1920&q=100' },
    { name: 'Dr. Steven Wright', specialization: 'Psychiatrist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F461e710cebba8724da2cd04aed03cc38.png&w=1920&q=100' },
    { name: 'Dr. Nancy Scott', specialization: 'Internist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F23f26720f0c3e475f1fa9bb4e1be85f0.png&w=1920&q=100' },
    { name: 'Dr. George Green', specialization: 'Geriatrician', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F50d3848f93cacb0cb833d3fd5b7c442d.png&w=1920&q=100' },
    { name: 'Dr. Linda Adams', specialization: 'Family Medicine', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F56e036ee999423ee70f9e0ca44e2c5ba.png&w=1920&q=100' },
  ];

const commonBiography = `
Dr. [Name] is a highly skilled and experienced medical professional with a wealth of knowledge in their field. With over [Experience] years of practice, Dr. [Name] has developed a reputation for excellence in patient care.

They are dedicated to providing compassionate and comprehensive treatment, utilizing the latest advancements in medicine to ensure optimal outcomes for their patients. Dr. [Name] is known for their thorough approach to diagnosis and treatment, as well as their commitment to continuing education and professional development.

**Contact Information:**
- **Phone:** [PhoneNumber]
- **Email:** [Email]

**Hospital Location:**
- **Hospital Name:** [HospitalName]
- **Address:** [HospitalAddress]
- **City, State, ZIP Code:** [CityStateZIP]
- **Website:** [HospitalWebsite]

Dr. [Name] is also actively involved in various medical communities and contributes to ongoing research and development in their specialty. Their dedication to their field and their patients has made them a respected figure in the medical community.

Feel free to reach out to Dr. [Name] for any consultations or inquiries.
`;

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div className="doctor-card" onClick={() => onClick(doctor)}>
      <img src={doctor.photo} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience}</p>
    </div>
  );
};

const BiographyModal = ({ doctor, onClose }) => {
  if (!doctor) return null;

  const biography = commonBiography
    .replace(/\[Name\]/g, doctor.name)
    .replace(/\[Experience\]/g, doctor.experience)
    .replace(/\[PhoneNumber\]/g, doctor.phoneNumber || 'N/A')
    .replace(/\[Email\]/g, doctor.email || 'N/A')
    .replace(/\[HospitalName\]/g, doctor.hospitalName || 'N/A')
    .replace(/\[HospitalAddress\]/g, doctor.hospitalAddress || 'N/A')
    .replace(/\[CityStateZIP\]/g, doctor.cityStateZIP || 'N/A')
    .replace(/\[HospitalWebsite\]/g, doctor.hospitalWebsite || 'N/A');

  return (
    <div className="biography-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <p>{doctor.experience}</p>
        <div className="biography-container">
          <p id="biography" dangerouslySetInnerHTML={{ __html: biography }}></p>
        </div>
      </div>
    </div>
  );
};

const ConsultTopDoctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <>   
            <img src={logo} alt="Logo" className="logo" />

    <div className="consult-top-doctors" style={{ color: 'black' }}>
  <h1>Consult Top Doctors</h1>
  <div className="doctors-grid">
    {doctors.map((doctor) => (
      <DoctorCard key={doctor.name} doctor={doctor} onClick={handleDoctorClick} />
    ))}
  </div>
  <BiographyModal doctor={selectedDoctor} onClose={handleCloseModal} />
</div>
</>
  );
};

export default ConsultTopDoctors;
