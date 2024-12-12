import {
    Card,
    CardContent,
    Chip,
    Container,
    Typography
} from "@mui/material";
import React from "react";

const articles = [
  {
    title: "Things That Can Cause an Abnormal Pap Smear: Key Causes",
    description:
      "Read about the common causes of an abnormal Pap smear and how early detection and proper management are essential for maintaining cervical health effectively.",
    tags: ["Pap Test", "Gynecology"],
    date: "Jul 25, 2024",
  },
  {
    title: "How Can You Get an STD Without Having Sex?",
    description:
      "Can you get an STD without having sex? Learn how non-sexual activities like kissing and sharing items can transmit STDs and the importance of regular testing.",
    tags: ["Gynecology", "Infectious Diseases", "Urology", "STI"],
    date: "Jul 24, 2024",
  },
  {
    title: "Thyroid Surgery Recovery: 5 Essential Tips You Need to Know",
    date: "July 24, 2023",
    tags: ["Thyroid Health", "Surgery", "Endocrinology"],
  },
  {
    title: "Anal Fissure vs Hemorrhoids: Key Differences",
    date: "July 24, 2023",
    tags: ["Hemorrhoids", "Gastroenterology", "Surgery"],
  },
  {
    title: "How to Cure Gout in 10 Minutes: Quick Tips for Pain Relief",
    date: "July 24, 2023",
    tags: ["Rheumatology", "Joint Pain", "Arthritis", "Gout"],
  },
  {
    title: "What to Eat Before Glucose Test: Essential Tips and Foods",
    date: "July 24, 2023",
    tags: ["Diabetes", "Blood Work", "Health"],
  },
  {
    title: "Tips for Dry Eyes at Night: Info and Strategies for Relief",
    date: "July 24, 2023",
    tags: ["Eye Health", "Vision Problems", "Health"],
  },
  {
    title: "Gout Overview: Symptoms, Causes and Treatment Options",
    date: "July 24, 2023",
    tags: ["Rheumatology", "Gout", "Health"],
  },
  {
    title: "Nail Changes in Kidney Disease: Symptoms and Management",
    date: "July 24, 2023",
    tags: ["Kidney Disease", "Nail Changes", "Dermatology"],
  },
  {
    title: "Can BV Cause Pelvic Pain? Exploring the Causes",
    date: "July 24, 2023",
    tags: ["BV", "Pelvic Pain", "Gynecology", "Health"],
  },
  {
    title: "Best Fruits for Reducing Creatinine Levels Naturally",
    date: "July 24, 2023",
    tags: ["Kidney Health", "Diet", "Health"],
  },
  {
    title: "BUN/Creatinine Ratio: Necessity and Interpretation",
    date: "July 24, 2023",
    tags: ["Kidney Health", "Nephrology", "Health"],
  },
];

const SymptomsGuide = () => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Symptoms Guide
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          Gain insights into a variety of medical symptoms and health
          conditions. Understand your health better and make informed decisions.
        </Typography>
        {articles.map((article, index) => (
          <Card key={index} style={{ marginBottom: "1rem" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {article.description}
              </Typography>
              {article.tags.map((tag, tagIndex) => (
                <Chip
                  key={tagIndex}
                  label={tag}
                  variant="outlined"
                  style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                />
              ))}
              <Typography variant="caption" display="block" align="right">
                {article.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default SymptomsGuide;
