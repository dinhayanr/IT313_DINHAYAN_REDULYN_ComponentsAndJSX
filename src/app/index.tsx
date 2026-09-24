import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>
          Full Load
        </Text>
      )}
    </View>
  );
}

function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const reverseStudents = () => {
    setStudents((currentStudents) =>
      [...currentStudents].reverse()
    );
  };

  return (
    <ScrollView>
      <Text style={styles.title}>
        Student Roster
      </Text>

      <Text style={styles.count}>
        Total Students: {students.length}
      </Text>

      <View style={styles.button}>
        <Button
          title="Reverse Students"
          onPress={reverseStudents}
        />
      </View>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StudentRoster />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  count: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 15,
  },

  button: {
    marginBottom: 5,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 12,
    borderRadius: 10,
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});