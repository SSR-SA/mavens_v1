// CourseDescriptionPage.js
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  CoursePageContainer,
  CourseThumbnail,
  CourseDescriptionContainer,
  CourseDescriptionHeader,
  CourseRating,
  CourseTitle,
  CourseInfoContainer,
  CourseCreatorInfo,
  CourseBuyersInfo,
  RenderContent,
  CourseInfoText,
  CourseInfo,
  CallToAction,
  PriceContainer,
  EnrollButton,
  ButtonText,
  TotalPrice,
  Amount,
} from "./courseDescription.styles";

import CourseDescriptionAbout from "../../components/courseDescriptionAbout/courseDescriptionAbout.component";
import CourseDescriptionLessons from "../../components/courseDescriptionLessons/courseDescriptionLessons.component";

const CourseDescriptionPage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <CourseDescriptionAbout />;
      case "lessons":
        return <CourseDescriptionLessons />;
      case "reviews":
        return <Text style={{ color: "#fff" }}>Reviews Content</Text>;
      default:
        return null;
    }
  };

  return (
    <CoursePageContainer>
      <CourseThumbnail></CourseThumbnail>
      <CourseDescriptionContainer>
        <CourseDescriptionHeader>
          <Ionicons name="star-outline" size={20} color="#E19C97" />
          <CourseRating>4.9</CourseRating>
        </CourseDescriptionHeader>
        <CourseTitle>Foundational Mathematics for Data Science</CourseTitle>
        <CourseInfoContainer>
          <CourseCreatorInfo>{/* Creator Info Here */}</CourseCreatorInfo>
          <CourseBuyersInfo>
            <TouchableOpacity onPress={() => setActiveTab("about")}>
              <CourseInfo>
                <CourseInfoText active={activeTab === "about"}>
                  About
                </CourseInfoText>
              </CourseInfo>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("lessons")}>
              <CourseInfo>
                <CourseInfoText active={activeTab === "lessons"}>
                  Lessons
                </CourseInfoText>
              </CourseInfo>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("reviews")}>
              <CourseInfo>
                <CourseInfoText active={activeTab === "reviews"}>
                  Reviews
                </CourseInfoText>
              </CourseInfo>
            </TouchableOpacity>
          </CourseBuyersInfo>
          <RenderContent>{renderContent()}</RenderContent>
        </CourseInfoContainer>
      </CourseDescriptionContainer>
      <CallToAction>
        <PriceContainer>
          <TotalPrice>Total Price</TotalPrice>
          <Amount>$199.00</Amount>
        </PriceContainer>
        <EnrollButton onPress={() => {}}>
          <ButtonText>Enroll Now</ButtonText>
        </EnrollButton>
      </CallToAction>
    </CoursePageContainer>
  );
};

export default CourseDescriptionPage;
