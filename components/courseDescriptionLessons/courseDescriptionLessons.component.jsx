import Ionicons from "@expo/vector-icons/Ionicons";
import {
  CourseDescriptionLessonsContainer,
  CourseDescriptionLessonsTitle,
  CourseSectionContainer,
  CourseSectionTitles,
  CourseSection,
  CourseSectionLeft,
  CourseSectionRight,
  CourseSectionLessonNumberCircle,
  CourseSectionLessonNumber,
  CourseSectionLessonTitleContainer,
  CourseSectionLessonTitle,
  CourseSectionLessonDuration,
  CourseSectionPlayOption,
} from "./courseDescriptionLessons.styles";

const CourseDescriptionLessons = () => {
  return (
    <CourseDescriptionLessonsContainer>
      <CourseDescriptionLessonsTitle>
        Lessons (35)
      </CourseDescriptionLessonsTitle>
      <CourseSectionContainer>
        <CourseSection>
          <CourseSectionLeft>
            <CourseSectionLessonNumberCircle>
              <CourseSectionLessonNumber>01</CourseSectionLessonNumber>
            </CourseSectionLessonNumberCircle>
            <CourseSectionLessonTitleContainer>
              <CourseSectionLessonTitle>Lesons 101</CourseSectionLessonTitle>
              <CourseSectionLessonDuration>10:00</CourseSectionLessonDuration>
            </CourseSectionLessonTitleContainer>
          </CourseSectionLeft>
          <CourseSectionRight>
            <CourseSectionPlayOption>
              <Ionicons name="play-circle-outline" size={30} color="#111313" />
            </CourseSectionPlayOption>
          </CourseSectionRight>
        </CourseSection>
      </CourseSectionContainer>
    </CourseDescriptionLessonsContainer>
  );
};

export default CourseDescriptionLessons;
