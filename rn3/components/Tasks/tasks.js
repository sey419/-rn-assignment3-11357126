import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const tasks = () => {
  return (
    <View style={styles.ongoingTasksCards}>
      <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
      <View style={styles.pushUpsParent}>
        <Text style={[styles.pushUps, styles.studyTypo]}>Push Ups</Text>
        <Text style={[styles.exercise, styles.tasks1Typo]}>Exercise</Text>
      </View>
      <View style={styles.search}>
        <View style={[styles.searchBoc, styles.filterLayout]}>
          <View style={[styles.searchBoc, styles.filterLayout]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={styles.mynauisearchParent}>
              <Image
                style={[styles.mynauisearchIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/mynauisearch.png")}
              />
              <Text style={[styles.search1, styles.studyTypo]}>Search</Text>
            </View>
          </View>
        </View>
        <View style={[styles.filter, styles.filterLayout]}>
          <View style={[styles.rectangleGroup, styles.filterLayout]}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Image
              style={[styles.bxsliderIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bxslider.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.iconPosition]}>
        <View style={styles.helloDevsParent}>
          <Text style={[styles.helloDevs, styles.studyTypo]}>Hello , Devs</Text>
          <Text style={styles.tasksToday}>14 tasks today</Text>
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.profileImageChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.personIcon}
            contentFit="cover"
            source={require("../assets/person.png")}
          />
        </View>
      </View>
      <Text style={[styles.categories, styles.categoriesTypo]}>Categories</Text>
      <Text style={[styles.ongoingTask, styles.categoriesTypo]}>
        Ongoing Task
      </Text>
      <View style={styles.categoriesCardParent}>
        <View style={[styles.categoriesCard, styles.categoriesCardLayout]}>
          <View
            style={[styles.categoriesCardChild, styles.categoriesCardLayout]}
          />
          <View style={[styles.exerciseParent, styles.exerciseLayout]}>
            <Text style={[styles.exercise1, styles.exerciseLayout]}>
              Exercise
            </Text>
            <Text style={[styles.exercise, styles.tasks1Typo]}>12 Tasks</Text>
          </View>
          <Image
            style={[styles.youngWomanWorkingOnline, styles.youngLayout]}
            contentFit="cover"
            source={require("../assets/young-woman-working-online.png")}
          />
        </View>
        <View style={[styles.categoriesCard1, styles.categoriesCardLayout]}>
          <View
            style={[styles.categoriesCardChild, styles.categoriesCardLayout]}
          />
          <View style={[styles.studyParent, styles.parentPosition]}>
            <Text style={[styles.study, styles.studyTypo]}>Study</Text>
            <Text style={styles.tasks1Typo}>12 Tasks</Text>
          </View>
          <Image
            style={[styles.youngWomanWorkingAtDesk, styles.youngLayout]}
            contentFit="cover"
            source={require("../assets/young-woman-working-at-desk.png")}
          />
        </View>
      </View>
      <View style={[styles.ongoingTasksCards1, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View
          style={[styles.mobileAppDevelopmentWrapper, styles.pushUpsLayout]}
        >
          <Text style={[styles.pushUps, styles.studyTypo]}>
            Mobile App Development
          </Text>
        </View>
      </View>
      <View style={[styles.ongoingTasksCards2, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View
          style={[styles.mobileAppDevelopmentWrapper, styles.pushUpsLayout]}
        >
          <Text style={[styles.pushUps, styles.studyTypo]}>
            Web Development
          </Text>
        </View>
      </View>
      <View style={[styles.ongoingTasksCards3, styles.ongoingLayout]}>
        <View style={[styles.ongoingTasksCardsChild, styles.ongoingLayout]} />
        <View style={styles.pushUpsParent}>
          <Text style={[styles.pushUps, styles.studyTypo]}>Push Ups</Text>
          <Text style={[styles.exercise, styles.tasks1Typo]}>Exercise</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingLayout: {
    height: 128,
    width: 354,
    position: "absolute",
  },
  studyTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  tasks1Typo: {
    fontFamily: FontFamily.latoRegular,
    top: 21,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  filterLayout: {
    height: 48,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_sm,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  categoriesTypo: {
    fontSize: FontSize.size_xl,
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    position: "absolute",
  },
  categoriesCardLayout: {
    width: 186,
    height: 192,
    top: 0,
    position: "absolute",
  },
  exerciseLayout: {
    width: 59,
    position: "absolute",
  },
  youngLayout: {
    height: 132,
    width: 151,
    position: "absolute",
  },
  parentPosition: {
    top: 14,
    height: 35,
    left: 16,
  },
  pushUpsLayout: {
    width: 200,
    position: "absolute",
  },
  ongoingTasksCardsChild: {
    borderColor: Color.colorBisque,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_mini,
    width: 354,
    left: 0,
    top: 0,
  },
  pushUps: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: 200,
    position: "absolute",
    left: 0,
    top: 0,
  },
  exercise: {
    width: 50,
  },
  pushUpsParent: {
    height: 35,
    width: 200,
    left: 16,
    top: 46,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorSnow,
    width: 280,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorSnow,
  },
  mynauisearchIcon: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
  },
  search1: {
    top: 3,
    left: 34,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    position: "absolute",
  },
  mynauisearchParent: {
    top: 12,
    left: 11,
    width: 82,
    height: 24,
    position: "absolute",
  },
  searchBoc: {
    width: 280,
    left: 0,
    top: 0,
  },
  groupItem: {
    backgroundColor: "#f0522f",
    width: 50,
  },
  bxsliderIcon: {
    top: 7,
    left: 8,
    width: 34,
    height: 34,
  },
  rectangleGroup: {
    width: 50,
    left: 0,
    top: 0,
  },
  filter: {
    top: 1,
    left: 303,
    width: 50,
  },
  search: {
    top: 134,
    width: 353,
    height: 49,
    left: 20,
    position: "absolute",
  },
  helloDevs: {
    fontSize: 32,
    height: 37,
    width: 170,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tasksToday: {
    top: 39,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    width: 77,
    height: 13,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  helloDevsParent: {
    height: 52,
    width: 170,
  },
  profileImageChild: {
    top: 2,
    height: 50,
    width: 50,
    left: 0,
    position: "absolute",
  },
  personIcon: {
    left: 2,
    width: 46,
    height: 45,
    top: 0,
    position: "absolute",
  },
  profileImage: {
    marginLeft: 134,
    height: 52,
    width: 50,
  },
  groupParent: {
    top: 52,
    flexDirection: "row",
    left: 20,
  },
  categories: {
    top: 213,
  },
  ongoingTask: {
    top: 468,
  },
  categoriesCardChild: {
    backgroundColor: Color.colorSnow,
    width: 186,
    borderRadius: Border.br_mini,
    left: 0,
  },
  exercise1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  exerciseParent: {
    top: 14,
    height: 35,
    left: 16,
  },
  youngWomanWorkingOnline: {
    top: 49,
    left: 21,
  },
  categoriesCard: {
    left: 0,
  },
  study: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  studyParent: {
    width: 45,
    position: "absolute",
  },
  youngWomanWorkingAtDesk: {
    top: 56,
    left: 25,
  },
  categoriesCard1: {
    left: 210,
  },
  categoriesCardParent: {
    top: 249,
    width: 396,
    height: 192,
    left: 20,
    position: "absolute",
  },
  mobileAppDevelopmentWrapper: {
    height: 19,
    left: 16,
    top: 46,
    width: 200,
  },
  ongoingTasksCards1: {
    top: 504,
    left: 20,
  },
  ongoingTasksCards2: {
    top: 644,
    left: 20,
  },
  ongoingTasksCards3: {
    top: 784,
    left: 20,
  },
  ongoingTasksCards: {
    flex: 1,
    width: "100%",
    height: 912,
  },
});

export default tasksasks;