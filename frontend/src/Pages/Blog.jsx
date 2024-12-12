import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import "./Blog.css";

const articles = [
  {
    title: "AI in Medical Diagnosis: How AI is Transforming Healthcare",
    date: "May 12, 2024",
    readTime: "5 min read",
    img: "https://successive.cloud/wp-content/uploads/2023/03/AI-in-Healthcare.jpg",
    description: `Artificial Intelligence (AI) is making waves in the healthcare industry by enhancing diagnostic accuracy and streamlining medical processes. In this article, we explore how AI algorithms are being used to detect diseases early and improve patient outcomes. Learn about the latest advancements and how they are transforming the way healthcare professionals approach diagnosis.`,
  },
  {
    title: "8 Best Medical Symptom Checkers of 2024",
    date: "Apr 02, 2024",
    readTime: "12 min read",
    img: "https://docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-cms-storage-us.s3.amazonaws.com%2Farticle%2Fa4f1fca7cc3a2520879361c9fa566fd3.png&w=1920&q=100",
    description: `With numerous medical symptom checkers available, finding the right tool can be overwhelming. This article reviews the top eight symptom checkers of 2024, highlighting their features, accuracy, and usability. Discover which platforms stand out and how they can help you manage your health effectively.`,
  },
  {
    title: "Revolutionizing Patient Care with AI: Key Innovations",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    img: "https://startnet.in//wp-content/uploads/2024/07/adfgsdgsd-1024x576.jpg",
    description: `AI is revolutionizing patient care by introducing innovative technologies that enhance the quality and efficiency of medical services. This article covers key innovations in AI that are reshaping patient care, including predictive analytics, personalized treatment plans, and advanced monitoring systems.`,
  },
  {
    title: "How AI is Enhancing Diagnostic Accuracy in Radiology",
    date: "Feb 20, 2024",
    readTime: "10 min read",
    img: "https://articlesvoult.com/wp-content/uploads/2024/02/2.-Artificial-Intelligence-in-Healthcare-Improving-Diagnostic-Accuracy-A-medical-professional-analyzing-radiological-images-with-AI-emphasizing-the-precision-AI-brings-to-diagnostics-1024x585.webp",
    description: `In radiology, AI is playing a crucial role in improving diagnostic accuracy. This article examines how AI algorithms are assisting radiologists in interpreting medical images with greater precision, reducing diagnostic errors, and ultimately leading to better patient outcomes.`,
  },
  {
    title: "AI and Predictive Analytics: Shaping the Future of Healthcare",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    img: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Untitled%20design%20%2812%29_2.png?itok=y6V_1rle",
    description: `Predictive analytics powered by AI is transforming healthcare by providing insights into patient outcomes and potential health risks. Explore how predictive models are being used to anticipate health issues, optimize treatment plans, and improve overall healthcare delivery.`,
  },
  {
    title: "The Role of AI in Personalized Medicine",
    date: "Dec 01, 2023",
    readTime: "6 min read",
    img: "https://media.licdn.com/dms/image/D5612AQEI4YJw6F10Vw/article-cover_image-shrink_720_1280/0/1699599626767?e=2147483647&v=beta&t=QEZ5ijV9onefgksHatEXfIhjN-ZbMq46p6Yr0tLQyHE",
    description: `Personalized medicine aims to tailor healthcare treatments to individual patient characteristics. This article delves into how AI is contributing to personalized medicine by analyzing genetic information, lifestyle factors, and medical history to create customized treatment plans.`,
  },
  {
    title: "Advancements in AI for Mental Health Diagnosis",
    date: "Nov 15, 2023",
    readTime: "9 min read",
    img: "https://media.licdn.com/dms/image/D4D12AQEKiqQjcVYPLw/article-cover_image-shrink_600_2000/0/1698507583751?e=2147483647&v=beta&t=CF7eUaMaWPMDEDRFkM9IRenXo5AWcO5sG4L-9keL750",
    description: `AI advancements are making significant strides in mental health diagnosis. This article explores how AI tools are being used to identify mental health conditions, analyze patient behavior, and provide valuable insights for mental health professionals.`,
  },
  {
    title: "AI-Driven Drug Discovery: A New Era in Pharmaceutical Research",
    date: "Oct 05, 2023",
    readTime: "11 min read",
    img: "https://d3oofn3y8h5efg.cloudfront.net/webcluesinfotech/1719291849781_ai-in-drug-discovery_-a-new-era-for-healthcare-innovation.jpg",
    description: `AI is revolutionizing drug discovery by accelerating the identification of potential drug candidates and optimizing the research process. Learn about the latest AI-driven approaches in pharmaceutical research and how they are speeding up the development of new treatments.`,
  },
  {
    title: "Ethical Considerations in AI Healthcare Solutions",
    date: "Sep 22, 2023",
    readTime: "6 min read",
    img: "https://media.licdn.com/dms/image/D5612AQFhROXsxCjLHw/article-cover_image-shrink_720_1280/0/1720037320836?e=2147483647&v=beta&t=QW0l5Z8XffgH5h0OaANCoONblT9rswMh2z03tOHj4do",
    description: `As AI becomes more integrated into healthcare, ethical considerations are increasingly important. This article addresses the ethical challenges associated with AI in healthcare, including data privacy, algorithmic bias, and the impact on patient care.`,
  },
  {
    title: "The Future of AI in Chronic Disease Management",
    date: "Aug 14, 2023",
    readTime: "8 min read",
    img: "https://cdn.ttgtmedia.com/rms/onlineimages/health%20analytics_g1271502504.jpg",
    description: `AI has the potential to significantly improve the management of chronic diseases. This article discusses future trends in AI-driven chronic disease management, including remote monitoring, personalized interventions, and predictive analytics to enhance patient outcomes.`,
  },
];

const ArticleCard = ({ article, onClick }) => (
  <Grid item xs={12} sm={8} md={4}>
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={article.img}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.date} | {article.readTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick(article)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleClose = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Container
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} // Ensure footer is at the bottom
      >
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "white" }}
          >
            SmartHealth Blog - Insights Into AI-Powered Healthcare
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: "white" }}>
            The Future of AI in Healthcare: Exploring What's Next
          </Typography>
          
          <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
            The future of artificial intelligence in healthcare is here. Learn
            about what advancements are taking place and what they can mean for
            you.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            Make Informed Health Decisions
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
            Talk to SmartHealth AI Doctor, generate health reports, get them
            validated by top doctors from the US and Europe.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              onClick={setSelectedArticle}
            />
          ))}
        </Grid>

        {selectedArticle && (
          <Dialog
            open={Boolean(selectedArticle)}
            onClose={handleClose}
            aria-labelledby="article-dialog-title"
          >
            <DialogTitle id="article-dialog-title">
              {selectedArticle.title}
            </DialogTitle>
            <DialogContent>
              <Typography gutterBottom variant="body1">
                {selectedArticle.date} | {selectedArticle.readTime}
              </Typography>
              <img
                src={selectedArticle.img}
                alt={selectedArticle.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="body2" color="text.secondary">
                {selectedArticle.description}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        )}

        
      </Container>
    </>
  );
};

export default Blog;
