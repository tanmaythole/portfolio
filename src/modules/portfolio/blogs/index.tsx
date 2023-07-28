import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import BlogCard from "./blogCard";
import SectionTitle from "@src/components/sections/sectionTitle";
import SectionWrapper from "@src/components/sections/sectionWrapper";

const blogDetails = [
  {
    title:
      "Optimizing Token Refreshing: Preventing Duplicate API Requests with Axios",
    description:
      "This blog shows how to prevent duplicate API requests and optimize token refreshing using Axios in your application.",
    url: "https://tanmaythole.medium.com/optimizing-token-refreshing-preventing-duplicate-api-requests-with-axios-511bde1ef676",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IMLln_M4UtLYDbMKHO4M0A.png",
  },
  {
    title:
      "React Query and AsyncStorage: How to Persist Data in React Native Apps",
    description:
      "How can we achieve the seamless data persistence in React Native using React Query and AsyncStorage.",
    url: "https://tanmaythole.medium.com/react-query-and-asyncstorage-how-to-persist-data-in-react-native-apps-b4c36386188a",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*E6PQ337FJD6eaOI8O9-u0Q.png",
  },
  {
    title: "Top 10 VS Code Extension to Boost Productivity",
    description:
      "THe article is about list of my top ten VS Code extensions that will increase your productivity and make you more effective as a developer.",
    url: "https://tanmaythole.medium.com/top-10-vs-code-extension-to-boost-productivity-59e85561c2ba",
    img: "https://miro.medium.com/v2/resize:fit:720/0*T8ek-xqdg_l4bLlV",
  },
];

const Blogs: FC = () => (
  <SectionWrapper id="blogs" className="blogs_container">
    <SectionTitle title="Blogs" subtitile="What I write" />
    <Container>
      <Row className="row-gap-3">
        {blogDetails.map((blog) => (
          <Col key={blog.title} md={4}>
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </Container>
  </SectionWrapper>
);

export default Blogs;
